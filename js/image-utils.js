/**
 * ZamTools Core Image Utilities
 * Fast client-side image manipulation, formatting, and canvas helpers
 */

(function () {
  /**
   * Formats raw bytes into readable string (e.g., 420 KB, 1.45 MB)
   */
  window.formatBytes = function (bytes, decimals = 1) {
    if (bytes === 0) return '0 B';
    if (!bytes || isNaN(bytes)) return '0 B';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  /**
   * Calculates reduction percentage
   */
  window.calculatePercentageSaved = function (originalBytes, newBytes) {
    if (!originalBytes || originalBytes <= 0 || !newBytes) return 0;
    if (newBytes >= originalBytes) return 0;
    const saved = ((originalBytes - newBytes) / originalBytes) * 100;
    return Math.round(saved);
  };

  /**
   * Asynchronously loads an image from a File object
   * @param {File} file 
   * @returns {Promise<{img: HTMLImageElement, file: File, width: number, height: number, size: number, type: string, name: string, objectUrl: string}>}
   */
  window.loadImageFromFile = function (file) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.match(/^image\//i)) {
        reject(new Error('Please select a valid JPG, PNG, or WebP image file.'));
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      const img = new Image();

      img.onload = () => {
        resolve({
          img: img,
          file: file,
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: file.size,
          type: file.type,
          name: file.name,
          objectUrl: objectUrl
        });
      };

      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Unable to read this image file. It might be corrupted.'));
      };

      img.src = objectUrl;
    });
  };

  /**
   * Loads an HTMLImageElement from a URL or Data URL
   */
  window.loadImageFromSrc = function (src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to load image from source.'));
      img.src = src;
    });
  };

  /**
   * Promisified canvas.toBlob wrapper with fallback
   */
  window.canvasToBlob = function (canvas, mimeType = 'image/jpeg', quality = 0.85) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          // Fallback if toBlob fails for certain mime types
          const dataUrl = canvas.toDataURL(mimeType, quality);
          const arr = dataUrl.split(',');
          const mime = arr[0].match(/:(.*?);/)[1];
          const bstr = atob(arr[1]);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          resolve(new Blob([u8arr], { type: mime }));
        }
      }, mimeType, quality);
    });
  };

  /**
   * Safe text copy to clipboard
   */
  window.copyToClipboard = function (text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (window.showToast) window.showToast(successMsg, 'success');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (window.showToast) window.showToast(successMsg, 'success');
    } catch (e) {
      if (window.showToast) window.showToast('Unable to copy text', 'error');
    }
    document.body.removeChild(textArea);
  }

  /**
   * Color converters
   */
  window.rgbToHex = function (r, g, b) {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  window.rgbToHsl = function (r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  /**
   * 3x3 Convolution Sharpen Filter
   */
  window.applySharpenKernel = function (ctx, width, height, strength = 0.5) {
    if (strength <= 0) return;
    const imgData = ctx.getImageData(0, 0, width, height);
    const src = imgData.data;
    const output = ctx.createImageData(width, height);
    const dst = output.data;

    // Kernel: 3x3 sharpen matrix
    // [  0, -k,  0 ]
    // [ -k, 1+4k, -k ]
    // [  0, -k,  0 ]
    const k = strength * 0.8;
    const center = 1 + 4 * k;

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const dstIdx = (y * width + x) * 4;

        for (let c = 0; c < 3; c++) {
          const top = ((y - 1) * width + x) * 4 + c;
          const left = (y * width + (x - 1)) * 4 + c;
          const mid = (y * width + x) * 4 + c;
          const right = (y * width + (x + 1)) * 4 + c;
          const btm = ((y + 1) * width + x) * 4 + c;

          const val = center * src[mid] - k * (src[top] + src[left] + src[right] + src[btm]);
          dst[dstIdx + c] = Math.min(255, Math.max(0, val));
        }
        dst[dstIdx + 3] = src[dstIdx + 3]; // Preserve alpha
      }
    }
    ctx.putImageData(output, 0, 0);
  };
})();
