/**
 * ZamTools - JPG to PNG Converter
 * Pure client-side lossless PNG encoding
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const inputSizeEl = document.getElementById('inputSize');
  const outputSizeEl = document.getElementById('outputSize');

  let filesList = [];
  let currentIdx = 0;
  let convertedBlobs = [];

  window.setupDropZone(dropzone, fileInput, (files) => {
    const arr = Array.isArray(files) ? files : [files];
    const jpegs = arr.filter(f => f.type === 'image/jpeg' || f.name.match(/\.(jpe?g)$/i));
    if (jpegs.length === 0) {
      window.showToast('Please select valid JPG / JPEG files.', 'error');
      return;
    }
    filesList = jpegs;
    currentIdx = 0;
    convertedBlobs = new Array(filesList.length);
    loadAndConvert();
  }, { multiple: true });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filesList = [];
      convertedBlobs = [];
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function loadAndConvert() {
    if (filesList.length === 0) return;
    const file = filesList[currentIdx];

    try {
      const data = await window.loadImageFromFile(file);
      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      inputSizeEl.textContent = window.formatBytes(file.size);

      if (downloadAllBtn) {
        downloadAllBtn.style.display = filesList.length > 1 ? 'inline-flex' : 'none';
      }

      previewCanvas.width = data.width;
      previewCanvas.height = data.height;
      const ctx = previewCanvas.getContext('2d');
      ctx.drawImage(data.img, 0, 0);

      const blob = await window.canvasToBlob(previewCanvas, 'image/png');
      convertedBlobs[currentIdx] = blob;
      outputSizeEl.textContent = window.formatBytes(blob.size);

      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(file.name, 'png');
        window.downloadBlob(blob, outName);
      };
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  }

  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', async () => {
      window.showToast(`Downloading ${filesList.length} PNG images...`, 'info');
      for (let i = 0; i < filesList.length; i++) {
        if (!convertedBlobs[i]) {
          const data = await window.loadImageFromFile(filesList[i]);
          const c = document.createElement('canvas');
          c.width = data.width;
          c.height = data.height;
          c.getContext('2d').drawImage(data.img, 0, 0);
          convertedBlobs[i] = await window.canvasToBlob(c, 'image/png');
        }
        const outName = window.formatDownloadFilename(filesList[i].name, 'png');
        window.downloadBlob(convertedBlobs[i], outName);
        await new Promise(r => setTimeout(r, 400));
      }
    });
  }
});
