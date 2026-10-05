/**
 * ZamTools - Blur & Sharpen Image Logic
 * Hardware blur + 3x3 convolution unsharp masking kernel algorithm
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const blurSlider = document.getElementById('blurSlider');
  const blurVal = document.getElementById('blurVal');
  const sharpenSlider = document.getElementById('sharpenSlider');
  const sharpenVal = document.getElementById('sharpenVal');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');

  let currentImage = null;
  let currentFile = null;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      blurSlider.value = 0;
      sharpenSlider.value = 0;
      blurVal.textContent = '0 px';
      sharpenVal.textContent = '0%';

      applyEffects();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  window.bindRangeSlider(blurSlider, blurVal, v => `${v} px`);
  window.bindRangeSlider(sharpenSlider, sharpenVal, v => `${v}%`);

  blurSlider.addEventListener('input', applyEffects);
  sharpenSlider.addEventListener('input', applyEffects);

  resetFiltersBtn.addEventListener('click', () => {
    blurSlider.value = 0;
    sharpenSlider.value = 0;
    blurVal.textContent = '0 px';
    sharpenVal.textContent = '0%';
    applyEffects();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  function applyEffects() {
    if (!currentImage) return;

    const blurPx = parseInt(blurSlider.value, 10);
    const sharpenPct = parseInt(sharpenSlider.value, 10) / 100;

    previewCanvas.width = currentImage.naturalWidth;
    previewCanvas.height = currentImage.naturalHeight;
    const ctx = previewCanvas.getContext('2d');

    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    if (blurPx > 0) {
      ctx.filter = `blur(${blurPx}px)`;
    } else {
      ctx.filter = 'none';
    }

    ctx.drawImage(currentImage, 0, 0);

    // Apply sharpen convolution if active
    if (sharpenPct > 0) {
      ctx.filter = 'none';
      window.applySharpenKernel(ctx, previewCanvas.width, previewCanvas.height, sharpenPct);
    }

    downloadBtn.onclick = async () => {
      const blob = await window.canvasToBlob(previewCanvas, 'image/png');
      const filename = window.formatDownloadFilename(currentFile.name, 'png', '-filtered');
      window.downloadBlob(blob, filename);
    };
  }
});
