/**
 * ZamTools - Meme Generator Logic
 * Interactive canvas meme editor with moveable text layers, stroke outlines, and PNG export
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const canvas = document.getElementById('memeCanvas');
  const topTextInput = document.getElementById('topTextInput');
  const bottomTextInput = document.getElementById('bottomTextInput');
  const fontSizeSlider = document.getElementById('fontSizeSlider');
  const fontSizeVal = document.getElementById('fontSizeVal');
  const fontSelect = document.getElementById('fontSelect');
  const textColorPicker = document.getElementById('textColorPicker');
  const outlineColorPicker = document.getElementById('outlineColorPicker');
  const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
  const addTextBtn = document.getElementById('addTextBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');

  let currentImage = null;
  let currentFile = null;

  // Text layers state
  let textLayers = [
    { text: 'TOP TEXT', xRatio: 0.5, yRatio: 0.12, id: 'top' },
    { text: 'BOTTOM TEXT', xRatio: 0.5, yRatio: 0.92, id: 'bottom' }
  ];

  let selectedLayerIdx = 0;
  let isDraggingText = false;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      renderMeme();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Text input listeners
  topTextInput.addEventListener('input', () => {
    textLayers[0].text = topTextInput.value;
    renderMeme();
  });

  bottomTextInput.addEventListener('input', () => {
    textLayers[1].text = bottomTextInput.value;
    renderMeme();
  });

  window.bindRangeSlider(fontSizeSlider, fontSizeVal, v => `${v}px`);
  fontSizeSlider.addEventListener('input', renderMeme);

  fontSelect.addEventListener('change', renderMeme);
  textColorPicker.addEventListener('input', renderMeme);
  outlineColorPicker.addEventListener('input', renderMeme);
  uppercaseCheckbox.addEventListener('change', renderMeme);

  addTextBtn.addEventListener('click', () => {
    textLayers.push({
      text: 'EXTRA TEXT',
      xRatio: 0.5,
      yRatio: 0.5,
      id: 'custom_' + Date.now()
    });
    renderMeme();
    window.showToast('Added new text box. Drag on image to reposition.', 'info');
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      textLayers = [
        { text: 'TOP TEXT', xRatio: 0.5, yRatio: 0.12, id: 'top' },
        { text: 'BOTTOM TEXT', xRatio: 0.5, yRatio: 0.92, id: 'bottom' }
      ];
      topTextInput.value = 'TOP TEXT';
      bottomTextInput.value = 'BOTTOM TEXT';
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  function renderMeme() {
    if (!currentImage) return;

    // Set resolution maintaining aspect ratio (max 800px width for editor)
    const maxW = 760;
    const scale = Math.min(1, maxW / currentImage.naturalWidth);
    canvas.width = Math.round(currentImage.naturalWidth * scale);
    canvas.height = Math.round(currentImage.naturalHeight * scale);

    const ctx = canvas.getContext('2d');
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

    const baseSize = parseInt(fontSizeSlider.value, 10);
    const scaledFontSize = Math.round(baseSize * scale * (canvas.width / 500));
    const fontFam = fontSelect.value;
    const textColor = textColorPicker.value;
    const outlineColor = outlineColorPicker.value;
    const isUpper = uppercaseCheckbox.checked;

    ctx.font = `900 ${scaledFontSize}px ${fontFam}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = textColor;
    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = Math.max(3, Math.round(scaledFontSize / 8));
    ctx.lineJoin = 'round';

    textLayers.forEach(layer => {
      if (!layer.text) return;
      const textToDraw = isUpper ? layer.text.toUpperCase() : layer.text;
      const posX = canvas.width * layer.xRatio;
      const posY = canvas.height * layer.yRatio;

      ctx.strokeText(textToDraw, posX, posY);
      ctx.fillText(textToDraw, posX, posY);
    });

    downloadBtn.onclick = async () => {
      // High-res download render
      const hiRes = document.createElement('canvas');
      hiRes.width = currentImage.naturalWidth;
      hiRes.height = currentImage.naturalHeight;
      const hCtx = hiRes.getContext('2d');
      hCtx.drawImage(currentImage, 0, 0);

      const hiResFont = Math.round(baseSize * (hiRes.width / 500));
      hCtx.font = `900 ${hiResFont}px ${fontFam}`;
      hCtx.textAlign = 'center';
      hCtx.textBaseline = 'middle';
      hCtx.fillStyle = textColor;
      hCtx.strokeStyle = outlineColor;
      hCtx.lineWidth = Math.max(4, Math.round(hiResFont / 8));
      hCtx.lineJoin = 'round';

      textLayers.forEach(layer => {
        if (!layer.text) return;
        const textToDraw = isUpper ? layer.text.toUpperCase() : layer.text;
        hCtx.strokeText(textToDraw, hiRes.width * layer.xRatio, hiRes.height * layer.yRatio);
        hCtx.fillText(textToDraw, hiRes.width * layer.xRatio, hiRes.height * layer.yRatio);
      });

      const blob = await window.canvasToBlob(hiRes, 'image/png');
      const filename = window.formatDownloadFilename(currentFile.name, 'png', '-meme');
      window.downloadBlob(blob, filename);
    };
  }

  // Drag text positions
  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    // Find closest layer
    let minD = Infinity;
    textLayers.forEach((layer, idx) => {
      const d = Math.hypot(layer.xRatio - clickX, layer.yRatio - clickY);
      if (d < 0.15 && d < minD) {
        minD = d;
        selectedLayerIdx = idx;
        isDraggingText = true;
      }
    });
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingText || !currentImage) return;
    const rect = canvas.getBoundingClientRect();
    const xRatio = Math.max(0.05, Math.min(0.95, (e.clientX - rect.left) / rect.width));
    const yRatio = Math.max(0.05, Math.min(0.95, (e.clientY - rect.top) / rect.height));

    textLayers[selectedLayerIdx].xRatio = xRatio;
    textLayers[selectedLayerIdx].yRatio = yRatio;
    renderMeme();
  });

  window.addEventListener('mouseup', () => {
    isDraggingText = false;
  });
});
