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

  // Container for dynamic extra text boxes
  function getExtraTextsContainer() {
    let container = document.getElementById('extraTextsList');
    if (!container && addTextBtn) {
      container = document.createElement('div');
      container.id = 'extraTextsList';
      container.style.cssText = 'display: flex; flex-direction: column; gap: var(--space-2); margin-top: var(--space-2);';
      addTextBtn.insertAdjacentElement('afterend', container);
    }
    return container;
  }

  function renderExtraTextControls() {
    const container = getExtraTextsContainer();
    if (!container) return;
    container.innerHTML = '';

    // Extra layers start from index 2
    for (let i = 2; i < textLayers.length; i++) {
      const layer = textLayers[i];
      const layerIdx = i;

      const row = document.createElement('div');
      row.className = 'extra-text-row';
      row.dataset.layerId = layer.id;
      row.style.cssText = 'padding: 8px 10px; background: var(--bg-subtle); border: 1px solid var(--border); border-radius: var(--radius-sm); display: flex; flex-direction: column; gap: 6px;';

      const header = document.createElement('div');
      header.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';

      const title = document.createElement('span');
      title.style.cssText = 'font-size: 0.75rem; font-weight: 600; color: var(--text-subtle); text-transform: uppercase;';
      title.textContent = `Extra Text #${layerIdx - 1}`;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn btn-secondary btn-sm';
      removeBtn.style.cssText = 'padding: 1px 7px; font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.25); cursor: pointer;';
      removeBtn.textContent = '✕ Remove';
      removeBtn.title = 'Remove this text box';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        textLayers.splice(layerIdx, 1);
        if (selectedLayerIdx >= textLayers.length) selectedLayerIdx = Math.max(0, textLayers.length - 1);
        renderExtraTextControls();
        renderMeme();
      });

      header.appendChild(title);
      header.appendChild(removeBtn);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-input extra-text-input';
      input.value = layer.text;
      input.placeholder = 'Enter caption text...';
      input.addEventListener('input', () => {
        layer.text = input.value;
        renderMeme();
      });
      input.addEventListener('focus', () => {
        selectedLayerIdx = layerIdx;
        renderMeme();
      });

      row.appendChild(header);
      row.appendChild(input);
      container.appendChild(row);
    }
  }

  addTextBtn.addEventListener('click', () => {
    const count = textLayers.length - 1;
    textLayers.push({
      text: `EXTRA TEXT ${count}`,
      xRatio: 0.5,
      yRatio: Math.min(0.85, 0.35 + (count - 1) * 0.12),
      id: 'custom_' + Date.now()
    });
    selectedLayerIdx = textLayers.length - 1;
    renderExtraTextControls();
    renderMeme();
    window.showToast('Added new editable text box. Edit the text below or drag on image.', 'info', 2500);

    setTimeout(() => {
      const container = getExtraTextsContainer();
      if (container) {
        const lastInput = container.querySelector('.extra-text-row:last-child input');
        if (lastInput) {
          lastInput.focus();
          lastInput.select();
        }
      }
    }, 50);
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
      selectedLayerIdx = 0;
      renderExtraTextControls();
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

    textLayers.forEach((layer, idx) => {
      if (!layer.text) return;
      const textToDraw = isUpper ? layer.text.toUpperCase() : layer.text;
      const posX = canvas.width * layer.xRatio;
      const posY = canvas.height * layer.yRatio;

      ctx.strokeText(textToDraw, posX, posY);
      ctx.fillText(textToDraw, posX, posY);

      // If active selected layer, draw subtle selection box
      if (idx === selectedLayerIdx && isDraggingText) {
        const metrics = ctx.measureText(textToDraw);
        const textW = metrics.width + 16;
        const textH = scaledFontSize + 12;
        ctx.save();
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(posX - textW / 2, posY - textH / 2, textW, textH);
        ctx.restore();
      }
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

  // Drag text positions (mouse and touch)
  const onTextDragStart = (e) => {
    if (!currentImage) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const clickX = (clientX - rect.left) / rect.width;
    const clickY = (clientY - rect.top) / rect.height;

    // Find closest layer
    let minD = Infinity;
    let foundIdx = -1;
    textLayers.forEach((layer, idx) => {
      const d = Math.hypot(layer.xRatio - clickX, layer.yRatio - clickY);
      if (d < 0.18 && d < minD) {
        minD = d;
        foundIdx = idx;
      }
    });

    if (foundIdx !== -1) {
      selectedLayerIdx = foundIdx;
      isDraggingText = true;
      renderMeme();

      // Focus corresponding input
      if (foundIdx === 0 && topTextInput) topTextInput.focus();
      else if (foundIdx === 1 && bottomTextInput) bottomTextInput.focus();
      else {
        const targetId = textLayers[foundIdx].id;
        const row = document.querySelector(`.extra-text-row[data-layer-id="${targetId}"]`);
        if (row) {
          const inp = row.querySelector('input');
          if (inp) inp.focus();
        }
      }

      if (e.cancelable) e.preventDefault();
    }
  };

  const onTextDragMove = (e) => {
    if (!isDraggingText || !currentImage || selectedLayerIdx < 0 || selectedLayerIdx >= textLayers.length) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const xRatio = Math.max(0.05, Math.min(0.95, (clientX - rect.left) / rect.width));
    const yRatio = Math.max(0.05, Math.min(0.95, (clientY - rect.top) / rect.height));

    textLayers[selectedLayerIdx].xRatio = xRatio;
    textLayers[selectedLayerIdx].yRatio = yRatio;
    renderMeme();

    if (e.cancelable) e.preventDefault();
  };

  const onTextDragEnd = () => {
    if (isDraggingText) {
      isDraggingText = false;
      renderMeme();
    }
  };

  canvas.addEventListener('mousedown', onTextDragStart);
  window.addEventListener('mousemove', onTextDragMove);
  window.addEventListener('mouseup', onTextDragEnd);

  canvas.addEventListener('touchstart', onTextDragStart, { passive: false });
  window.addEventListener('touchmove', onTextDragMove, { passive: false });
  window.addEventListener('touchend', onTextDragEnd);
});
