/**
 * ZamTools - Image Compressor Logic
 * Fully client-side image compression with quality controls and side-by-side comparison
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const formatSelect = document.getElementById('formatSelect');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  
  const originalSizeEl = document.getElementById('originalSize');
  const compressedSizeEl = document.getElementById('compressedSize');
  const savedPercentEl = document.getElementById('savedPercent');
  const originalPreviewImg = document.getElementById('originalPreviewImg');
  const compressedPreviewImg = document.getElementById('compressedPreviewImg');
  const fileInfoName = document.getElementById('fileInfoName');

  let loadedFiles = [];
  let currentFileIndex = 0;
  let compressedBlobs = [];

  // Setup Dropzone
  window.setupDropZone(dropzone, fileInput, (files) => {
    const list = Array.isArray(files) ? files : [files];
    const imageFiles = list.filter(f => f.type.startsWith('image/'));
    if (imageFiles.length === 0) {
      window.showToast('Please select valid JPG, PNG, or WebP images.', 'error');
      return;
    }
    loadedFiles = imageFiles;
    currentFileIndex = 0;
    compressedBlobs = new Array(loadedFiles.length);
    loadActiveImage();
  }, { multiple: true });

  // Slider change
  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, val => `${val}%`);
    qualitySlider.addEventListener('change', () => compressCurrentImage());
  }

  if (formatSelect) {
    formatSelect.addEventListener('change', () => compressCurrentImage());
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      loadedFiles = [];
      compressedBlobs = [];
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function loadActiveImage() {
    if (loadedFiles.length === 0) return;
    const current = loadedFiles[currentFileIndex];
    try {
      const data = await window.loadImageFromFile(current);
      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      
      fileInfoName.textContent = `${current.name} (${window.formatBytes(current.size)})`;
      originalSizeEl.textContent = window.formatBytes(current.size);
      originalPreviewImg.src = data.objectUrl;

      if (downloadAllBtn) {
        downloadAllBtn.style.display = loadedFiles.length > 1 ? 'inline-flex' : 'none';
      }

      await compressCurrentImage();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  }

  async function compressImageSmart(current, quality, formatSetting) {
    let targetMime = formatSetting;
    let ext = 'jpg';

    if (targetMime === 'original') {
      if (current.type === 'image/png') {
        targetMime = 'image/png';
        ext = 'png';
      } else if (current.type === 'image/webp') {
        targetMime = 'image/webp';
        ext = 'webp';
      } else {
        targetMime = 'image/jpeg';
        ext = 'jpg';
      }
    } else {
      if (targetMime === 'image/png') ext = 'png';
      else if (targetMime === 'image/webp') ext = 'webp';
      else ext = 'jpg';
    }

    const data = await window.loadImageFromFile(current);
    let bestBlob = null;

    if (targetMime === 'image/jpeg' || targetMime === 'image/webp') {
      // JPEG or WebP compression
      let q = quality;
      let scale = 1.0;

      // Iterative adaptive search to ensure compressed output is genuinely smaller than original
      for (let iter = 0; iter < 6; iter++) {
        const canvas = document.createElement('canvas');
        const w = Math.max(16, Math.round(data.width * scale));
        const h = Math.max(16, Math.round(data.height * scale));
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');

        if (targetMime === 'image/jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(data.img, 0, 0, w, h);

        const blob = await window.canvasToBlob(canvas, targetMime, q);
        if (!bestBlob || blob.size < bestBlob.size) {
          bestBlob = blob;
        }

        if (blob.size < current.size) {
          bestBlob = blob;
          break;
        }

        // If not smaller, adaptively reduce quality, then downscale if needed
        if (q > 0.25) {
          q = Math.max(0.12, q - 0.15);
        } else {
          scale *= 0.90;
        }
      }
    } else {
      // PNG compression with smart palette/color quantization and adaptive scaling
      let q = quality;
      let scale = 1.0;

      for (let iter = 0; iter < 6; iter++) {
        const canvas = document.createElement('canvas');
        const w = Math.max(16, Math.round(data.width * scale));
        const h = Math.max(16, Math.round(data.height * scale));
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(data.img, 0, 0, w, h);

        // Quantize colors for PNG Deflate optimization
        const step = Math.max(2, Math.round((1 - q) * 36) + (iter * 4));
        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;
        for (let p = 0; p < d.length; p += 4) {
          d[p] = Math.round(d[p] / step) * step;
          d[p+1] = Math.round(d[p+1] / step) * step;
          d[p+2] = Math.round(d[p+2] / step) * step;
        }
        ctx.putImageData(imgData, 0, 0);

        const blob = await window.canvasToBlob(canvas, 'image/png');
        if (!bestBlob || blob.size < bestBlob.size) {
          bestBlob = blob;
        }

        if (blob.size < current.size) {
          bestBlob = blob;
          break;
        }

        // Scale dimensions down slightly and increase quantization if still larger
        scale *= 0.88;
        q = Math.max(0.15, q - 0.15);
      }
    }

    return { blob: bestBlob, ext, mime: targetMime };
  }

  async function compressCurrentImage() {
    if (loadedFiles.length === 0) return;
    const current = loadedFiles[currentFileIndex];
    const quality = parseInt(qualitySlider.value, 10) / 100;
    const formatSetting = formatSelect.value;

    try {
      const result = await compressImageSmart(current, quality, formatSetting);
      const blob = result.blob;
      const ext = result.ext;

      compressedBlobs[currentFileIndex] = blob;

      const compUrl = URL.createObjectURL(blob);
      compressedPreviewImg.src = compUrl;
      compressedSizeEl.textContent = window.formatBytes(blob.size);

      const saved = window.calculatePercentageSaved(current.size, blob.size);
      if (blob.size < current.size) {
        savedPercentEl.textContent = `-${Math.max(1, saved)}%`;
        savedPercentEl.className = 'stat-value highlight-success';
      } else {
        savedPercentEl.textContent = '0%';
        savedPercentEl.className = 'stat-value';
      }

      // Update download single button
      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(current.name, ext, '-compressed');
        window.downloadBlob(blob, outName);
      };
    } catch (err) {
      window.showToast('Compression error: ' + err.message, 'error');
    }
  }

  // Batch download handler
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', async () => {
      window.showToast(`Downloading all ${loadedFiles.length} images...`, 'info');
      for (let i = 0; i < loadedFiles.length; i++) {
        const file = loadedFiles[i];
        const quality = parseInt(qualitySlider.value, 10) / 100;
        const res = await compressImageSmart(file, quality, formatSelect.value);
        const outName = window.formatDownloadFilename(file.name, res.ext, '-compressed');
        window.downloadBlob(res.blob, outName);
        await new Promise(r => setTimeout(r, 400));
      }
    });
  }
});
