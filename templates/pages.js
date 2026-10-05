/**
 * ZamTools Page Renderers
 * Generates full HTML documents for:
 * 1. Tool Pages (140 pages)
 * 2. Homepages (7 pages)
 * 3. Tools Hub Pages (7 pages)
 * 4. Category Pages (28 pages)
 * 5. Blog Hub & Post Pages (42 pages)
 * 6. Info & Legal Pages (49 pages)
 * 7. 404 Pages (7 pages)
 */

const { DOMAIN, LANGUAGES, LANGUAGE_CODES } = require('../data/languages');
const { ROUTES, TOOL_KEYS, getAbsoluteUrl, getAlternates } = require('../data/routes');
const { UI_TRANSLATIONS } = require('../data/translations/ui');
const { TOOL_TRANSLATIONS } = require('../data/translations/tools');
const { HOME_TRANSLATIONS } = require('../data/translations/home');
const { CATEGORY_TRANSLATIONS } = require('../data/translations/categories');
const { BLOG_TRANSLATIONS } = require('../data/translations/blog');
const { INFO_TRANSLATIONS } = require('../data/translations/info');
const { renderWorkspace } = require('../data/workspaces');

const {
  renderHead,
  renderHeader,
  renderBreadcrumbs,
  renderSearchModal,
  renderFooter,
  renderScripts,
  escapeHtml
} = require('./components');

/**
 * 1. RENDER TOOL PAGE (20 tools x 7 languages = 140 pages)
 */
function renderToolPage(toolKey, lang) {
  const route = ROUTES[toolKey];
  const toolData = TOOL_TRANSLATIONS[toolKey][lang];
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl(toolKey, lang);
  const alternates = getAlternates(toolKey);

  // Breadcrumbs
  const crumbs = [
    { name: ui.breadcrumbs.home, url: ROUTES.home[lang] },
    { name: ui.breadcrumbs.tools, url: ROUTES.toolsHub[lang] },
    { name: toolData.name, url: route[lang] }
  ];

  // Structured Data: SoftwareApplication & BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": toolData.name,
        "operatingSystem": "All",
        "applicationCategory": "MultimediaApplication",
        "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": toolData.metaDescription,
        "url": canonical
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((c, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": c.name,
          "item": `${DOMAIN}${c.url}`
        }))
      }
    ]
  };

  // Render Head & Header
  const headHtml = renderHead({
    lang,
    title: toolData.title,
    description: toolData.metaDescription,
    canonical,
    alternates,
    ogType: 'website',
    structuredData,
    extraCss: ['/css/tools.css']
  });

  const headerHtml = renderHeader(lang, toolKey, alternates);

  // Render Localized Workspace
  const workspaceHtml = renderWorkspace(toolKey, lang);

  // Render How-To Steps
  let howToHtml = '';
  if (toolData.howToSteps && toolData.howToSteps.length > 0) {
    const stepsHtml = toolData.howToSteps.map((step, idx) => `
          <li class="step-card">
            <div class="step-number">${idx + 1}</div>
            <h4>${escapeHtml(step.title)}</h4>
            <p>${escapeHtml(step.desc)}</p>
          </li>`).join('');

    howToHtml = `
      <section class="section section-subtle">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">${ui.breadcrumbs.tools}</div>
            <h2>${escapeHtml(toolData.howToTitle || 'How to Use This Tool')}</h2>
          </div>
          <ol class="steps-list">
            ${stepsHtml}
          </ol>
        </div>
      </section>`;
  }

  // Render Features & Tips
  let featuresHtml = '';
  if (toolData.features && toolData.features.length > 0) {
    const featureBoxes = toolData.features.map(f => `
          <div class="feature-box">
            <div class="feature-box-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            </div>
            <h4>${escapeHtml(f.title)}</h4>
            <p>${escapeHtml(f.desc)}</p>
          </div>`).join('');

    featuresHtml = `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">${escapeHtml(toolData.name)}</div>
            <h2>${escapeHtml(toolData.featuresTitle || 'Key Features')}</h2>
          </div>
          <div class="features-grid">
            ${featureBoxes}
          </div>
        </div>
      </section>`;
  }

  // Render Tips
  let tipsHtml = '';
  if (toolData.tipsText) {
    tipsHtml = `
      <div class="container" style="margin-top: var(--space-8); margin-bottom: var(--space-8);">
        <div class="editorial-wrapper" style="border-left: 4px solid var(--primary); padding: var(--space-6);">
          <h3 style="font-size: 1.25rem; margin-bottom: var(--space-2);">${escapeHtml(toolData.tipsTitle || 'Pro Optimization Tips')}</h3>
          <p style="margin: 0; color: var(--text-muted); line-height: 1.7;">${escapeHtml(toolData.tipsText)}</p>
        </div>
      </div>`;
  }

  // Render FAQs
  let faqHtml = '';
  if (toolData.faqs && toolData.faqs.length > 0) {
    const faqItems = toolData.faqs.map(f => `
          <div class="faq-item">
            <button class="faq-question">
              <span>${escapeHtml(f.q)}</span>
              <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>${escapeHtml(f.a)}</p>
            </div>
          </div>`).join('');

    faqHtml = `
      <section class="section section-subtle">
        <div class="container-narrow">
          <div class="section-header">
            <div class="eyebrow">${ui.nav.faq}</div>
            <h2>${escapeHtml(toolData.faqTitle || 'Frequently Asked Questions')}</h2>
          </div>
          <div class="faq-list">
            ${faqItems}
          </div>
        </div>
      </section>`;
  }

  // Render Related Tools
  let relatedToolsHtml = '';
  if (toolData.relatedTools && toolData.relatedTools.length > 0) {
    const relatedCards = toolData.relatedTools.map(rKey => {
      const rRoute = ROUTES[rKey];
      const rTrans = TOOL_TRANSLATIONS[rKey] && TOOL_TRANSLATIONS[rKey][lang];
      if (!rRoute || !rTrans) return '';
      return `
        <a href="${rRoute[lang]}" class="tool-card">
          <div class="tool-card-header">
            <span class="tool-card-category">${escapeHtml(rTrans.category)}</span>
          </div>
          <h3 class="tool-card-title">${escapeHtml(rTrans.name)}</h3>
          <p class="tool-card-desc">${escapeHtml(rTrans.lead)}</p>
          <div class="tool-card-footer">
            <span>${ui.controls.openTool}</span>
          </div>
        </a>`;
    }).join('');

    relatedToolsHtml = `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">${ui.breadcrumbs.tools}</div>
            <h2>${lang === 'fr' ? 'Outils associés' : lang === 'es' ? 'Herramientas relacionadas' : lang === 'id' ? 'Alat Terkait' : lang === 'de' ? 'Verwandte Bildtools' : lang === 'pt' ? 'Ferramentas Relacionadas' : lang === 'it' ? 'Strumenti correlati' : 'Related Image Tools'}</h2>
          </div>
          <div class="tools-grid">
            ${relatedCards}
          </div>
        </div>
      </section>`;
  }

  // Privacy banner
  const privacyBannerHtml = `
      <div class="privacy-banner">
        <div class="privacy-banner-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="privacy-banner-content">
          <h4>${ui.privacyPromise}</h4>
          <p>${ui.privacyDetail}</p>
        </div>
      </div>`;

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang, toolScript: route.script });

  return `${headHtml}
${headerHtml}
  <main class="section">
    <div class="container">
${renderBreadcrumbs(crumbs)}

      <div class="tool-header-block">
        <h1>${escapeHtml(toolData.h1)}</h1>
        <p class="tool-header-lead">${escapeHtml(toolData.lead)}</p>
      </div>

      <!-- Main Tool Workspace -->
${workspaceHtml}

      <!-- Collapsed Ad Placeholder -->
      <div class="ad-slot-container" data-slot="content"></div>

${privacyBannerHtml}
    </div>
  </main>

${howToHtml}
${featuresHtml}
${tipsHtml}
${faqHtml}
${relatedToolsHtml}

${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

/**
 * 2. RENDER HOMEPAGE (7 pages)
 */
function renderHomePage(lang) {
  const homeData = HOME_TRANSLATIONS[lang].home;
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl('home', lang);
  const alternates = getAlternates('home');

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "ZamTools",
        "url": `${DOMAIN}/`,
        "logo": `${DOMAIN}/favicon.svg`,
        "description": homeData.metaDescription
      },
      {
        "@type": "WebSite",
        "name": "ZamTools",
        "url": `${DOMAIN}${ROUTES.home[lang]}`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${DOMAIN}${ROUTES.toolsHub[lang]}?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const headHtml = renderHead({
    lang,
    title: homeData.title,
    description: homeData.metaDescription,
    canonical,
    alternates,
    structuredData,
    extraCss: ['/css/tools.css']
  });

  const headerHtml = renderHeader(lang, 'home', alternates);

  // Floating Pills
  const pillsHtml = homeData.pills.map(p => `
          <span class="badge badge-neutral" style="padding: 0.4rem 0.9rem; font-size: 0.8125rem;">${escapeHtml(p)}</span>`).join('');

  // Popular Tools Cards (Compressor, Resizer, WebP, Cropper, Color Picker, Target Size)
  const popularKeys = ['imageCompressor', 'imageResizer', 'webpConverter', 'imageCropper', 'imageColorPicker', 'imageToTargetSize'];
  const popularCardsHtml = popularKeys.map(k => {
    const t = TOOL_TRANSLATIONS[k][lang];
    const r = ROUTES[k];
    return `
          <a href="${r[lang]}" class="tool-card">
            <div class="tool-card-header">
              <span class="tool-card-category">${escapeHtml(t.category)}</span>
            </div>
            <h3 class="tool-card-title">${escapeHtml(t.name)}</h3>
            <p class="tool-card-desc">${escapeHtml(t.lead)}</p>
            <div class="tool-card-footer">
              <span class="tool-card-action">${homeData.openTool}</span>
            </div>
          </a>`;
  }).join('');

  // Categories sections with all 20 tools
  const categoriesDef = [
    { catKey: 'catCompression', label: 'Compress', tools: ['imageCompressor', 'imageToTargetSize'] },
    { catKey: 'catResizing', label: 'Resize', tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer'] },
    { catKey: 'catConversion', label: 'Convert', tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter'] },
    { catKey: 'catEditing', label: 'Edit', tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage'] },
    { catKey: null, label: 'Color', tools: ['imageColorPicker', 'colorPaletteGenerator'] },
    { catKey: null, label: 'Create & Dev', tools: ['faviconGenerator', 'memeGenerator', 'imageToBase64', 'base64ToImage'] }
  ];

  const categoriesCatalogHtml = categoriesDef.map(cat => {
    const cards = cat.tools.map(tk => {
      const t = TOOL_TRANSLATIONS[tk][lang];
      const r = ROUTES[tk];
      return `
              <a href="${r[lang]}" class="tool-card">
                <h4 class="tool-card-title">${escapeHtml(t.name)}</h4>
                <p class="tool-card-desc">${escapeHtml(t.lead)}</p>
                <div class="tool-card-footer"><span class="tool-card-action">→</span></div>
              </a>`;
    }).join('');

    const hubLink = cat.catKey ? `<a href="${ROUTES[cat.catKey][lang]}" class="badge badge-primary" style="text-decoration:none;">${cat.label} →</a>` : `<span class="badge badge-primary">${cat.label}</span>`;

    return `
          <div>
            <h3 style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-6);">
              ${hubLink}
            </h3>
            <div class="tools-grid">
              ${cards}
            </div>
          </div>`;
  }).join('');

  // Principles / Why ZamTools
  const principlesHtml = homeData.principles.map(p => `
          <div class="feature-box">
            <div class="feature-box-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            </div>
            <h4>${escapeHtml(p.title)}</h4>
            <p>${escapeHtml(p.desc)}</p>
          </div>`).join('');

  // Workflow steps
  const stepsHtml = homeData.workflowSteps.map(s => `
          <li class="step-card">
            <div class="step-number">${s.num}</div>
            <h4>${escapeHtml(s.title)}</h4>
            <p>${escapeHtml(s.desc)}</p>
          </li>`).join('');

  // FAQs
  const faqsHtml = homeData.faqs.map(f => `
          <div class="faq-item">
            <button class="faq-question">
              <span>${escapeHtml(f.q)}</span>
              <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>${escapeHtml(f.a)}</p>
            </div>
          </div>`).join('');

  // Guides
  const guidesKeys = ['blogHowToCompress', 'blogJpgVsPngVsWebp', 'blogHowToResize'];
  const guidesCardsHtml = guidesKeys.map(gk => {
    const post = BLOG_TRANSLATIONS[gk][lang];
    const r = ROUTES[gk];
    return `
          <a href="${r[lang]}" class="tool-card">
            <span class="tool-card-category">${escapeHtml(post.category)}</span>
            <h3 class="tool-card-title" style="margin-top: var(--space-2);">${escapeHtml(post.h1)}</h3>
            <p class="tool-card-desc">${escapeHtml(post.lead)}</p>
            <div class="tool-card-footer">
              <span>${homeData.readGuide}</span>
            </div>
          </a>`;
  }).join('');

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main>
    <!-- Hero Section -->
    <section class="section hero-section" style="padding-top: var(--space-20); padding-bottom: var(--space-16);">
      <div class="container" style="text-align: center; max-width: 900px;">
        <div class="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          ${escapeHtml(homeData.eyebrow)}
        </div>

        <h1 style="margin-bottom: var(--space-4);">${escapeHtml(homeData.h1)}</h1>
        <p style="font-size: 1.25rem; color: var(--text-muted); line-height: 1.6; margin-bottom: var(--space-3); max-width: 760px; margin-left: auto; margin-right: auto;">
          ${escapeHtml(homeData.lead)}
        </p>
        <p style="font-size: 0.9375rem; color: var(--text-subtle); margin-bottom: var(--space-8);">
          ${escapeHtml(homeData.subLead)}
        </p>

        <div class="hero-cta-group" style="display: inline-flex; gap: var(--space-4); justify-content: center; margin-bottom: var(--space-12);">
          <a href="#search-section" class="btn btn-primary btn-lg">
            ${escapeHtml(homeData.exploreBtn)}
            <span class="btn-icon-bubble">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
          </a>
          <a href="${ROUTES.imageCompressor[lang]}" class="btn btn-secondary btn-lg">
            ${escapeHtml(homeData.compressBtn)}
          </a>
        </div>

        <div style="display: flex; justify-content: center; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-4);">
          ${pillsHtml}
        </div>
      </div>
    </section>

    <!-- Homepage Live Tool Search -->
    <section id="search-section" class="section section-subtle" style="padding-top: var(--space-10); padding-bottom: var(--space-12);">
      <div class="container-narrow">
        <div style="text-align: center; margin-bottom: var(--space-6);">
          <h2 style="font-size: 1.5rem; margin-bottom: var(--space-2);">${escapeHtml(homeData.searchTitle)}</h2>
          <p style="font-size: 0.9375rem;">${escapeHtml(homeData.searchDesc)}</p>
        </div>

        <div style="position: relative; max-width: 600px; margin: 0 auto;">
          <input 
            type="search" 
            id="homeSearchInput" 
            name="home_search"
            class="form-input" 
            placeholder="${escapeHtml(homeData.searchPlaceholder)}" 
            style="padding: 0.9rem 1.25rem 0.9rem 3rem; font-size: 1.05rem; border-radius: var(--radius-full); box-shadow: var(--shadow-sm);"
            aria-label="${escapeHtml(homeData.searchPlaceholder)}"
          >
          <svg style="position: absolute; left: 1.1rem; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; color: var(--text-subtle); pointer-events: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>

        <div id="homeSearchResults" style="margin-top: var(--space-6); display: none;">
          <div class="tools-grid" id="homeSearchGrid"></div>
        </div>
      </div>
    </section>

    <!-- Popular Tools Showcase -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">${escapeHtml(homeData.popularEyebrow)}</div>
          <h2>${escapeHtml(homeData.popularTitle)}</h2>
          <p>${escapeHtml(homeData.popularDesc)}</p>
        </div>
        <div class="tools-grid">
          ${popularCardsHtml}
        </div>
      </div>
    </section>

    <!-- Categories Catalog -->
    <section id="categories" class="section section-subtle">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">${escapeHtml(homeData.categoriesEyebrow)}</div>
          <h2>${escapeHtml(homeData.categoriesTitle)}</h2>
          <p>${escapeHtml(homeData.categoriesDesc)}</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-12);">
          ${categoriesCatalogHtml}
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">${escapeHtml(homeData.principlesEyebrow)}</div>
          <h2>${escapeHtml(homeData.principlesTitle)}</h2>
          <p>${escapeHtml(homeData.principlesDesc)}</p>
        </div>
        <div class="features-grid">
          ${principlesHtml}
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="section section-subtle">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">${escapeHtml(homeData.workflowEyebrow)}</div>
          <h2>${escapeHtml(homeData.workflowTitle)}</h2>
          <p>${escapeHtml(homeData.workflowDesc)}</p>
        </div>
        <ol class="steps-list">
          ${stepsHtml}
        </ol>
      </div>
    </section>

    <!-- FAQs -->
    <section class="section">
      <div class="container-narrow">
        <div class="section-header">
          <div class="eyebrow">${escapeHtml(homeData.faqEyebrow)}</div>
          <h2>${escapeHtml(homeData.faqTitle)}</h2>
          <p>${escapeHtml(homeData.faqDesc)}</p>
        </div>
        <div class="faq-list">
          ${faqsHtml}
        </div>
      </div>
    </section>

    <!-- Latest Guides -->
    <section class="section section-subtle">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">${escapeHtml(homeData.guidesEyebrow)}</div>
          <h2>${escapeHtml(homeData.guidesTitle)}</h2>
          <p>${escapeHtml(homeData.guidesDesc)}</p>
        </div>
        <div class="tools-grid">
          ${guidesCardsHtml}
        </div>
      </div>
    </section>
  </main>

${footerHtml}
${searchModalHtml}
${scriptsHtml}
  <script>
    // In-page live search wiring
    const homeInput = document.getElementById('homeSearchInput');
    const homeResults = document.getElementById('homeSearchResults');
    const homeGrid = document.getElementById('homeSearchGrid');

    if (homeInput && homeResults && homeGrid) {
      homeInput.addEventListener('input', () => {
        const val = homeInput.value.trim();
        if (!val) {
          homeResults.style.display = 'none';
          return;
        }

        const matches = window.searchTools ? window.searchTools(val) : [];
        homeResults.style.display = 'block';
        homeGrid.innerHTML = '';

        if (matches.length === 0) {
          homeGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--text-subtle);">No matching image tools found.</p>';
          return;
        }

        matches.forEach(tool => {
          const card = document.createElement('a');
          card.href = (window.getToolUrl ? window.getToolUrl(tool) : tool.url);
          card.className = 'tool-card';
          card.innerHTML = \`
            <div class="tool-card-header">
              <span class="tool-card-category">\${tool.category}</span>
            </div>
            <h3 class="tool-card-title">\${tool.name}</h3>
            <p class="tool-card-desc">\${tool.desc}</p>
            <div class="tool-card-footer">
              <span class="tool-card-action">→</span>
            </div>
          \`;
          homeGrid.appendChild(card);
        });
      });
    }
  </script>`;
}

/**
 * 3. RENDER TOOLS HUB PAGE (7 pages)
 */
function renderToolsHubPage(lang) {
  const hubData = HOME_TRANSLATIONS[lang].toolsHub;
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl('toolsHub', lang);
  const alternates = getAlternates('toolsHub');

  const crumbs = [
    { name: hubData.breadcrumbHome, url: ROUTES.home[lang] },
    { name: hubData.breadcrumbTools, url: ROUTES.toolsHub[lang] }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "item": `${DOMAIN}${c.url}`
    }))
  };

  const headHtml = renderHead({
    lang,
    title: hubData.title,
    description: hubData.metaDescription,
    canonical,
    alternates,
    structuredData,
    extraCss: ['/css/tools.css']
  });

  const headerHtml = renderHeader(lang, 'toolsHub', alternates);

  // Group all 20 tools by category
  const categoriesDef = [
    { label: 'Compression', tools: ['imageCompressor', 'imageToTargetSize'] },
    { label: 'Resizing', tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer'] },
    { label: 'Conversion', tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter'] },
    { label: 'Editing & Filters', tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage'] },
    { label: 'Color Tools', tools: ['imageColorPicker', 'colorPaletteGenerator'] },
    { label: 'Developer & Creative', tools: ['faviconGenerator', 'memeGenerator', 'imageToBase64', 'base64ToImage'] }
  ];

  const sectionsHtml = categoriesDef.map(cat => {
    const cards = cat.tools.map(tk => {
      const t = TOOL_TRANSLATIONS[tk][lang];
      const r = ROUTES[tk];
      return `
          <a href="${r[lang]}" class="tool-card">
            <div class="tool-card-header">
              <span class="tool-card-category">${escapeHtml(t.category)}</span>
            </div>
            <h3 class="tool-card-title">${escapeHtml(t.name)}</h3>
            <p class="tool-card-desc">${escapeHtml(t.lead)}</p>
            <div class="tool-card-footer">
              <span class="tool-card-action">${ui.controls.openTool}</span>
            </div>
          </a>`;
    }).join('');

    return `
      <section style="margin-bottom: var(--space-12);">
        <h2 style="font-size: 1.5rem; margin-bottom: var(--space-6); display: flex; align-items: center; gap: var(--space-3);">
          <span class="badge badge-primary">${cat.label}</span>
        </h2>
        <div class="tools-grid">
          ${cards}
        </div>
      </section>`;
  }).join('');

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main class="section">
    <div class="container">
${renderBreadcrumbs(crumbs)}

      <div class="tool-header-block" style="text-align: center; margin-bottom: var(--space-12);">
        <h1>${escapeHtml(hubData.h1)}</h1>
        <p class="tool-header-lead">${escapeHtml(hubData.lead)}</p>
      </div>

${sectionsHtml}
    </div>
  </main>
${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

/**
 * 4. RENDER CATEGORY PAGE (4 categories x 7 languages = 28 pages)
 */
function renderCategoryPage(catKey, lang) {
  const catData = CATEGORY_TRANSLATIONS[catKey][lang];
  const route = ROUTES[catKey];
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl(catKey, lang);
  const alternates = getAlternates(catKey);

  const crumbs = [
    { name: ui.breadcrumbs.home, url: ROUTES.home[lang] },
    { name: ui.breadcrumbs.tools, url: ROUTES.toolsHub[lang] },
    { name: catData.breadcrumb, url: route[lang] }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "item": `${DOMAIN}${c.url}`
    }))
  };

  const headHtml = renderHead({
    lang,
    title: catData.title,
    description: catData.metaDescription,
    canonical,
    alternates,
    structuredData,
    extraCss: ['/css/tools.css']
  });

  const headerHtml = renderHeader(lang, catKey, alternates);

  // Tools in this category
  const toolCards = catData.tools.map(tk => {
    const t = TOOL_TRANSLATIONS[tk][lang];
    const r = ROUTES[tk];
    return `
        <a href="${r[lang]}" class="tool-card">
          <div class="tool-card-header">
            <span class="tool-card-category">${escapeHtml(t.category)}</span>
          </div>
          <h3 class="tool-card-title">${escapeHtml(t.name)}</h3>
          <p class="tool-card-desc">${escapeHtml(t.lead)}</p>
          <div class="tool-card-footer">
            <span class="tool-card-action">${ui.controls.openTool}</span>
          </div>
        </a>`;
  }).join('');

  // Benefits
  const benefitsHtml = catData.benefits.map(b => `
        <div class="feature-box">
          <h4>${escapeHtml(b.title)}</h4>
          <p>${escapeHtml(b.desc)}</p>
        </div>`).join('');

  // FAQs
  const faqsHtml = catData.faqs.map(f => `
        <div class="faq-item">
          <button class="faq-question">
            <span>${escapeHtml(f.q)}</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-answer">
            <p>${escapeHtml(f.a)}</p>
          </div>
        </div>`).join('');

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main class="section">
    <div class="container">
${renderBreadcrumbs(crumbs)}

      <div class="tool-header-block">
        <h1>${escapeHtml(catData.h1)}</h1>
        <p class="tool-header-lead">${escapeHtml(catData.lead)}</p>
      </div>

      <div class="tools-grid" style="margin-bottom: var(--space-16);">
        ${toolCards}
      </div>

      <div class="editorial-wrapper" style="margin-bottom: var(--space-12);">
        <h2 style="font-size: 1.5rem; margin-bottom: var(--space-4);">${escapeHtml(catData.overviewTitle)}</h2>
        <p style="color: var(--text); line-height: 1.8; margin-bottom: var(--space-4);">${escapeHtml(catData.overviewP1)}</p>
        <p style="color: var(--text); line-height: 1.8;">${escapeHtml(catData.overviewP2)}</p>
      </div>

      <div class="section-header" style="margin-top: var(--space-12);">
        <h2>${escapeHtml(catData.benefitsTitle)}</h2>
      </div>
      <div class="features-grid" style="margin-bottom: var(--space-16);">
        ${benefitsHtml}
      </div>

      <div class="section-header">
        <h2>${ui.nav.faq}</h2>
      </div>
      <div class="faq-list" style="max-width: 820px; margin: 0 auto;">
        ${faqsHtml}
      </div>
    </div>
  </main>
${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

/**
 * 5. RENDER BLOG HUB PAGE (7 pages)
 */
function renderBlogHubPage(lang) {
  const hubData = BLOG_TRANSLATIONS.blogHub[lang];
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl('blogHub', lang);
  const alternates = getAlternates('blogHub');

  const crumbs = [
    { name: ui.breadcrumbs.home, url: ROUTES.home[lang] },
    { name: hubData.breadcrumb, url: ROUTES.blogHub[lang] }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "item": `${DOMAIN}${c.url}`
    }))
  };

  const headHtml = renderHead({
    lang,
    title: hubData.title,
    description: hubData.metaDescription,
    canonical,
    alternates,
    structuredData,
    extraCss: ['/css/tools.css']
  });

  const headerHtml = renderHeader(lang, 'blogHub', alternates);

  // 5 Articles
  const articleKeys = ['blogHowToCompress', 'blogHowToResize', 'blogHowToReduceSize', 'blogJpgVsPngVsWebp', 'blogWhatIsWebp'];
  const articleCards = articleKeys.map(ak => {
    const post = BLOG_TRANSLATIONS[ak][lang];
    const r = ROUTES[ak];
    return `
        <article class="tool-card" style="display: flex; flex-direction: column;">
          <div class="tool-card-header">
            <span class="tool-card-category">${escapeHtml(post.category)}</span>
            <span style="font-size: 0.8125rem; color: var(--text-subtle);">${escapeHtml(post.readTime)}</span>
          </div>
          <h2 class="tool-card-title" style="font-size: 1.25rem; margin-top: var(--space-2); margin-bottom: var(--space-2);">
            <a href="${r[lang]}" style="color: inherit; text-decoration: none;">${escapeHtml(post.h1)}</a>
          </h2>
          <p class="tool-card-desc" style="flex: 1;">${escapeHtml(post.lead)}</p>
          <div class="tool-card-footer">
            <span style="font-size: 0.8125rem; color: var(--text-subtle);">${escapeHtml(post.date)}</span>
            <a href="${r[lang]}" class="tool-card-action">${escapeHtml(hubData.readGuide)}</a>
          </div>
        </article>`;
  }).join('');

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main class="section">
    <div class="container">
${renderBreadcrumbs(crumbs)}

      <div class="tool-header-block" style="text-align: center; margin-bottom: var(--space-12);">
        <h1>${escapeHtml(hubData.h1)}</h1>
        <p class="tool-header-lead">${escapeHtml(hubData.lead)}</p>
      </div>

      <div class="tools-grid">
        ${articleCards}
      </div>
    </div>
  </main>
${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

/**
 * 6. RENDER BLOG ARTICLE PAGE (5 articles x 7 languages = 35 pages)
 */
function renderBlogPostPage(articleKey, lang) {
  const post = BLOG_TRANSLATIONS[articleKey][lang];
  const route = ROUTES[articleKey];
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl(articleKey, lang);
  const alternates = getAlternates(articleKey);

  const crumbs = [
    { name: ui.breadcrumbs.home, url: ROUTES.home[lang] },
    { name: ui.nav.guides, url: ROUTES.blogHub[lang] },
    { name: post.category, url: route[lang] }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.h1,
    "description": post.metaDescription,
    "datePublished": "2026-09-15T09:00:00+00:00",
    "dateModified": "2026-09-29T10:00:00+00:00",
    "author": {
      "@type": "Organization",
      "name": "ZamTools Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ZamTools",
      "url": `${DOMAIN}/`
    },
    "mainEntityOfPage": canonical
  };

  const headHtml = renderHead({
    lang,
    title: post.title,
    description: post.metaDescription,
    canonical,
    alternates,
    ogType: 'article',
    structuredData
  });

  const headerHtml = renderHeader(lang, articleKey, alternates);

  // Article sections
  const sectionsHtml = post.sections.map((sec, i) => `
        <section style="margin-bottom: var(--space-8);">
          <h2 style="font-size: 1.5rem; color: var(--text-dark); margin-bottom: var(--space-4);">${escapeHtml(sec.heading)}</h2>
          <p style="color: var(--text); line-height: 1.8; font-size: 1.0625rem;">${escapeHtml(sec.content)}</p>
        </section>`).join('');

  // Tool CTA
  let ctaHtml = '';
  if (post.toolCta && ROUTES[post.toolCta.toolKey]) {
    const ctaUrl = ROUTES[post.toolCta.toolKey][lang];
    ctaHtml = `
        <div class="article-tool-cta">
          <div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.25rem;">${escapeHtml(TOOL_TRANSLATIONS[post.toolCta.toolKey][lang].name)}</h3>
            <p style="font-size: 0.9375rem; color: var(--text-muted); margin: 0;">${escapeHtml(TOOL_TRANSLATIONS[post.toolCta.toolKey][lang].lead)}</p>
          </div>
          <a href="${ctaUrl}" class="btn btn-primary" style="white-space: nowrap;">${escapeHtml(post.toolCta.text)}</a>
        </div>`;
  }

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main class="section">
    <div class="container">
${renderBreadcrumbs(crumbs)}

      <div style="max-width: 820px; margin: 0 auto;">
        <header class="article-header" style="margin-bottom: var(--space-8);">
          <span class="badge badge-primary" style="margin-bottom: var(--space-3);">${escapeHtml(post.category)}</span>
          <h1 style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1.2; margin-bottom: var(--space-4);">${escapeHtml(post.h1)}</h1>
          <div style="display: flex; gap: var(--space-4); align-items: center; color: var(--text-muted); font-size: 0.9375rem; border-bottom: 1px solid var(--border); padding-bottom: var(--space-4);">
            <span>By <strong>ZamTools Editorial Team</strong></span>
            <span>•</span>
            <time>${escapeHtml(post.date)}</time>
            <span>•</span>
            <span>${escapeHtml(post.readTime)}</span>
          </div>
        </header>

        <div class="article-body">
          <p style="font-size: 1.2rem; line-height: 1.7; color: var(--text-main); margin-bottom: var(--space-8); font-weight: 500;">
            ${escapeHtml(post.lead)}
          </p>

${sectionsHtml}
${ctaHtml}
        </div>
      </div>
    </div>
  </main>
${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

/**
 * 7. RENDER INFO & LEGAL PAGES (about, contact, faq, privacy, terms, disclaimer, cookie) (49 pages)
 */
function renderInfoPage(infoKey, lang) {
  const data = INFO_TRANSLATIONS[infoKey][lang];
  const route = ROUTES[infoKey];
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl(infoKey, lang);
  const alternates = getAlternates(infoKey);

  const crumbs = [
    { name: ui.breadcrumbs.home, url: ROUTES.home[lang] },
    { name: data.breadcrumb, url: route[lang] }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "item": `${DOMAIN}${c.url}`
    }))
  };

  const headHtml = renderHead({
    lang,
    title: data.title,
    description: data.metaDescription,
    canonical,
    alternates,
    structuredData
  });

  const headerHtml = renderHeader(lang, infoKey, alternates);

  // Content body rendering depending on page type
  let bodyContent = '';

  if (infoKey === 'about') {
    const valuesHtml = data.values.map(v => `
          <div class="feature-box">
            <h4>${escapeHtml(v.title)}</h4>
            <p>${escapeHtml(v.desc)}</p>
          </div>`).join('');

    bodyContent = `
      <div class="editorial-wrapper" style="margin-bottom: var(--space-12);">
        <h2 style="font-size: 1.5rem; margin-bottom: var(--space-4);">${escapeHtml(data.missionTitle)}</h2>
        <p style="line-height: 1.8; margin-bottom: var(--space-4);">${escapeHtml(data.missionP1)}</p>
        <p style="line-height: 1.8;">${escapeHtml(data.missionP2)}</p>
      </div>

      <div class="section-header">
        <h2>${escapeHtml(data.valuesTitle)}</h2>
      </div>
      <div class="features-grid">
        ${valuesHtml}
      </div>`;
  } else if (infoKey === 'contact') {
    bodyContent = `
      <div class="editorial-wrapper" style="text-align: center; padding: var(--space-12);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary); margin: 0 auto var(--space-4);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <h2 style="font-size: 1.5rem; margin-bottom: var(--space-4);">${escapeHtml(data.emailLabel)}</h2>
        <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: var(--space-4);">
          <a href="mailto:${data.email}" style="color: var(--primary);">${data.email}</a>
        </p>
        <p style="color: var(--text-muted); line-height: 1.7;">${escapeHtml(data.responseTime)}</p>
        <p style="color: var(--text-subtle); font-size: 0.9375rem; margin-top: var(--space-6);">${escapeHtml(data.faqNote)}</p>
        <a href="${ROUTES.faq[lang]}" class="btn btn-secondary" style="margin-top: var(--space-4);">${ui.nav.faq} →</a>
      </div>`;
  } else if (infoKey === 'faq') {
    const faqList = data.faqs.map(f => `
        <div class="faq-item">
          <button class="faq-question">
            <span>${escapeHtml(f.q)}</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-answer">
            <p>${escapeHtml(f.a)}</p>
          </div>
        </div>`).join('');

    bodyContent = `
      <div class="faq-list" style="max-width: 820px; margin: 0 auto;">
        ${faqList}
      </div>`;
  } else {
    // Legal pages (privacyPolicy, terms, disclaimer, cookiePolicy)
    const noticeHtml = data.legalNotice ? `
        <div style="background: #fffbeb; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; padding: var(--space-4); border-radius: var(--radius-sm); margin-bottom: var(--space-6); font-size: 0.875rem; color: #92400e;">
          ${escapeHtml(data.legalNotice)}
        </div>` : '';

    const sectionsHtml = data.sections.map(s => `
        <section style="margin-bottom: var(--space-8);">
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-3);">${escapeHtml(s.heading)}</h2>
          <p style="color: var(--text); line-height: 1.8;">${escapeHtml(s.content)}</p>
        </section>`).join('');

    bodyContent = `
      <div class="editorial-wrapper">
        ${noticeHtml}
        <div style="color: var(--text-subtle); font-size: 0.875rem; margin-bottom: var(--space-6);">${escapeHtml(data.lastUpdated)}</div>
        ${sectionsHtml}
      </div>`;
  }

  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main class="section">
    <div class="container">
${renderBreadcrumbs(crumbs)}

      <div class="tool-header-block" style="text-align: center; margin-bottom: var(--space-12);">
        <h1>${escapeHtml(data.h1)}</h1>
        <p class="tool-header-lead">${escapeHtml(data.lead)}</p>
      </div>

${bodyContent}
    </div>
  </main>
${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

/**
 * 8. RENDER 404 NOT FOUND PAGE (7 pages)
 */
function renderNotFoundPage(lang) {
  const data = INFO_TRANSLATIONS.notFound[lang];
  const ui = UI_TRANSLATIONS[lang];
  const canonical = getAbsoluteUrl('notFound', lang);
  const alternates = getAlternates('notFound');

  const headHtml = renderHead({
    lang,
    title: data.title,
    description: data.metaDescription,
    canonical,
    alternates
  });

  const headerHtml = renderHeader(lang, 'notFound', alternates);
  const footerHtml = renderFooter(lang);
  const searchModalHtml = renderSearchModal(lang);
  const scriptsHtml = renderScripts({ lang });

  return `${headHtml}
${headerHtml}
  <main class="section" style="padding: var(--space-20) 0;">
    <div class="container" style="text-align: center; max-width: 600px;">
      <div style="font-size: 6rem; font-weight: 900; line-height: 1; color: var(--primary); margin-bottom: var(--space-4);">404</div>
      <h1 style="margin-bottom: var(--space-4);">${escapeHtml(data.h1)}</h1>
      <p style="color: var(--text-muted); font-size: 1.125rem; margin-bottom: var(--space-8);">${escapeHtml(data.lead)}</p>
      <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
        <a href="${ROUTES.home[lang]}" class="btn btn-primary btn-lg">${escapeHtml(data.homeBtn)}</a>
        <a href="${ROUTES.toolsHub[lang]}" class="btn btn-secondary btn-lg">${escapeHtml(data.toolsBtn)}</a>
      </div>
    </div>
  </main>
${footerHtml}
${searchModalHtml}
${scriptsHtml}`;
}

module.exports = {
  renderToolPage,
  renderHomePage,
  renderToolsHubPage,
  renderCategoryPage,
  renderBlogHubPage,
  renderBlogPostPage,
  renderInfoPage,
  renderNotFoundPage
};
