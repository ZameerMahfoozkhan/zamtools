/**
 * ZamTools - Social Media Image Resizer Logic
 * Standardized dimension presets for major social platforms with smart Fit & Fill modes
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const presetSelect = document.getElementById('presetSelect');
  const modeSelect = document.getElementById('modeSelect'); // 'fill' or 'fit'
  const bgColorPicker = document.getElementById('bgColorPicker');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const currentDimsEl = document.getElementById('currentDims');

  // Maintainable social media preset configurations
  const SOCIAL_PRESETS = {
    'ig-square': { name: 'Instagram Square', width: 1080, height: 1080 },
    'ig-portrait': { name: 'Instagram Portrait', width: 1080, height: 1350 },
    'ig-story': { name: 'Instagram Story / Reel', width: 1080, height: 1920 },
    'fb-post': { name: 'Facebook Post', width: 1200, height: 630 },
    'fb-cover': { name: 'Facebook Cover', width: 820, height: 312 },
    'yt-thumb': { name: 'YouTube Thumbnail', width: 1280, height: 720 },
    'li-post': { name: 'LinkedIn Post', width: 1200, height: 627 },
    'x-post': { name: 'X (Twitter) Post', width: 1200, height: 675 }
  };

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

      renderSocialCanvas();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  presetSelect.addEventListener('change', renderSocialCanvas);
  modeSelect.addEventListener('change', renderSocialCanvas);
  bgColorPicker.addEventListener('input', renderSocialCanvas);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentImage = null;
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  function renderSocialCanvas() {
    if (!currentImage) return;

    const presetKey = presetSelect.value;
    const preset = SOCIAL_PRESETS[presetKey] || SOCIAL_PRESETS['ig-square'];
    const targetW = preset.width;
    const targetH = preset.height;
    const mode = modeSelect.value;
    const bgColor = bgColorPicker.value;

    currentDimsEl.textContent = `${targetW} × ${targetH} px (${preset.name})`;

    previewCanvas.width = targetW;
    previewCanvas.height = targetH;
    const ctx = previewCanvas.getContext('2d');

    // Background fill
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, targetW, targetH);

    const srcW = currentImage.naturalWidth;
    const srcH = currentImage.naturalHeight;

    if (mode === 'fit') {
      // Contain within canvas maintaining aspect ratio
      const ratio = Math.min(targetW / srcW, targetH / srcH);
      const renderW = srcW * ratio;
      const renderH = srcH * ratio;
      const x = (targetW - renderW) / 2;
      const y = (targetH - renderH) / 2;
      ctx.drawImage(currentImage, x, y, renderW, renderH);
    } else {
      // Cover (crop center to fill)
      const ratio = Math.max(targetW / srcW, targetH / srcH);
      const renderW = srcW * ratio;
      const renderH = srcH * ratio;
      const x = (targetW - renderW) / 2;
      const y = (targetH - renderH) / 2;
      ctx.drawImage(currentImage, x, y, renderW, renderH);
    }

    downloadBtn.onclick = async () => {
      const blob = await window.canvasToBlob(previewCanvas, 'image/jpeg', 0.92);
      const filename = window.formatDownloadFilename(currentFile.name, 'jpg', `-${presetKey}`);
      window.downloadBlob(blob, filename);
    };
  }
});
