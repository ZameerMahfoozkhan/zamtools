/**
 * ZamTools - Compress Image to Target Size
 * Iterative binary search compression algorithm to achieve target KB/MB
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const presetTargetBtns = document.querySelectorAll('.target-preset-btn');
  const customTargetInput = document.getElementById('customTargetInput');
  const formatSelect = document.getElementById('formatSelect');
  const compressBtn = document.getElementById('compressBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  const originalSizeEl = document.getElementById('originalSize');
  const targetSizeDisplayEl = document.getElementById('targetSizeDisplay');
  const achievableSizeEl = document.getElementById('achievableSize');
  const reductionPercentEl = document.getElementById('reductionPercent');
  const previewCanvas = document.getElementById('previewCanvas');
  const fileInfoName = document.getElementById('fileInfoName');
  const processingNotice = document.getElementById('processingNotice');

  let currentImage = null;
  let currentFile = null;
  let targetBytes = 100 * 1024; // 100 KB default
  let resultBlob = null;

  // Setup Dropzone
  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      originalSizeEl.textContent = window.formatBytes(file.size);

      runIterativeCompression();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  // Target presets
  presetTargetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetTargetBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const kb = parseInt(btn.dataset.kb, 10);
      targetBytes = kb * 1024;
      customTargetInput.value = kb;
      runIterativeCompression();
    });
  });

  customTargetInput.addEventListener('change', () => {
    const kb = parseInt(customTargetInput.value, 10);
    if (kb > 0) {
      targetBytes = kb * 1024;
      presetTargetBtns.forEach(b => b.classList.remove('is-active'));
      runIterativeCompression();
    }
  });

  formatSelect.addEventListener('change', runIterativeCompression);
  compressBtn.addEventListener('click', runIterativeCompression);

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      resultBlob = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  /**
   * Iterative binary search compression
   */
  async function runIterativeCompression() {
    if (!currentImage || !currentFile) return;

    targetSizeDisplayEl.textContent = window.formatBytes(targetBytes);
    processingNotice.style.display = 'block';

    const fmt = formatSelect.value;
    let minQuality = 0.05;
    let maxQuality = 0.98;
    let bestBlob = null;
    let bestDiff = Infinity;
    let bestWidth = currentImage.naturalWidth;
    let bestHeight = currentImage.naturalHeight;

    const canvas = document.createElement('canvas');
    canvas.width = bestWidth;
    canvas.height = bestHeight;
    const ctx = canvas.getContext('2d');

    // Fill white background for JPEG
    if (fmt === 'image/jpeg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(currentImage, 0, 0, bestWidth, bestHeight);

    // Phase 1: Binary search on quality (up to 7 iterations)
    for (let iter = 0; iter < 7; iter++) {
      const q = (minQuality + maxQuality) / 2;
      const blob = await window.canvasToBlob(canvas, fmt, q);

      const diff = Math.abs(blob.size - targetBytes);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestBlob = blob;
      }

      if (blob.size > targetBytes) {
        maxQuality = q;
      } else {
        minQuality = q;
      }
    }

    // Phase 2: If lowest quality is still too large, downscale resolution progressively
    if (bestBlob && bestBlob.size > targetBytes * 1.15) {
      let scale = 0.85;
      for (let sIter = 0; sIter < 5; sIter++) {
        const sw = Math.max(100, Math.round(bestWidth * scale));
        const sh = Math.max(100, Math.round(bestHeight * scale));

        canvas.width = sw;
        canvas.height = sh;
        if (fmt === 'image/jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, sw, sh);
        }
        ctx.drawImage(currentImage, 0, 0, sw, sh);

        const blob = await window.canvasToBlob(canvas, fmt, 0.4);
        if (Math.abs(blob.size - targetBytes) < bestDiff) {
          bestDiff = Math.abs(blob.size - targetBytes);
          bestBlob = blob;
        }

        if (blob.size <= targetBytes) {
          bestBlob = blob;
          break;
        }
        scale *= 0.8;
      }
    }

    processingNotice.style.display = 'none';

    if (bestBlob) {
      resultBlob = bestBlob;
      achievableSizeEl.textContent = window.formatBytes(bestBlob.size);
      
      const saved = window.calculatePercentageSaved(currentFile.size, bestBlob.size);
      reductionPercentEl.textContent = saved > 0 ? `-${saved}%` : '0%';

      // Render to visible canvas
      const imgObj = await window.loadImageFromSrc(URL.createObjectURL(bestBlob));
      previewCanvas.width = imgObj.width;
      previewCanvas.height = imgObj.height;
      const pCtx = previewCanvas.getContext('2d');
      pCtx.drawImage(imgObj, 0, 0);

      downloadBtn.onclick = () => {
        let ext = 'jpg';
        if (fmt === 'image/png') ext = 'png';
        if (fmt === 'image/webp') ext = 'webp';
        const targetKb = Math.round(targetBytes / 1024);
        const filename = window.formatDownloadFilename(currentFile.name, ext, `-target-${targetKb}kb`);
        window.downloadBlob(bestBlob, filename);
      };
    }
  }
});
