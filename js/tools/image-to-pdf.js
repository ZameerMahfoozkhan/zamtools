/**
 * ZamTools - Image to PDF Converter Logic
 * Multi-image to PDF converter with page reordering, crop, filters (B&W & Enhanced),
 * document layout settings (A4/Letter/Fit, margins, orientation) and client-side PDF 1.4 generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const workspaceActive = document.getElementById('workspaceActive');
  const resetBtn = document.getElementById('resetBtn');
  const addMoreBtn = document.getElementById('addMoreBtn');
  const addFileInput = document.getElementById('addFileInput');

  const fileInfoName = document.getElementById('fileInfoName');
  const pageCountBadge = document.getElementById('pageCountBadge');
  const pagesStrip = document.getElementById('pagesStrip');

  const activePageHeader = document.getElementById('activePageHeader');
  const activePageBadge = document.getElementById('activePageBadge');
  const filterBtns = document.querySelectorAll('.filter-preset-btn');
  const applyFilterAllBtn = document.getElementById('applyFilterAllBtn');

  const cropModeToggleBtn = document.getElementById('cropModeToggleBtn');
  const applyCropBtn = document.getElementById('applyCropBtn');
  const resetCropBtn = document.getElementById('resetCropBtn');
  const cropHintOverlay = document.getElementById('cropHintOverlay');

  const pageSizeSelect = document.getElementById('pageSizeSelect');
  const orientationSelect = document.getElementById('orientationSelect');
  const marginSelect = document.getElementById('marginSelect');
  const pdfQualitySelect = document.getElementById('pdfQualitySelect');
  const pdfFilenameInput = document.getElementById('pdfFilenameInput');
  const generatePdfBtn = document.getElementById('generatePdfBtn');

  const previewCanvas = document.getElementById('previewCanvas');
  const previewCtx = previewCanvas.getContext('2d', { willReadFrequently: true });
  const previewPageIndicator = document.getElementById('previewPageIndicator');
  const previewTotalPages = document.getElementById('previewTotalPages');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');

  // State
  let pages = []; // Array of { id, file, name, img, filter: 'original'|'bw'|'enhanced', crop: {x,y,w,h}|null }
  let activeIndex = 0;
  let isCropActive = false;
  let cropBox = { x: 50, y: 50, w: 200, h: 200 };
  let cropDrag = { isDragging: false, handle: null, startX: 0, startY: 0, startBox: null };
  let canvasDisplayScale = 1; // scale between preview canvas CSS size and image
  let draggedCardIndex = null;

  // Standard Page Dimensions in points (1 pt = 1/72 inch)
  const PAGE_SIZES = {
    a4: { w: 595.28, h: 841.89 },
    letter: { w: 612.0, h: 792.0 }
  };

  const MARGINS = {
    none: 0,
    small: 14.17, // ~5mm
    normal: 34.01 // ~12mm
  };

  // 1. Initial Dropzone Setup (Multi-Image)
  window.setupDropZone(dropzone, fileInput, (files) => {
    const validFiles = Array.isArray(files) ? files : [files];
    loadAndAddImages(validFiles);
  }, { multiple: true });

  // 2. Add More Images
  if (addMoreBtn && addFileInput) {
    addMoreBtn.addEventListener('click', () => {
      addFileInput.click();
    });
    addFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        loadAndAddImages(Array.from(e.target.files));
        addFileInput.value = '';
      }
    });
  }

  // 3. Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (pages.length > 1 && !confirm('Clear all images and start over?')) {
        return;
      }
      pages = [];
      activeIndex = 0;
      isCropActive = false;
      workspaceActive.classList.remove('is-active');
      dropzone.style.display = 'flex';
      if (fileInput) fileInput.value = '';
    });
  }

  // Load image files into state
  async function loadAndAddImages(files) {
    const validImageFiles = files.filter(f => f.type && f.type.startsWith('image/'));
    if (validImageFiles.length === 0) {
      window.showToast('Please select valid image files (JPG, PNG, WebP).', 'warning');
      return;
    }

    const startIdx = pages.length;
    let loadedCount = 0;

    for (const file of validImageFiles) {
      try {
        const img = await loadImage(file);
        pages.push({
          id: 'page_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          file: file,
          name: file.name,
          img: img,
          filter: 'original',
          crop: null
        });
        loadedCount++;
      } catch (err) {
        console.error('Failed to load image:', file.name, err);
      }
    }

    if (loadedCount === 0) {
      window.showToast('Could not load selected images.', 'error');
      return;
    }

    dropzone.style.display = 'none';
    workspaceActive.classList.add('is-active');

    if (startIdx === 0) {
      activeIndex = 0;
    }

    updateWorkspaceHeader();
    renderPagesStrip();
    renderActivePagePreview();

    window.showToast(`Added ${loadedCount} page${loadedCount > 1 ? 's' : ''}.`, 'success');
  }

  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Image decode error'));
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function updateWorkspaceHeader() {
    const total = pages.length;
    pageCountBadge.textContent = `${total} Page${total !== 1 ? 's' : ''}`;
    previewTotalPages.textContent = total;
    previewPageIndicator.textContent = total > 0 ? (activeIndex + 1) : 0;
    activePageBadge.textContent = total > 0 ? `Page ${activeIndex + 1}` : '';

    if (pages[activeIndex]) {
      fileInfoName.textContent = pages[activeIndex].name;
    }

    prevPageBtn.disabled = activeIndex <= 0;
    nextPageBtn.disabled = activeIndex >= total - 1;
  }

  // 4. Render Thumbnail Reorder Strip
  function renderPagesStrip() {
    pagesStrip.innerHTML = '';

    pages.forEach((page, index) => {
      const card = document.createElement('div');
      card.className = `pdf-page-card ${index === activeIndex ? 'is-active' : ''}`;
      card.draggable = true;
      card.dataset.index = index;

      // Thumbnail wrapper
      const thumbWrap = document.createElement('div');
      thumbWrap.className = 'pdf-page-thumb-wrapper';

      const thumbImg = document.createElement('img');
      thumbImg.className = 'pdf-page-thumb';
      thumbImg.alt = `Page ${index + 1}`;
      thumbImg.src = getThumbnailDataUrl(page);

      const pageBadge = document.createElement('span');
      pageBadge.className = 'pdf-page-badge';
      pageBadge.textContent = `#${index + 1}`;

      thumbWrap.appendChild(thumbImg);
      thumbWrap.appendChild(pageBadge);
      card.appendChild(thumbWrap);

      // Reorder and remove buttons
      const actions = document.createElement('div');
      actions.className = 'pdf-page-actions';

      const moveLeftBtn = document.createElement('button');
      moveLeftBtn.type = 'button';
      moveLeftBtn.className = 'pdf-page-reorder-btn';
      moveLeftBtn.innerHTML = '◀';
      moveLeftBtn.title = 'Move page up / earlier';
      moveLeftBtn.disabled = index === 0;
      moveLeftBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        movePage(index, index - 1);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'pdf-page-delete-btn';
      deleteBtn.innerHTML = '✕';
      deleteBtn.title = 'Remove this page';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deletePage(index);
      });

      const moveRightBtn = document.createElement('button');
      moveRightBtn.type = 'button';
      moveRightBtn.className = 'pdf-page-reorder-btn';
      moveRightBtn.innerHTML = '▶';
      moveRightBtn.title = 'Move page down / later';
      moveRightBtn.disabled = index === pages.length - 1;
      moveRightBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        movePage(index, index + 1);
      });

      actions.appendChild(moveLeftBtn);
      actions.appendChild(deleteBtn);
      actions.appendChild(moveRightBtn);
      card.appendChild(actions);

      // Card Selection
      card.addEventListener('click', () => {
        if (activeIndex !== index) {
          if (isCropActive) endCropMode(false);
          activeIndex = index;
          updateWorkspaceHeader();
          highlightActiveCard();
          updateActiveFilterButtons();
          renderActivePagePreview();
        }
      });

      // Drag and drop reordering
      card.addEventListener('dragstart', (e) => {
        draggedCardIndex = index;
        card.classList.add('is-dragging');
        e.dataTransfer.effectAllowed = 'move';
      });

      card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });

      card.addEventListener('drop', (e) => {
        e.preventDefault();
        const targetIndex = index;
        if (draggedCardIndex !== null && draggedCardIndex !== targetIndex) {
          movePage(draggedCardIndex, targetIndex);
        }
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('is-dragging');
        draggedCardIndex = null;
      });

      pagesStrip.appendChild(card);
    });
  }

  function highlightActiveCard() {
    const cards = pagesStrip.querySelectorAll('.pdf-page-card');
    cards.forEach((c, idx) => {
      c.classList.toggle('is-active', idx === activeIndex);
    });
  }

  function movePage(fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= pages.length || toIndex < 0 || toIndex >= pages.length) return;
    if (isCropActive) endCropMode(false);

    const moved = pages.splice(fromIndex, 1)[0];
    pages.splice(toIndex, 0, moved);

    if (activeIndex === fromIndex) {
      activeIndex = toIndex;
    } else if (fromIndex < activeIndex && toIndex >= activeIndex) {
      activeIndex--;
    } else if (fromIndex > activeIndex && toIndex <= activeIndex) {
      activeIndex++;
    }

    updateWorkspaceHeader();
    renderPagesStrip();
    renderActivePagePreview();
  }

  function deletePage(index) {
    if (pages.length <= 1) {
      window.showToast('Document must contain at least one page.', 'warning');
      return;
    }
    if (isCropActive) endCropMode(false);

    pages.splice(index, 1);
    if (activeIndex >= pages.length) {
      activeIndex = pages.length - 1;
    }

    updateWorkspaceHeader();
    renderPagesStrip();
    updateActiveFilterButtons();
    renderActivePagePreview();
    window.showToast('Page removed.', 'info');
  }

  // 5. Navigation Buttons
  prevPageBtn.addEventListener('click', () => {
    if (activeIndex > 0) {
      if (isCropActive) endCropMode(false);
      activeIndex--;
      updateWorkspaceHeader();
      highlightActiveCard();
      updateActiveFilterButtons();
      renderActivePagePreview();
    }
  });

  nextPageBtn.addEventListener('click', () => {
    if (activeIndex < pages.length - 1) {
      if (isCropActive) endCropMode(false);
      activeIndex++;
      updateWorkspaceHeader();
      highlightActiveCard();
      updateActiveFilterButtons();
      renderActivePagePreview();
    }
  });

  // 6. Filter Controls
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (!pages[activeIndex]) return;

      pages[activeIndex].filter = filter;
      updateActiveFilterButtons();
      renderActivePagePreview();
      updateThumbnailAt(activeIndex);
    });
  });

  function updateActiveFilterButtons() {
    const currentFilter = pages[activeIndex]?.filter || 'original';
    filterBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.filter === currentFilter);
    });
  }

  if (applyFilterAllBtn) {
    applyFilterAllBtn.addEventListener('click', () => {
      if (pages.length === 0) return;
      const currentFilter = pages[activeIndex]?.filter || 'original';
      pages.forEach(p => {
        p.filter = currentFilter;
      });
      renderPagesStrip();
      renderActivePagePreview();
      window.showToast(`Applied ${currentFilter.toUpperCase()} filter to all pages.`, 'success');
    });
  }

  // 7. Preview Rendering & Filters
  function renderActivePagePreview() {
    const page = pages[activeIndex];
    if (!page) {
      previewCanvas.width = 300;
      previewCanvas.height = 300;
      previewCtx.clearRect(0, 0, 300, 300);
      return;
    }

    // Source rect (crop or full image)
    const src = getEffectiveCropRect(page);

    // Compute preview canvas dimensions to fit viewport cleanly
    const maxPreviewW = 620;
    const maxPreviewH = 500;
    const aspect = src.w / src.h;

    let cw = src.w;
    let ch = src.h;

    if (cw > maxPreviewW || ch > maxPreviewH) {
      if (cw / maxPreviewW > ch / maxPreviewH) {
        cw = maxPreviewW;
        ch = Math.round(maxPreviewW / aspect);
      } else {
        ch = maxPreviewH;
        cw = Math.round(maxPreviewH * aspect);
      }
    }

    previewCanvas.width = cw;
    previewCanvas.height = ch;
    canvasDisplayScale = cw / src.w;

    // Draw base cropped image
    previewCtx.drawImage(
      page.img,
      src.x, src.y, src.w, src.h,
      0, 0, cw, ch
    );

    // Apply Filter
    applyFilterToCanvas(previewCtx, cw, ch, page.filter);

    // If in interactive crop mode, draw overlay
    if (isCropActive) {
      drawCropOverlay();
    }
  }

  function getEffectiveCropRect(page) {
    if (page.crop && page.crop.w > 10 && page.crop.h > 10) {
      return page.crop;
    }
    return {
      x: 0,
      y: 0,
      w: page.img.naturalWidth,
      h: page.img.naturalHeight
    };
  }

  function applyFilterToCanvas(ctx, width, height, filter) {
    if (filter === 'original') return;

    const imgData = ctx.getImageData(0, 0, width, height);
    const d = imgData.data;
    const len = d.length;

    if (filter === 'bw') {
      // Document Black & White with paper-clean thresholding
      for (let i = 0; i < len; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;

        // Increase contrast to darken ink and brighten paper
        let val = (gray - 128) * 1.55 + 128;
        if (val > 210) {
          // Whiten near-white backgrounds
          val = Math.min(255, val + (val - 210) * 1.4);
        } else if (val < 90) {
          // Darken text lines
          val = Math.max(0, val * 0.85);
        }
        val = Math.max(0, Math.min(255, val));

        d[i] = val;
        d[i + 1] = val;
        d[i + 2] = val;
      }
    } else if (filter === 'enhanced') {
      // Modern Scanner enhancement: vivid contrast + white paper boost
      const contrast = 35; // boost
      const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

      for (let i = 0; i < len; i += 4) {
        let r = factor * (d[i] - 128) + 128 + 12;
        let g = factor * (d[i + 1] - 128) + 128 + 12;
        let b = factor * (d[i + 2] - 128) + 128 + 12;

        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum > 200) {
          const boost = (lum - 200) * 0.6;
          r += boost;
          g += boost;
          b += boost;
        }

        d[i] = Math.max(0, Math.min(255, r));
        d[i + 1] = Math.max(0, Math.min(255, g));
        d[i + 2] = Math.max(0, Math.min(255, b));
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  function getThumbnailDataUrl(page) {
    const thumbCanvas = document.createElement('canvas');
    thumbCanvas.width = 100;
    thumbCanvas.height = 100;
    const tCtx = thumbCanvas.getContext('2d', { willReadFrequently: true });

    const src = getEffectiveCropRect(page);
    const aspect = src.w / src.h;
    let dw = 100;
    let dh = 100;
    let dx = 0;
    let dy = 0;

    if (aspect > 1) {
      dh = Math.round(100 / aspect);
      dy = Math.round((100 - dh) / 2);
    } else {
      dw = Math.round(100 * aspect);
      dx = Math.round((100 - dw) / 2);
    }

    tCtx.fillStyle = '#f8fafc';
    tCtx.fillRect(0, 0, 100, 100);

    tCtx.drawImage(page.img, src.x, src.y, src.w, src.h, dx, dy, dw, dh);
    applyFilterToCanvas(tCtx, 100, 100, page.filter);

    return thumbCanvas.toDataURL('image/jpeg', 0.8);
  }

  function updateThumbnailAt(index) {
    const card = pagesStrip.querySelector(`.pdf-page-card[data-index="${index}"]`);
    if (card) {
      const imgEl = card.querySelector('.pdf-page-thumb');
      if (imgEl && pages[index]) {
        imgEl.src = getThumbnailDataUrl(pages[index]);
      }
    }
  }

  // 8. Interactive Crop Mode
  if (cropModeToggleBtn) {
    cropModeToggleBtn.addEventListener('click', () => {
      if (isCropActive) {
        endCropMode(false);
      } else {
        startCropMode();
      }
    });
  }

  if (applyCropBtn) {
    applyCropBtn.addEventListener('click', () => {
      saveCrop();
    });
  }

  if (resetCropBtn) {
    resetCropBtn.addEventListener('click', () => {
      resetCrop();
    });
  }

  function startCropMode() {
    const page = pages[activeIndex];
    if (!page) return;

    isCropActive = true;
    workspaceActive.classList.add('cropping-active');
    cropModeToggleBtn.style.display = 'none';
    applyCropBtn.style.display = 'inline-block';
    resetCropBtn.style.display = 'inline-block';
    cropHintOverlay.style.display = 'block';

    // Base canvas for cropping shows the full original image
    const origW = page.img.naturalWidth;
    const origH = page.img.naturalHeight;
    const maxW = 620;
    const maxH = 500;
    const aspect = origW / origH;

    let cw = origW;
    let ch = origH;
    if (cw > maxW || ch > maxH) {
      if (cw / maxW > ch / maxH) {
        cw = maxW;
        ch = Math.round(maxW / aspect);
      } else {
        ch = maxH;
        cw = Math.round(maxH * aspect);
      }
    }

    previewCanvas.width = cw;
    previewCanvas.height = ch;
    canvasDisplayScale = cw / origW;

    // Initialize crop box coordinates on canvas
    if (page.crop) {
      cropBox = {
        x: Math.round(page.crop.x * canvasDisplayScale),
        y: Math.round(page.crop.y * canvasDisplayScale),
        w: Math.round(page.crop.w * canvasDisplayScale),
        h: Math.round(page.crop.h * canvasDisplayScale)
      };
    } else {
      const marginX = Math.round(cw * 0.1);
      const marginY = Math.round(ch * 0.1);
      cropBox = {
        x: marginX,
        y: marginY,
        w: cw - marginX * 2,
        h: ch - marginY * 2
      };
    }

    renderActivePageCropView();
  }

  function renderActivePageCropView() {
    const page = pages[activeIndex];
    if (!page) return;

    const cw = previewCanvas.width;
    const ch = previewCanvas.height;

    // Draw full original image
    previewCtx.drawImage(page.img, 0, 0, cw, ch);
    applyFilterToCanvas(previewCtx, cw, ch, page.filter);

    // Draw crop overlay and handles
    drawCropOverlay();
  }

  function drawCropOverlay() {
    const cw = previewCanvas.width;
    const ch = previewCanvas.height;
    const b = cropBox;

    // Dim background outside crop box
    previewCtx.fillStyle = 'rgba(15, 23, 42, 0.55)';
    previewCtx.fillRect(0, 0, cw, b.y); // top
    previewCtx.fillRect(0, b.y + b.h, cw, ch - (b.y + b.h)); // bottom
    previewCtx.fillRect(0, b.y, b.x, b.h); // left
    previewCtx.fillRect(b.x + b.w, b.y, cw - (b.x + b.w), b.h); // right

    // Crop Border
    previewCtx.strokeStyle = '#ffffff';
    previewCtx.lineWidth = 2;
    previewCtx.strokeRect(b.x, b.y, b.w, b.h);

    // Rule of thirds grid
    previewCtx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    previewCtx.lineWidth = 1;
    previewCtx.setLineDash([4, 4]);

    previewCtx.beginPath();
    previewCtx.moveTo(b.x + b.w / 3, b.y);
    previewCtx.lineTo(b.x + b.w / 3, b.y + b.h);
    previewCtx.moveTo(b.x + (b.w * 2) / 3, b.y);
    previewCtx.lineTo(b.x + (b.w * 2) / 3, b.y + b.h);

    previewCtx.moveTo(b.x, b.y + b.h / 3);
    previewCtx.lineTo(b.x + b.w, b.y + b.h / 3);
    previewCtx.moveTo(b.x, b.y + (b.h * 2) / 3);
    previewCtx.lineTo(b.x + b.w, b.y + (b.h * 2) / 3);
    previewCtx.stroke();
    previewCtx.setLineDash([]);

    // Corner and edge handles
    const handles = getCropHandles();
    handles.forEach(h => {
      previewCtx.fillStyle = '#6366f1';
      previewCtx.strokeStyle = '#ffffff';
      previewCtx.lineWidth = 2;
      previewCtx.beginPath();
      previewCtx.arc(h.x, h.y, 6, 0, Math.PI * 2);
      previewCtx.fill();
      previewCtx.stroke();
    });
  }

  function getCropHandles() {
    const b = cropBox;
    return [
      { id: 'nw', x: b.x, y: b.y },
      { id: 'n', x: b.x + b.w / 2, y: b.y },
      { id: 'ne', x: b.x + b.w, y: b.y },
      { id: 'e', x: b.x + b.w, y: b.y + b.h / 2 },
      { id: 'se', x: b.x + b.w, y: b.y + b.h },
      { id: 's', x: b.x + b.w / 2, y: b.y + b.h },
      { id: 'sw', x: b.x, y: b.y + b.h },
      { id: 'w', x: b.x, y: b.y + b.h / 2 }
    ];
  }

  function saveCrop() {
    const page = pages[activeIndex];
    if (!page) return;

    // Convert canvas cropBox to natural image dimensions
    const scale = 1 / canvasDisplayScale;
    const nx = Math.max(0, Math.round(cropBox.x * scale));
    const ny = Math.max(0, Math.round(cropBox.y * scale));
    const nw = Math.min(page.img.naturalWidth - nx, Math.round(cropBox.w * scale));
    const nh = Math.min(page.img.naturalHeight - ny, Math.round(cropBox.h * scale));

    if (nw > 20 && nh > 20) {
      page.crop = { x: nx, y: ny, w: nw, h: nh };
      window.showToast(`Saved crop for Page ${activeIndex + 1}`, 'success');
    }

    endCropMode(true);
  }

  function resetCrop() {
    const page = pages[activeIndex];
    if (page) {
      page.crop = null;
      window.showToast(`Reset crop to full image for Page ${activeIndex + 1}`, 'info');
    }
    endCropMode(true);
  }

  function endCropMode(applyChanges = false) {
    isCropActive = false;
    workspaceActive.classList.remove('cropping-active');
    cropModeToggleBtn.style.display = 'inline-block';
    applyCropBtn.style.display = 'none';
    resetCropBtn.style.display = 'none';
    cropHintOverlay.style.display = 'none';

    renderActivePagePreview();
    updateThumbnailAt(activeIndex);
  }

  // Crop Pointer Event Listeners
  previewCanvas.addEventListener('pointerdown', (e) => {
    if (!isCropActive) return;

    const rect = previewCanvas.getBoundingClientRect();
    const px = (e.clientX - rect.left) * (previewCanvas.width / rect.width);
    const py = (e.clientY - rect.top) * (previewCanvas.height / rect.height);

    // Check handles first
    const handles = getCropHandles();
    let hitHandle = null;
    for (const h of handles) {
      const dist = Math.hypot(px - h.x, py - h.y);
      if (dist <= 14) {
        hitHandle = h.id;
        break;
      }
    }

    if (hitHandle) {
      cropDrag = {
        isDragging: true,
        handle: hitHandle,
        startX: px,
        startY: py,
        startBox: { ...cropBox }
      };
      previewCanvas.setPointerCapture(e.pointerId);
      return;
    }

    // Check inside crop box for moving
    const b = cropBox;
    if (px >= b.x && px <= b.x + b.w && py >= b.y && py <= b.y + b.h) {
      cropDrag = {
        isDragging: true,
        handle: 'move',
        startX: px,
        startY: py,
        startBox: { ...cropBox }
      };
      previewCanvas.setPointerCapture(e.pointerId);
    }
  });

  previewCanvas.addEventListener('pointermove', (e) => {
    if (!isCropActive) return;

    const rect = previewCanvas.getBoundingClientRect();
    const px = (e.clientX - rect.left) * (previewCanvas.width / rect.width);
    const py = (e.clientY - rect.top) * (previewCanvas.height / rect.height);

    if (cropDrag.isDragging) {
      const dx = px - cropDrag.startX;
      const dy = py - cropDrag.startY;
      const sb = cropDrag.startBox;
      const cw = previewCanvas.width;
      const ch = previewCanvas.height;
      const minSize = 30;

      if (cropDrag.handle === 'move') {
        let nx = sb.x + dx;
        let ny = sb.y + dy;
        nx = Math.max(0, Math.min(cw - sb.w, nx));
        ny = Math.max(0, Math.min(ch - sb.h, ny));
        cropBox.x = nx;
        cropBox.y = ny;
      } else {
        let left = sb.x;
        let top = sb.y;
        let right = sb.x + sb.w;
        let bottom = sb.y + sb.h;

        if (cropDrag.handle.includes('w')) left = Math.max(0, Math.min(right - minSize, sb.x + dx));
        if (cropDrag.handle.includes('e')) right = Math.min(cw, Math.max(left + minSize, sb.x + sb.w + dx));
        if (cropDrag.handle.includes('n')) top = Math.max(0, Math.min(bottom - minSize, sb.y + dy));
        if (cropDrag.handle.includes('s')) bottom = Math.min(ch, Math.max(top + minSize, sb.y + sb.h + dy));

        cropBox = {
          x: left,
          y: top,
          w: right - left,
          h: bottom - top
        };
      }

      renderActivePageCropView();
    } else {
      // Update cursor
      const handles = getCropHandles();
      let hovered = null;
      for (const h of handles) {
        if (Math.hypot(px - h.x, py - h.y) <= 14) {
          hovered = h.id;
          break;
        }
      }

      if (hovered) {
        const cursorMap = {
          nw: 'nwse-resize', se: 'nwse-resize',
          ne: 'nesw-resize', sw: 'nesw-resize',
          n: 'ns-resize', s: 'ns-resize',
          w: 'ew-resize', e: 'ew-resize'
        };
        previewCanvas.style.cursor = cursorMap[hovered] || 'pointer';
      } else if (px >= cropBox.x && px <= cropBox.x + cropBox.w && py >= cropBox.y && py <= cropBox.y + cropBox.h) {
        previewCanvas.style.cursor = 'move';
      } else {
        previewCanvas.style.cursor = 'default';
      }
    }
  });

  previewCanvas.addEventListener('pointerup', (e) => {
    if (cropDrag.isDragging) {
      cropDrag.isDragging = false;
      try {
        previewCanvas.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  });

  // 9. Pure Client-Side PDF Generation (Standard PDF 1.4 Binary DCTDecode)
  generatePdfBtn.addEventListener('click', async () => {
    if (pages.length === 0) {
      window.showToast('Please upload at least one image.', 'warning');
      return;
    }

    generatePdfBtn.disabled = true;
    const originalBtnText = generatePdfBtn.textContent;
    generatePdfBtn.textContent = 'Generating PDF...';

    try {
      const pageSizePref = pageSizeSelect.value; // 'a4', 'letter', 'fit'
      const orientationPref = orientationSelect.value; // 'auto', 'portrait', 'landscape'
      const marginPref = marginSelect.value; // 'none', 'small', 'normal'
      const quality = parseFloat(pdfQualitySelect.value) || 0.92;
      const marginPt = MARGINS[marginPref] || 0;

      const pdfPagesData = [];

      for (let i = 0; i < pages.length; i++) {
        const p = pages[i];
        const src = getEffectiveCropRect(p);

        // Render page to offscreen high-res canvas with filter applied
        const renderCanvas = document.createElement('canvas');
        renderCanvas.width = src.w;
        renderCanvas.height = src.h;
        const rCtx = renderCanvas.getContext('2d', { willReadFrequently: true });

        rCtx.drawImage(p.img, src.x, src.y, src.w, src.h, 0, 0, src.w, src.h);
        applyFilterToCanvas(rCtx, src.w, src.h, p.filter);

        // Convert to JPEG Uint8Array
        const jpegBuffer = await canvasToJpegBuffer(renderCanvas, quality);

        // Determine Page Dimensions
        let pw, ph;
        if (pageSizePref === 'fit') {
          // Fit page strictly to image size at 72 pt/inch
          pw = src.w * 0.75 + marginPt * 2;
          ph = src.h * 0.75 + marginPt * 2;
        } else {
          const baseDim = PAGE_SIZES[pageSizePref] || PAGE_SIZES.a4;
          let isLandscape = false;
          if (orientationPref === 'auto') {
            isLandscape = src.w > src.h;
          } else if (orientationPref === 'landscape') {
            isLandscape = true;
          }

          pw = isLandscape ? Math.max(baseDim.w, baseDim.h) : Math.min(baseDim.w, baseDim.h);
          ph = isLandscape ? Math.min(baseDim.w, baseDim.h) : Math.max(baseDim.w, baseDim.h);
        }

        // Fit image within margins
        const availW = Math.max(10, pw - marginPt * 2);
        const availH = Math.max(10, ph - marginPt * 2);
        const imgAspect = src.w / src.h;
        const availAspect = availW / availH;

        let dw, dh;
        if (imgAspect > availAspect) {
          dw = availW;
          dh = availW / imgAspect;
        } else {
          dh = availH;
          dw = availH * imgAspect;
        }

        const dx = marginPt + (availW - dw) / 2;
        const dy = marginPt + (availH - dh) / 2;

        pdfPagesData.push({
          width: src.w,
          height: src.h,
          pw: pw,
          ph: ph,
          dw: dw,
          dh: dh,
          dx: dx,
          dy: dy,
          jpegBuffer: jpegBuffer
        });
      }

      // Compile binary PDF
      const pdfBlob = buildClientPdfBlob(pdfPagesData);

      // Trigger Download
      let filename = (pdfFilenameInput.value || 'zamtools-document.pdf').trim();
      if (!filename.toLowerCase().endsWith('.pdf')) {
        filename += '.pdf';
      }

      const downloadUrl = URL.createObjectURL(pdfBlob);
      const dlLink = document.createElement('a');
      dlLink.href = downloadUrl;
      dlLink.download = filename;
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
      URL.revokeObjectURL(downloadUrl);

      window.showToast(`PDF generated successfully (${window.formatBytes(pdfBlob.size)})!`, 'success');
    } catch (err) {
      console.error('PDF generation error:', err);
      window.showToast('Failed to generate PDF: ' + err.message, 'error');
    } finally {
      generatePdfBtn.disabled = false;
      generatePdfBtn.textContent = originalBtnText;
    }
  });

  function canvasToJpegBuffer(canvas, quality) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas to blob failed'));
          return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(new Uint8Array(reader.result));
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      }, 'image/jpeg', quality);
    });
  }

  function buildClientPdfBlob(pdfPages) {
    const parts = [];
    let currentByteOffset = 0;
    const offsets = [];

    function append(data) {
      if (typeof data === 'string') {
        const encoder = new TextEncoder();
        const bytes = encoder.encode(data);
        parts.push(bytes);
        currentByteOffset += bytes.length;
      } else if (data instanceof Uint8Array) {
        parts.push(data);
        currentByteOffset += data.byteLength;
      }
    }

    function startObject(num) {
      offsets[num] = currentByteOffset;
      append(`${num} 0 obj\n`);
    }

    function endObject() {
      append('\nendobj\n');
    }

    // PDF Header
    append('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');

    // Object 1: Catalog
    startObject(1);
    append('<< /Type /Catalog /Pages 2 0 R >>');
    endObject();

    const numPages = pdfPages.length;
    const pageObjNums = [];
    for (let i = 0; i < numPages; i++) {
      pageObjNums.push(3 + i * 3);
    }

    // Object 2: Pages Parent
    startObject(2);
    append(`<< /Type /Pages /Kids [${pageObjNums.map(n => `${n} 0 R`).join(' ')}] /Count ${numPages} >>`);
    endObject();

    // Page Objects & Images
    for (let i = 0; i < numPages; i++) {
      const p = pdfPages[i];
      const pageNum = 3 + i * 3;
      const contentNum = pageNum + 1;
      const imgNum = pageNum + 2;

      // Page Node
      startObject(pageNum);
      append(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${p.pw.toFixed(2)} ${p.ph.toFixed(2)}] /Contents ${contentNum} 0 R /Resources << /XObject << /Im1 ${imgNum} 0 R >> >> >>`);
      endObject();

      // Content Stream
      const streamContent = `q\n${p.dw.toFixed(2)} 0 0 ${p.dh.toFixed(2)} ${p.dx.toFixed(2)} ${p.dy.toFixed(2)} cm\n/Im1 Do\nQ\n`;
      const streamLength = new TextEncoder().encode(streamContent).length;
      startObject(contentNum);
      append(`<< /Length ${streamLength} >>\nstream\n${streamContent}endstream`);
      endObject();

      // Image XObject with DCTDecode
      startObject(imgNum);
      append(`<< /Type /XObject /Subtype /Image /Width ${p.width} /Height ${p.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${p.jpegBuffer.byteLength} >>\nstream\n`);
      append(p.jpegBuffer);
      append('\nendstream');
      endObject();
    }

    // XRef Table
    const xrefOffset = currentByteOffset;
    const totalObjs = 2 + numPages * 3;
    append(`xref\n0 ${totalObjs + 1}\n`);
    append('0000000000 65535 f \n');
    for (let i = 1; i <= totalObjs; i++) {
      const offStr = String(offsets[i]).padStart(10, '0');
      append(`${offStr} 00000 n \n`);
    }

    // Trailer
    append(`trailer\n<< /Size ${totalObjs + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

    return new Blob(parts, { type: 'application/pdf' });
  }
});
