/**
 * ZamTools Search Index & Keyboard Navigation
 * Instant filtering of all 20 image tools with arrow navigation
 */

(function () {
  
  window.getToolUrl = function(tool) {
    var root = window.ZAM_ROOT || './';
    var id = typeof tool === 'string' ? tool : tool.id;
    return root + 'tools/' + id + '/index.html';
  };

  // Complete registry of all 20 tools with metadata & inline SVGs
  window.ZAM_TOOLS = [
    {
      id: 'image-compressor',
      name: 'Image Compressor',
      url: '/tools/image-compressor/',
      category: 'Compress',
      categoryKey: 'compression',
      feature: 'Up to -90%',
      format: 'JPG • PNG • WebP',
      desc: 'Compress JPG, PNG and WebP images while maintaining visual quality.',
      keywords: ['compress', 'reduce size', 'optimize', 'shrink', 'quality', 'kb', 'mb', 'lossy'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6m-6-4h6m4 0h6m-6 4h6M9 4v16m6-16v16"/></svg>'
    },
    {
      id: 'image-resizer',
      name: 'Image Resizer',
      url: '/tools/image-resizer/',
      category: 'Resize',
      categoryKey: 'resizing',
      feature: 'Aspect Lock',
      format: '1920x1080 • 4K',
      desc: 'Resize images to custom width, height, or standard presets with aspect ratio lock.',
      keywords: ['resize', 'dimensions', 'width', 'height', 'scale', 'pixels', 'aspect ratio'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>'
    },
    {
      id: 'image-to-target-size',
      name: 'Compress to Target Size',
      url: '/tools/image-to-target-size/',
      category: 'Compress',
      categoryKey: 'compression',
      feature: 'Exact KB/MB',
      format: '50KB • 100KB • 1MB',
      desc: 'Specify an exact target file size (e.g. 50KB, 100KB, 200KB) and compress iteratively.',
      keywords: ['target size', '50kb', '100kb', '200kb', 'exact size', 'file limit', 'portal upload'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
    },
    {
      id: 'image-cropper',
      name: 'Image Cropper',
      url: '/tools/image-cropper/',
      category: 'Edit',
      categoryKey: 'editing',
      feature: '1:1 • 16:9 • Free',
      format: 'JPG • PNG • WebP',
      desc: 'Crop photos with standard aspect ratios (1:1, 4:3, 16:9) or freehand selection.',
      keywords: ['crop', 'cut', 'aspect ratio', 'square', 'framing', 'trim'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg>'
    },
    {
      id: 'image-rotate-flip',
      name: 'Rotate & Flip Image',
      url: '/tools/image-rotate-flip/',
      category: 'Edit',
      categoryKey: 'editing',
      feature: '90°/180° & Mirror',
      format: 'Zero Quality Loss',
      desc: 'Rotate photos 90°, 180°, 270° or flip horizontally and vertically in seconds.',
      keywords: ['rotate', 'flip', 'turn', 'mirror', 'orientation', 'upside down'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>'
    },
    {
      id: 'jpg-to-png',
      name: 'JPG to PNG',
      url: '/tools/jpg-to-png/',
      category: 'Convert',
      categoryKey: 'conversion',
      feature: 'Lossless PNG',
      format: 'JPG → PNG',
      desc: 'Convert JPG images to lossless PNG format with zero quality degradation.',
      keywords: ['jpg to png', 'jpeg to png', 'lossless', 'png converter'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4"/></svg>'
    },
    {
      id: 'png-to-jpg',
      name: 'PNG to JPG',
      url: '/tools/png-to-jpg/',
      category: 'Convert',
      categoryKey: 'conversion',
      feature: 'Custom BG Fill',
      format: 'PNG → JPG',
      desc: 'Convert PNG to lightweight JPG with customizable solid background replacement.',
      keywords: ['png to jpg', 'png to jpeg', 'transparency background', 'white background'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8V20m0 0l4-4m-4 4l-4-4M7 16V4m0 0L3 8m4-4l4 4"/></svg>'
    },
    {
      id: 'webp-converter',
      name: 'WebP Converter',
      url: '/tools/webp-converter/',
      category: 'Convert',
      categoryKey: 'conversion',
      feature: 'Ultra-Light WebP',
      format: 'JPG/PNG → WebP',
      desc: 'Convert JPG or PNG images into modern, highly compressed WebP files for websites.',
      keywords: ['webp', 'convert to webp', 'web performance', 'google webp', 'speed'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
    },
    {
      id: 'image-format-converter',
      name: 'Image Format Converter',
      url: '/tools/image-format-converter/',
      category: 'Convert',
      categoryKey: 'conversion',
      feature: 'Batch 3-Way',
      format: 'All Formats',
      desc: 'Universal batch converter between JPG, PNG, and WebP formats.',
      keywords: ['convert format', 'matrix converter', 'batch convert', 'image type', 'extension'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
    },
    {
      id: 'grayscale-image',
      name: 'Grayscale Image',
      url: '/tools/grayscale-image/',
      category: 'Edit',
      categoryKey: 'color',
      feature: 'Human Luminance',
      format: 'Bicubic Grayscale',
      desc: 'Convert color photos into clean black-and-white grayscale using precise luminance algorithms.',
      keywords: ['grayscale', 'black and white', 'monochrome', 'bw', 'filter'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z"/></svg>'
    },
    {
      id: 'brightness-contrast',
      name: 'Brightness & Contrast',
      url: '/tools/brightness-contrast/',
      category: 'Edit',
      categoryKey: 'color',
      feature: 'Exposure & Sat',
      format: 'Live Canvas Preview',
      desc: 'Adjust brightness, contrast, and saturation levels with real-time before/after comparison.',
      keywords: ['brightness', 'contrast', 'saturation', 'lighting', 'exposure', 'photo adjust'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    },
    {
      id: 'blur-sharpen-image',
      name: 'Blur & Sharpen',
      url: '/tools/blur-sharpen-image/',
      category: 'Edit',
      categoryKey: 'editing',
      feature: 'Bicubic Clarity',
      format: 'Gaussian & Sharpen',
      desc: 'Soften background details with blur or enhance edges with crisp convolution sharpening.',
      keywords: ['blur', 'sharpen', 'focus', 'soften', 'clarity', 'unsharp mask'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>'
    },
    {
      id: 'image-color-picker',
      name: 'Image Color Picker',
      url: '/tools/image-color-picker/',
      category: 'Color',
      categoryKey: 'color',
      feature: '8× Loupe Magnifier',
      format: 'HEX • RGB • HSL',
      desc: 'Inspect and sample any pixel with an enlarged loupe magnifier to get HEX, RGB, and HSL codes.',
      keywords: ['color picker', 'eyedropper', 'hex', 'rgb', 'hsl', 'sample color', 'palette inspect'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>'
    },
    {
      id: 'color-palette-generator',
      name: 'Color Palette Generator',
      url: '/tools/color-palette-generator/',
      category: 'Color',
      categoryKey: 'color',
      feature: 'Dominant Swatches',
      format: 'Copy HEX Codes',
      desc: 'Extract harmonious dominant color palettes directly from any photo or graphic.',
      keywords: ['palette', 'dominant colors', 'color scheme', 'extract colors', 'swatches'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>'
    },
    {
      id: 'favicon-generator',
      name: 'Favicon Generator',
      url: '/tools/favicon-generator/',
      category: 'Create',
      categoryKey: 'conversion',
      feature: 'Multi-Size Icons',
      format: 'ICO • PNG • 16-512px',
      desc: 'Generate square multi-resolution website favicons (16x16 up to 512x512) and HTML tags.',
      keywords: ['favicon', 'icon', 'apple touch icon', 'website icon', 'manifest icon', 'sizes'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
    },
    {
      id: 'image-to-base64',
      name: 'Image to Base64',
      url: '/tools/image-to-base64/',
      category: 'Developer',
      categoryKey: 'developer',
      feature: 'Data URL String',
      format: 'Embed in HTML/CSS',
      desc: 'Convert any image into a Base64 data URL string for embedding directly into HTML or CSS.',
      keywords: ['base64', 'data url', 'encode image', 'embed css', 'developer tool'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    },
    {
      id: 'base64-to-image',
      name: 'Base64 to Image',
      url: '/tools/base64-to-image/',
      category: 'Developer',
      categoryKey: 'developer',
      feature: 'Instant Decoder',
      format: 'Base64 → PNG/JPG',
      desc: 'Decode Base64 strings or data URLs back into downloadable PNG, JPG, or WebP images.',
      keywords: ['decode base64', 'base64 converter', 'data uri to image', 'developer'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>'
    },
    {
      id: 'social-media-image-resizer',
      name: 'Social Media Image Resizer',
      url: '/tools/social-media-image-resizer/',
      category: 'Resize',
      categoryKey: 'resizing',
      feature: 'Insta • FB • X • YT',
      format: '1080p • 4K • Story',
      desc: 'One-click resize for Instagram, Facebook, YouTube, LinkedIn, and X post dimensions.',
      keywords: ['social media', 'instagram post', 'youtube thumbnail', 'story', 'facebook cover', 'twitter header'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'
    },
    {
      id: 'passport-photo-resizer',
      name: 'Passport Photo Resizer',
      url: '/tools/passport-photo-resizer/',
      category: 'Resize',
      categoryKey: 'resizing',
      feature: '300 DPI Biometric',
      format: 'US • EU • Schengen',
      desc: 'Resize and align passport photos to standard US, UK, Schengen, and Indian ID dimensions with DPI settings.',
      keywords: ['passport photo', 'visa photo', '2x2 inch', '35x45 mm', 'id photo', 'biometric crop'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    },
    {
      id: 'meme-generator',
      name: 'Meme Generator',
      url: '/tools/meme-generator/',
      category: 'Create',
      categoryKey: 'editing',
      feature: 'Moveable Captions',
      format: 'Impact & Modern Font',
      desc: 'Add custom top and bottom captions, moveable text boxes, and impact styling to any image.',
      keywords: ['meme', 'funny', 'captions', 'impact font', 'text on image', 'meme maker'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'
    }
  ];

  function getActiveTools() {
    var lang = (document.documentElement && document.documentElement.lang) || 'en';
    var iconMap = {};
    if (window.ZAM_TOOLS) {
      window.ZAM_TOOLS.forEach(function (t) {
        if (t.id && t.icon) iconMap[t.id] = t.icon;
      });
    }
    if (window.ZAM_LOCALIZED_TOOLS && window.ZAM_LOCALIZED_TOOLS[lang]) {
      return window.ZAM_LOCALIZED_TOOLS[lang].map(function (t) {
        if (!t.icon && iconMap[t.id]) {
          t.icon = iconMap[t.id];
        }
        return t;
      });
    }
    return window.ZAM_TOOLS;
  }

  window.getToolUrl = function(tool) {
    if (tool && tool.url) return tool.url;
    var root = window.ZAM_ROOT || './';
    var id = typeof tool === 'string' ? tool : (tool.id || tool.key);
    return root + 'tools/' + id + '/index.html';
  };

  /**
   * Filter tools by query string
   */
  window.searchTools = function (query) {
    var tools = getActiveTools();
    if (!query || !query.trim()) return tools;
    var q = query.toLowerCase().trim();

    return tools.filter(tool => {
      const matchName = tool.name && tool.name.toLowerCase().includes(q);
      const matchDesc = tool.desc && tool.desc.toLowerCase().includes(q);
      const matchCat = tool.category && tool.category.toLowerCase().includes(q);
      const matchKeywords = tool.keywords && tool.keywords.some(k => k.toLowerCase().includes(q));
      return matchName || matchDesc || matchCat || matchKeywords;
    });
  };

  /**
   * Setup global search modal
   */
  window.initGlobalSearchModal = function () {
    const backdrop = document.querySelector('.search-modal-backdrop');
    const input = document.querySelector('.search-modal-input');
    const resultsContainer = document.querySelector('.search-results-list');
    const triggerBtns = document.querySelectorAll('.btn-header-search, [data-open-search]');
    const closeBtn = document.querySelector('.search-close-btn');

    if (!backdrop || !input || !resultsContainer) return;

    let selectedIndex = 0;
    let currentResults = [];

    function renderResults(tools) {
      currentResults = tools;
      selectedIndex = 0;
      resultsContainer.innerHTML = '';

      if (tools.length === 0) {
        resultsContainer.innerHTML = '<li class="search-empty-state">No matching image tools found. Try another search term.</li>';
        return;
      }

      tools.forEach((tool, idx) => {
        const li = document.createElement('li');
        const catKey = tool.categoryKey || 'conversion';
        const iconHtml = tool.icon ? `<div class="search-result-icon tool-icon-${catKey}">${tool.icon}</div>` : '';
        const featureHtml = tool.feature ? `<span class="tool-badge-feature">${tool.feature}</span>` : '';
        li.innerHTML = `
          <a href="${window.getToolUrl(tool)}" class="search-result-item ${idx === 0 ? 'is-selected' : ''}" data-index="${idx}">
            <div class="search-result-left">
              ${iconHtml}
              <div class="search-result-info">
                <div class="search-result-title-row">
                  <span class="search-result-title">${tool.name}</span>
                  ${featureHtml}
                </div>
                <span class="search-result-desc">${tool.desc}</span>
              </div>
            </div>
            <span class="tool-badge-category tool-cat-${catKey}">${tool.category}</span>
          </a>
        `;

        li.addEventListener('mouseenter', () => {
          selectedIndex = idx;
          updateSelection();
        });

        resultsContainer.appendChild(li);
      });
    }

    function openModal() {
      backdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      input.value = '';
      renderResults(getActiveTools());
      setTimeout(() => input.focus(), 60);
    }

    function closeModal() {
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    triggerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // Cmd+K or Ctrl+K or '/'
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('is-active')) {
          closeModal();
        } else {
          openModal();
        }
      }

      if (!backdrop.classList.contains('is-active')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentResults.length > 0) {
          selectedIndex = (selectedIndex + 1) % currentResults.length;
          updateSelection();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentResults.length > 0) {
          selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
          updateSelection();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentResults[selectedIndex]) {
          window.location.href = window.getToolUrl(currentResults[selectedIndex]);
        }
      }
    });

    function updateSelection() {
      const items = resultsContainer.querySelectorAll('.search-result-item');
      items.forEach((item, idx) => {
        item.classList.toggle('is-selected', idx === selectedIndex);
        if (idx === selectedIndex) {
          item.scrollIntoView({ block: 'nearest' });
        }
      });
    }

    input.addEventListener('input', () => {
      const filtered = window.searchTools(input.value);
      renderResults(filtered);
    });
  };
})();
