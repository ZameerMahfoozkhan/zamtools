/**
 * ZamTools Master Route Mapping Configuration
 * Defines crawlable, language-specific, human-readable, hyphenated ASCII URLs for all pages.
 */

const { DOMAIN, LANGUAGES, LANGUAGE_CODES } = require('./languages');

const ROUTES = {
  // Homepage
  home: {
    en: '/',
    fr: '/fr/',
    es: '/es/',
    id: '/id/',
    de: '/de/',
    pt: '/pt/',
    it: '/it/'
  },

  // Tools Index / Hub
  toolsHub: {
    en: '/tools/',
    fr: '/fr/outils/',
    es: '/es/herramientas/',
    id: '/id/alat/',
    de: '/de/tools/',
    pt: '/pt/ferramentas/',
    it: '/it/strumenti/'
  },

  // 20 Functional Tools
  imageCompressor: {
    en: '/tools/image-compressor/',
    fr: '/fr/outils/compresseur-image/',
    es: '/es/herramientas/comprimir-imagen/',
    id: '/id/alat/kompres-gambar/',
    de: '/de/tools/bild-komprimieren/',
    pt: '/pt/ferramentas/comprimir-imagem/',
    it: '/it/strumenti/comprimi-immagine/',
    script: 'compressor.js',
    origFolder: 'image-compressor'
  },
  imageResizer: {
    en: '/tools/image-resizer/',
    fr: '/fr/outils/redimensionner-image/',
    es: '/es/herramientas/redimensionar-imagen/',
    id: '/id/alat/ubah-ukuran-gambar/',
    de: '/de/tools/bild-skalieren/',
    pt: '/pt/ferramentas/redimensionar-imagem/',
    it: '/it/strumenti/ridimensiona-immagine/',
    script: 'resizer.js',
    origFolder: 'image-resizer'
  },
  imageToTargetSize: {
    en: '/tools/image-to-target-size/',
    fr: '/fr/outils/image-taille-cible/',
    es: '/es/herramientas/imagen-tamano-objetivo/',
    id: '/id/alat/kompres-ke-ukuran-target/',
    de: '/de/tools/bild-zielgroesse/',
    pt: '/pt/ferramentas/imagem-tamanho-alvo/',
    it: '/it/strumenti/immagine-dimensione-target/',
    script: 'target-size.js',
    origFolder: 'image-to-target-size'
  },
  imageCropper: {
    en: '/tools/image-cropper/',
    fr: '/fr/outils/recadrer-image/',
    es: '/es/herramientas/recortar-imagen/',
    id: '/id/alat/potong-gambar/',
    de: '/de/tools/bild-zuschneiden/',
    pt: '/pt/ferramentas/recortar-imagem/',
    it: '/it/strumenti/ritaglia-immagine/',
    script: 'cropper.js',
    origFolder: 'image-cropper'
  },
  imageRotateFlip: {
    en: '/tools/image-rotate-flip/',
    fr: '/fr/outils/pivoter-retourner-image/',
    es: '/es/herramientas/rotar-voltear-imagen/',
    id: '/id/alat/putar-balik-gambar/',
    de: '/de/tools/bild-drehen-spiegeln/',
    pt: '/pt/ferramentas/girar-inverter-imagem/',
    it: '/it/strumenti/ruota-capovolgi-immagine/',
    script: 'rotate-flip.js',
    origFolder: 'image-rotate-flip'
  },
  jpgToPng: {
    en: '/tools/jpg-to-png/',
    fr: '/fr/outils/jpg-png/',
    es: '/es/herramientas/jpg-a-png/',
    id: '/id/alat/jpg-ke-png/',
    de: '/de/tools/jpg-in-png/',
    pt: '/pt/ferramentas/jpg-para-png/',
    it: '/it/strumenti/jpg-in-png/',
    script: 'jpg-png.js',
    origFolder: 'jpg-to-png'
  },
  pngToGithubJpg: {
    en: '/tools/png-to-jpg/',
    fr: '/fr/outils/png-jpg/',
    es: '/es/herramientas/png-a-jpg/',
    id: '/id/alat/png-ke-jpg/',
    de: '/de/tools/png-in-jpg/',
    pt: '/pt/ferramentas/png-para-jpg/',
    it: '/it/strumenti/png-in-jpg/',
    script: 'png-jpg.js',
    origFolder: 'png-to-jpg'
  },
  webpConverter: {
    en: '/tools/webp-converter/',
    fr: '/fr/outils/convertisseur-webp/',
    es: '/es/herramientas/convertidor-webp/',
    id: '/id/alat/konverter-webp/',
    de: '/de/tools/webp-konverter/',
    pt: '/pt/ferramentas/conversor-webp/',
    it: '/it/strumenti/convertitore-webp/',
    script: 'webp.js',
    origFolder: 'webp-converter'
  },
  imageFormatConverter: {
    en: '/tools/image-format-converter/',
    fr: '/fr/outils/convertisseur-format-image/',
    es: '/es/herramientas/convertidor-formato-imagen/',
    id: '/id/alat/konverter-format-gambar/',
    de: '/de/tools/bildformat-konverter/',
    pt: '/pt/ferramentas/conversor-formato-imagem/',
    it: '/it/strumenti/convertitore-formato-immagine/',
    script: 'format-converter.js',
    origFolder: 'image-format-converter'
  },
  imageToPdf: {
    en: '/tools/image-to-pdf/',
    fr: '/fr/outils/image-en-pdf/',
    es: '/es/herramientas/imagen-a-pdf/',
    id: '/id/alat/gambar-ke-pdf/',
    de: '/de/tools/bild-in-pdf/',
    pt: '/pt/ferramentas/imagem-para-pdf/',
    it: '/it/strumenti/immagine-in-pdf/',
    script: 'image-to-pdf.js',
    origFolder: 'image-to-pdf'
  },
  grayscaleImage: {
    en: '/tools/grayscale-image/',
    fr: '/fr/outils/image-niveaux-gris/',
    es: '/es/herramientas/escala-grises/',
    id: '/id/alat/gambar-skala-abu-abu/',
    de: '/de/tools/bild-graustufen/',
    pt: '/pt/ferramentas/imagem-tons-cinza/',
    it: '/it/strumenti/immagine-scala-grigi/',
    script: 'grayscale.js',
    origFolder: 'grayscale-image'
  },
  brightnessContrast: {
    en: '/tools/brightness-contrast/',
    fr: '/fr/outils/luminosite-contraste/',
    es: '/es/herramientas/brillo-contraste/',
    id: '/id/alat/kecerahan-kontras/',
    de: '/de/tools/helligkeit-kontrast/',
    pt: '/pt/ferramentas/brilho-contraste/',
    it: '/it/strumenti/luminosita-contrasto/',
    script: 'adjustments.js',
    origFolder: 'brightness-contrast'
  },
  blurSharpenImage: {
    en: '/tools/blur-sharpen-image/',
    fr: '/fr/outils/flou-nettete/',
    es: '/es/herramientas/desenfocar-enfocar/',
    id: '/id/alat/buram-pertajam-gambar/',
    de: '/de/tools/bild-unschaerfe-schaerfen/',
    pt: '/pt/ferramentas/desfocar-nitidez-imagem/',
    it: '/it/strumenti/sfoca-nitidezza-immagine/',
    script: 'blur-sharpen.js',
    origFolder: 'blur-sharpen-image'
  },
  imageColorPicker: {
    en: '/tools/image-color-picker/',
    fr: '/fr/outils/selecteur-couleur-image/',
    es: '/es/herramientas/selector-color-imagen/',
    id: '/id/alat/pemilih-warna-gambar/',
    de: '/de/tools/bild-farbpipette/',
    pt: '/pt/ferramentas/seletor-cor-imagem/',
    it: '/it/strumenti/selettore-colore-immagine/',
    script: 'color-picker.js',
    origFolder: 'image-color-picker'
  },
  colorPaletteGenerator: {
    en: '/tools/color-palette-generator/',
    fr: '/fr/outils/generateur-palette-couleurs/',
    es: '/es/herramientas/generador-paleta-colores/',
    id: '/id/alat/generator-palet-warna/',
    de: '/de/tools/farbpaletten-generator/',
    pt: '/pt/ferramentas/gerador-paleta-cores/',
    it: '/it/strumenti/generatore-tavolozza-colori/',
    script: 'palette.js',
    origFolder: 'color-palette-generator'
  },
  faviconGenerator: {
    en: '/tools/favicon-generator/',
    fr: '/fr/outils/generateur-favicon/',
    es: '/es/herramientas/generador-favicon/',
    id: '/id/alat/generator-favicon/',
    de: '/de/tools/favicon-generator/',
    pt: '/pt/ferramentas/gerador-favicon/',
    it: '/it/strumenti/generatore-favicon/',
    script: 'favicon.js',
    origFolder: 'favicon-generator'
  },
  imageToBase64: {
    en: '/tools/image-to-base64/',
    fr: '/fr/outils/image-base64/',
    es: '/es/herramientas/imagen-a-base64/',
    id: '/id/alat/gambar-ke-base64/',
    de: '/de/tools/bild-in-base64/',
    pt: '/pt/ferramentas/imagem-para-base64/',
    it: '/it/strumenti/immagine-in-base64/',
    script: 'image-base64.js',
    origFolder: 'image-to-base64'
  },
  base64ToImage: {
    en: '/tools/base64-to-image/',
    fr: '/fr/outils/base64-image/',
    es: '/es/herramientas/base64-a-imagen/',
    id: '/id/alat/base64-ke-gambar/',
    de: '/de/tools/base64-in-bild/',
    pt: '/pt/ferramentas/base64-para-imagem/',
    it: '/it/strumenti/base64-in-immagine/',
    script: 'base64-image.js',
    origFolder: 'base64-to-image'
  },
  socialMediaImageResizer: {
    en: '/tools/social-media-image-resizer/',
    fr: '/fr/outils/redimensionneur-images-reseaux-sociaux/',
    es: '/es/herramientas/redimensionador-redes-sociales/',
    id: '/id/alat/pengubah-ukuran-media-sosial/',
    de: '/de/tools/social-media-bild-groesse/',
    pt: '/pt/ferramentas/redimensionador-redes-sociais/',
    it: '/it/strumenti/ridimensiona-social-media/',
    script: 'social-resizer.js',
    origFolder: 'social-media-image-resizer'
  },
  passportPhotoResizer: {
    en: '/tools/passport-photo-resizer/',
    fr: '/fr/outils/redimensionneur-photo-passeport/',
    es: '/es/herramientas/redimensionador-foto-pasaporte/',
    id: '/id/alat/pengubah-ukuran-foto-paspor/',
    de: '/de/tools/passfoto-generator-groesse/',
    pt: '/pt/ferramentas/redimensionador-foto-passaporte/',
    it: '/it/strumenti/ridimensiona-foto-passaporto/',
    script: 'passport.js',
    origFolder: 'passport-photo-resizer'
  },
  memeGenerator: {
    en: '/tools/meme-generator/',
    fr: '/fr/outils/generateur-memes/',
    es: '/es/herramientas/generador-memes/',
    id: '/id/alat/generator-meme/',
    de: '/de/tools/meme-generator/',
    pt: '/pt/ferramentas/gerador-memes/',
    it: '/it/strumenti/generatore-meme/',
    script: 'meme.js',
    origFolder: 'meme-generator'
  },

  // Category Landing Pages
  catCompression: {
    en: '/tools/image-compression/',
    fr: '/fr/outils/compression-image/',
    es: '/es/herramientas/compresion-imagen/',
    id: '/id/alat/kompresi-gambar/',
    de: '/de/tools/bildkomprimierung/',
    pt: '/pt/ferramentas/compressao-imagem/',
    it: '/it/strumenti/compressione-immagini/',
    categoryKey: 'compress'
  },
  catResizing: {
    en: '/tools/image-resizing/',
    fr: '/fr/outils/redimensionnement-image/',
    es: '/es/herramientas/redimensionamiento-imagen/',
    id: '/id/alat/pengubahan-ukuran-gambar/',
    de: '/de/tools/bildskalierung/',
    pt: '/pt/ferramentas/redimensionamento-imagem/',
    it: '/it/strumenti/ridimensionamento-immagini/',
    categoryKey: 'resize'
  },
  catConversion: {
    en: '/tools/image-conversion/',
    fr: '/fr/outils/conversion-format-image/',
    es: '/es/herramientas/conversion-imagen/',
    id: '/id/alat/konversi-gambar/',
    de: '/de/tools/bildkonvertierung/',
    pt: '/pt/ferramentas/conversao-imagem/',
    it: '/it/strumenti/conversione-immagini/',
    categoryKey: 'convert'
  },
  catEditing: {
    en: '/tools/image-editing/',
    fr: '/fr/outils/retouche-photo/',
    es: '/es/herramientas/edicion-imagen/',
    id: '/id/alat/pengeditan-gambar/',
    de: '/de/tools/bildbearbeitung/',
    pt: '/pt/ferramentas/edicao-imagem/',
    it: '/it/strumenti/modifica-immagini/',
    categoryKey: 'edit'
  },

  // Blog Hub
  blogHub: {
    en: '/blog/',
    fr: '/fr/blog/',
    es: '/es/blog/',
    id: '/id/blog/',
    de: '/de/blog/',
    pt: '/pt/blog/',
    it: '/it/blog/'
  },

  // 5 Blog Articles
  blogHowToCompress: {
    en: '/blog/how-to-compress-an-image/',
    fr: '/fr/blog/comment-compresser-une-image/',
    es: '/es/blog/como-comprimir-una-imagen/',
    id: '/id/blog/cara-mengompres-gambar/ ',
    de: '/de/blog/bild-komprimieren/',
    pt: '/pt/blog/como-comprimir-uma-imagem/',
    it: '/it/blog/come-comprimere-unimmagine/',
    origFolder: 'how-to-compress-an-image'
  },
  blogHowToResize: {
    en: '/blog/how-to-resize-an-image/',
    fr: '/fr/blog/comment-redimensionner-une-image/',
    es: '/es/blog/como-redimensionar-una-imagen/',
    id: '/id/blog/cara-mengubah-ukuran-gambar/',
    de: '/de/blog/bild-skalieren/',
    pt: '/pt/blog/como-redimensionar-uma-imagem/',
    it: '/it/blog/come-ridimensionare-unimmagine/',
    origFolder: 'how-to-resize-an-image'
  },
  blogHowToReduceSize: {
    en: '/blog/how-to-reduce-image-size/',
    fr: '/fr/blog/comment-reduire-taille-image/',
    es: '/es/blog/como-reducir-tamano-imagen/',
    id: '/id/blog/cara-memperkecil-ukuran-gambar/',
    de: '/de/blog/dateigroesse-bild-verringern/',
    pt: '/pt/blog/como-reduzir-tamanho-imagem/',
    it: '/it/blog/come-ridurre-dimensione-immagine/',
    origFolder: 'how-to-reduce-image-size'
  },
  blogJpgVsPngVsWebp: {
    en: '/blog/jpg-vs-png-vs-webp/',
    fr: '/fr/blog/jpg-vs-png-vs-webp/',
    es: '/es/blog/jpg-vs-png-vs-webp/',
    id: '/id/blog/jpg-vs-png-vs-webp/',
    de: '/de/blog/jpg-vs-png-vs-webp/',
    pt: '/pt/blog/jpg-vs-png-vs-webp/',
    it: '/it/blog/jpg-vs-png-vs-webp/',
    origFolder: 'jpg-vs-png-vs-webp'
  },
  blogWhatIsWebp: {
    en: '/blog/what-is-webp/',
    fr: '/fr/blog/quest-ce-que-le-webp/',
    es: '/es/blog/que-es-webp/',
    id: '/id/blog/apa-itu-webp/',
    de: '/de/blog/was-ist-webp/',
    pt: '/pt/blog/o-que-e-webp/',
    it: '/it/blog/che-cose-webp/',
    origFolder: 'what-is-webp'
  },

  // Informational & Legal Pages
  about: {
    en: '/about/',
    fr: '/fr/a-propos/',
    es: '/es/acerca-de/',
    id: '/id/tentang/',
    de: '/de/ueber-uns/',
    pt: '/pt/sobre/',
    it: '/it/chi-siamo/'
  },
  contact: {
    en: '/contact/',
    fr: '/fr/contact/',
    es: '/es/contacto/',
    id: '/id/kontak/',
    de: '/de/kontakt/',
    pt: '/pt/contacto/',
    it: '/it/contatti/'
  },
  faq: {
    en: '/faq/',
    fr: '/fr/faq/',
    es: '/es/faq/',
    id: '/id/faq/',
    de: '/de/faq/',
    pt: '/pt/faq/',
    it: '/it/faq/'
  },
  privacyPolicy: {
    en: '/privacy-policy/',
    fr: '/fr/politique-de-confidentialite/',
    es: '/es/politica-de-privacidad/',
    id: '/id/kebijakan-privasi/',
    de: '/de/datenschutzerklaerung/',
    pt: '/pt/politica-de-privacidade/',
    it: '/it/privacy-policy/'
  },
  terms: {
    en: '/terms/',
    fr: '/fr/conditions-utilisation/',
    es: '/es/terminos-de-uso/',
    id: '/id/ketentuan-layanan/',
    de: '/de/nutzungsbedingungen/',
    pt: '/pt/termos-de-uso/',
    it: '/it/termini-di-servizio/'
  },
  disclaimer: {
    en: '/disclaimer/',
    fr: '/fr/mentions-legales/',
    es: '/es/aviso-legal/',
    id: '/id/penafian/',
    de: '/de/haftungsausschluss/',
    pt: '/pt/aviso-legal/',
    it: '/it/disclaimer/'
  },
  cookiePolicy: {
    en: '/cookie-policy/',
    fr: '/fr/gestion-cookies/',
    es: '/es/politica-de-cookies/',
    id: '/id/kebijakan-cookie/',
    de: '/de/cookie-richtlinie/',
    pt: '/pt/politica-de-cookies/',
    it: '/it/cookie-policy/'
  },

  // 404 Pages
  notFound: {
    en: '/404.html',
    fr: '/fr/404.html',
    es: '/es/404.html',
    id: '/id/404.html',
    de: '/de/404.html',
    pt: '/pt/404.html',
    it: '/it/404.html'
  }
};

// Clean any trailing whitespace in routes
for (const k in ROUTES) {
  for (const lang of LANGUAGE_CODES) {
    if (ROUTES[k][lang]) {
      ROUTES[k][lang] = ROUTES[k][lang].trim();
    }
  }
}

/**
 * Returns full absolute URL for a route key and language
 */
function getAbsoluteUrl(routeKey, lang) {
  const route = ROUTES[routeKey];
  if (!route || !route[lang]) {
    throw new Error(`Route not found for key: ${routeKey}, lang: ${lang}`);
  }
  const path = route[lang];
  return `${DOMAIN}${path.startsWith('/') ? path : '/' + path}`;
}

/**
 * Returns complete set of 8 alternates:
 * en, fr, es, id, de, pt, it, and x-default (points to en)
 */
function getAlternates(routeKey) {
  const route = ROUTES[routeKey];
  if (!route) {
    throw new Error(`Route not found for key: ${routeKey}`);
  }
  const alternates = {};
  for (const lang of LANGUAGE_CODES) {
    alternates[lang] = `${DOMAIN}${route[lang]}`;
  }
  // x-default always points to the English equivalent
  alternates['x-default'] = `${DOMAIN}${route.en}`;
  return alternates;
}

/**
 * Tool keys list
 */
const TOOL_KEYS = [
  'imageCompressor',
  'imageResizer',
  'imageToTargetSize',
  'imageCropper',
  'imageRotateFlip',
  'jpgToPng',
  'pngToGithubJpg',
  'webpConverter',
  'imageFormatConverter',
  'imageToPdf',
  'grayscaleImage',
  'brightnessContrast',
  'blurSharpenImage',
  'imageColorPicker',
  'colorPaletteGenerator',
  'faviconGenerator',
  'imageToBase64',
  'base64ToImage',
  'socialMediaImageResizer',
  'passportPhotoResizer',
  'memeGenerator'
];

module.exports = {
  ROUTES,
  TOOL_KEYS,
  getAbsoluteUrl,
  getAlternates
};
