/**
 * ZamTools - Image Rotate & Flip Logic
 * Transform canvas orientations: 90/180/270 degrees and horizontal/vertical mirroring
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');

  const rotateLeftBtn = document.getElementById('rotateLeftBtn');
  const rotateRightBtn = document.getElementById('rotateRightBtn');
  const rotate180Btn = document.getElementById('rotate180Btn');
  const flipHBtn = document.getElementById('flipHBtn');
  const flipVBtn = document.getElementById('flipVBtn');
  const previewCanvas = document.getElementById('previewCanvas');
  const downloadBtn = document.getElementById('downloadBtn');
  const currentRotationEl = document.getElementById('currentRotation');
  const currentFlipEl = document.getElementById('currentFlip');
  const fileInfoName = document.getElementById('fileInfoName');

  let currentImage = null;
  let currentFile = null;
  let angle = 0; // 0, 90, 180, 270
  let flipH = false;
  let flipV = false;

  window.setupDropZone(dropzone, fileInput, async (file) => {
    try {
      const data = await window.loadImageFromFile(file);
      currentFile = file;
      currentImage = data.img;
      angle = 0;
      flipH = false;
      flipV = false;

      dropzone.style.display = 'none';
      workspaceActive.classList.add('is-active');
      fileInfoName.textContent = `${file.name} (${window.formatBytes(file.size)})`;

      renderTransforms();
    } catch (err) {
      window.showToast(err.message, 'error');
    }
  });

  rotateRightBtn.addEventListener('click', () => {
    angle = (angle + 90) % 360;
    renderTransforms();
  });

  rotateLeftBtn.addEventListener('click', () => {
    angle = (angle - 90 + 360) % 360;
    renderTransforms();
  });

  rotate180Btn.addEventListener('click', () => {
    angle = (angle + 180) % 360;
    renderTransforms();
  });

  flipHBtn.addEventListener('click', () => {
    flipH = !flipH;
    renderTransforms();
  });

  flipVBtn.addEventListener('click', () => {
    flipV = !flipV;
    renderTransforms();
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

  function renderTransforms() {
    if (!currentImage) return;

    currentRotationEl.textContent = `${angle}°`;
    currentFlipEl.textContent = `${flipH ? 'H ' : ''}${flipV ? 'V' : ''}`.trim() || 'None';

    const isPerpendicular = angle === 90 || angle === 270;
    const cw = isPerpendicular ? currentImage.naturalHeight : currentImage.naturalWidth;
    const ch = isPerpendicular ? currentImage.naturalWidth : currentImage.naturalHeight;

    previewCanvas.width = cw;
    previewCanvas.height = ch;
    const ctx = previewCanvas.getContext('2d');

    ctx.save();
    ctx.translate(cw / 2, ch / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
    ctx.drawImage(
      currentImage,
      -currentImage.naturalWidth / 2,
      -currentImage.naturalHeight / 2
    );
    ctx.restore();

    downloadBtn.onclick = async () => {
      const blob = await window.canvasToBlob(previewCanvas, 'image/png');
      const filename = window.formatDownloadFilename(currentFile.name, 'png', '-transformed');
      window.downloadBlob(blob, filename);
    };
  }
});
