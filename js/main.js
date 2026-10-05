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
});
