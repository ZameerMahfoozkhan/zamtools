const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const rootDir = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }

  let filePath = path.join(rootDir, reqPath);

  // If path is a directory without trailing slash, redirect to trailing slash
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    res.writeHead(301, { Location: req.url + '/' });
    res.end();
    return;
  }

  if (!fs.existsSync(filePath)) {
    // Return 404 page
    const lang = reqPath.split('/')[1];
    const notFoundFile = (lang && ['fr', 'es', 'id', 'de', 'pt', 'it'].includes(lang))
      ? path.join(rootDir, lang, '404.html')
      : path.join(rootDir, '404.html');

    if (fs.existsSync(notFoundFile)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      fs.createReadStream(notFoundFile).pipe(res);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`====================================================`);
    console.log(`⚡ ZamTools Local Dev Server is active!`);
    console.log(`👉 http://localhost:${port}/`);
    console.log(`\nAccessible Local Language Hubs:`);
    console.log(`  - 🇺🇸 English:    http://localhost:${port}/`);
    console.log(`  - 🇫🇷 Français:   http://localhost:${port}/fr/`);
    console.log(`  - 🇪🇸 Español:    http://localhost:${port}/es/`);
    console.log(`  - 🇮🇩 Indonesia:  http://localhost:${port}/id/`);
    console.log(`  - 🇩🇪 Deutsch:    http://localhost:${port}/de/`);
    console.log(`  - 🇵🇹 Português:  http://localhost:${port}/pt/`);
    console.log(`  - 🇮🇹 Italiano:   http://localhost:${port}/it/`);
    console.log(`====================================================`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
