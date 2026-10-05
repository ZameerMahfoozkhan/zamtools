/**
 * ZamTools Client-Side Route & Language Map
 * Enables client-side language switching, search modal routing, and cross-language linking
 */

(function () {
  window.ZAM_DOMAIN = 'https://zamtools.online';

  window.ZAM_LANGUAGES = {
    en: { name: 'English', nativeName: 'English', path: '/' },
    fr: { name: 'French', nativeName: 'Français', path: '/fr/' },
    es: { name: 'Spanish', nativeName: 'Español', path: '/es/' },
    id: { name: 'Indonesian', nativeName: 'Bahasa Indonesia', path: '/id/' },
    de: { name: 'German', nativeName: 'Deutsch', path: '/de/' },
    pt: { name: 'Portuguese', nativeName: 'Português', path: '/pt/' },
    it: { name: 'Italian', nativeName: 'Italiano', path: '/it/' }
  };

  // Function to detect current page language from <html lang="">
  window.getCurrentLanguage = function () {
    const htmlLang = (document.documentElement.getAttribute('lang') || 'en').toLowerCase().trim();
    if (window.ZAM_LANGUAGES[htmlLang]) {
      return htmlLang;
    }
    // Check path prefix
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})\//);
    if (match && window.ZAM_LANGUAGES[match[1]]) {
      return match[1];
    }
    return 'en';
  };
})();
