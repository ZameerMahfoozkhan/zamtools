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

  const freehandModeBtn = document.getElementById('freehandModeBtn');
  let resizeOverlay = document.getElementById('resizeOverlay');
  let isFreehandMode = false;

  let currentImage = null;
  let currentFile = null;
  let aspectRatio = 1;
  let resizedBlob = null;

  // Ensure resize overlay and handles exist around previewCanvas
  function ensureResizeOverlay() {
    resizeOverlay = document.getElementById('resizeOverlay');
    if (!resizeOverlay) {
      const container = previewCanvas.parentElement;
      const wrapper = document.createElement('div');
      wrapper.className = 'resize-box-wrapper';
      wrapper.id = 'resizeBoxWrapper';

      container.insertBefore(wrapper, previewCanvas);
      wrapper.appendChild(previewCanvas);

      resizeOverlay = document.createElement('div');
      resizeOverlay.className = 'resize-overlay';
      resizeOverlay.id = 'resizeOverlay';
      resizeOverlay.innerHTML = `
        <div class="resize-handle resize-handle-nw" data-handle="nw"></div>
        <div class="resize-handle resize-handle-n" data-handle="n"></div>
        <div class="resize-handle resize-handle-ne" data-handle="ne"></div>
        <div class="resize-handle resize-handle-e" data-handle="e"></div>
        <div class="resize-handle resize-handle-se" data-handle="se"></div>
        <div class="resize-handle resize-handle-s" data-handle="s"></div>
        <div class="resize-handle resize-handle-sw" data-handle="sw"></div>
        <div class="resize-handle resize-handle-w" data-handle="w"></div>
      `;
      wrapper.appendChild(resizeOverlay);
    }
    setupHandleDragging();
  }

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

      ensureResizeOverlay();
      if (resizeOverlay) resizeOverlay.style.display = 'block';

      await processResize();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Freehand Mode Toggle
  if (freehandModeBtn) {
    freehandModeBtn.addEventListener('click', () => {
      isFreehandMode = !isFreehandMode;
      if (isFreehandMode) {
        freehandModeBtn.classList.add('is-active');
        freehandModeBtn.style.backgroundColor = 'var(--primary)';
        freehandModeBtn.style.color = '#ffffff';
        lockAspect.checked = false; // Allow free unconstrained dimensions in freehand mode
        if (resizeOverlay) resizeOverlay.style.display = 'block';
        window.showToast('Freehand mode active: Drag corner or edge handles on preview.', 'info', 2500);
      } else {
        freehandModeBtn.classList.remove('is-active');
        freehandModeBtn.style.backgroundColor = '';
        freehandModeBtn.style.color = '';
        lockAspect.checked = true;
      }
    });
  }

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

  // Presets selector
  presetSelect.addEventListener('change', () => {
    const val = presetSelect.value;
    if (val === 'custom') return;
    if (val === 'freehand') {
      if (freehandModeBtn && !isFreehandMode) freehandModeBtn.click();
      return;
    }
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
      isFreehandMode = false;
      if (freehandModeBtn) {
        freehandModeBtn.classList.remove('is-active');
        freehandModeBtn.style.backgroundColor = '';
        freehandModeBtn.style.color = '';
      }
      if (resizeOverlay) resizeOverlay.style.display = 'none';
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  // Interactive freehand handle dragging on the preview canvas
  let isDraggingHandle = false;
  let activeHandle = null;
  let dragStartPos = { x: 0, y: 0 };
  let startDimensions = { w: 0, h: 0 };
  let resizeDebounceTimer = null;

  function setupHandleDragging() {
    if (!resizeOverlay) return;
    const handles = resizeOverlay.querySelectorAll('.resize-handle');

    handles.forEach(handleEl => {
      const handleType = handleEl.dataset.handle;

      const onStart = (e) => {
        if (!currentImage) return;
        isDraggingHandle = true;
        activeHandle = handleType;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        dragStartPos = { x: clientX, y: clientY };

        startDimensions = {
          w: parseInt(widthInput.value, 10) || currentImage.naturalWidth,
          h: parseInt(heightInput.value, 10) || currentImage.naturalHeight
        };

        handleEl.classList.add('is-active');
        if (e.cancelable) e.preventDefault();
      };

      handleEl.addEventListener('mousedown', onStart);
      handleEl.addEventListener('touchstart', onStart, { passive: false });
    });
  }

  const onGlobalMove = (e) => {
    if (!isDraggingHandle || !activeHandle || !currentImage) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const canvasRect = previewCanvas.getBoundingClientRect();
    if (canvasRect.width === 0 || canvasRect.height === 0) return;

    // Scale delta according to displayed vs pixel dimensions
    const scaleFactor = Math.max(0.5, startDimensions.w / canvasRect.width);
    const dx = (clientX - dragStartPos.x) * scaleFactor;
    const dy = (clientY - dragStartPos.y) * scaleFactor;

    let newW = startDimensions.w;
    let newH = startDimensions.h;

    switch (activeHandle) {
      case 'se':
        newW = startDimensions.w + dx;
        newH = startDimensions.h + dy;
        break;
      case 'sw':
        newW = startDimensions.w - dx;
        newH = startDimensions.h + dy;
        break;
      case 'ne':
        newW = startDimensions.w + dx;
        newH = startDimensions.h - dy;
        break;
      case 'nw':
        newW = startDimensions.w - dx;
        newH = startDimensions.h - dy;
        break;
      case 'e':
        newW = startDimensions.w + dx;
        break;
      case 'w':
        newW = startDimensions.w - dx;
        break;
      case 's':
        newH = startDimensions.h + dy;
        break;
      case 'n':
        newH = startDimensions.h - dy;
        break;
    }

    newW = Math.max(20, Math.min(10000, Math.round(newW)));
    newH = Math.max(20, Math.min(10000, Math.round(newH)));

    // Aspect ratio locking (unless in freehand mode without lockAspect)
    if (lockAspect.checked && aspectRatio) {
      if (['se', 'sw', 'ne', 'nw', 'e', 'w'].includes(activeHandle)) {
        newH = Math.max(20, Math.round(newW / aspectRatio));
      } else {
        newW = Math.max(20, Math.round(newH * aspectRatio));
      }
    }

    widthInput.value = newW;
    heightInput.value = newH;
    newDimsEl.textContent = `${newW} × ${newH} px`;
    presetSelect.value = 'custom';

    // Debounced real-time preview during drag
    clearTimeout(resizeDebounceTimer);
    resizeDebounceTimer = setTimeout(() => {
      renderFastPreview(newW, newH);
    }, 40);

    if (e.cancelable) e.preventDefault();
  };

  const onGlobalEnd = () => {
    if (!isDraggingHandle) return;
    isDraggingHandle = false;
    activeHandle = null;
    clearTimeout(resizeDebounceTimer);

    if (resizeOverlay) {
      const handles = resizeOverlay.querySelectorAll('.resize-handle');
      handles.forEach(h => h.classList.remove('is-active'));
    }

    processResize();
  };

  window.addEventListener('mousemove', onGlobalMove);
  window.addEventListener('mouseup', onGlobalEnd);
  window.addEventListener('touchmove', onGlobalMove, { passive: false });
  window.addEventListener('touchend', onGlobalEnd);

  function renderFastPreview(w, h) {
    if (!currentImage) return;
    previewCanvas.width = w;
    previewCanvas.height = h;
    const ctx = previewCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(currentImage, 0, 0, w, h);
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
