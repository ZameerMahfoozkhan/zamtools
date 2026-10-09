/**
 * ZamTools - JPG to PNG Converter
 * Pure client-side lossless PNG encoding with multi-image batch queue and ZIP export
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

  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const inputSizeEl = document.getElementById('inputSize');
  const outputSizeEl = document.getElementById('outputSize');

  const convertedCache = new Map();

  async function convertSingleFile(file) {
    const data = await window.loadImageFromFile(file);
    const canvas = document.createElement('canvas');
    canvas.width = data.width;
    canvas.height = data.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(data.img, 0, 0);

    const blob = await window.canvasToBlob(canvas, 'image/png');
    return { blob, ext: 'png' };
  }

  async function updateActivePreview(file) {
    if (!file) return;
    try {
      const data = await window.loadImageFromFile(file);
      if (inputSizeEl) inputSizeEl.textContent = window.formatBytes(file.size);

      previewCanvas.width = data.width;
      previewCanvas.height = data.height;
      const ctx = previewCanvas.getContext('2d');
      ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      ctx.drawImage(data.img, 0, 0);

      const blob = await window.canvasToBlob(previewCanvas, 'image/png');
      convertedCache.set(file, { blob, ext: 'png' });

      if (outputSizeEl) outputSizeEl.textContent = window.formatBytes(blob.size);

      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(file.name, 'png');
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
    singleDownloadLabel: 'Download PNG Image',
    batchZipLabel: 'Download All as ZIP',
    filterFn: (f) => f.type === 'image/jpeg' || /\.(jpe?g)$/i.test(f.name),
    onSelectImage: async (file) => {
      await updateActivePreview(file);
    },
    onProcessAll: async (allFiles) => {
      const outputs = [];

      for (let i = 0; i < allFiles.length; i++) {
        const f = allFiles[i];
        let res = convertedCache.get(f);
        if (!res) {
          res = await convertSingleFile(f);
          convertedCache.set(f, res);
        }
        const outName = window.formatDownloadFilename(f.name, 'png');
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
    downloadAllBtn.dataset.zipName = 'zamtools-png-images.zip';
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
