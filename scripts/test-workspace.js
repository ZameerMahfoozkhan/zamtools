const { renderWorkspace } = require('../data/workspaces');

const en = renderWorkspace('imageCompressor', 'en');
const fr = renderWorkspace('imageCompressor', 'fr');
const es = renderWorkspace('imageCompressor', 'es');
const de = renderWorkspace('imageCompressor', 'de');
const id = renderWorkspace('imageCompressor', 'id');
const pt = renderWorkspace('imageCompressor', 'pt');
const it = renderWorkspace('imageCompressor', 'it');

console.log('EN length:', en.length, 'has fileInput:', en.includes('id="fileInput"'));
console.log('FR has Télécharger:', fr.includes('Télécharger'), 'has fileInput:', fr.includes('id="fileInput"'));
console.log('ES has Descargar:', es.includes('Descargar'), 'has fileInput:', es.includes('id="fileInput"'));
console.log('DE has Herunterladen:', de.includes('herunterladen'), 'has fileInput:', de.includes('id="fileInput"'));
console.log('ID has Unduh:', id.includes('Unduh'), 'has fileInput:', id.includes('id="fileInput"'));
console.log('PT has Baixar:', pt.includes('Baixar'), 'has fileInput:', pt.includes('id="fileInput"'));
console.log('IT has Scarica:', it.includes('Scarica'), 'has fileInput:', it.includes('id="fileInput"'));
