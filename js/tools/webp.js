/**
 * ZamTools - WebP Converter Logic
 * Converts JPG and PNG to next-generation WebP format with quality optimization
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const originalSizeEl = document.getElementById('originalSize');
  const webpSizeEl = document.getElementById('webpSize');
  const savedPercentEl = document.getElementById('savedPercent');

  let currentImage = null;
  let currentFile = null;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      originalSizeEl.textContent = window.formatBytes(file.size);

      convertToWebP();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, v => `${v}%`);
    qualitySlider.addEventListener('change', convertToWebP);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function convertToWebP() {
    if (!currentImage || !currentFile) return;

    previewCanvas.width = currentImage.naturalWidth;
    previewCanvas.height = currentImage.naturalHeight;
    const ctx = previewCanvas.getContext('2d');
    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    ctx.drawImage(currentImage, 0, 0);

    const quality = parseInt(qualitySlider.value, 10) / 100;
    const blob = await window.canvasToBlob(previewCanvas, 'image/webp', quality);

    webpSizeEl.textContent = window.formatBytes(blob.size);
    const saved = window.calculatePercentageSaved(currentFile.size, blob.size);
    savedPercentEl.textContent = saved > 0 ? `-${saved}%` : '0%';

    downloadBtn.onclick = () => {
      const filename = window.formatDownloadFilename(currentFile.name, 'webp');
      window.downloadBlob(blob, filename);
    };
  }
});
