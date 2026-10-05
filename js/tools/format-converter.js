/**
 * ZamTools - Image Format Converter Logic
 * Matrix converter between JPG, PNG, and WebP with batch processing
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const formatSelect = document.getElementById('formatSelect');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const detectedFormatEl = document.getElementById('detectedFormat');
  const targetFormatEl = document.getElementById('targetFormat');

  let filesList = [];
  let currentIdx = 0;
  let convertedBlobs = [];

  window.setupDropZone(dropzone, fileInput, (files) => {
    const arr = Array.isArray(files) ? files : [files];
    const valid = arr.filter(f => f.type.startsWith('image/'));
    if (valid.length === 0) {
      window.showToast('Please select valid JPG, PNG, or WebP images.', 'error');
      return;
    }
    filesList = valid;
    currentIdx = 0;
    convertedBlobs = new Array(filesList.length);
    convertActive();
  }, { multiple: true });

  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, v => `${v}%`);
    qualitySlider.addEventListener('change', convertActive);
  }

  formatSelect.addEventListener('change', convertActive);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filesList = [];
      convertedBlobs = [];
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function convertActive() {
    if (filesList.length === 0) return;
    const file = filesList[currentIdx];

    try {
      const data = await window.loadImageFromFile(file);
      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      const inExt = file.name.split('.').pop().toUpperCase();
      detectedFormatEl.textContent = inExt;

      const targetMime = formatSelect.value;
      let outExt = 'JPG';
      if (targetMime === 'image/png') outExt = 'PNG';
      if (targetMime === 'image/webp') outExt = 'WEBP';
      targetFormatEl.textContent = outExt;

      if (downloadAllBtn) {
        downloadAllBtn.style.display = filesList.length > 1 ? 'inline-flex' : 'none';
      }

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
      convertedBlobs[currentIdx] = blob;

      downloadBtn.onclick = () => {
        const outName = window.formatDownloadFilename(file.name, outExt.toLowerCase());
        window.downloadBlob(blob, outName);
      };
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  }

  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', async () => {
      window.showToast(`Converting and downloading ${filesList.length} files...`, 'info');
      for (let i = 0; i < filesList.length; i++) {
        if (!convertedBlobs[i]) {
          currentIdx = i;
          await convertActive();
        }
        const targetMime = formatSelect.value;
        let ext = 'jpg';
        if (targetMime === 'image/png') ext = 'png';
        if (targetMime === 'image/webp') ext = 'webp';
        const outName = window.formatDownloadFilename(filesList[i].name, ext);
        window.downloadBlob(convertedBlobs[i], outName);
        await new Promise(r => setTimeout(r, 400));
      }
    });
  }
});
