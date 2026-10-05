const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'tools');
const tools = fs.readdirSync(toolsDir).filter(d => fs.statSync(path.join(toolsDir, d)).isDirectory());

console.log('Total tools:', tools.length);
const toolInfo = {};

tools.forEach(t => {
  const p = path.join(toolsDir, t, 'index.html');
  if (!fs.existsSync(p)) {
    console.log('MISSING:', p);
    return;
  }
  const content = fs.readFileSync(p, 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const h1Match = content.match(/<h1>([^<]+)<\/h1>/);
  const toolScriptMatch = content.match(/<script src="([^"]*\/js\/tools\/[^"]+)"><\/script>/);
  
  // Extract workspace: from <div class="tool-workspace"> up to the end of that div
  const wsStart = content.indexOf('<div class="tool-workspace">');
  // find the section after tool-workspace
  const nextSection = content.indexOf('<section class="section', wsStart);
  const nextDiv = content.indexOf('<div class="privacy-banner', wsStart);
  const endIdx = nextSection !== -1 ? nextSection : nextDiv;
  
  toolInfo[t] = {
    title: titleMatch ? titleMatch[1] : '',
    h1: h1Match ? h1Match[1] : '',
    script: toolScriptMatch ? toolScriptMatch[1] : '',
    workspaceLen: wsStart !== -1 && endIdx !== -1 ? (endIdx - wsStart) : 0
  };
  console.log(`${t}: script=${toolInfo[t].script}, wsLen=${toolInfo[t].workspaceLen}`);
});
