/**
 * ZamTools Reusable Component Templates
 * Generates SEO-compliant head, header with language switcher, footer, breadcrumbs, and search modal.
 */

const { DOMAIN, LANGUAGES, LANGUAGE_CODES } = require('../data/languages');
const { ROUTES } = require('../data/routes');
const { UI_TRANSLATIONS } = require('../data/translations/ui');

/**
 * Render complete <head> section
 */
function renderHead({
  lang,
  title,
  description,
  canonical,
  alternates,
  ogType = 'website',
  ogImage = 'https://zamtools.online/assets/og/og-default.png',
  structuredData,
  extraCss = []
}) {
  const langMeta = LANGUAGES[lang];
  const locale = langMeta ? langMeta.locale : 'en_US';

  // Build alternate links (7 languages + x-default)
  let alternateTags = '';
  if (alternates) {
    for (const code of LANGUAGE_CODES) {
      if (alternates[code]) {
        alternateTags += `  <link rel="alternate" hreflang="${code}" href="${alternates[code]}">\n`;
      }
    }
    if (alternates['x-default']) {
      alternateTags += `  <link rel="alternate" hreflang="x-default" href="${alternates['x-default']}">\n`;
    }
  }

  // OG alternate locales
  let ogLocales = '';
  for (const code of LANGUAGE_CODES) {
    if (code !== lang && LANGUAGES[code]) {
      ogLocales += `  <meta property="og:locale:alternate" content="${LANGUAGES[code].locale}">\n`;
    }
  }

  // Extra stylesheets
  let cssTags = '';
  for (const css of extraCss) {
    cssTags += `  <link rel="stylesheet" href="${css}">\n`;
  }

  // Structured data JSON-LD
  let jsonLdTag = '';
  if (structuredData) {
    jsonLdTag = `  <script type="application/ld+json">\n  ${JSON.stringify(structuredData, null, 2).replace(/\n/g, '\n  ')}\n  </script>\n`;
  }

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
${alternateTags}
  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:site_name" content="ZamTools">
  <meta property="og:locale" content="${locale}">
${ogLocales}
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${canonical}">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${ogImage}">

  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Core Stylesheets -->
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/components.css">
${cssTags}  <link rel="stylesheet" href="/css/responsive.css">
${jsonLdTag}</head>`;
}

/**
 * Render Header with accessible direct-link Language Selector
 */
function renderHeader(lang, currentRouteKey, alternates) {
  const ui = UI_TRANSLATIONS[lang];
  const langConfig = LANGUAGES[lang];
  const homeUrl = ROUTES.home[lang];
  const toolsUrl = ROUTES.toolsHub[lang];
  const faqUrl = ROUTES.faq[lang];
  const blogUrl = ROUTES.blogHub[lang];
  const aboutUrl = ROUTES.about[lang];

  // Helper to get local root-relative navigation link for any language
  function getLocalizedLink(code) {
    if (currentRouteKey && ROUTES[currentRouteKey] && ROUTES[currentRouteKey][code]) {
      return ROUTES[currentRouteKey][code];
    }
    if (alternates && alternates[code]) {
      // Strip domain to keep navigation local and root-relative
      return alternates[code].replace(DOMAIN, '') || '/';
    }
    return ROUTES.home[code] || '/';
  }

  // Desktop dropdown items
  let dropdownItems = '';
  for (const code of LANGUAGE_CODES) {
    const lMeta = LANGUAGES[code];
    const linkUrl = getLocalizedLink(code);
    const isActive = code === lang;
    dropdownItems += `        <a href="${linkUrl}" class="lang-dropdown-item ${isActive ? 'is-active' : ''}" role="menuitem" hreflang="${code}" lang="${code}" ${isActive ? 'aria-current="true"' : ''}>
          <span class="lang-item-native">${lMeta.nativeName}</span>
          <span class="lang-item-code">${code.toUpperCase()}</span>
        </a>\n`;
  }

  // Mobile drawer language items
  let mobileLangItems = '';
  for (const code of LANGUAGE_CODES) {
    const lMeta = LANGUAGES[code];
    const linkUrl = getLocalizedLink(code);
    const isActive = code === lang;
    mobileLangItems += `      <a href="${linkUrl}" class="mobile-lang-link ${isActive ? 'is-active' : ''}" hreflang="${code}" lang="${code}">
        <span>${lMeta.nativeName}</span>
        <span class="lang-item-code">${code.toUpperCase()}</span>
      </a>\n`;
  }

  return `<body>
  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="${homeUrl}" class="logo" aria-label="ZamTools Homepage">
        <div class="logo-symbol">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16l-10 12h10v4H4l10-12H4z"/>
          </svg>
        </div>
        <div class="logo-text"><span>Zam</span><span>Tools</span></div>
      </a>

      <nav class="nav-desktop" aria-label="Main Navigation">
        <a href="${toolsUrl}" class="nav-link ${currentRouteKey === 'toolsHub' ? 'active' : ''}">${ui.nav.allTools}</a>
        <a href="${homeUrl}#categories" class="nav-link">${ui.nav.categories}</a>
        <a href="${faqUrl}" class="nav-link ${currentRouteKey === 'faq' ? 'active' : ''}">${ui.nav.faq}</a>
        <a href="${blogUrl}" class="nav-link ${currentRouteKey && currentRouteKey.startsWith('blog') ? 'active' : ''}">${ui.nav.guides}</a>
        <a href="${aboutUrl}" class="nav-link ${currentRouteKey === 'about' ? 'active' : ''}">${ui.nav.about}</a>
      </nav>

      <div class="header-actions">
        <!-- Language Selector -->
        <div class="lang-switcher" id="langSwitcher">
          <button class="btn-lang-toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-label="${ui.langSelector.label}">
            <svg class="lang-globe-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span class="lang-current-name">${langConfig.nativeName}</span>
            <svg class="lang-chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="lang-dropdown-menu" role="menu">
${dropdownItems}          </div>
        </div>

        <button class="btn-header-search" aria-label="${ui.nav.search}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span>${ui.nav.search}</span>
          <kbd class="search-kbd">${ui.nav.searchKbd}</kbd>
        </button>

        <button class="btn-mobile-menu" aria-label="Toggle mobile menu" aria-expanded="false">
          <div class="hamburger-icon">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </div>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="nav-mobile-drawer">
    <a href="${toolsUrl}" class="nav-mobile-link">${ui.nav.allTools}</a>
    <a href="${homeUrl}#categories" class="nav-mobile-link">${ui.nav.categories}</a>
    <a href="${faqUrl}" class="nav-mobile-link">${ui.nav.faq}</a>
    <a href="${blogUrl}" class="nav-mobile-link">${ui.nav.guides}</a>
    <a href="${aboutUrl}" class="nav-mobile-link">${ui.nav.about}</a>
    <a href="${ROUTES.contact[lang]}" class="nav-mobile-link">${ui.nav.contact}</a>

    <div class="mobile-lang-section">
      <div class="mobile-lang-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span>${ui.langSelector.current}</span>
      </div>
      <div class="mobile-lang-grid">
${mobileLangItems}      </div>
    </div>
  </div>

  <!-- Non-intrusive Language Suggestion Banner -->
  <aside class="lang-suggestion-banner" id="langSuggestionBanner" style="display: none;" aria-label="Language Suggestion">
    <div class="container lang-suggestion-inner">
      <div class="lang-suggestion-content">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span id="langSuggestionText">${ui.suggestionBanner.text}</span>
      </div>
      <div class="lang-suggestion-actions">
        <a href="#" class="btn btn-primary btn-sm" id="langSuggestionAction">${ui.suggestionBanner.viewAction}</a>
        <button type="button" class="btn-suggestion-close" id="langSuggestionClose" aria-label="${ui.suggestionBanner.close}">✕</button>
      </div>
    </div>
  </aside>`;
}

/**
 * Render Breadcrumbs
 */
function renderBreadcrumbs(crumbs) {
  let itemsHtml = '';
  crumbs.forEach((crumb, idx) => {
    const isLast = idx === crumbs.length - 1;
    if (idx > 0) {
      itemsHtml += `\n        <span class="separator">/</span>`;
    }
    if (isLast) {
      itemsHtml += `\n        <span class="current">${escapeHtml(crumb.name)}</span>`;
    } else {
      itemsHtml += `\n        <a href="${crumb.url}">${escapeHtml(crumb.name)}</a>`;
    }
  });

  return `      <nav class="breadcrumbs" aria-label="Breadcrumb">
${itemsHtml}
      </nav>`;
}

/**
 * Render Global Search Modal
 */
function renderSearchModal(lang) {
  const ui = UI_TRANSLATIONS[lang];
  return `  <!-- Search Modal -->
  <div class="search-modal-backdrop" role="dialog" aria-modal="true" aria-label="${ui.nav.search}">
    <div class="search-modal">
      <div class="search-modal-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="search" class="search-modal-input" placeholder="${ui.searchModal.placeholder}" aria-label="${ui.searchModal.placeholder}" autocomplete="off" spellcheck="false">
        <button type="button" class="search-close-btn" aria-label="${ui.searchModal.close}">✕</button>
      </div>
      <ul class="search-results-list"></ul>
      <div class="search-modal-footer">
        <div class="search-shortcut-hints">
          <span><kbd>↑</kbd><kbd>↓</kbd> ${ui.searchModal.navigate}</span>
          <span><kbd>↵</kbd> ${ui.searchModal.select}</span>
        </div>
        <span><kbd>esc</kbd> ${ui.searchModal.close}</span>
      </div>
    </div>
  </div>`;
}

/**
 * Render Localized Footer
 */
function renderFooter(lang) {
  const ui = UI_TRANSLATIONS[lang];
  const { TOOL_TRANSLATIONS } = require('../data/translations/tools');
  const { CATEGORY_TRANSLATIONS } = require('../data/translations/categories');
  const { INFO_TRANSLATIONS } = require('../data/translations/info');

  const homeUrl = ROUTES.home[lang];
  const toolsUrl = ROUTES.toolsHub[lang];
  const blogUrl = ROUTES.blogHub[lang];
  const faqUrl = ROUTES.faq[lang];
  const aboutUrl = ROUTES.about[lang];
  const contactUrl = ROUTES.contact[lang];
  const privacyUrl = ROUTES.privacyPolicy[lang];
  const termsUrl = ROUTES.terms[lang];
  const disclaimerUrl = ROUTES.disclaimer[lang];
  const cookieUrl = ROUTES.cookiePolicy[lang];

  return `  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <!-- 1. Brand column (2fr) -->
      <div class="footer-brand">
        <a href="${homeUrl}" class="logo" aria-label="ZamTools Homepage">
          <div class="logo-symbol">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16l-10 12h10v4H4l10-12H4z"/>
            </svg>
          </div>
          <div class="logo-text"><span>Zam</span><span>Tools</span></div>
        </a>
        <p class="footer-tagline">${ui.tagline}</p>
        <div class="footer-privacy-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>${ui.privacyPromise}</span>
        </div>
      </div>

      <!-- 2. Tools column (1fr) -->
      <div class="footer-col">
        <h4 class="footer-col-title">${ui.footer.toolsCol}</h4>
        <ul class="footer-nav-list">
          <li><a href="${toolsUrl}" class="footer-nav-link">${ui.footer.allToolsLink}</a></li>
          <li><a href="${ROUTES.imageCompressor[lang]}" class="footer-nav-link">${TOOL_TRANSLATIONS.imageCompressor[lang].name}</a></li>
          <li><a href="${ROUTES.imageResizer[lang]}" class="footer-nav-link">${TOOL_TRANSLATIONS.imageResizer[lang].name}</a></li>
          <li><a href="${ROUTES.webpConverter[lang]}" class="footer-nav-link">${TOOL_TRANSLATIONS.webpConverter[lang].name}</a></li>
          <li><a href="${ROUTES.imageCropper[lang]}" class="footer-nav-link">${TOOL_TRANSLATIONS.imageCropper[lang].name}</a></li>
        </ul>
      </div>

      <!-- 3. Categories column (1fr) -->
      <div class="footer-col">
        <h4 class="footer-col-title">${ui.nav.categories}</h4>
        <ul class="footer-nav-list">
          <li><a href="${ROUTES.catCompression[lang]}" class="footer-nav-link">${CATEGORY_TRANSLATIONS.catCompression[lang].breadcrumb}</a></li>
          <li><a href="${ROUTES.catResizing[lang]}" class="footer-nav-link">${CATEGORY_TRANSLATIONS.catResizing[lang].breadcrumb}</a></li>
          <li><a href="${ROUTES.catConversion[lang]}" class="footer-nav-link">${CATEGORY_TRANSLATIONS.catConversion[lang].breadcrumb}</a></li>
          <li><a href="${ROUTES.catEditing[lang]}" class="footer-nav-link">${CATEGORY_TRANSLATIONS.catEditing[lang].breadcrumb}</a></li>
        </ul>
      </div>

      <!-- 4. Company column (1fr) -->
      <div class="footer-col">
        <h4 class="footer-col-title">${ui.footer.companyCol}</h4>
        <ul class="footer-nav-list">
          <li><a href="${aboutUrl}" class="footer-nav-link">${ui.nav.about}</a></li>
          <li><a href="${contactUrl}" class="footer-nav-link">${ui.nav.contact}</a></li>
          <li><a href="${faqUrl}" class="footer-nav-link">${ui.nav.faq}</a></li>
          <li><a href="${blogUrl}" class="footer-nav-link">${ui.nav.guides}</a></li>
        </ul>
      </div>

      <!-- 5. Legal column (1fr) -->
      <div class="footer-col">
        <h4 class="footer-col-title">${ui.footer.legalCol}</h4>
        <ul class="footer-nav-list">
          <li><a href="${privacyUrl}" class="footer-nav-link">${INFO_TRANSLATIONS.privacyPolicy[lang].breadcrumb}</a></li>
          <li><a href="${termsUrl}" class="footer-nav-link">${INFO_TRANSLATIONS.terms[lang].breadcrumb}</a></li>
          <li><a href="${disclaimerUrl}" class="footer-nav-link">${INFO_TRANSLATIONS.disclaimer[lang].breadcrumb}</a></li>
          <li><a href="${cookieUrl}" class="footer-nav-link">${INFO_TRANSLATIONS.cookiePolicy[lang].breadcrumb}</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p class="copyright">${ui.footer.rightsReserved}</p>
      <p class="footer-legal-notice">${ui.footer.legalNotice}</p>
    </div>
  </footer>`;
}

/**
 * Render Core Scripts
 */
function renderScripts({ lang, toolScript = null }) {
  let toolTag = '';
  if (toolScript) {
    toolTag = `  <script src="/js/tools/${toolScript}"></script>\n`;
  }

  return `  <!-- Scripts -->
  <script src="/js/config.js"></script>
  <script src="/js/core.js"></script>
  <script src="/js/routes.js"></script>
  <script src="/js/toasts.js"></script>
  <script src="/js/ui.js"></script>
  <script src="/js/image-utils.js"></script>
  <script src="/js/downloads.js"></script>
  <script src="/js/search-data.js"></script>
  <script src="/js/search.js"></script>
  <script src="/js/language-switcher.js"></script>
  <script src="/js/main.js"></script>
${toolTag}</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = {
  renderHead,
  renderHeader,
  renderBreadcrumbs,
  renderSearchModal,
  renderFooter,
  renderScripts,
  escapeHtml
};
