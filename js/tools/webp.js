/**
 * ZamTools - WebP Converter Logic
 * Converts JPG and PNG to next-generation WebP format with multi-image batch queue and ZIP export
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
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const originalSizeEl = document.getElementById('originalSize');
  const webpSizeEl = document.getElementById('webpSize');
  const savedPercentEl = document.getElementById('savedPercent');

  const convertedCache = new Map();

  async function convertSingleFile(file, quality) {
    const data = await window.loadImageFromFile(file);
    const canvas = document.createElement('canvas');
    canvas.width = data.width;
    canvas.height = data.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(data.img, 0, 0);

    const blob = await window.canvasToBlob(canvas, 'image/webp', quality);
    return { blob, ext: 'webp' };
  }

  async function updateActivePreview(file) {
    if (!file) return;
    try {
      const data = await window.loadImageFromFile(file);
      if (originalSizeEl) originalSizeEl.textContent = window.formatBytes(file.size);

      previewCanvas.width = data.width;
      previewCanvas.height = data.height;
      const ctx = previewCanvas.getContext('2d');
      ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      ctx.drawImage(data.img, 0, 0);

      const quality = qualitySlider ? parseInt(qualitySlider.value, 10) / 100 : 0.82;
      const blob = await window.canvasToBlob(previewCanvas, 'image/webp', quality);
      convertedCache.set(file, { blob, ext: 'webp' });

      if (webpSizeEl) webpSizeEl.textContent = window.formatBytes(blob.size);
      if (savedPercentEl) {
        const saved = window.calculatePercentageSaved(file.size, blob.size);
        savedPercentEl.textContent = saved > 0 ? `-${saved}%` : '0%';
      }

      downloadBtn.onclick = () => {
        const filename = window.formatDownloadFilename(file.name, 'webp');
        window.downloadBlob(blob, filename);
      };
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  }

  // Setup Batch Queue Manager
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
    singleDownloadLabel: 'Download WebP Image',
    batchZipLabel: 'Download All as ZIP',
    filterFn: (f) => f.type === 'image/jpeg' || f.type === 'image/png' || /\.(jpe?g|png)$/i.test(f.name),
    onSelectImage: async (file) => {
      await updateActivePreview(file);
    },
    onProcessAll: async (allFiles) => {
      const quality = qualitySlider ? parseInt(qualitySlider.value, 10) / 100 : 0.82;
      const outputs = [];

      for (let i = 0; i < allFiles.length; i++) {
        const f = allFiles[i];
        let res = convertedCache.get(f);
        if (!res) {
          res = await convertSingleFile(f, quality);
          convertedCache.set(f, res);
        }
        const outName = window.formatDownloadFilename(f.name, 'webp');
        outputs.push({ name: outName, blob: res.blob });
      }
      return outputs;
    },
    onClearAll: () => {
      convertedCache.clear();
      if (originalSizeEl) originalSizeEl.textContent = '0 KB';
      if (webpSizeEl) webpSizeEl.textContent = '0 KB';
      if (savedPercentEl) savedPercentEl.textContent = '0%';
    }
  });

  if (downloadAllBtn) {
    downloadAllBtn.dataset.zipName = 'zamtools-webp-images.zip';
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
});
