/**
 * ZamTools - PNG to JPG Converter
 * Handles alpha transparency replacement with custom background colors, quality control, multi-image batch queue, and ZIP export
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

  const bgColorPicker = document.getElementById('bgColorPicker');
  const bgPresetBtns = document.querySelectorAll('.bg-preset-btn');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const inputSizeEl = document.getElementById('inputSize');
  const outputSizeEl = document.getElementById('outputSize');

  let currentBgColor = '#ffffff';
  const convertedCache = new Map();

  async function convertSingleFile(file, bgColor, quality) {
    const data = await window.loadImageFromFile(file);
    const canvas = document.createElement('canvas');
    canvas.width = data.width;
    canvas.height = data.height;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(data.img, 0, 0);

    const blob = await window.canvasToBlob(canvas, 'image/jpeg', quality);
    return { blob, ext: 'jpg' };
  }

  async function updateActivePreview(file) {
    if (!file) return;
    try {
      const data = await window.loadImageFromFile(file);
      if (inputSizeEl) inputSizeEl.textContent = window.formatBytes(file.size);

      previewCanvas.width = data.width;
      previewCanvas.height = data.height;
      const ctx = previewCanvas.getContext('2d');

      ctx.fillStyle = currentBgColor;
      ctx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
      ctx.drawImage(data.img, 0, 0);

      const quality = qualitySlider ? parseInt(qualitySlider.value, 10) / 100 : 0.9;
      const blob = await window.canvasToBlob(previewCanvas, 'image/jpeg', quality);
      convertedCache.set(file, { blob, ext: 'jpg' });

      if (outputSizeEl) outputSizeEl.textContent = window.formatBytes(blob.size);

      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(file.name, 'jpg');
        window.downloadBlob(blob, outName);
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
    singleDownloadLabel: 'Download JPG Image',
    batchZipLabel: 'Download All as ZIP',
    filterFn: (f) => f.type === 'image/png' || /\.png$/i.test(f.name),
    onSelectImage: async (file) => {
      await updateActivePreview(file);
    },
    onProcessAll: async (allFiles) => {
      const quality = qualitySlider ? parseInt(qualitySlider.value, 10) / 100 : 0.9;
      const outputs = [];

      for (let i = 0; i < allFiles.length; i++) {
        const f = allFiles[i];
        let res = convertedCache.get(f);
        if (!res) {
          res = await convertSingleFile(f, currentBgColor, quality);
          convertedCache.set(f, res);
        }
        const outName = window.formatDownloadFilename(f.name, 'jpg');
        outputs.push({ name: outName, blob: res.blob });
      }
      return outputs;
    },
    onClearAll: () => {
      convertedCache.clear();
      if (inputSizeEl) inputSizeEl.textContent = '0 KB';
      if (outputSizeEl) outputSizeEl.textContent = '0 KB';
    }
  });

  if (downloadAllBtn) {
    downloadAllBtn.dataset.zipName = 'zamtools-jpg-images.zip';
  }

  // Background color selection
  if (bgColorPicker) {
    bgColorPicker.addEventListener('input', () => {
      currentBgColor = bgColorPicker.value;
      convertedCache.clear();
      const curr = batchMgr.getCurrentFile();
      if (curr) updateActivePreview(curr);
    });
  }

  bgPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bgPresetBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentBgColor = btn.dataset.color;
      if (bgColorPicker) bgColorPicker.value = currentBgColor;
      convertedCache.clear();
      const curr = batchMgr.getCurrentFile();
      if (curr) updateActivePreview(curr);
    });
  });

  // Quality slider
  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, v => `${v}%`);
    qualitySlider.addEventListener('change', () => {
      convertedCache.clear();
      const curr = batchMgr.getCurrentFile();
      if (curr) updateActivePreview(curr);
    });
  }

  window.setupDropZone(dropzone, fileInput, (files) => {
    batchMgr.addFiles(files);
  }, { multiple: true });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      batchMgr.clearAll();
    });
  }
});
