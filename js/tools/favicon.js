/**
 * ZamTools - Favicon Generator Logic
 * Generates multi-resolution square web favicons, touch icons, and HTML link snippets
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const faviconSizesGrid = document.getElementById('faviconSizesGrid');
  const htmlSnippetCode = document.getElementById('htmlSnippetCode');
  const copyHtmlBtn = document.getElementById('copyHtmlBtn');
  const downloadAllFaviconsBtn = document.getElementById('downloadAllFaviconsBtn');
  const fileInfoName = document.getElementById('fileInfoName');

  const SIZES = [16, 32, 48, 180, 192, 512];
  let generatedBlobs = {};
  let currentFile = null;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      await generateAllFavicons(data.img);
      renderSnippet();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  async function generateAllFavicons(img) {
    faviconSizesGrid.innerHTML = '';
    generatedBlobs = {};

    // Center crop square source
    const minSide = Math.min(img.naturalWidth, img.naturalHeight);
    const sx = (img.naturalWidth - minSide) / 2;
    const sy = (img.naturalHeight - minSide) / 2;

    for (const size of SIZES) {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

      const blob = await window.canvasToBlob(canvas, 'image/png');
      const filename = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
      generatedBlobs[size] = { blob, filename };

      // Render size box in UI
      const box = document.createElement('div');
      box.className = 'favicon-size-box';
      const previewUrl = URL.createObjectURL(blob);
      const displaySize = Math.min(64, Math.max(24, size / 2));

      box.innerHTML = `
        <img src="${previewUrl}" width="${displaySize}" height="${displaySize}" alt="Favicon ${size}x${size}" style="max-width:64px; max-height:64px;">
        <span>${size} × ${size}</span>
        <button class="btn btn-secondary btn-sm" data-size="${size}">Download</button>
      `;

      box.querySelector('button').addEventListener('click', () => {
        window.downloadBlob(blob, filename);
      });

      faviconSizesGrid.appendChild(box);
    }
  }

  function renderSnippet() {
    const snippet = `<!-- ZamTools Generated Favicon Links -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`;

    htmlSnippetCode.textContent = snippet;
  }

  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener('click', () => {
      window.copyToClipboard(htmlSnippetCode.textContent, 'HTML tags copied to clipboard!');
    });
  }

  if (downloadAllFaviconsBtn) {
    downloadAllFaviconsBtn.addEventListener('click', async () => {
      window.showToast('Downloading all favicon sizes...', 'info');
      for (const size of SIZES) {
        if (generatedBlobs[size]) {
          window.downloadBlob(generatedBlobs[size].blob, generatedBlobs[size].filename);
          await new Promise(r => setTimeout(r, 300));
        }
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      generatedBlobs = {};
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
    });
  }
});
