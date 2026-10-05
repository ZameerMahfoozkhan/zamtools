/**
 * ZamTools - Passport Photo Resizer Logic
 * Resizes photos to standard national passport/visa specifications with biometric guidelines
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const presetSelect = document.getElementById('presetSelect');
  const dpiSelect = document.getElementById('dpiSelect');
  const customControls = document.getElementById('customControls');
  const customWidthMm = document.getElementById('customWidthMm');
  const customHeightMm = document.getElementById('customHeightMm');
  const toggleGuideBtn = document.getElementById('toggleGuideBtn');
  const whiteBgCheckbox = document.getElementById('whiteBgCheckbox');

  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const specDetailsEl = document.getElementById('specDetails');

  const STANDARDS = {
    'us': { name: 'United States (2×2 in / 51×51 mm)', mmW: 50.8, mmH: 50.8 },
    'uk-eu': { name: 'UK, Schengen & EU (35×45 mm)', mmW: 35, mmH: 45 },
    'in': { name: 'India (35×45 mm)', mmW: 35, mmH: 45 },
    'ca': { name: 'Canada (50×70 mm)', mmW: 50, mmH: 70 },
    'custom': { name: 'Custom Dimensions', mmW: 35, mmH: 45 }
  };

  let currentImage = null;
  let currentFile = null;
  let showBiometricGuide = true;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      renderPassportPhoto();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  presetSelect.addEventListener('change', () => {
    const isCustom = presetSelect.value === 'custom';
    customControls.style.display = isCustom ? 'grid' : 'none';
    renderPassportPhoto();
  });

  dpiSelect.addEventListener('change', renderPassportPhoto);
  if (customWidthMm) customWidthMm.addEventListener('input', renderPassportPhoto);
  if (customHeightMm) customHeightMm.addEventListener('input', renderPassportPhoto);
  if (whiteBgCheckbox) whiteBgCheckbox.addEventListener('change', renderPassportPhoto);

  if (toggleGuideBtn) {
    toggleGuideBtn.addEventListener('click', () => {
      showBiometricGuide = !showBiometricGuide;
      renderPassportPhoto();
    });
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

  function getPixelDimensions() {
    const dpi = parseInt(dpiSelect.value, 10) || 300;
    const stdKey = presetSelect.value;
    let mmW = 35;
    let mmH = 45;

    if (stdKey === 'custom') {
      mmW = parseFloat(customWidthMm.value) || 35;
      mmH = parseFloat(customHeightMm.value) || 45;
    } else {
      mmW = STANDARDS[stdKey].mmW;
      mmH = STANDARDS[stdKey].mmH;
    }

    // Convert mm to inches then pixels (1 inch = 25.4 mm)
    const pxW = Math.round((mmW / 25.4) * dpi);
    const pxH = Math.round((mmH / 25.4) * dpi);
    return { pxW, pxH, mmW, mmH, dpi };
  }

  function renderPassportPhoto() {
    if (!currentImage) return;

    const { pxW, pxH, mmW, mmH, dpi } = getPixelDimensions();
    specDetailsEl.textContent = `${mmW} × ${mmH} mm (${pxW} × ${pxH} px @ ${dpi} DPI)`;

    previewCanvas.width = pxW;
    previewCanvas.height = pxH;
    const ctx = previewCanvas.getContext('2d');

    // Background fill
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, pxW, pxH);

    // Center crop image into portrait aspect
    const srcW = currentImage.naturalWidth;
    const srcH = currentImage.naturalHeight;
    const ratio = Math.max(pxW / srcW, pxH / srcH);
    const renderW = srcW * ratio;
    const renderH = srcH * ratio;
    const x = (pxW - renderW) / 2;
    const y = (pxH - renderH) / 2;

    ctx.drawImage(currentImage, x, y, renderW, renderH);

    // Biometric Head Guide (approx 70-80% height rule)
    if (showBiometricGuide) {
      ctx.save();
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.7)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);

      // Head Oval guideline
      const headCenterX = pxW / 2;
      const headCenterY = pxH * 0.42;
      const radiusX = pxW * 0.28;
      const radiusY = pxH * 0.32;

      ctx.beginPath();
      ctx.ellipse(headCenterX, headCenterY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Eye-level crosshair
      ctx.beginPath();
      ctx.moveTo(pxW * 0.2, headCenterY);
      ctx.lineTo(pxW * 0.8, headCenterY);
      ctx.stroke();

      ctx.restore();
    }

    downloadBtn.onclick = async () => {
      // Create clean download without the biometric guide lines
      const cleanCanvas = document.createElement('canvas');
      cleanCanvas.width = pxW;
      cleanCanvas.height = pxH;
      const cCtx = cleanCanvas.getContext('2d');
      cCtx.fillStyle = '#ffffff';
      cCtx.fillRect(0, 0, pxW, pxH);
      cCtx.drawImage(currentImage, x, y, renderW, renderH);

      const blob = await window.canvasToBlob(cleanCanvas, 'image/jpeg', 0.95);
      const filename = window.formatDownloadFilename(currentFile.name, 'jpg', `-passport-${mmW}x${mmH}mm`);
      window.downloadBlob(blob, filename);
    };
  }
});
