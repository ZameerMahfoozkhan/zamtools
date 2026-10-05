/**
 * ZamTools UI Components Controller
 * File dropzone events, range sliders, segmented pills, and mobile drawer
 */

(function () {
  /**
   * Sets up drag and drop and file input handling for any dropzone
   * @param {HTMLElement} dropzoneEl 
   * @param {HTMLInputElement} fileInputEl 
   * @param {Function} onFileLoaded - callback receiving (file or array of files)
   * @param {Object} options - { multiple: boolean, accept: string }
   */
  window.setupDropZone = function (dropzoneEl, fileInputEl, onFileLoaded, options = {}) {
    if (!dropzoneEl || !fileInputEl) return;

    // Click on dropzone triggers file picker
    dropzoneEl.addEventListener('click', (e) => {
      if (e.target !== fileInputEl) {
        fileInputEl.click();
      }
    });

    fileInputEl.addEventListener('change', () => {
      if (fileInputEl.files && fileInputEl.files.length > 0) {
        if (options.multiple) {
          onFileLoaded(Array.from(fileInputEl.files));
        } else {
          onFileLoaded(fileInputEl.files[0]);
        }
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
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files.length > 0) {
        if (options.multiple) {
          onFileLoaded(Array.from(files));
        } else {
          onFileLoaded(files[0]);
        }
      }
    });

    // Paste from clipboard support
    window.addEventListener('paste', (e) => {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            if (options.multiple) {
              onFileLoaded([file]);
            } else {
              onFileLoaded(file);
            }
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
