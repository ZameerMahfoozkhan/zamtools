/**
 * ZamTools - Image Resizer Logic
 * Custom width & height, presets, aspect ratio lock, and client-side scaling
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');
  
  const widthInput = document.getElementById('widthInput');
  const heightInput = document.getElementById('heightInput');
  const lockAspect = document.getElementById('lockAspect');
  const presetSelect = document.getElementById('presetSelect');
  const formatSelect = document.getElementById('formatSelect');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const origDimsEl = document.getElementById('origDims');
  const newDimsEl = document.getElementById('newDims');
  const outputSizeEl = document.getElementById('outputSize');
  const fileInfoName = document.getElementById('fileInfoName');

  let currentImage = null;
  let currentFile = null;
  let aspectRatio = 1;
  let resizedBlob = null;

  // Setup Dropzone
  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;
      aspectRatio = data.width / data.height;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      origDimsEl.textContent = `${data.width} × ${data.height} px`;

      widthInput.value = data.width;
      heightInput.value = data.height;
      presetSelect.value = 'custom';

      await processResize();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Aspect ratio synchronization
  widthInput.addEventListener('input', () => {
    if (lockAspect.checked && aspectRatio) {
      const w = parseInt(widthInput.value, 10);
      if (w > 0) heightInput.value = Math.round(w / aspectRatio);
    }
    presetSelect.value = 'custom';
    processResize();
  });

  heightInput.addEventListener('input', () => {
    if (lockAspect.checked && aspectRatio) {
      const h = parseInt(heightInput.value, 10);
      if (h > 0) widthInput.value = Math.round(h * aspectRatio);
    }
    presetSelect.value = 'custom';
    processResize();
  });

  if (lockAspect) {
    lockAspect.addEventListener('change', () => {
      if (lockAspect.checked && aspectRatio) {
        const w = parseInt(widthInput.value, 10);
        if (w > 0) heightInput.value = Math.round(w / aspectRatio);
        processResize();
      }
    });
  }

  // Presets selector
  presetSelect.addEventListener('change', () => {
    const val = presetSelect.value;
    if (val === 'custom') return;
    const targetW = parseInt(val, 10);
    widthInput.value = targetW;
    if (lockAspect.checked && aspectRatio) {
      heightInput.value = Math.round(targetW / aspectRatio);
    }
    processResize();
  });

  // Quality slider
  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, v => `${v}%`);
    qualitySlider.addEventListener('change', processResize);
  }

  if (formatSelect) {
    formatSelect.addEventListener('change', processResize);
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      resizedBlob = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function processResize() {
    if (!currentImage) return;

    let targetW = parseInt(widthInput.value, 10);
    let targetH = parseInt(heightInput.value, 10);

    if (isNaN(targetW) || targetW <= 0) targetW = 100;
    if (isNaN(targetH) || targetH <= 0) targetH = 100;

    // Safety clamp to prevent browser crashes
    targetW = Math.min(targetW, 10000);
    targetH = Math.min(targetH, 10000);

    const canvas = previewCanvas;
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');

    const fmt = formatSelect.value;
    const quality = parseInt(qualitySlider.value, 10) / 100;

    if (fmt === 'image/jpeg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, targetW, targetH);
    } else {
      ctx.clearRect(0, 0, targetW, targetH);
    }

    // High quality scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(currentImage, 0, 0, targetW, targetH);

    newDimsEl.textContent = `${targetW} × ${targetH} px`;

    resizedBlob = await window.canvasToBlob(canvas, fmt, quality);
    outputSizeEl.textContent = window.formatBytes(resizedBlob.size);

    downloadBtn.onclick = () => {
      let ext = 'jpg';
      if (fmt === 'image/png') ext = 'png';
      if (fmt === 'image/webp') ext = 'webp';
      const filename = window.formatDownloadFilename(currentFile.name, ext, `-${targetW}x${targetH}`);
      window.downloadBlob(resizedBlob, filename);
    };
  }
});
