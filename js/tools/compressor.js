/**
 * ZamTools - Image Compressor Logic
 * Fully client-side image compression with quality controls and side-by-side comparison
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityVal = document.getElementById('qualityVal');
  const formatSelect = document.getElementById('formatSelect');
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadAllBtn = document.getElementById('downloadAllBtn');
  
  const originalSizeEl = document.getElementById('originalSize');
  const compressedSizeEl = document.getElementById('compressedSize');
  const savedPercentEl = document.getElementById('savedPercent');
  const originalPreviewImg = document.getElementById('originalPreviewImg');
  const compressedPreviewImg = document.getElementById('compressedPreviewImg');
  const fileInfoName = document.getElementById('fileInfoName');

  let loadedFiles = [];
  let currentFileIndex = 0;
  let compressedBlobs = [];

  // Setup Dropzone
  window.setupDropZone(dropzone, fileInput, (files) => {
    const list = Array.isArray(files) ? files : [files];
    const imageFiles = list.filter(f => f.type.startsWith('image/'));
    if (imageFiles.length === 0) {
      window.showToast('Please select valid JPG, PNG, or WebP images.', 'error');
      return;
    }
    loadedFiles = imageFiles;
    currentFileIndex = 0;
    compressedBlobs = new Array(loadedFiles.length);
    loadActiveImage();
  }, { multiple: true });

  // Slider change
  if (qualitySlider && qualityVal) {
    window.bindRangeSlider(qualitySlider, qualityVal, val => `${val}%`);
    qualitySlider.addEventListener('change', () => compressCurrentImage());
  }

  if (formatSelect) {
    formatSelect.addEventListener('change', () => compressCurrentImage());
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      loadedFiles = [];
      compressedBlobs = [];
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }

  async function loadActiveImage() {
    if (loadedFiles.length === 0) return;
    const current = loadedFiles[currentFileIndex];
    try {
      const data = await window.loadImageFromFile(current);
      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      
      fileInfoName.textContent = `${current.name} (${window.formatBytes(current.size)})`;
      originalSizeEl.textContent = window.formatBytes(current.size);
      originalPreviewImg.src = data.objectUrl;

      if (downloadAllBtn) {
        downloadAllBtn.style.display = loadedFiles.length > 1 ? 'inline-flex' : 'none';
      }

      await compressCurrentImage();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  }

  async function compressCurrentImage() {
    if (loadedFiles.length === 0) return;
    const current = loadedFiles[currentFileIndex];
    const quality = parseInt(qualitySlider.value, 10) / 100;
    let targetFormat = formatSelect.value;
    
    if (targetFormat === 'original') {
      targetFormat = current.type === 'image/png' ? 'image/png' : 'image/jpeg';
    }

    try {
      const data = await window.loadImageFromFile(current);
      const canvas = document.createElement('canvas');
      canvas.width = data.width;
      canvas.height = data.height;
      const ctx = canvas.getContext('2d');

      // For JPEG without transparency, paint white background
      if (targetFormat === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(data.img, 0, 0);

      const blob = await window.canvasToBlob(canvas, targetFormat, quality);
      compressedBlobs[currentFileIndex] = blob;

      const compUrl = URL.createObjectURL(blob);
      compressedPreviewImg.src = compUrl;
      compressedSizeEl.textContent = window.formatBytes(blob.size);

      const saved = window.calculatePercentageSaved(current.size, blob.size);
      savedPercentEl.textContent = saved > 0 ? `-${saved}%` : '0%';

      // Update download single button
      downloadBtn.onclick = () => {
        let ext = 'jpg';
        if (targetFormat === 'image/png') ext = 'png';
        if (targetFormat === 'image/webp') ext = 'webp';
        const outName = window.formatDownloadFilename(current.name, ext, '-compressed');
        window.downloadBlob(blob, outName);
      };
    } catch (err) {
      window.showToast('Compression error: ' + err.message, 'error');
    }
  }

  // Batch download handler
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', async () => {
      window.showToast(`Downloading all ${loadedFiles.length} images...`, 'info');
      for (let i = 0; i < loadedFiles.length; i++) {
        if (!compressedBlobs[i]) {
          currentFileIndex = i;
          await compressCurrentImage();
        }
        const blob = compressedBlobs[i];
        let ext = 'jpg';
        if (formatSelect.value === 'image/png') ext = 'png';
        if (formatSelect.value === 'image/webp') ext = 'webp';
        const outName = window.formatDownloadFilename(loadedFiles[i].name, ext, '-compressed');
        window.downloadBlob(blob, outName);
        await new Promise(r => setTimeout(r, 400));
      }
    });
  }
});
