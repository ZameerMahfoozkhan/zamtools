/**
 * ZamTools - Brightness, Contrast & Saturation Logic
 * Real-time hardware-accelerated canvas filter adjustments with reset and export
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const brightnessSlider = document.getElementById('brightnessSlider');
  const brightnessVal = document.getElementById('brightnessVal');
  const contrastSlider = document.getElementById('contrastSlider');
  const contrastVal = document.getElementById('contrastVal');
  const saturationSlider = document.getElementById('saturationSlider');
  const saturationVal = document.getElementById('saturationVal');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');

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

      resetFilterValues();
      applyFilters();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Slider bindings
  window.bindRangeSlider(brightnessSlider, brightnessVal, v => `${v}%`);
  window.bindRangeSlider(contrastSlider, contrastVal, v => `${v}%`);
  window.bindRangeSlider(saturationSlider, saturationVal, v => `${v}%`);

  [brightnessSlider, contrastSlider, saturationSlider].forEach(slider => {
    slider.addEventListener('input', applyFilters);
  });

  resetFiltersBtn.addEventListener('click', () => {
    resetFilterValues();
    applyFilters();
  });

  function resetFilterValues() {
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    saturationSlider.value = 100;
    brightnessVal.textContent = '100%';
    contrastVal.textContent = '100%';
    saturationVal.textContent = '100%';
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

  function applyFilters() {
    if (!currentImage) return;

    const b = brightnessSlider.value;
    const c = contrastSlider.value;
    const s = saturationSlider.value;

    previewCanvas.width = currentImage.naturalWidth;
    previewCanvas.height = currentImage.naturalHeight;
    const ctx = previewCanvas.getContext('2d');

    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    ctx.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%)`;
    ctx.drawImage(currentImage, 0, 0);

    downloadBtn.onclick = async () => {
      const blob = await window.canvasToBlob(previewCanvas, 'image/png');
      const filename = window.formatDownloadFilename(currentFile.name, 'png', '-adjusted');
      window.downloadBlob(blob, filename);
    };
  }
});
