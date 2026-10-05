/**
 * ZamTools File Download Utilities
 * Memory-safe client-side download triggers
 */

(function () {
  /**
   * Sanitizes a base filename and ensures the specified extension
   * @param {string} originalName 
   * @param {string} newExtension - e.g., 'jpg', 'png', 'webp'
   * @param {string} [suffix=''] - e.g., '-compressed'
   */
  window.formatDownloadFilename = function (originalName, newExtension, suffix = '') {
    if (!originalName) originalName = 'image';
    const base = originalName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
    const ext = newExtension.replace(/^\./, '').toLowerCase();
    return `${base}${suffix}.${ext}`;
  };

  /**
   * Downloads a Blob and revokes its Object URL safely
   * @param {Blob} blob 
   * @param {string} filename 
   */
  window.downloadBlob = function (blob, filename) {
    if (!blob) {
      if (window.showToast) window.showToast('No file data available to download', 'error');
      return;
    }

    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename || 'zamtools-image';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Give browser sufficient time to initiate download before freeing memory
    setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 1500);

    if (window.showToast) {
      window.showToast(`Downloading ${filename}`, 'success');
    }
  };

  /**
   * Downloads a Data URL (Base64)
   * @param {string} dataUrl 
   * @param {string} filename 
   */
  window.downloadDataUrl = function (dataUrl, filename) {
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename || 'download';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.showToast) {
      window.showToast(`Downloading ${filename}`, 'success');
    }
  };

  /**
   * Downloads a text file (e.g. Base64 strings or HTML snippets)
   * @param {string} textContent 
   * @param {string} filename 
   */
  window.downloadText = function (textContent, filename) {
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    window.downloadBlob(blob, filename || 'zamtools-export.txt');
  };
})();
