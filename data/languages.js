/**
 * ZamTools Central Language Configuration
 * Supported languages: en (default), fr, es, id, de, pt, it
 */

const DOMAIN = 'https://zamtools.online';

const LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    locale: 'en_US',
    path: '/',
    dir: 'ltr',
    isDefault: true,
    flag: '🌐'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    locale: 'fr_FR',
    path: '/fr/',
    dir: 'ltr',
    isDefault: false,
    flag: '🌐'
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    locale: 'es_ES',
    path: '/es/',
    dir: 'ltr',
    isDefault: false,
    flag: '🌐'
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    locale: 'id_ID',
    path: '/id/',
    dir: 'ltr',
    isDefault: false,
    flag: '🌐'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    locale: 'de_DE',
    path: '/de/',
    dir: 'ltr',
    isDefault: false,
    flag: '🌐'
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    locale: 'pt_PT',
    path: '/pt/',
    dir: 'ltr',
    isDefault: false,
    flag: '🌐'
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    locale: 'it_IT',
    path: '/it/',
    dir: 'ltr',
    isDefault: false,
    flag: '🌐'
  }
};

const LANGUAGE_CODES = Object.keys(LANGUAGES);

module.exports = {
  DOMAIN,
  LANGUAGES,
  LANGUAGE_CODES
};
