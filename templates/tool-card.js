/**
 * ZamTools Rich Tool Card Renderer
 * Generates beautiful, visual, high-converting tool cards with:
 * - Distinct, tool-specific SVG icons
 * - Category-accented color badges
 * - Unique, non-generic feature superpower tags
 * - Quick format/privacy capability badges
 * - Interactive hover & active tactile states
 */

const { ROUTES } = require('../data/routes');
const { TOOL_TRANSLATIONS } = require('../data/translations/tools');
const { UI_TRANSLATIONS } = require('../data/translations/ui');

const PRIVACY_LABELS = {
  en: 'Local',
  fr: 'Local',
  es: 'Local',
  id: 'Lokal',
  de: 'Lokal',
  pt: 'Local',
  it: 'Locale'
};

const PRIVACY_TIPS = {
  en: '100% Client-Side in Browser RAM. Zero server uploads.',
  fr: '100% local dans la RAM du navigateur. Zéro téléversement.',
  es: '100% en el navegador. Cero subidas a servidores.',
  id: '100% lokal di browser. Tanpa unggah ke server.',
  de: '100% lokal im Browser-RAM. Keine Server-Uploads.',
  pt: '100% local no navegador. Zero uploads.',
  it: '100% locale nella RAM del browser. Zero caricamenti.'
};

// Distinct SVG icons for all 20 tools
const TOOL_ICONS = {
  imageCompressor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6m-6-4h6m4 0h6m-6 4h6M9 4v16m6-16v16"/></svg>',
  imageResizer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
  imageToTargetSize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  imageCropper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg>',
  imageRotateFlip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  jpgToPng: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4"/></svg>',
  pngToGithubJpg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8V20m0 0l4-4m-4 4l-4-4M7 16V4m0 0L3 8m4-4l4 4"/></svg>',
  webpConverter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  imageFormatConverter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  grayscaleImage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z"/></svg>',
  brightnessContrast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  blurSharpenImage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>',
  imageColorPicker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  colorPaletteGenerator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  faviconGenerator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  imageToBase64: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  base64ToImage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',
  socialMediaImageResizer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  passportPhotoResizer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  memeGenerator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'
};

// Category theme keys for distinct color styling
const TOOL_CATEGORY_KEYS = {
  imageCompressor: 'compression',
  imageToTargetSize: 'compression',
  imageResizer: 'resizing',
  socialMediaImageResizer: 'resizing',
  passportPhotoResizer: 'resizing',
  webpConverter: 'conversion',
  jpgToPng: 'conversion',
  pngToGithubJpg: 'conversion',
  imageFormatConverter: 'conversion',
  faviconGenerator: 'conversion',
  imageToBase64: 'developer',
  base64ToImage: 'developer',
  imageCropper: 'editing',
  imageRotateFlip: 'editing',
  blurSharpenImage: 'editing',
  memeGenerator: 'editing',
  grayscaleImage: 'color',
  brightnessContrast: 'color',
  imageColorPicker: 'color',
  colorPaletteGenerator: 'color'
};

// Distinct, non-generic feature tags for all 20 tools across 7 languages
const TOOL_FEATURE_BADGES = {
  imageCompressor: {
    en: 'Up to -90%',
    fr: 'Jusqu\'à -90%',
    es: 'Hasta -90%',
    id: 'Hingga -90%',
    de: 'Bis zu -90%',
    pt: 'Até -90%',
    it: 'Fino a -90%'
  },
  imageResizer: {
    en: 'Aspect Lock',
    fr: 'Proportions',
    es: 'Proporción',
    id: 'Kunci Rasio',
    de: 'Seitenverhältnis',
    pt: 'Proporções',
    it: 'Proporzioni'
  },
  imageToTargetSize: {
    en: 'Exact KB/MB',
    fr: 'Taille KB exacte',
    es: 'Tamaño exacto',
    id: 'Target KB Pas',
    de: 'Exakte KB-Größe',
    pt: 'Tamanho exato',
    it: 'Misura esatta KB'
  },
  imageCropper: {
    en: '1:1 • 16:9 • Free',
    fr: '1:1 • 16:9 • Libre',
    es: '1:1 • 16:9 • Libre',
    id: '1:1 • 16:9 • Bebas',
    de: '1:1 • 16:9 • Frei',
    pt: '1:1 • 16:9 • Livre',
    it: '1:1 • 16:9 • Libero'
  },
  imageRotateFlip: {
    en: '90°/180° & Mirror',
    fr: 'Rotation & Miroir',
    es: 'Giro y espejo',
    id: 'Putar & Cermin',
    de: 'Drehen & Spiegeln',
    pt: 'Girar e espelhar',
    it: 'Ruota e specchia'
  },
  jpgToPng: {
    en: 'Lossless PNG',
    fr: 'PNG sans perte',
    es: 'PNG sin pérdida',
    id: 'PNG Tanpa Rugi',
    de: 'Verlustfreies PNG',
    pt: 'PNG sem perda',
    it: 'PNG senza perdita'
  },
  pngToGithubJpg: {
    en: 'Custom BG Fill',
    fr: 'Fond personnalisé',
    es: 'Fondo personalizado',
    id: 'Warna Latar',
    de: 'Eigene Hintergrundfarbe',
    pt: 'Fundo personalizado',
    it: 'Sfondo personalizzato'
  },
  webpConverter: {
    en: 'Ultra-Light WebP',
    fr: 'WebP ultra-léger',
    es: 'WebP ultra liviano',
    id: 'WebP Sangat Ringan',
    de: 'Ultra-leichtes WebP',
    pt: 'WebP ultraleve',
    it: 'WebP ultra-leggero'
  },
  imageFormatConverter: {
    en: 'Batch 3-Way',
    fr: 'Multi-formats',
    es: 'Multi-formato',
    id: 'Multi Format',
    de: 'Multi-Format',
    pt: 'Multiformato',
    it: 'Multiformato'
  },
  grayscaleImage: {
    en: 'Human Luminance',
    fr: 'Noir et blanc net',
    es: 'Escala natural',
    id: 'Luminansi Alami',
    de: 'Luminanz-Algorithmus',
    pt: 'Escala natural',
    it: 'Scala naturale'
  },
  brightnessContrast: {
    en: 'Exposure & Sat',
    fr: 'Lumière & Saturation',
    es: 'Luz y saturación',
    id: 'Cahaya & Saturasi',
    de: 'Licht & Sättigung',
    pt: 'Luz e saturação',
    it: 'Luce e saturazione'
  },
  blurSharpenImage: {
    en: 'Bicubic Clarity',
    fr: 'Netteté & Flou',
    es: 'Enfoque y nitidez',
    id: 'Fokus & Tajam',
    de: 'Schärfe & Unschärfe',
    pt: 'Nitidez e foco',
    it: 'Nitidezza e fuoco'
  },
  imageColorPicker: {
    en: '8× Loupe Magnifier',
    fr: 'Loupe 8× précise',
    es: 'Lupa 8× de precisión',
    id: 'Kaca Pembesar 8×',
    de: '8× Präzisionslupe',
    pt: 'Lupa 8× de precisão',
    it: 'Lente 8× di precisione'
  },
  colorPaletteGenerator: {
    en: 'Dominant Swatches',
    fr: 'Nuances dominantes',
    es: 'Paleta dominante',
    id: 'Palet Dominan',
    de: 'Dominante Farben',
    pt: 'Paleta dominante',
    it: 'Tavolozza dominante'
  },
  faviconGenerator: {
    en: 'Multi-Size Icons',
    fr: 'Pack multi-tailles',
    es: 'Pack multi-tamaño',
    id: 'Multi Ukuran',
    de: 'Mehrfach-Größen',
    pt: 'Vários tamanhos',
    it: 'Formati multipli'
  },
  imageToBase64: {
    en: 'Data URL String',
    fr: 'Chaîne Base64',
    es: 'Cadena Base64',
    id: 'String Base64',
    de: 'Base64-String',
    pt: 'String Base64',
    it: 'Stringa Base64'
  },
  base64ToImage: {
    en: 'Instant Decoder',
    fr: 'Décodeur direct',
    es: 'Decodificador rápido',
    id: 'Dekoder Instan',
    de: 'Sofort-Dekoder',
    pt: 'Decodificador rápido',
    it: 'Decodificatore rapido'
  },
  socialMediaImageResizer: {
    en: 'Insta • FB • X • YT',
    fr: 'Réseaux sociaux',
    es: 'Redes sociales',
    id: 'Template Medsos',
    de: 'Social-Media-Maße',
    pt: 'Redes sociais',
    it: 'Social media'
  },
  passportPhotoResizer: {
    en: '300 DPI Biometric',
    fr: 'Format biométrique',
    es: 'Foto biométrica',
    id: 'Standar Paspor',
    de: 'Biometrisch 300 DPI',
    pt: 'Foto biométrica',
    it: 'Fototessera 300 DPI'
  },
  memeGenerator: {
    en: 'Moveable Captions',
    fr: 'Texte déplaçable',
    es: 'Texto ajustable',
    id: 'Teks Bebas Geser',
    de: 'Verschiebbare Texte',
    pt: 'Texto ajustável',
    it: 'Testo regolabile'
  }
};

// Quick format tags for cards
const TOOL_FORMAT_TAGS = {
  imageCompressor: 'JPG • PNG • WebP',
  imageResizer: 'Exact Pixels / %',
  imageToTargetSize: '50KB • 100KB • 1MB',
  imageCropper: 'JPG • PNG • WebP',
  imageRotateFlip: 'Zero Quality Loss',
  jpgToPng: 'JPG → PNG',
  pngToGithubJpg: 'PNG → JPG',
  webpConverter: 'JPG/PNG → WebP',
  imageFormatConverter: 'All Formats',
  grayscaleImage: 'Bicubic Grayscale',
  brightnessContrast: 'Live Canvas Preview',
  blurSharpenImage: 'Gaussian & Sharpen',
  imageColorPicker: 'HEX • RGB • HSL',
  colorPaletteGenerator: 'Copy HEX Codes',
  faviconGenerator: 'ICO • PNG • 16-512px',
  imageToBase64: 'Embed in HTML/CSS',
  base64ToImage: 'Base64 → PNG/JPG',
  socialMediaImageResizer: '1080p • 4K • Story',
  passportPhotoResizer: 'US • EU • Schengen',
  memeGenerator: 'Impact & Modern Font'
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Render a complete, rich, accessible tool card
 * @param {Object} options
 * @param {string} options.toolKey - Tool key identifier (e.g. 'imageCompressor')
 * @param {string} options.lang - Language code ('en', 'fr', etc.)
 * @param {string} [options.headingLevel='h3'] - Heading level ('h3' or 'h4')
 * @param {string} [options.actionText] - Custom CTA text (defaults to localized openTool)
 * @returns {string} Fully rendered HTML card string
 */
function renderToolCard({ toolKey, lang, headingLevel = 'h3', actionText = null }) {
  const trans = TOOL_TRANSLATIONS[toolKey] ? TOOL_TRANSLATIONS[toolKey][lang] : null;
  const route = ROUTES[toolKey];
  if (!trans || !route) return '';

  const catKey = TOOL_CATEGORY_KEYS[toolKey] || 'conversion';
  const iconSvg = TOOL_ICONS[toolKey] || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';
  const featureBadge = (TOOL_FEATURE_BADGES[toolKey] && TOOL_FEATURE_BADGES[toolKey][lang])
    || (TOOL_FEATURE_BADGES[toolKey] && TOOL_FEATURE_BADGES[toolKey].en)
    || 'Online';
  const formatTag = TOOL_FORMAT_TAGS[toolKey] || 'Browser Local';
  const rawCta = actionText || (UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang].controls && UI_TRANSLATIONS[lang].controls.openTool) || 'Open Tool';
  const cta = String(rawCta).replace(/→/g, '').replace(/&rarr;/g, '').trim();
  const privacyText = PRIVACY_LABELS[lang] || 'Local';
  const privacyTip = PRIVACY_TIPS[lang] || '100% Client-Side in Browser RAM';

  return `
    <a href="${route[lang]}" class="tool-card tool-card-${catKey}" data-category="${catKey}" aria-label="${escapeHtml(trans.name)} - ${escapeHtml(trans.category)}">
      <div class="tool-card-header">
        <div class="tool-card-icon tool-icon-${catKey}">
          ${iconSvg}
        </div>
        <div class="tool-card-badges">
          <span class="tool-badge-category tool-cat-${catKey}">${escapeHtml(trans.category)}</span>
          <span class="tool-badge-feature">${escapeHtml(featureBadge)}</span>
        </div>
      </div>
      <${headingLevel} class="tool-card-title">${escapeHtml(trans.name)}</${headingLevel}>
      <p class="tool-card-desc">${escapeHtml(trans.lead)}</p>
      <div class="tool-card-meta">
        <span class="tool-meta-pill">${escapeHtml(formatTag)}</span>
        <span class="tool-meta-privacy" title="${escapeHtml(privacyTip)}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          ${escapeHtml(privacyText)}
        </span>
      </div>
      <div class="tool-card-footer">
        <span class="tool-card-action">${escapeHtml(cta)}</span>
        <span class="tool-card-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </a>`;
}

module.exports = {
  TOOL_ICONS,
  TOOL_CATEGORY_KEYS,
  TOOL_FEATURE_BADGES,
  TOOL_FORMAT_TAGS,
  renderToolCard
};
