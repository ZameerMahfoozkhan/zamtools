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
    if (!loupe || !loupeCanvas) return;
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
    samplePixel(coords.x, coords.y, false);
    updateLoupe(coords.x, coords.y, coords.clientX, coords.clientY);
  });

  canvas.addEventListener('mouseleave', () => {
    if (loupe) loupe.style.display = 'none';
  });

  canvas.addEventListener('click', (e) => {
    const coords = getPixelCoords(e);
    samplePixel(coords.x, coords.y, true);
    if (window.showToast) window.showToast(`Selected ${hexValInput.value}`, 'info', 1500);
  });
});
