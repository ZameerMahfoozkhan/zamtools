/**
 * ZamTools - Grayscale Image Converter
 * Canvas pixel luminance algorithm (0.299R + 0.587G + 0.114B) with Before/After split compare
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const toggleModeBtn = document.getElementById('toggleModeBtn');
  const modeStatusEl = document.getElementById('modeStatus');

  let currentImage = null;
  let currentFile = null;
  let isGrayscale = true;
  let grayscaleBlob = null;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;
      isGrayscale = true;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      processGrayscale();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
      isGrayscale = !isGrayscale;
      modeStatusEl.textContent = isGrayscale ? 'Grayscale' : 'Original Color';
      renderView();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function processGrayscale() {
    if (!currentImage) return;

    previewCanvas.width = currentImage.naturalWidth;
    previewCanvas.height = currentImage.naturalHeight;
    const ctx = previewCanvas.getContext('2d');
    ctx.drawImage(currentImage, 0, 0);

    const imgData = ctx.getImageData(0, 0, previewCanvas.width, previewCanvas.height);
    const d = imgData.data;

    // Fast luminance calculation
    for (let i = 0; i < d.length; i += 4) {
      const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      d[i] = gray;
      d[i + 1] = gray;
      d[i + 2] = gray;
    }
    ctx.putImageData(imgData, 0, 0);

    grayscaleBlob = await window.canvasToBlob(previewCanvas, 'image/png');

    downloadBtn.onclick = () => {
      const outName = window.formatDownloadFilename(currentFile.name, 'png', '-grayscale');
      window.downloadBlob(grayscaleBlob, outName);
    };
  }

  function renderView() {
    if (!currentImage) return;
    const ctx = previewCanvas.getContext('2d');
    if (!isGrayscale) {
      ctx.drawImage(currentImage, 0, 0);
    } else {
      processGrayscale();
    }
  }
});
