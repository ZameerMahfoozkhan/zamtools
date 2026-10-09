/**
 * ZamTools - Image Format Converter Logic
 * Matrix converter between JPG, PNG, and WebP with multi-image batch queue and ZIP export
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

  const formatSelect = document.getElementById('formatSelect');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const detectedFormatEl = document.getElementById('detectedFormat');
  const targetFormatEl = document.getElementById('targetFormat');

  const convertedCache = new Map();

  async function convertSingleFile(file, targetMime, quality) {
    const data = await window.loadImageFromFile(file);
    const canvas = document.createElement('canvas');
    canvas.width = data.width;
    canvas.height = data.height;
    const ctx = canvas.getContext('2d');

    if (targetMime === 'image/jpeg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, data.width, data.height);
    } else {
      ctx.clearRect(0, 0, data.width, data.height);
    }
    ctx.drawImage(data.img, 0, 0);

    const blob = await window.canvasToBlob(canvas, targetMime, quality);
    let outExt = 'jpg';
    if (targetMime === 'image/png') outExt = 'png';
    if (targetMime === 'image/webp') outExt = 'webp';

    return { blob, ext: outExt };
  }

  async function updateActivePreview(file) {
    if (!file) return;
    try {
      const data = await window.loadImageFromFile(file);
      const inExt = file.name.split('.').pop().toUpperCase();
      detectedFormatEl.textContent = inExt;

      const targetMime = formatSelect.value;
      let outExt = 'JPG';
      if (targetMime === 'image/png') outExt = 'PNG';
      if (targetMime === 'image/webp') outExt = 'WEBP';
      targetFormatEl.textContent = outExt;

      previewCanvas.width = data.width;
      previewCanvas.height = data.height;
      const ctx = previewCanvas.getContext('2d');

      if (targetMime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, data.width, data.height);
      } else {
        ctx.clearRect(0, 0, data.width, data.height);
      }
      ctx.drawImage(data.img, 0, 0);

      const quality = parseInt(qualitySlider.value, 10) / 100;
      const blob = await window.canvasToBlob(previewCanvas, targetMime, quality);
      convertedCache.set(file, { blob, ext: outExt.toLowerCase() });

      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(file.name, outExt.toLowerCase());
        window.downloadBlob(blob, outName);
      };
    } catch (err) {
      window.showToast(err.message, 'error');
    }
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
    singleDownloadLabel: 'Download Converted File',
    batchZipLabel: 'Download All as ZIP',
    filterFn: (f) => f.type && f.type.startsWith('image/'),
    onSelectImage: async (file) => {
      await updateActivePreview(file);
    },
    onProcessAll: async (allFiles) => {
      const targetMime = formatSelect.value;
      const quality = parseInt(qualitySlider.value, 10) / 100;
      const outputs = [];

      for (let i = 0; i < allFiles.length; i++) {
        const f = allFiles[i];
        let res = convertedCache.get(f);
        if (!res) {
          res = await convertSingleFile(f, targetMime, quality);
          convertedCache.set(f, res);
        }
        const outName = window.formatDownloadFilename(f.name, res.ext);
        outputs.push({ name: outName, blob: res.blob });
      }
      return outputs;
    },
    onClearAll: () => {
      convertedCache.clear();
      detectedFormatEl.textContent = 'JPG';
      targetFormatEl.textContent = 'WEBP';
    }
  });

  if (downloadAllBtn) {
    downloadAllBtn.dataset.zipName = 'zamtools-converted-images.zip';
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
    window.bindRangeSlider(qualitySlider, qualityVal, v => `${v}%`);
    qualitySlider.addEventListener('change', () => {
      convertedCache.clear();
      const curr = batchMgr.getCurrentFile();
      if (curr) updateActivePreview(curr);
    });
  }

  if (formatSelect) {
    formatSelect.addEventListener('change', () => {
      convertedCache.clear();
      const curr = batchMgr.getCurrentFile();
      if (curr) updateActivePreview(curr);
    });
  }
});
