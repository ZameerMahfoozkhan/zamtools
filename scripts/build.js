/**
 * ZamTools Master Build System
 * Generates all ~280 crawlable HTML pages across 7 languages, XML sitemaps, and deployable dist/ bundle.
 */

const fs = require('fs');
const path = require('path');

const { DOMAIN, LANGUAGES, LANGUAGE_CODES } = require('../data/languages');
const { ROUTES, TOOL_KEYS, getAbsoluteUrl, getAlternates } = require('../data/routes');
const {
  renderToolPage,
  renderHomePage,
  renderToolsHubPage,
  renderCategoryPage,
  renderBlogHubPage,
  renderBlogPostPage,
  renderInfoPage,
  renderNotFoundPage
} = require('../templates/pages');

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Ensure directory exists helper
function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Write file helper (dual write to root project and dist)
function writePage(relUrlPath, htmlContent) {
  // Convert URL path like '/fr/outils/compresseur-image/' or '/404.html' to relative file path
  let relFilePath;
  if (relUrlPath.endsWith('.html')) {
    relFilePath = relUrlPath.replace(/^\//, '');
  } else {
    relFilePath = path.join(relUrlPath.replace(/^\//, ''), 'index.html');
  }

  // Target paths
  const rootTarget = path.join(rootDir, relFilePath);
  const distTarget = path.join(distDir, relFilePath);

  ensureDirSync(path.dirname(rootTarget));
  ensureDirSync(path.dirname(distTarget));

  fs.writeFileSync(rootTarget, htmlContent, 'utf8');
  fs.writeFileSync(distTarget, htmlContent, 'utf8');
}

// Copy file or directory recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  if (!exists) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    ensureDirSync(dest);
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    ensureDirSync(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

console.log('====================================================');
console.log('🚀 ZAMTOOLS MULTILINGUAL SEO EXPANSION — MASTER BUILD');
console.log('====================================================');

const startTime = Date.now();
let pageCount = 0;
const countsByLang = { en: 0, fr: 0, es: 0, id: 0, de: 0, pt: 0, it: 0 };

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
ensureDirSync(distDir);

// 1. GENERATE HOMEPAGES (7)
console.log('\n[1/7] Building Homepages...');
LANGUAGE_CODES.forEach(lang => {
  const html = renderHomePage(lang);
  writePage(ROUTES.home[lang], html);
  pageCount++;
  countsByLang[lang]++;
});
console.log(`  ✓ 7 Homepages generated.`);

// 2. GENERATE TOOLS HUB PAGES (7)
console.log('\n[2/7] Building Tools Hubs...');
LANGUAGE_CODES.forEach(lang => {
  const html = renderToolsHubPage(lang);
  writePage(ROUTES.toolsHub[lang], html);
  pageCount++;
  countsByLang[lang]++;
});
console.log(`  ✓ 7 Tools Hubs generated.`);

// 3. GENERATE 20 TOOLS x 7 LANGUAGES (140)
console.log('\n[3/7] Building 140 Localized Tool Pages...');
TOOL_KEYS.forEach(toolKey => {
  LANGUAGE_CODES.forEach(lang => {
    const html = renderToolPage(toolKey, lang);
    writePage(ROUTES[toolKey][lang], html);
    pageCount++;
    countsByLang[lang]++;
  });
});
console.log(`  ✓ 140 Tool pages generated (20 tools × 7 languages).`);

// 4. GENERATE CATEGORIES x 7 LANGUAGES (28)
console.log('\n[4/7] Building 28 Category Landing Pages...');
const categoryKeys = ['catCompression', 'catResizing', 'catConversion', 'catEditing'];
categoryKeys.forEach(catKey => {
  LANGUAGE_CODES.forEach(lang => {
    const html = renderCategoryPage(catKey, lang);
    writePage(ROUTES[catKey][lang], html);
    pageCount++;
    countsByLang[lang]++;
  });
});
console.log(`  ✓ 28 Category pages generated.`);

// 5. GENERATE BLOG HUB & 5 POSTS x 7 LANGUAGES (42)
console.log('\n[5/7] Building 42 Blog & Guide Pages...');
LANGUAGE_CODES.forEach(lang => {
  const hubHtml = renderBlogHubPage(lang);
  writePage(ROUTES.blogHub[lang], hubHtml);
  pageCount++;
  countsByLang[lang]++;
});

const blogPostKeys = ['blogHowToCompress', 'blogHowToResize', 'blogHowToReduceSize', 'blogJpgVsPngVsWebp', 'blogWhatIsWebp'];
blogPostKeys.forEach(articleKey => {
  LANGUAGE_CODES.forEach(lang => {
    const html = renderBlogPostPage(articleKey, lang);
    writePage(ROUTES[articleKey][lang], html);
    pageCount++;
    countsByLang[lang]++;
  });
});
console.log(`  ✓ 42 Blog pages generated (7 hubs + 35 guide posts).`);

// 6. GENERATE INFO & LEGAL PAGES (49)
console.log('\n[6/7] Building 49 Information & Legal Pages...');
const infoKeys = ['about', 'contact', 'faq', 'privacyPolicy', 'terms', 'disclaimer', 'cookiePolicy'];
infoKeys.forEach(infoKey => {
  LANGUAGE_CODES.forEach(lang => {
    const html = renderInfoPage(infoKey, lang);
    writePage(ROUTES[infoKey][lang], html);
    pageCount++;
    countsByLang[lang]++;
  });
});
console.log(`  ✓ 49 Info & Legal pages generated.`);

// 7. GENERATE 404 NOT FOUND PAGES (7)
console.log('\n[7/7] Building 7 Localized 404 Pages...');
LANGUAGE_CODES.forEach(lang => {
  const html = renderNotFoundPage(lang);
  writePage(ROUTES.notFound[lang], html);
  pageCount++;
  countsByLang[lang]++;
});
console.log(`  ✓ 7 Localized 404 pages generated.`);

// 8. GENERATE XML SITEMAPS
console.log('\nGenerating Google-Compliant Multilingual XML Sitemaps...');

// Collect all indexable route keys (excluding 404 notFound)
const indexableRouteKeys = [
  'home',
  'toolsHub',
  ...TOOL_KEYS,
  ...categoryKeys,
  'blogHub',
  ...blogPostKeys,
  ...infoKeys
];

const today = new Date().toISOString().split('T')[0];

function generateSitemapXml(filterLang = null) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  const langsToProcess = filterLang ? [filterLang] : LANGUAGE_CODES;

  indexableRouteKeys.forEach(routeKey => {
    const alternates = getAlternates(routeKey);

    langsToProcess.forEach(lang => {
      const pageLoc = `${DOMAIN}${ROUTES[routeKey][lang]}`;
      const isHome = routeKey === 'home';
      const isTool = TOOL_KEYS.includes(routeKey);
      const priority = isHome ? '1.0' : isTool ? '0.9' : '0.8';
      const changefreq = isHome ? 'daily' : isTool ? 'weekly' : 'monthly';

      xml += `  <url>\n`;
      xml += `    <loc>${pageLoc}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      // Reciprocal xhtml alternates for Google Search
      for (const code of LANGUAGE_CODES) {
        xml += `    <xhtml:link rel="alternate" hreflang="${code}" href="${alternates[code]}"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${alternates['x-default']}"/>\n`;
      xml += `  </url>\n`;
    });
  });

  xml += `</urlset>\n`;
  return xml;
}

// Master sitemap.xml
const masterSitemapXml = generateSitemapXml(null);
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), masterSitemapXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), masterSitemapXml, 'utf8');

// Language-specific sitemaps
LANGUAGE_CODES.forEach(lang => {
  const langXml = generateSitemapXml(lang);
  fs.writeFileSync(path.join(rootDir, `sitemap-${lang}.xml`), langXml, 'utf8');
  fs.writeFileSync(path.join(distDir, `sitemap-${lang}.xml`), langXml, 'utf8');
});

// Sitemap Index sitemap-index.xml
let sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapIndexXml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
LANGUAGE_CODES.forEach(lang => {
  sitemapIndexXml += `  <sitemap>\n`;
  sitemapIndexXml += `    <loc>${DOMAIN}/sitemap-${lang}.xml</loc>\n`;
  sitemapIndexXml += `    <lastmod>${today}</lastmod>\n`;
  sitemapIndexXml += `  </sitemap>\n`;
});
sitemapIndexXml += `</sitemapindex>\n`;
fs.writeFileSync(path.join(rootDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');

console.log(`  ✓ Master sitemap.xml, 7 language sitemaps, and sitemap-index.xml written.`);

// 9. ROBOTS.TXT
console.log('\nConfiguring robots.txt...');
const robotsTxt = `User-agent: *
Allow: /
Disallow: /search/
Disallow: /*?*

Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-index.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('  ✓ robots.txt configured.');

// 10. COPY STATIC ASSETS TO DIST/
console.log('\nCopying static assets to dist/...');
const staticDirs = ['css', 'js', 'assets', 'locales'];
staticDirs.forEach(dir => {
  const src = path.join(rootDir, dir);
  const dest = path.join(distDir, dir);
  copyRecursiveSync(src, dest);
});

const staticFiles = [
  'favicon.ico',
  'favicon.svg',
  'favicon-32x32.png',
  'favicon-192x192.png',
  'apple-touch-icon.png',
  'site.webmanifest'
];
staticFiles.forEach(file => {
  const src = path.join(rootDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});
console.log('  ✓ Static assets copied to dist/.');

const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log('\n====================================================');
console.log(`✅ BUILD COMPLETE IN ${totalDuration}s`);
console.log(`Total HTML Pages Built: ${pageCount}`);
console.log('Pages by Language:');
LANGUAGE_CODES.forEach(lang => {
  console.log(`  - ${lang.toUpperCase()} (${LANGUAGES[lang].name}): ${countsByLang[lang]} pages`);
});
console.log(`Total Sitemaps: 9 (1 master, 7 language-specific, 1 sitemap-index)`);
console.log('Static distribution ready at dist/');
console.log('====================================================\n');
