/**
 * ZamTools - Image Color Picker Logic
 * Interactive canvas eyedropper with zoomed loupe magnifier and history palette
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const canvas = document.getElementById('pickerCanvas');
  const canvasContainer = document.querySelector('.canvas-container');
  const loupe = document.getElementById('colorLoupe');
  const loupeCanvas = document.getElementById('loupeCanvas');
  const fileInfoName = document.getElementById('fileInfoName');

  const activeColorBox = document.getElementById('activeColorBox');
  const hexValInput = document.getElementById('hexVal');
  const rgbValInput = document.getElementById('rgbVal');
  const hslValInput = document.getElementById('hslVal');
  const copyHexBtn = document.getElementById('copyHexBtn');
  const copyRgbBtn = document.getElementById('copyRgbBtn');
  const historyList = document.getElementById('colorHistoryList');

  let currentImage = null;
  let recentColors = [];

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      canvas.width = data.width;
      canvas.height = data.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(data.img, 0, 0);

      // Sample center pixel as default initial color
      samplePixel(Math.floor(data.width / 2), Math.floor(data.height / 2));
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Copy buttons
  copyHexBtn.addEventListener('click', () => {
    window.copyToClipboard(hexValInput.value, `Copied ${hexValInput.value}`);
  });

  copyRgbBtn.addEventListener('click', () => {
    window.copyToClipboard(rgbValInput.value, `Copied ${rgbValInput.value}`);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  function getPixelCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = Math.floor((clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((clientY - rect.top) * (canvas.height / rect.height));
    return { x: Math.max(0, Math.min(canvas.width - 1, x)), y: Math.max(0, Math.min(canvas.height - 1, y)), clientX, clientY };
  }

  function samplePixel(x, y, addToHistory = false) {
    const ctx = canvas.getContext('2d');
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    const hex = window.rgbToHex(r, g, b);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hslObj = window.rgbToHsl(r, g, b);
    const hsl = `hsl(${hslObj.h}, ${hslObj.s}%, ${hslObj.l}%)`;

    activeColorBox.style.backgroundColor = hex;
    hexValInput.value = hex;
    rgbValInput.value = rgb;
    hslValInput.value = hsl;

    if (addToHistory && !recentColors.includes(hex)) {
      recentColors.unshift(hex);
      if (recentColors.length > 8) recentColors.pop();
      renderHistory();
    }
  }

  // Canvas Lock state and marker
  let isLocked = false;
  let lockedCoords = null;

  function getStatusElement() {
    let el = document.getElementById('lockStatusText');
    if (!el) {
      const texts = document.querySelectorAll('.controls-panel div');
      for (const t of texts) {
        if (t.textContent.includes('lock') || t.textContent.includes('Lock') || t.textContent.includes('bloquer') || t.textContent.includes('bloquear') || t.textContent.includes('sperren')) {
          el = t;
          el.id = 'lockStatusText';
          break;
        }
      }
    }
    return el;
  }

  function setLocked(locked, coords = null) {
    isLocked = locked;
    lockedCoords = coords;
    const statusEl = getStatusElement();

    if (isLocked && coords) {
      samplePixel(coords.x, coords.y, true);
      renderLockMarker(coords);
      if (statusEl) {
        statusEl.innerHTML = `
          <span style="color: var(--primary); display: flex; align-items: center; gap: 4px;">🔒 Locked: ${hexValInput.value}</span>
          <small style="font-size: 0.75rem; font-weight: 500; color: var(--text-subtle); display: block; cursor: pointer; text-decoration: underline;" id="unlockLink">Click to unlock</small>
        `;
        const link = document.getElementById('unlockLink');
        if (link) {
          link.addEventListener('click', (e) => {
            e.stopPropagation();
            setLocked(false);
          });
        }
      }
      if (activeColorBox) {
        activeColorBox.style.boxShadow = '0 0 0 3px var(--primary), var(--shadow-md)';
      }
    } else {
      isLocked = false;
      lockedCoords = null;
      removeLockMarker();
      if (statusEl) {
        statusEl.textContent = 'Click canvas to lock';
      }
      if (activeColorBox) {
        activeColorBox.style.boxShadow = 'var(--shadow-sm)';
      }
    }
  }

  function renderLockMarker(coords) {
    removeLockMarker();
    if (!canvasContainer) return;

    const rect = canvas.getBoundingClientRect();
    const containerRect = canvasContainer.getBoundingClientRect();

    const pin = document.createElement('div');
    pin.id = 'canvasLockMarker';
    pin.title = 'Locked Color Pixel';
    pin.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2.5px solid #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 0 2px #2563eb, 0 2px 8px rgba(0,0,0,0.5);
      pointer-events: none;
      z-index: 15;
      transform: translate(-50%, -50%);
      background: rgba(37, 99, 235, 0.25);
    `;

    const canvasLeft = rect.left - containerRect.left;
    const canvasTop = rect.top - containerRect.top;
    const displayX = canvasLeft + (coords.x / canvas.width) * rect.width;
    const displayY = canvasTop + (coords.y / canvas.height) * rect.height;

    pin.style.left = `${displayX}px`;
    pin.style.top = `${displayY}px`;
    canvasContainer.appendChild(pin);
  }

  function removeLockMarker() {
    const pin = document.getElementById('canvasLockMarker');
    if (pin) pin.remove();
  }

  if (activeColorBox) {
    activeColorBox.style.cursor = 'pointer';
    activeColorBox.title = 'Click to lock or unlock this color';
    activeColorBox.addEventListener('click', () => {
      setLocked(!isLocked, isLocked ? null : (lockedCoords || { x: Math.floor(canvas.width / 2), y: Math.floor(canvas.height / 2) }));
    });
  }

  function renderHistory() {
    historyList.innerHTML = '';
    recentColors.forEach(color => {
      const swatch = document.createElement('button');
      swatch.className = 'history-swatch';
      swatch.style.backgroundColor = color;
      swatch.title = color;
      swatch.setAttribute('aria-label', `Color ${color}`);
      swatch.addEventListener('click', () => {
        window.copyToClipboard(color, `Copied ${color}`);
        activeColorBox.style.backgroundColor = color;
        hexValInput.value = color;
      });
      historyList.appendChild(swatch);
    });
  }

  // Loupe rendering
  function updateLoupe(x, y, mouseX, mouseY) {
    if (!loupe || !loupeCanvas || !canvasContainer) return;
    loupe.style.display = 'block';

    const containerRect = canvasContainer.getBoundingClientRect();
    loupe.style.left = `${mouseX - containerRect.left}px`;
    loupe.style.top = `${mouseY - containerRect.top}px`;

    const lCtx = loupeCanvas.getContext('2d');
    loupeCanvas.width = 15;
    loupeCanvas.height = 15;
    lCtx.imageSmoothingEnabled = false;

    lCtx.drawImage(
      canvas,
      x - 7, y - 7, 15, 15,
      0, 0, 15, 15
    );
  }

  canvas.addEventListener('mousemove', (e) => {
    const coords = getPixelCoords(e);
    updateLoupe(coords.x, coords.y, coords.clientX, coords.clientY);

    // If canvas lock is active, do not overwrite the locked color on hover
    if (isLocked) return;

    samplePixel(coords.x, coords.y, false);
  });

  canvas.addEventListener('mouseleave', () => {
    if (loupe) loupe.style.display = 'none';
  });

  // Click to lock or unlock
  canvas.addEventListener('click', (e) => {
    const coords = getPixelCoords(e);
    if (isLocked && lockedCoords && Math.abs(coords.x - lockedCoords.x) <= 4 && Math.abs(coords.y - lockedCoords.y) <= 4) {
      // Clicked on the locked spot again -> unlock
      setLocked(false);
      if (window.showToast) window.showToast('Unlocked canvas sampling', 'info', 1500);
    } else {
      // Lock on clicked pixel
      setLocked(true, coords);
      if (window.showToast) window.showToast(`Locked ${hexValInput.value}`, 'success', 1500);
    }
  });

  // Touch support for mobile devices
  canvas.addEventListener('touchstart', (e) => {
    const coords = getPixelCoords(e);
    setLocked(true, coords);
    if (window.showToast) window.showToast(`Locked ${hexValInput.value}`, 'success', 1500);
  }, { passive: true });
});
