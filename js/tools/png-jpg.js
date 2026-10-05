/**
 * ZamTools - PNG to JPG Converter
 * Handles alpha transparency replacement with custom background colors and quality control
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const bgColorPicker = document.getElementById('bgColorPicker');
  const bgPresetBtns = document.querySelectorAll('.bg-preset-btn');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const inputSizeEl = document.getElementById('inputSize');
  const outputSizeEl = document.getElementById('outputSize');

  let currentImage = null;
  let currentFile = null;
  let currentBgColor = '#ffffff';

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      inputSizeEl.textContent = window.formatBytes(file.size);

      convertPngToJpg();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Background color selection
  if (bgColorPicker) {
    bgColorPicker.addEventListener('input', () => {
      currentBgColor = bgColorPicker.value;
      convertPngToJpg();
    });
  }

  bgPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bgPresetBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentBgColor = btn.dataset.color;
      if (bgColorPicker) bgColorPicker.value = currentBgColor;
      convertPngToJpg();
    });
  });

  // Quality slider
  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, v => `${v}%`);
    qualitySlider.addEventListener('change', convertPngToJpg);
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function convertPngToJpg() {
    if (!currentImage || !currentFile) return;

    previewCanvas.width = currentImage.naturalWidth;
    previewCanvas.height = currentImage.naturalHeight;
    const ctx = previewCanvas.getContext('2d');

    // Fill chosen solid background color to replace transparency cleanly
    ctx.fillStyle = currentBgColor;
    ctx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);

    ctx.drawImage(currentImage, 0, 0);

    const quality = parseInt(qualitySlider.value, 10) / 100;
    const blob = await window.canvasToBlob(previewCanvas, 'image/jpeg', quality);
    outputSizeEl.textContent = window.formatBytes(blob.size);

    downloadBtn.onclick = () => {
      const filename = window.formatDownloadFilename(currentFile.name, 'jpg');
      window.downloadBlob(blob, filename);
    };
  }
});
