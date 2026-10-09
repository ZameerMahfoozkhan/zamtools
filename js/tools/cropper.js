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
  let dragHandle = null; // 'move', 'nw', 'ne', 'sw', 'se', 'n', 's', 'e', 'w', 'create'
  let dragStart = { x: 0, y: 0 };
  let cropStart = { x: 0, y: 0, w: 0, h: 0 };
  let currentScale = 1;

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
    const maxW = 680;
    const scale = Math.min(1, maxW / currentImage.naturalWidth);
    const cw = Math.round(currentImage.naturalWidth * scale);
    const ch = Math.round(currentImage.naturalHeight * scale);
    const size = Math.min(cw, ch) * 0.7;
    crop = {
      x: Math.round((cw - size) / 2),
      y: Math.round((ch - size) / 2),
      w: Math.round(size),
      h: Math.round(size)
    };
    applyRatio(cw, ch);
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

  function applyRatio(customCw, customCh) {
    if (activeRatio === 'free') return;
    const cw = customCw || mainCanvas.width || 600;
    const ch = customCh || mainCanvas.height || 400;
    const parts = activeRatio.split(':').map(Number);
    const targetRatio = parts[0] / parts[1];
    crop.h = Math.round(crop.w / targetRatio);

    if (crop.y + crop.h > ch) {
      crop.h = ch - crop.y;
      crop.w = Math.round(crop.h * targetRatio);
    }
    if (crop.x + crop.w > cw) {
      crop.w = cw - crop.x;
      crop.h = Math.round(crop.w / targetRatio);
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
    currentScale = scale;
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

    // Clamp crop box to current canvas dimensions
    crop.w = Math.max(30, Math.min(mainCanvas.width, crop.w));
    crop.h = Math.max(30, Math.min(mainCanvas.height, crop.h));
    crop.x = Math.max(0, Math.min(mainCanvas.width - crop.w, crop.x));
    crop.y = Math.max(0, Math.min(mainCanvas.height - crop.h, crop.y));

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
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
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

    // 4 Corner handles
    drawHandle(ctx, crop.x, crop.y);
    drawHandle(ctx, crop.x + crop.w, crop.y);
    drawHandle(ctx, crop.x, crop.y + crop.h);
    drawHandle(ctx, crop.x + crop.w, crop.y + crop.h);

    // 4 Edge handles
    drawHandle(ctx, crop.x + crop.w / 2, crop.y);
    drawHandle(ctx, crop.x + crop.w / 2, crop.y + crop.h);
    drawHandle(ctx, crop.x, crop.y + crop.h / 2);
    drawHandle(ctx, crop.x + crop.w, crop.y + crop.h / 2);

    updateCropResult(scale);
  }

  function drawHandle(ctx, x, y) {
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  function updateCropResult(scale) {
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
      if (!currentImage) return;

      // High-resolution crop canvas
      const hiResCanvas = document.createElement('canvas');
      hiResCanvas.width = realW;
      hiResCanvas.height = realH;
      const hCtx = hiResCanvas.getContext('2d');

      hCtx.save();
      // Translate to crop origin relative to canvas
      hCtx.translate(-crop.x / scale, -crop.y / scale);

      // Apply transformations at full resolution scale
      hCtx.translate((mainCanvas.width / scale) / 2, (mainCanvas.height / scale) / 2);
      hCtx.rotate((rotationDeg * Math.PI) / 180);
      hCtx.scale(zoomLevel, zoomLevel);
      hCtx.drawImage(
        currentImage,
        -(mainCanvas.width / scale) / 2,
        -(mainCanvas.height / scale) / 2,
        mainCanvas.width / scale,
        mainCanvas.height / scale
      );
      hCtx.restore();

      const blob = await window.canvasToBlob(hiResCanvas, 'image/png');
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
    return Math.hypot(pos.x - hx, pos.y - hy) <= 14;
  }

  function getHandleAt(pos) {
    if (hitHandle(pos, crop.x, crop.y)) return 'nw';
    if (hitHandle(pos, crop.x + crop.w, crop.y)) return 'ne';
    if (hitHandle(pos, crop.x + crop.w, crop.y + crop.h)) return 'se';
    if (hitHandle(pos, crop.x, crop.y + crop.h)) return 'sw';
    if (hitHandle(pos, crop.x + crop.w / 2, crop.y)) return 'n';
    if (hitHandle(pos, crop.x + crop.w / 2, crop.y + crop.h)) return 's';
    if (hitHandle(pos, crop.x, crop.y + crop.h / 2)) return 'w';
    if (hitHandle(pos, crop.x + crop.w, crop.y + crop.h / 2)) return 'e';
    if (pos.x >= crop.x && pos.x <= crop.x + crop.w && pos.y >= crop.y && pos.y <= crop.y + crop.h) return 'move';
    return null;
  }

  function updateCursor(pos) {
    const handle = isDragging ? dragHandle : getHandleAt(pos);
    switch (handle) {
      case 'nw':
      case 'se':
        mainCanvas.style.cursor = 'nwse-resize';
        break;
      case 'ne':
      case 'sw':
        mainCanvas.style.cursor = 'nesw-resize';
        break;
      case 'n':
      case 's':
        mainCanvas.style.cursor = 'ns-resize';
        break;
      case 'w':
      case 'e':
        mainCanvas.style.cursor = 'ew-resize';
        break;
      case 'move':
        mainCanvas.style.cursor = 'move';
        break;
      default:
        mainCanvas.style.cursor = activeRatio === 'free' ? 'crosshair' : 'default';
        break;
    }
  }

  const startDrag = (e) => {
    if (!currentImage) return;
    const pos = getCanvasCoords(e);
    dragStart = pos;
    cropStart = { ...crop };

    const detected = getHandleAt(pos);
    if (detected) {
      dragHandle = detected;
    } else if (activeRatio === 'free') {
      // Freehand selection drag
      dragHandle = 'create';
    } else {
      dragHandle = null;
    }

    if (dragHandle) {
      isDragging = true;
      updateCursor(pos);
      if (e.cancelable) e.preventDefault();
    }
  };

  const onDrag = (e) => {
    if (!currentImage) return;
    const pos = getCanvasCoords(e);
    updateCursor(pos);

    if (!isDragging || !dragHandle) return;
    const dx = pos.x - dragStart.x;
    const dy = pos.y - dragStart.y;
    const cw = mainCanvas.width;
    const ch = mainCanvas.height;
    const minSize = 30;

    if (dragHandle === 'move') {
      crop.x = Math.max(0, Math.min(cw - crop.w, cropStart.x + dx));
      crop.y = Math.max(0, Math.min(ch - crop.h, cropStart.y + dy));
    } else if (dragHandle === 'create') {
      const x1 = Math.max(0, Math.min(cw, dragStart.x));
      const y1 = Math.max(0, Math.min(ch, dragStart.y));
      const x2 = Math.max(0, Math.min(cw, pos.x));
      const y2 = Math.max(0, Math.min(ch, pos.y));
      crop.x = Math.min(x1, x2);
      crop.y = Math.min(y1, y2);
      crop.w = Math.max(minSize, Math.abs(x2 - x1));
      crop.h = Math.max(minSize, Math.abs(y2 - y1));
    } else if (activeRatio === 'free') {
      // Freehand resizing across all corners and edges
      if (dragHandle === 'se') {
        crop.w = Math.max(minSize, Math.min(cw - cropStart.x, cropStart.w + dx));
        crop.h = Math.max(minSize, Math.min(ch - cropStart.y, cropStart.h + dy));
      } else if (dragHandle === 'sw') {
        const newX = Math.max(0, Math.min(cropStart.x + cropStart.w - minSize, cropStart.x + dx));
        crop.w = cropStart.w + (cropStart.x - newX);
        crop.x = newX;
        crop.h = Math.max(minSize, Math.min(ch - cropStart.y, cropStart.h + dy));
      } else if (dragHandle === 'ne') {
        const newY = Math.max(0, Math.min(cropStart.y + cropStart.h - minSize, cropStart.y + dy));
        crop.h = cropStart.h + (cropStart.y - newY);
        crop.y = newY;
        crop.w = Math.max(minSize, Math.min(cw - cropStart.x, cropStart.w + dx));
      } else if (dragHandle === 'nw') {
        const newX = Math.max(0, Math.min(cropStart.x + cropStart.w - minSize, cropStart.x + dx));
        const newY = Math.max(0, Math.min(cropStart.y + cropStart.h - minSize, cropStart.y + dy));
        crop.w = cropStart.w + (cropStart.x - newX);
        crop.h = cropStart.h + (cropStart.y - newY);
        crop.x = newX;
        crop.y = newY;
      } else if (dragHandle === 'e') {
        crop.w = Math.max(minSize, Math.min(cw - cropStart.x, cropStart.w + dx));
      } else if (dragHandle === 'w') {
        const newX = Math.max(0, Math.min(cropStart.x + cropStart.w - minSize, cropStart.x + dx));
        crop.w = cropStart.w + (cropStart.x - newX);
        crop.x = newX;
      } else if (dragHandle === 's') {
        crop.h = Math.max(minSize, Math.min(ch - cropStart.y, cropStart.h + dy));
      } else if (dragHandle === 'n') {
        const newY = Math.max(0, Math.min(cropStart.y + cropStart.h - minSize, cropStart.y + dy));
        crop.h = cropStart.h + (cropStart.y - newY);
        crop.y = newY;
      }
    } else {
      // Fixed aspect ratio resizing anchored to opposite corner
      const parts = activeRatio.split(':').map(Number);
      const ratio = parts[0] / parts[1];

      if (dragHandle === 'se' || dragHandle === 'e' || dragHandle === 's') {
        const maxW = Math.min(cw - cropStart.x, (ch - cropStart.y) * ratio);
        crop.w = Math.max(minSize, Math.min(maxW, cropStart.w + dx));
        crop.h = Math.round(crop.w / ratio);
      } else if (dragHandle === 'sw' || dragHandle === 'w') {
        const maxW = Math.min(cropStart.x + cropStart.w, (ch - cropStart.y) * ratio);
        crop.w = Math.max(minSize, Math.min(maxW, cropStart.w - dx));
        crop.h = Math.round(crop.w / ratio);
        crop.x = cropStart.x + cropStart.w - crop.w;
      } else if (dragHandle === 'ne' || dragHandle === 'n') {
        const maxW = Math.min(cw - cropStart.x, (cropStart.y + cropStart.h) * ratio);
        crop.w = Math.max(minSize, Math.min(maxW, cropStart.w + dx));
        crop.h = Math.round(crop.w / ratio);
        crop.y = cropStart.y + cropStart.h - crop.h;
      } else if (dragHandle === 'nw') {
        const maxW = Math.min(cropStart.x + cropStart.w, (cropStart.y + cropStart.h) * ratio);
        crop.w = Math.max(minSize, Math.min(maxW, cropStart.w - dx));
        crop.h = Math.round(crop.w / ratio);
        crop.x = cropStart.x + cropStart.w - crop.w;
        crop.y = cropStart.y + cropStart.h - crop.h;
      }
    }

    renderAll();
    if (e.cancelable) e.preventDefault();
  };

  const endDrag = () => {
    isDragging = false;
    dragHandle = null;
    mainCanvas.style.cursor = 'default';
  };

  mainCanvas.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', endDrag);

  mainCanvas.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', onDrag, { passive: false });
  window.addEventListener('touchend', endDrag);
});
