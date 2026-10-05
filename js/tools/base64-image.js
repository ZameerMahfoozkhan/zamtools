/**
 * ZamTools - Base64 to Image Decoder Logic
 * Decodes Base64 data URLs or raw strings into downloadable images
 */

document.addEventListener('DOMContentLoaded', () => {
  const base64Input = document.getElementById('base64Input');
  const decodeBtn = document.getElementById('decodeBtn');
  const clearBtn = document.getElementById('clearBtn');
  const previewImg = document.getElementById('previewImg');
  const downloadBtn = document.getElementById('downloadBtn');
  const decodedResult = document.getElementById('decodedResult');
  const detectedTypeEl = document.getElementById('detectedType');
  const imageDimsEl = document.getElementById('imageDims');
  const approxSizeEl = document.getElementById('approxSize');

  decodeBtn.addEventListener('click', processBase64);

  clearBtn.addEventListener('click', () => {
    base64Input.value = '';
    decodedResult.style.display = 'none';
  });

  function processBase64() {
    let raw = base64Input.value.trim();
    if (!raw) {
      window.showToast('Please paste a Base64 string or Data URL.', 'error');
      return;
    }

    // Auto-detect if raw base64 or complete data URL
    let dataUrl = raw;
    let detectedMime = 'image/png';

    if (raw.startsWith('data:image/')) {
      const match = raw.match(/^data:(image\/[a-zA-Z+]+);base64,/);
      if (match) {
        detectedMime = match[1];
      }
    } else {
      // Guess mime by base64 magic bytes
      if (raw.startsWith('/9j/')) detectedMime = 'image/jpeg';
      else if (raw.startsWith('iVBORw0KGgo')) detectedMime = 'image/png';
      else if (raw.startsWith('UklGR')) detectedMime = 'image/webp';
      else if (raw.startsWith('R0lGOD')) detectedMime = 'image/gif';
      else if (raw.startsWith('PHN2Zw')) detectedMime = 'image/svg+xml';

      dataUrl = `data:${detectedMime};base64,${raw}`;
    }

    const testImg = new Image();
    testImg.onload = () => {
      decodedResult.style.display = 'block';
      previewImg.src = dataUrl;

      const ext = detectedMime.split('/')[1].replace('+xml', '');
      detectedTypeEl.textContent = ext.toUpperCase();
      imageDimsEl.textContent = `${testImg.naturalWidth} × ${testImg.naturalHeight} px`;

      // Approximate bytes from Base64 length: (len * 3) / 4 - padding
      const approxBytes = Math.round((raw.length * 3) / 4);
      approxSizeEl.textContent = window.formatBytes(approxBytes);

      downloadBtn.onclick = () => {
        window.downloadDataUrl(dataUrl, `zamtools-decoded.${ext}`);
      };

      window.showToast('Base64 decoded successfully!', 'success');
    };

    testImg.onerror = () => {
      window.showToast('Invalid Base64 image data. Please ensure it is not truncated.', 'error');
    };

    testImg.src = dataUrl;
  }
});
