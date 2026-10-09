/**
 * ZamTools File Download Utilities
 * Memory-safe client-side download triggers
 */

(function () {
  /**
   * Sanitizes a base filename and ensures the specified extension
   * @param {string} originalName 
   * @param {string} newExtension - e.g., 'jpg', 'png', 'webp'
   * @param {string} [suffix=''] - e.g., '-compressed'
   */
  window.formatDownloadFilename = function (originalName, newExtension, suffix = '') {
    if (!originalName) originalName = 'image';
    const base = originalName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
    const ext = newExtension.replace(/^\./, '').toLowerCase();
    return `${base}${suffix}.${ext}`;
  };

  /**
   * Downloads a Blob and revokes its Object URL safely
   * @param {Blob} blob 
   * @param {string} filename 
   */
  window.downloadBlob = function (blob, filename) {
    if (!blob) {
      if (window.showToast) window.showToast('No file data available to download', 'error');
      return;
    }

    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename || 'zamtools-image';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Give browser sufficient time to initiate download before freeing memory
    setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 1500);

    if (window.showToast) {
      window.showToast(`Downloading ${filename}`, 'success');
    }
  };

  /**
   * Downloads a Data URL (Base64)
   * @param {string} dataUrl 
   * @param {string} filename 
   */
  window.downloadDataUrl = function (dataUrl, filename) {
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename || 'download';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.showToast) {
      window.showToast(`Downloading ${filename}`, 'success');
    }
  };

  /**
   * Downloads a text file (e.g. Base64 strings or HTML snippets)
   * @param {string} textContent 
   * @param {string} filename 
   */
  window.downloadText = function (textContent, filename) {
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    window.downloadBlob(blob, filename || 'zamtools-export.txt');
  };

  // Precomputed CRC32 lookup table for client-side ZIP packaging
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }

  function calculateCrc32(uint8Array) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < uint8Array.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ uint8Array[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }

  /**
   * Creates a standard PKZIP 2.0 uncompressed archive Blob in pure JavaScript.
   * Zero external dependencies, ultra-fast and universally compatible.
   * @param {Array<{name: string, blob?: Blob, data?: Uint8Array|ArrayBuffer}>} files
   * @returns {Promise<Blob>}
   */
  window.createZipBlob = async function (files) {
    if (!Array.isArray(files) || files.length === 0) {
      throw new Error('No files provided for ZIP creation.');
    }

    const encoder = new TextEncoder();
    const processedEntries = [];
    const usedNames = new Set();
    let localOffset = 0;

    // Process all file payloads
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let rawName = (file.name || `image_${i + 1}`).replace(/[\\/:]/g, '_');
      
      // Prevent duplicate names inside the ZIP archive
      let finalName = rawName;
      let counter = 1;
      const dotIndex = rawName.lastIndexOf('.');
      const base = dotIndex > 0 ? rawName.slice(0, dotIndex) : rawName;
      const ext = dotIndex > 0 ? rawName.slice(dotIndex) : '';

      while (usedNames.has(finalName)) {
        finalName = `${base}_${counter}${ext}`;
        counter++;
      }
      usedNames.add(finalName);

      // Extract binary data
      let u8Data;
      if (file.blob instanceof Blob) {
        const ab = await file.blob.arrayBuffer();
        u8Data = new Uint8Array(ab);
      } else if (file.data instanceof Uint8Array) {
        u8Data = file.data;
      } else if (file.data instanceof ArrayBuffer) {
        u8Data = new Uint8Array(file.data);
      } else {
        u8Data = new Uint8Array(0);
      }

      const nameBytes = encoder.encode(finalName);
      const crc = calculateCrc32(u8Data);
      const size = u8Data.length;

      // Local File Header (30 bytes + name length)
      const lh = new Uint8Array(30 + nameBytes.length);
      const lhView = new DataView(lh.buffer);
      lhView.setUint32(0, 0x04034b50, true); // Local file header signature
      lhView.setUint16(4, 20, true);          // Version needed to extract (2.0)
      lhView.setUint16(6, 0x0800, true);      // General purpose bit flag (UTF-8 filename)
      lhView.setUint16(8, 0, true);           // Compression method (0 = STORE / uncompressed)
      lhView.setUint16(10, 0x5000, true);     // File last mod time (10:00:00)
      lhView.setUint16(12, 0x5821, true);     // File last mod date (2024-01-01)
      lhView.setUint32(14, crc, true);        // CRC-32
      lhView.setUint32(18, size, true);       // Compressed size
      lhView.setUint32(22, size, true);       // Uncompressed size
      lhView.setUint16(26, nameBytes.length, true); // Filename length
      lhView.setUint16(28, 0, true);          // Extra field length
      lh.set(nameBytes, 30);

      processedEntries.push({
        nameBytes,
        crc,
        size,
        offset: localOffset,
        localHeader: lh,
        data: u8Data
      });

      localOffset += lh.length + size;
    }

    // Central Directory Headers (46 bytes + name length per file)
    const cdEntries = [];
    let cdTotalSize = 0;

    for (const entry of processedEntries) {
      const cd = new Uint8Array(46 + entry.nameBytes.length);
      const cdView = new DataView(cd.buffer);
      cdView.setUint32(0, 0x02014b50, true); // Central file header signature
      cdView.setUint16(4, 20, true);          // Version made by
      cdView.setUint16(6, 20, true);          // Version needed
      cdView.setUint16(8, 0x0800, true);      // General purpose bit flag (UTF-8)
      cdView.setUint16(10, 0, true);          // Compression method (0 = STORE)
      cdView.setUint16(12, 0x5000, true);     // Last mod time
      cdView.setUint16(14, 0x5821, true);     // Last mod date
      cdView.setUint32(16, entry.crc, true);  // CRC-32
      cdView.setUint32(20, entry.size, true); // Compressed size
      cdView.setUint32(24, entry.size, true); // Uncompressed size
      cdView.setUint16(28, entry.nameBytes.length, true); // Filename length
      cdView.setUint16(30, 0, true);          // Extra field length
      cdView.setUint16(32, 0, true);          // File comment length
      cdView.setUint16(34, 0, true);          // Disk number start
      cdView.setUint16(36, 0, true);          // Internal file attributes
      cdView.setUint32(38, 0, true);          // External file attributes
      cdView.setUint32(42, entry.offset, true); // Relative offset of local header
      cd.set(entry.nameBytes, 46);

      cdEntries.push(cd);
      cdTotalSize += cd.length;
    }

    // End of Central Directory Record (22 bytes)
    const eocd = new Uint8Array(22);
    const eocdView = new DataView(eocd.buffer);
    eocdView.setUint32(0, 0x06054b50, true); // End of central dir signature
    eocdView.setUint16(4, 0, true);          // Disk number
    eocdView.setUint16(6, 0, true);          // Disk with start of CD
    eocdView.setUint16(8, processedEntries.length, true);  // Total entries on disk
    eocdView.setUint16(10, processedEntries.length, true); // Total entries in CD
    eocdView.setUint32(12, cdTotalSize, true);             // Size of CD
    eocdView.setUint32(16, localOffset, true);             // Offset of start of CD
    eocdView.setUint16(20, 0, true);         // Comment length

    // Assemble parts into a single Blob
    const blobParts = [];
    for (const entry of processedEntries) {
      blobParts.push(entry.localHeader);
      blobParts.push(entry.data);
    }
    for (const cd of cdEntries) {
      blobParts.push(cd);
    }
    blobParts.push(eocd);

    return new Blob(blobParts, { type: 'application/zip' });
  };

  /**
   * Bundles an array of files into a single ZIP file and downloads it.
   * @param {Array<{name: string, blob?: Blob, data?: Uint8Array}>} files
   * @param {string} [zipFilename='zamtools-images.zip']
   */
  window.downloadZip = async function (files, zipFilename = 'zamtools-images.zip') {
    if (!zipFilename.endsWith('.zip')) zipFilename += '.zip';
    if (window.showToast) {
      window.showToast(`Packaging ${files.length} images into ZIP...`, 'info', 2000);
    }
    try {
      const zipBlob = await window.createZipBlob(files);
      window.downloadBlob(zipBlob, zipFilename);
    } catch (err) {
      if (window.showToast) {
        window.showToast(`ZIP generation error: ${err.message}`, 'error');
      }
    }
  };
})();
