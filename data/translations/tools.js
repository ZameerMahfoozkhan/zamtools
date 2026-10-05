/**
 * Aggregator for all 20 Tool Translations across all 7 languages.
 */

const compress = require('./tools/compress');
const resize = require('./tools/resize');
const convert = require('./tools/convert');
const edit = require('./tools/edit');
const color = require('./tools/color');
const createDev = require('./tools/create-dev');

const TOOL_TRANSLATIONS = {
  ...compress,
  ...resize,
  ...convert,
  ...edit,
  ...color,
  ...createDev
};

module.exports = {
  TOOL_TRANSLATIONS
};
