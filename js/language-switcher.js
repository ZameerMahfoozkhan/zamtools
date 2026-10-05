/**
 * ZamTools Language Switcher & Suggestion Banner
 * Handles dropdown interaction, keyboard navigation, and non-intrusive language suggestions.
 */

(function () {
  'use strict';

  // Language display names & suggestion phrases in native languages
  var NATIVE_SUGGESTIONS = {
    fr: {
      text: 'Cette page est également disponible en français.',
      action: 'Voir en français'
    },
    es: {
      text: 'Esta página también está disponible en español.',
      action: 'Ver en español'
    },
    id: {
      text: 'Halaman ini juga tersedia dalam Bahasa Indonesia.',
      action: 'Lihat dalam Bahasa Indonesia'
    },
    de: {
      text: 'Diese Seite ist auch auf Deutsch verfügbar.',
      action: 'Auf Deutsch ansehen'
    },
    pt: {
      text: 'Esta página também está disponível em português.',
      action: 'Ver em português'
    },
    it: {
      text: 'Questa pagina è disponibile anche in italiano.',
      action: 'Visualizza in italiano'
    },
    en: {
      text: 'This page is also available in English.',
      action: 'View in English'
    }
  };

  function initLanguageDropdown() {
    var switcher = document.getElementById('langSwitcher');
    if (!switcher) return;

    var toggleBtn = switcher.querySelector('.btn-lang-toggle');
    var menu = switcher.querySelector('.lang-dropdown-menu');
    if (!toggleBtn || !menu) return;

    function openMenu() {
      menu.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!switcher.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape & keyboard navigation
    switcher.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu();
        toggleBtn.focus();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        openMenu();
        var items = menu.querySelectorAll('.lang-dropdown-item');
        if (items.length > 0) items[0].focus();
      }
    });

    // Save language preference on user selection
    var items = switcher.querySelectorAll('.lang-dropdown-item');
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        var lang = item.getAttribute('hreflang');
        if (lang) {
          try {
            localStorage.setItem('zamtools-language', lang);
          } catch (err) {}
        }
      });
    });
  }

  function initLanguageSuggestion() {
    var banner = document.getElementById('langSuggestionBanner');
    if (!banner) return;

    // Check if dismissed before
    try {
      if (localStorage.getItem('zamtools-lang-dismissed') === 'true') {
        return;
      }
    } catch (e) {
      return;
    }

    var currentLang = document.documentElement.lang || 'en';

    // Detect browser language
    var rawBrowserLang = navigator.language || (navigator.languages && navigator.languages[0]) || '';
    var detectedLang = rawBrowserLang.toLowerCase().split('-')[0];

    // Only suggest if detected language is supported, different from current page, and exists as an alternate
    if (!detectedLang || detectedLang === currentLang || !NATIVE_SUGGESTIONS[detectedLang]) {
      return;
    }

    // Find the alternate link for detected language in <head>
    var alternateLink = document.querySelector('link[rel="alternate"][hreflang="' + detectedLang + '"]');
    if (!alternateLink || !alternateLink.href) {
      return;
    }

    var suggestionData = NATIVE_SUGGESTIONS[detectedLang];
    var textEl = document.getElementById('langSuggestionText');
    var actionEl = document.getElementById('langSuggestionAction');
    var closeBtn = document.getElementById('langSuggestionClose');

    if (textEl && actionEl) {
      textEl.textContent = suggestionData.text;
      var targetHref = alternateLink.getAttribute('href') || alternateLink.href;
      actionEl.href = targetHref.replace('https://zamtools.online', '') || '/';

      actionEl.addEventListener('click', function () {
        try {
          localStorage.setItem('zamtools-language', detectedLang);
        } catch (e) {}
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          banner.style.display = 'none';
          try {
            localStorage.setItem('zamtools-lang-dismissed', 'true');
          } catch (e) {}
        });
      }

      banner.style.display = 'block';
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initLanguageDropdown();
      initLanguageSuggestion();
    });
  } else {
    initLanguageDropdown();
    initLanguageSuggestion();
  }
})();
