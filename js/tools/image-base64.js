/**
 * ZamTools - Image to Base64 Converter Logic
 * Converts image files to data URLs and raw Base64 strings with copy/download options
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const base64Output = document.getElementById('base64Output');
  const previewImg = document.getElementById('previewImg');
  const copyDataUrlBtn = document.getElementById('copyDataUrlBtn');
  const copyRawBase64Btn = document.getElementById('copyRawBase64Btn');
  const downloadTxtBtn = document.getElementById('downloadTxtBtn');
  const fileInfoName = document.getElementById('fileInfoName');
  const stringLengthEl = document.getElementById('stringLength');

  let currentDataUrl = '';
  let currentFile = null;

  window.setupDropZone(dropzone, fileInput, (file) => {
    if (!file || !file.type.startsWith('image/')) {
      window.showToast('Please select a valid image file.', 'error');
      return;
    }
    currentFile = file;

    const reader = new FileReader();
    reader.onload = (e) => {
      currentDataUrl = e.target.result;
      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');

      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;
      previewImg.src = currentDataUrl;
      base64Output.value = currentDataUrl;
      stringLengthEl.textContent = `${currentDataUrl.length.toLocaleString()} characters`;
    };
    reader.readAsDataURL(file);
  });

  copyDataUrlBtn.addEventListener('click', () => {
    window.copyToClipboard(currentDataUrl, 'Data URL copied to clipboard!');
  });

  copyRawBase64Btn.addEventListener('click', () => {
    const raw = currentDataUrl.split(',')[1] || currentDataUrl;
    window.copyToClipboard(raw, 'Raw Base64 string copied!');
  });

  downloadTxtBtn.addEventListener('click', () => {
    const txtName = window.formatDownloadFilename(currentFile ? currentFile.name : 'image', 'txt', '-base64');
    window.downloadText(currentDataUrl, txtName);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentDataUrl = '';
      currentFile = null;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      fileInput.value = '';
      base64Output.value = '';
    });
  }
});
