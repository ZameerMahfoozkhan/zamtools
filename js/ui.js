/**
 * ZamTools UI Components Controller
 * File dropzone events, range sliders, segmented pills, and mobile drawer
 */

(function () {
  // Global protection: prevent browser from navigating away when dropping files outside dropzones
  if (!window._zamDropGlobalInit) {
    window._zamDropGlobalInit = true;
    window.addEventListener('dragover', (e) => {
      e.preventDefault();
    }, false);
    window.addEventListener('drop', (e) => {
      if (!e.target.closest || !e.target.closest('.upload-dropzone')) {
        e.preventDefault();
      }
    }, false);
  }

  /**
   * Sets up drag and drop and file input handling for any dropzone
   * @param {HTMLElement} dropzoneEl 
   * @param {HTMLInputElement} fileInputEl 
   * @param {Function} onFileLoaded - callback receiving (file or array of files)
   * @param {Object} options - { multiple: boolean, accept: string }
   */
  window.setupDropZone = function (dropzoneEl, fileInputEl, onFileLoaded, options = {}) {
    if (!dropzoneEl || !fileInputEl) return;

    function handleFiles(files) {
      if (!files || files.length === 0) return;
      const fileList = Array.from(files);
      if (options.multiple) {
        onFileLoaded(fileList);
      } else {
        onFileLoaded(fileList[0]);
      }
    }

    // Isolate fileInput clicks and reset value so the same file can be re-selected
    fileInputEl.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInputEl.value = '';
    });

    // Clicking anywhere on dropzone triggers file picker
    dropzoneEl.addEventListener('click', (e) => {
      fileInputEl.value = '';
      fileInputEl.click();
    });

    // Explicitly bind buttons inside dropzone as well
    const buttons = dropzoneEl.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileInputEl.value = '';
        fileInputEl.click();
      });
    });

    // File input change
    fileInputEl.addEventListener('change', () => {
      if (fileInputEl.files && fileInputEl.files.length > 0) {
        handleFiles(fileInputEl.files);
      }
    });

    // Drag and drop states
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzoneEl.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.add('is-dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzoneEl.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.remove('is-dragover');
      }, false);
    });

    dropzoneEl.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzoneEl.classList.remove('is-dragover');
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        handleFiles(dt.files);
      }
    });

    // Paste from clipboard support
    window.addEventListener('paste', (e) => {
      // Only paste if dropzone is currently visible
      if (dropzoneEl.offsetParent === null && dropzoneEl.style.display === 'none') {
        return;
      }
      const items = (e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData))?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            handleFiles([file]);
            if (window.showToast) window.showToast('Image pasted from clipboard', 'info');
          }
          break;
        }
      }
    });
  };

  /**
   * Binds a range slider to a display element for real-time readout
   */
  window.bindRangeSlider = function (sliderEl, displayEl, formatter = (val) => val) {
    if (!sliderEl || !displayEl) return;
    const update = () => {
      displayEl.textContent = formatter(sliderEl.value);
    };
    sliderEl.addEventListener('input', update);
    update();
  };

  /**
   * Sets up a segmented control (button pills group)
   */
  window.setupSegmentedControl = function (containerEl, onChange) {
    if (!containerEl) return;
    const buttons = containerEl.querySelectorAll('.segmented-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        if (onChange) onChange(btn.dataset.value, btn);
      });
    });
  };

  /**
   * Sets up full batch processing queue management for multi-image tools
   * @param {Object} options
   * @returns {Object} Batch queue controller
   */
  window.setupBatchQueueManager = function ({
    dropzoneEl,
    fileInputEl,
    addMoreBtn,
    addFileInput,
    workspaceActive,
    queueContainer,
    countBadge,
    fileInfoName,
    downloadBtn,
    downloadAllBtn,
    singleDownloadLabel = 'Download Processed Image',
    batchZipLabel = 'Download All as ZIP',
    filterFn = (file) => file.type && file.type.startsWith('image/'),
    onSelectImage,
    onProcessAll,
    onClearAll
  }) {
    let filesList = [];
    let currentIndex = 0;
    const thumbnailsCache = new WeakMap();

    function getThumbUrl(file) {
      if (!thumbnailsCache.has(file)) {
        thumbnailsCache.set(file, URL.createObjectURL(file));
      }
      return thumbnailsCache.get(file);
    }

    function addFiles(newFiles) {
      const incoming = Array.from(newFiles).filter(filterFn);
      if (incoming.length === 0) {
        if (window.showToast) window.showToast('Please select valid image files.', 'warning');
        return;
      }

      const prevLen = filesList.length;
      filesList = [...filesList, ...incoming];

      if (prevLen === 0) {
        currentIndex = 0;
      }
      render();
      if (prevLen === 0 || filesList.length > prevLen) {
        onSelectImage(filesList[currentIndex], currentIndex, filesList);
      }
    }

    function removeFile(index) {
      if (index < 0 || index >= filesList.length) return;
      const removed = filesList[index];
      if (thumbnailsCache.has(removed)) {
        URL.revokeObjectURL(thumbnailsCache.get(removed));
        thumbnailsCache.delete(removed);
      }

      filesList.splice(index, 1);
      if (filesList.length === 0) {
        clearAll();
        return;
      }

      if (currentIndex >= filesList.length) {
        currentIndex = filesList.length - 1;
      } else if (currentIndex === index) {
        currentIndex = Math.max(0, index - 1);
      }
      render();
      onSelectImage(filesList[currentIndex], currentIndex, filesList);
    }

    function selectFile(index) {
      if (index < 0 || index >= filesList.length) return;
      currentIndex = index;
      render();
      onSelectImage(filesList[currentIndex], currentIndex, filesList);
    }

    function clearAll() {
      filesList.forEach(f => {
        if (thumbnailsCache.has(f)) {
          URL.revokeObjectURL(thumbnailsCache.get(f));
          thumbnailsCache.delete(f);
        }
      });
      filesList = [];
      currentIndex = 0;
      if (workspaceActive) workspaceActive.classList.remove('is-active');
      if (dropzoneEl) dropzoneEl.style.display = 'flex';
      if (fileInputEl) fileInputEl.value = '';
      if (addFileInput) addFileInput.value = '';
      if (queueContainer) {
        queueContainer.style.display = 'none';
        queueContainer.innerHTML = '';
      }
      if (countBadge) countBadge.style.display = 'none';
      if (onClearAll) onClearAll();
    }

    function render() {
      if (filesList.length === 0) {
        clearAll();
        return;
      }

      if (dropzoneEl) dropzoneEl.style.display = 'none';
      if (workspaceActive) workspaceActive.classList.add('is-active');

      const current = filesList[currentIndex];
      if (fileInfoName && current) {
        fileInfoName.textContent = `${current.name} (${window.formatBytes(current.size)})`;
      }

      // Count badge
      if (countBadge) {
        if (filesList.length > 1) {
          countBadge.textContent = `${filesList.length} images`;
          countBadge.style.display = 'inline-flex';
        } else {
          countBadge.style.display = 'none';
        }
      }

      // Queue Container & Strip
      if (queueContainer) {
        if (filesList.length > 1) {
          queueContainer.style.display = 'flex';
          queueContainer.innerHTML = `
            <div class="batch-queue-header">
              <span class="batch-queue-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                <span>Images Queue (${filesList.length})</span>
              </span>
              <span class="batch-queue-hint">Click image to preview or adjust settings</span>
            </div>
            <div class="batch-queue-strip">
              ${filesList.map((f, i) => `
                <div class="batch-queue-card ${i === currentIndex ? 'is-active' : ''}" data-index="${i}">
                  <img class="batch-queue-thumb" src="${getThumbUrl(f)}" alt="${f.name}">
                  <div class="batch-queue-info">
                    <span class="batch-queue-name" title="${f.name}">${f.name}</span>
                    <span class="batch-queue-size">${window.formatBytes(f.size)}</span>
                  </div>
                  <button type="button" class="batch-queue-remove" data-remove="${i}" title="Remove image">✕</button>
                </div>
              `).join('')}
              <button type="button" class="batch-queue-add-btn" id="queueAddBtn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <span>Add</span>
              </button>
            </div>
          `;

          // Bind card click & remove click
          queueContainer.querySelectorAll('.batch-queue-card').forEach(card => {
            card.addEventListener('click', (e) => {
              if (e.target.closest('.batch-queue-remove')) return;
              const idx = parseInt(card.dataset.index, 10);
              selectFile(idx);
            });
          });

          queueContainer.querySelectorAll('.batch-queue-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const idx = parseInt(btn.dataset.remove, 10);
              removeFile(idx);
            });
          });

          const qAdd = queueContainer.querySelector('#queueAddBtn');
          if (qAdd && addFileInput) {
            qAdd.addEventListener('click', () => {
              addFileInput.value = '';
              addFileInput.click();
            });
          }
        } else {
          queueContainer.style.display = 'none';
          queueContainer.innerHTML = '';
        }
      }

      // Download buttons
      if (downloadBtn && downloadAllBtn) {
        if (filesList.length > 1) {
          downloadAllBtn.style.display = 'inline-flex';
          downloadAllBtn.innerHTML = `<span>📦 ${batchZipLabel} (${filesList.length} images)</span>`;
          downloadAllBtn.className = 'btn btn-primary btn-lg';

          downloadBtn.textContent = 'Download Active Image';
          downloadBtn.className = 'btn btn-secondary';
        } else {
          downloadAllBtn.style.display = 'none';
          downloadBtn.textContent = singleDownloadLabel;
          downloadBtn.className = 'btn btn-primary btn-lg';
        }
      }
    }

    // Bind Add More Button
    if (addMoreBtn && addFileInput) {
      addMoreBtn.addEventListener('click', () => {
        addFileInput.value = '';
        addFileInput.click();
      });
      addFileInput.addEventListener('change', () => {
        if (addFileInput.files && addFileInput.files.length > 0) {
          addFiles(addFileInput.files);
        }
      });
    }

    // Drag and drop additional files onto the workspace when active
    if (workspaceActive) {
      ['dragenter', 'dragover'].forEach(eventName => {
        workspaceActive.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      });
      workspaceActive.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length > 0) {
          addFiles(dt.files);
        }
      });
    }

    // Batch download handler
    if (downloadAllBtn && onProcessAll) {
      downloadAllBtn.onclick = async () => {
        if (filesList.length === 0) return;
        downloadAllBtn.disabled = true;
        const originalText = downloadAllBtn.innerHTML;
        downloadAllBtn.innerHTML = '<span>⏳ Packaging ZIP...</span>';

        try {
          const zipName = downloadAllBtn.dataset.zipName || 'zamtools-processed-images.zip';
          const processedList = await onProcessAll(filesList);
          if (processedList && processedList.length > 0) {
            await window.downloadZip(processedList, zipName);
          }
        } catch (err) {
          if (window.showToast) window.showToast('Batch error: ' + err.message, 'error');
        } finally {
          downloadAllBtn.disabled = false;
          downloadAllBtn.innerHTML = originalText;
        }
      };
    }

    // Return API
    return {
      addFiles,
      removeFile,
      selectFile,
      clearAll,
      getFiles: () => filesList,
      getCurrentIndex: () => currentIndex,
      getCurrentFile: () => filesList[currentIndex],
      refresh: render
    };
  };
})();
