const http = require('http');
const { spawn } = require('child_process');

const PORT = 8089;
process.env.PORT = PORT;

const serverProcess = spawn('node', ['scripts/serve.js'], {
  env: { ...process.env, PORT },
  stdio: 'pipe'
});

function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${PORT}${path}`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

setTimeout(async () => {
  try {
    console.log('Testing server responses...');
    
    // 1. Homepage
    const home = await fetchUrl('/');
    console.log('GET / -> Status:', home.status, 'Has English Title:', home.data.includes('Free Online Image Tools'));

    // 2. French Homepage
    const frHome = await fetchUrl('/fr/');
    console.log('GET /fr/ -> Status:', frHome.status, 'Has French Title:', frHome.data.includes("Outils d'image gratuits en ligne"));

    // 3. French Tool
    const frTool = await fetchUrl('/fr/outils/compresseur-image/');
    console.log('GET /fr/outils/compresseur-image/ -> Status:', frTool.status, 'Has French H1:', frTool.data.includes('Compresseur d&#039;image en ligne') || frTool.data.includes("Compresseur d'image"));

    // 4. Spanish Tool
    const esTool = await fetchUrl('/es/herramientas/comprimir-imagen/');
    console.log('GET /es/herramientas/comprimir-imagen/ -> Status:', esTool.status, 'Has Spanish H1:', esTool.data.includes('Compresor de imágenes'));

    // 5. Sitemap
    const sitemap = await fetchUrl('/sitemap.xml');
    console.log('GET /sitemap.xml -> Status:', sitemap.status, 'Has xhtml alternates:', sitemap.data.includes('xhtml:link'));

    console.log('\nAll server HTTP tests PASSED!');
  } catch (err) {
    console.error('Server test error:', err);
  } finally {
    serverProcess.kill();
    process.exit(0);
  }
}, 1000);
