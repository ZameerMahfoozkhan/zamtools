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
})();
