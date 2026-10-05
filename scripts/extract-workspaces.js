const fs = require('fs');
const path = require('path');
const { TOOL_KEYS, ROUTES } = require('../data/routes');

const workspaces = {};
let failed = 0;

TOOL_KEYS.forEach(key => {
  const route = ROUTES[key];
  const p = path.join(__dirname, '..', 'tools', route.origFolder, 'index.html');
  const html = fs.readFileSync(p, 'utf8');
  
  // Find <div class="tool-workspace">
  const startIdx = html.indexOf('<div class="tool-workspace">');
  if (startIdx === -1) {
    console.error(`ERROR: ${key} has no <div class="tool-workspace">`);
    failed++;
    return;
  }

  // Find the closing boundary: either <!-- Collapsed Ad Placeholder --> or <div class="ad-slot-container"
  let endIdx = html.indexOf('<!-- Collapsed Ad Placeholder -->', startIdx);
  if (endIdx === -1) {
    endIdx = html.indexOf('<div class="ad-slot-container"', startIdx);
  }
  if (endIdx === -1) {
    endIdx = html.indexOf('<div class="privacy-banner">', startIdx);
  }

  if (endIdx === -1) {
    console.error(`ERROR: ${key} cannot find end boundary`);
    failed++;
    return;
  }

  const rawWorkspace = html.slice(startIdx, endIdx).trim();
  workspaces[key] = rawWorkspace;
  console.log(`OK: ${key} (${route.origFolder}) - Length: ${rawWorkspace.length}`);
});

console.log(`\nExtracted: ${Object.keys(workspaces).length} / ${TOOL_KEYS.length}, Failed: ${failed}`);

// Export to data/workspaces-raw.json
fs.writeFileSync(
  path.join(__dirname, '..', 'data', 'workspaces-raw.json'),
  JSON.stringify(workspaces, null, 2),
  'utf8'
);
console.log('Saved to data/workspaces-raw.json');
