const fs = require('fs');
const path = require('path');
const { UI_TRANSLATIONS } = require('../data/translations/ui');
const { LANGUAGE_CODES } = require('../data/languages');

const localesDir = path.join(__dirname, '..', 'locales');
if (!fs.existsSync(localesDir)) {
  fs.mkdirSync(localesDir, { recursive: true });
}

for (const lang of LANGUAGE_CODES) {
  const filePath = path.join(localesDir, `${lang}.json`);
  fs.writeFileSync(filePath, JSON.stringify(UI_TRANSLATIONS[lang], null, 2), 'utf8');
  console.log(`Wrote ${filePath}`);
}
