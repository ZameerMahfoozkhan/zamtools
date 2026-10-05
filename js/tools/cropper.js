/**
 * ZamTools - Image Cropper Logic
 * Interactive canvas crop tool with aspect ratio presets, zoom, and rotation
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const mainCanvas = document.getElementById('cropCanvas');
  const previewCanvas = document.getElementById('previewCanvas');
  const ratioBtns = document.querySelectorAll('.ratio-btn');
  const zoomSlider = document.getElementById('zoomSlider');
  const zoomVal = document.getElementById('zoomVal');
  const rotateBtn = document.getElementById('rotateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const cropDimensionsEl = document.getElementById('cropDimensions');
  const fileInfoName = document.getElementById('fileInfoName');

  let currentImage = null;
  let currentFile = null;
  let rotationDeg = 0;
  let zoomLevel = 1;
  let activeRatio = 'free'; // 'free', '1:1', '4:3', '16:9', '3:2', '9:16'

  // Crop box coordinates relative to canvas
  let crop = { x: 50, y: 50, w: 200, h: 200 };
  let isDragging = false;
  let dragHandle = null; // 'move', 'nw', 'ne', 'sw', 'se'
  let dragStart = { x: 0, y: 0 };
  let cropStart = { x: 0, y: 0, w: 0, h: 0 };

  // Setup Dropzone
  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;
      rotationDeg = 0;
      zoomLevel = 1;
      if (zoomSlider) zoomSlider.value = 100;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      initCropDimensions();
      renderAll();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  function initCropDimensions() {
    const cw = mainCanvas.width || 600;
    const ch = mainCanvas.height || 400;
    const size = Math.min(cw, ch) * 0.7;
    crop = {
      x: (cw - size) / 2,
      y: (ch - size) / 2,
      w: size,
      h: size
    };
    applyRatio();
  }

  // Aspect ratio handlers
  ratioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ratioBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeRatio = btn.dataset.ratio;
      applyRatio();
      renderAll();
    });
  });

  function applyRatio() {
    if (activeRatio === 'free') return;
    const parts = activeRatio.split(':').map(Number);
    const targetRatio = parts[0] / parts[1];
    crop.h = Math.round(crop.w / targetRatio);

    if (crop.y + crop.h > mainCanvas.height) {
      crop.h = mainCanvas.height - crop.y;
      crop.w = Math.round(crop.h * targetRatio);
    }
  }

  // Zoom
  if (zoomSlider && zoomVal) {
    window.bindRangeSlider(zoomSlider, zoomVal, v => `${v}%`);
    zoomSlider.addEventListener('input', () => {
      zoomLevel = parseInt(zoomSlider.value, 10) / 100;
      renderAll();
    });
  }

  // Rotate 90
  rotateBtn.addEventListener('click', () => {
    rotationDeg = (rotationDeg + 90) % 360;
    renderAll();
  });

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

  function renderAll() {
    if (!currentImage) return;

    // Dimensions for workspace
    const maxW = 680;
    const scale = Math.min(1, maxW / currentImage.naturalWidth);
    mainCanvas.width = Math.round(currentImage.naturalWidth * scale);
    mainCanvas.height = Math.round(currentImage.naturalHeight * scale);

    const ctx = mainCanvas.getContext('2d');
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

    // Save and transform for rotation & zoom
    ctx.save();
    ctx.translate(mainCanvas.width / 2, mainCanvas.height / 2);
    ctx.rotate((rotationDeg * Math.PI) / 180);
    ctx.scale(zoomLevel, zoomLevel);
    ctx.drawImage(
      currentImage,
      -mainCanvas.width / 2,
      -mainCanvas.height / 2,
      mainCanvas.width,
      mainCanvas.height
    );
    ctx.restore();

    // Draw crop dim overlay
    ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
    ctx.fillRect(0, 0, mainCanvas.width, crop.y);
    ctx.fillRect(0, crop.y + crop.h, mainCanvas.width, mainCanvas.height - (crop.y + crop.h));
    ctx.fillRect(0, crop.y, crop.x, crop.h);
    ctx.fillRect(crop.x + crop.w, crop.y, mainCanvas.width - (crop.x + crop.w), crop.h);

    // Draw crop border
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.strokeRect(crop.x, crop.y, crop.w, crop.h);

    // Draw rule-of-thirds grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(crop.x + crop.w / 3, crop.y);
    ctx.lineTo(crop.x + crop.w / 3, crop.y + crop.h);
    ctx.moveTo(crop.x + (2 * crop.w) / 3, crop.y);
    ctx.lineTo(crop.x + (2 * crop.w) / 3, crop.y + crop.h);
    ctx.moveTo(crop.x, crop.y + crop.h / 3);
    ctx.lineTo(crop.x + crop.w, crop.y + crop.h / 3);
    ctx.moveTo(crop.x, crop.y + (2 * crop.h) / 3);
    ctx.lineTo(crop.x + crop.w, crop.y + (2 * crop.h) / 3);
    ctx.stroke();

    // Handles
    drawHandle(ctx, crop.x, crop.y);
    drawHandle(ctx, crop.x + crop.w, crop.y);
    drawHandle(ctx, crop.x, crop.y + crop.h);
    drawHandle(ctx, crop.x + crop.w, crop.y + crop.h);

    updateCropResult(scale);
  }

  function drawHandle(ctx, x, y) {
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.fillRect(x - 5, y - 5, 10, 10);
    ctx.strokeRect(x - 5, y - 5, 10, 10);
  }

  function updateCropResult(scale) {
    const realX = Math.round(crop.x / scale);
    const realY = Math.round(crop.y / scale);
    const realW = Math.round(crop.w / scale);
    const realH = Math.round(crop.h / scale);

    cropDimensionsEl.textContent = `${realW} × ${realH} px`;

    // Render result on previewCanvas
    previewCanvas.width = crop.w;
    previewCanvas.height = crop.h;
    const pCtx = previewCanvas.getContext('2d');
    pCtx.drawImage(
      mainCanvas,
      crop.x, crop.y, crop.w, crop.h,
      0, 0, crop.w, crop.h
    );

    downloadBtn.onclick = async () => {
      // High-res crop
      const hiResCanvas = document.createElement('canvas');
      hiResCanvas.width = realW;
      hiResCanvas.height = realH;
      const hCtx = hiResCanvas.getContext('2d');

      hCtx.save();
      hCtx.translate(hiResCanvas.width / 2, hiResCanvas.height / 2);
      hCtx.rotate((rotationDeg * Math.PI) / 180);
      hCtx.scale(zoomLevel, zoomLevel);
      hCtx.drawImage(
        currentImage,
        -realX - realW / 2 + currentImage.naturalWidth / 2,
        -realY - realH / 2 + currentImage.naturalHeight / 2
      );
      hCtx.restore();

      const blob = await window.canvasToBlob(previewCanvas, 'image/png');
      const filename = window.formatDownloadFilename(currentFile.name, 'png', '-cropped');
      window.downloadBlob(blob, filename);
    };
  }

  // Interactive mouse/touch dragging
  function getCanvasCoords(e) {
    const rect = mainCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (mainCanvas.width / rect.width),
      y: (clientY - rect.top) * (mainCanvas.height / rect.height)
    };
  }

  function hitHandle(pos, hx, hy) {
    return Math.abs(pos.x - hx) < 14 && Math.abs(pos.y - hy) < 14;
  }

  const startDrag = (e) => {
    const pos = getCanvasCoords(e);
    dragStart = pos;
    cropStart = { ...crop };

    if (hitHandle(pos, crop.x, crop.y)) dragHandle = 'nw';
    else if (hitHandle(pos, crop.x + crop.w, crop.y)) dragHandle = 'ne';
    else if (hitHandle(pos, crop.x, crop.y + crop.h)) dragHandle = 'sw';
    else if (hitHandle(pos, crop.x + crop.w, crop.y + crop.h)) dragHandle = 'se';
    else if (pos.x >= crop.x && pos.x <= crop.x + crop.w && pos.y >= crop.y && pos.y <= crop.y + crop.h) {
      dragHandle = 'move';
    } else {
      dragHandle = null;
    }

    if (dragHandle) {
      isDragging = true;
      e.preventDefault();
    }
  };

  const onDrag = (e) => {
    if (!isDragging || !dragHandle) return;
    const pos = getCanvasCoords(e);
    const dx = pos.x - dragStart.x;
    const dy = pos.y - dragStart.y;

    if (dragHandle === 'move') {
      crop.x = Math.max(0, Math.min(mainCanvas.width - crop.w, cropStart.x + dx));
      crop.y = Math.max(0, Math.min(mainCanvas.height - crop.h, cropStart.y + dy));
    } else if (dragHandle === 'se') {
      crop.w = Math.max(40, Math.min(mainCanvas.width - crop.x, cropStart.w + dx));
      crop.h = Math.max(40, Math.min(mainCanvas.height - crop.y, cropStart.h + dy));
      if (activeRatio !== 'free') applyRatio();
    }
    renderAll();
  };

  const endDrag = () => {
    isDragging = false;
    dragHandle = null;
  };

  mainCanvas.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', endDrag);

  mainCanvas.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', onDrag, { passive: false });
  window.addEventListener('touchend', endDrag);
});
