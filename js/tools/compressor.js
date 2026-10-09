/**
 * ZamTools - Image Compressor Logic
 * Fully client-side image compression with quality controls and batch ZIP download
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const addMoreBtn = document.getElementById('addMoreBtn');
  const addFileInput = document.getElementById('addFileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');
  const batchQueueContainer = document.getElementById('batchQueueContainer');
  const batchCountBadge = document.getElementById('batchCountBadge');

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

  const compressedCache = new Map();

  async function updateActivePreview(file) {
    if (!file) return;
    try {
      const data = await window.loadImageFromFile(file);
      originalSizeEl.textContent = window.formatBytes(file.size);
      originalPreviewImg.src = data.objectUrl;

      await compressActiveImage(file);
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  }

  async function compressActiveImage(file) {
    if (!file) return;
    const quality = parseInt(qualitySlider.value, 10) / 100;
    const formatSetting = formatSelect.value;
    try {
      const result = await compressImageSmart(file, quality, formatSetting);
      compressedCache.set(file, result);

      compressedPreviewImg.src = URL.createObjectURL(result.blob);
      compressedSizeEl.textContent = window.formatBytes(result.blob.size);

      const saved = window.calculatePercentageSaved(file.size, result.blob.size);
      if (result.blob.size < file.size) {
        savedPercentEl.textContent = `-${Math.max(1, saved)}%`;
        savedPercentEl.className = 'stat-value highlight-success';
      } else {
        savedPercentEl.textContent = '0%';
        savedPercentEl.className = 'stat-value';
      }

      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(file.name, result.ext, '-compressed');
        window.downloadBlob(result.blob, outName);
      };
    } catch (err) {
      window.showToast('Compression error: ' + err.message, 'error');
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
      let q = quality;
      let scale = 1.0;

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

        if (q > 0.25) {
          q = Math.max(0.12, q - 0.15);
        } else {
          scale *= 0.90;
        }
      }
    } else {
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

        scale *= 0.88;
        q = Math.max(0.15, q - 0.15);
      }
    }

    return { blob: bestBlob, ext, mime: targetMime };
  }

  // Setup Batch Manager
  const batchMgr = window.setupBatchQueueManager({
    dropzoneEl: dropzone,
    fileInputEl: fileInput,
    addMoreBtn: addMoreBtn,
    addFileInput: addFileInput,
    workspaceActive: workspaceActive,
    queueContainer: batchQueueContainer,
    countBadge: batchCountBadge,
    fileInfoName: fileInfoName,
    downloadBtn: downloadBtn,
    downloadAllBtn: downloadAllBtn,
    singleDownloadLabel: 'Download Compressed Image',
    batchZipLabel: 'Download All as ZIP',
    filterFn: (f) => f.type && f.type.startsWith('image/'),
    onSelectImage: async (file) => {
      await updateActivePreview(file);
    },
    onProcessAll: async (allFiles) => {
      const quality = parseInt(qualitySlider.value, 10) / 100;
      const formatSetting = formatSelect.value;
      const outputs = [];

      for (let i = 0; i < allFiles.length; i++) {
        const file = allFiles[i];
        let res = compressedCache.get(file);
        if (!res) {
          res = await compressImageSmart(file, quality, formatSetting);
          compressedCache.set(file, res);
        }
        const outName = window.formatDownloadFilename(file.name, res.ext, '-compressed');
        outputs.push({ name: outName, blob: res.blob });
      }
      return outputs;
    },
    onClearAll: () => {
      compressedCache.clear();
      originalPreviewImg.src = '';
      compressedPreviewImg.src = '';
      originalSizeEl.textContent = '0 KB';
      compressedSizeEl.textContent = '0 KB';
      savedPercentEl.textContent = '0%';
    }
  });

  if (downloadAllBtn) {
    downloadAllBtn.dataset.zipName = 'zamtools-compressed-images.zip';
  }

  window.setupDropZone(dropzone, fileInput, (files) => {
    batchMgr.addFiles(files);
  }, { multiple: true });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      batchMgr.clearAll();
    });
  }

  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, val => `${val}%`);
    qualitySlider.addEventListener('change', () => {
      compressedCache.clear();
      const current = batchMgr.getCurrentFile();
      if (current) compressActiveImage(current);
    });
  }

  if (formatSelect) {
    formatSelect.addEventListener('change', () => {
      compressedCache.clear();
      const current = batchMgr.getCurrentFile();
      if (current) compressActiveImage(current);
    });
  }
});
