/**
 * ZamTools - Color Palette Generator Logic
 * Analyzes image pixel distributions, extracts dominant clusters, and exports palette cards
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const paletteGrid = document.getElementById('paletteGrid');
  const exportPaletteBtn = document.getElementById('exportPaletteBtn');
  const regenerateBtn = document.getElementById('regenerateBtn');
  const sourceImagePreview = document.getElementById('sourceImagePreview');
  const fileInfoName = document.getElementById('fileInfoName');

  let currentImage = null;
  let currentFile = null;
  let extractedColors = [];

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      sourceImagePreview.src = data.objectUrl;

      generatePalette();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  if (regenerateBtn) {
    regenerateBtn.addEventListener('click', generatePalette);
  }

  if (exportPaletteBtn) {
    exportPaletteBtn.addEventListener('click', exportPaletteAsPng);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      extractedColors = [];
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  function generatePalette() {
    if (!currentImage) return;

    // Sample pixels down to a 80x80 thumbnail for fast analysis
    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = 80;
    sampleCanvas.height = 80;
    const ctx = sampleCanvas.getContext('2d');
    ctx.drawImage(currentImage, 0, 0, 80, 80);

    const imgData = ctx.getImageData(0, 0, 80, 80).data;
    const colorBuckets = {};

    // Quantize into 16-step bins
    for (let i = 0; i < imgData.length; i += 4) {
      const r = Math.round(imgData[i] / 24) * 24;
      const g = Math.round(imgData[i + 1] / 24) * 24;
      const b = Math.round(imgData[i + 2] / 24) * 24;
      const a = imgData[i + 3];
      if (a < 128) continue; // Skip transparency

      const key = `${r},${g},${b}`;
      colorBuckets[key] = (colorBuckets[key] || 0) + 1;
    }

    // Sort by frequency
    const sorted = Object.keys(colorBuckets).sort((a, b) => colorBuckets[b] - colorBuckets[a]);

    // Pick top 6 distinct colors (color distance threshold)
    const picked = [];
    for (const key of sorted) {
      const [r, g, b] = key.split(',').map(Number);
      let isDistinct = true;
      for (const p of picked) {
        const dist = Math.sqrt((r - p.r) ** 2 + (g - p.g) ** 2 + (b - p.b) ** 2);
        if (dist < 48) {
          isDistinct = false;
          break;
        }
      }
      if (isDistinct) {
        picked.push({ r, g, b, hex: window.rgbToHex(r, g, b) });
        if (picked.length >= 6) break;
      }
    }

    extractedColors = picked;
    renderPaletteUI();
  }

  function renderPaletteUI() {
    paletteGrid.innerHTML = '';
    extractedColors.forEach(item => {
      const card = document.createElement('div');
      card.className = 'palette-swatch';
      card.style.backgroundColor = item.hex;
      card.innerHTML = `
        <span class="palette-swatch-hex">${item.hex}</span>
      `;

      card.addEventListener('click', () => {
        window.copyToClipboard(item.hex, `Copied ${item.hex}`);
      });
      paletteGrid.appendChild(card);
    });
  }

  async function exportPaletteAsPng() {
    if (extractedColors.length === 0) return;

    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 360;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header text
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillText('ZamTools — Extracted Color Palette', 40, 50);

    ctx.fillStyle = '#64748b';
    ctx.font = '14px Inter, sans-serif';
    ctx.fillText(`Source: ${currentFile ? currentFile.name : 'Image'} | zamtools.online`, 40, 78);

    // Swatches
    const swatchW = (canvas.width - 80) / extractedColors.length;
    const swatchH = 180;
    const startY = 110;

    extractedColors.forEach((color, i) => {
      const x = 40 + i * swatchW;
      ctx.fillStyle = color.hex;
      ctx.fillRect(x, startY, swatchW, swatchH);

      // HEX text bar
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, startY + swatchH - 36, swatchW, 36);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(color.hex, x + swatchW / 2, startY + swatchH - 14);
    });

    const blob = await window.canvasToBlob(canvas, 'image/png');
    const filename = window.formatDownloadFilename(currentFile ? currentFile.name : 'palette', 'png', '-palette');
    window.downloadBlob(blob, filename);
  }
});
