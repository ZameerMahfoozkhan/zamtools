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

console.log('Testing renderToolPage (imageCompressor, fr)...');
const toolHtml = renderToolPage('imageCompressor', 'fr');
console.log('Tool HTML length:', toolHtml.length);
console.log('Has lang="fr":', toolHtml.includes('lang="fr"'));
console.log('Has compresseur-image canonical:', toolHtml.includes('https://zamtools.online/fr/outils/compresseur-image/'));

console.log('\nTesting renderHomePage (es)...');
const homeHtml = renderHomePage('es');
console.log('Home HTML length:', homeHtml.length);
console.log('Has lang="es":', homeHtml.includes('lang="es"'));

console.log('\nTesting renderCategoryPage (catCompression, de)...');
const catHtml = renderCategoryPage('catCompression', 'de');
console.log('Cat HTML length:', catHtml.length);

console.log('\nTesting renderBlogPostPage (blogHowToCompress, id)...');
const blogHtml = renderBlogPostPage('blogHowToCompress', 'id');
console.log('Blog HTML length:', blogHtml.length);

console.log('\nTesting renderInfoPage (privacyPolicy, it)...');
const privacyHtml = renderInfoPage('privacyPolicy', 'it');
console.log('Privacy HTML length:', privacyHtml.length);

console.log('\nAll renderers tested successfully!');
