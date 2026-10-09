/**
 * ZamTools Main Site Engine
 * Mobile navigation, search modal triggers, FAQ accordions, AdSlot manager
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.querySelector('.btn-mobile-menu');
  const mobileDrawer = document.querySelector('.nav-mobile-drawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('menu-open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when clicking a link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileMenuBtn.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Global Search Modal
  if (window.initGlobalSearchModal) {
    window.initGlobalSearchModal();
  }

  // 3. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Close siblings if desired or allow multi-open
        item.classList.toggle('is-open', !isOpen);
      });
    }
  });

  // 4. AdSlot Manager (Collapsed and inactive by default)
  if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.adsense && SITE_CONFIG.adsense.enabled) {
    const adContainers = document.querySelectorAll('.ad-slot-container');
    adContainers.forEach(container => {
      container.classList.add('is-active');
      // When AdSense is ready, dynamic tags or ins elements will be mounted here
    });
  }

  // 5. Global Copy Trigger Buttons
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      const msg = btn.getAttribute('data-copy-msg') || 'Copied to clipboard!';
      if (window.copyToClipboard) {
        window.copyToClipboard(text, msg);
      }
    });
  });

  // 6. Universal Interactive Tactile Feedback & Ripple Effect on Clicks
  // Gives immediate visual & physical confirmation that user's click was registered
  document.addEventListener('pointerdown', (e) => {
    const btn = e.target.closest(
      '.btn, button, .action-btn, .ratio-btn, .preset-btn, .target-preset-btn, .segmented-btn, .btn-header-search, .lang-btn, .tab-btn, .faq-question'
    );
    if (!btn) return;

    // Trigger instant micro-pulse
    btn.classList.remove('btn-click-pulse');
    void btn.offsetWidth; // Force reflow
    btn.classList.add('btn-click-pulse');

    // Create and position material ripple wave
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement('span');
    ripple.className = 'zam-ripple';

    const clientX = e.clientX || (rect.left + rect.width / 2);
    const clientY = e.clientY || (rect.top + rect.height / 2);
    const x = clientX - rect.left - (size / 2);
    const y = clientY - rect.top - (size / 2);

    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    btn.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 550);
  }, { passive: true });
});
