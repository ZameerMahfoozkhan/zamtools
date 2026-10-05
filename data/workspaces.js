/**
 * Master Workspace Renderer for ZamTools
 * Keeps 100% of DOM IDs, inputs, and canvas structures intact for js/tools/*.js
 * Localizes all visible labels, buttons, dropzone copy, and preview headings for all 7 languages.
 */

const fs = require('fs');
const path = require('path');

// Load raw workspaces
let rawWorkspaces = null;
function getRawWorkspaces() {
  if (!rawWorkspaces) {
    const rawPath = path.join(__dirname, 'workspaces-raw.json');
    if (fs.existsSync(rawPath)) {
      rawWorkspaces = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
    } else {
      throw new Error('workspaces-raw.json not found. Run scripts/extract-workspaces.js first.');
    }
  }
  return rawWorkspaces;
}

// Translations dictionary for workspace strings
const WS_STRINGS = {
  // Dropzone
  'Drop your image here': {
    fr: 'Déposez votre image ici',
    es: 'Arrastra tu imagen aquí',
    id: 'Tarik gambar Anda ke sini',
    de: 'Bild hierher ziehen',
    pt: 'Arraste sua imagem aqui',
    it: 'Trascina qui la tua immagine'
  },
  'or click to browse from your computer or phone': {
    fr: 'ou cliquez pour parcourir depuis votre appareil',
    es: 'o haz clic para examinar desde tu equipo o móvil',
    id: 'atau klik untuk memilih dari komputer atau ponsel',
    de: 'oder klicken, um ein Bild vom Gerät auszuwählen',
    pt: 'ou clique para selecionar do seu aparelho',
    it: 'o fai clic per sfogliare dal tuo computer o telefono'
  },
  'Supported formats:': {
    fr: 'Formats pris en charge :',
    es: 'Formatos compatibles:',
    id: 'Format yang didukung:',
    de: 'Unterstützte Formate:',
    pt: 'Formatos suportados:',
    it: 'Formati supportati:'
  },
  'Choose Image': {
    fr: 'Choisir une image',
    es: 'Elegir imagen',
    id: 'Pilih Gambar',
    de: 'Bild auswählen',
    pt: 'Escolher Imagem',
    it: 'Scegli immagine'
  },
  'Select Image': {
    fr: 'Sélectionner une image',
    es: 'Seleccionar imagen',
    id: 'Pilih Gambar',
    de: 'Bild auswählen',
    pt: 'Selecionar Imagem',
    it: 'Seleziona immagine'
  },
  'Choose File': {
    fr: 'Choisir un fichier',
    es: 'Elegir archivo',
    id: 'Pilih Berkas',
    de: 'Datei auswählen',
    pt: 'Escolher Arquivo',
    it: 'Scegli file'
  },
  'Choose Photo': {
    fr: 'Choisir une photo',
    es: 'Elegir foto',
    id: 'Pilih Foto',
    de: 'Foto auswählen',
    pt: 'Escolher Foto',
    it: 'Scegli foto'
  },
  'Choose JPG Files': {
    fr: 'Choisir des fichiers JPG',
    es: 'Elegir archivos JPG',
    id: 'Pilih Berkas JPG',
    de: 'JPG-Dateien auswählen',
    pt: 'Escolher Arquivos JPG',
    it: 'Scegli file JPG'
  },
  'Select PNG': {
    fr: 'Sélectionner un PNG',
    es: 'Seleccionar PNG',
    id: 'Pilih PNG',
    de: 'PNG auswählen',
    pt: 'Selecionar PNG',
    it: 'Seleziona PNG'
  },
  'Select Images': {
    fr: 'Sélectionner des images',
    es: 'Seleccionar imágenes',
    id: 'Pilih Gambar',
    de: 'Bilder auswählen',
    pt: 'Selecionar Imagens',
    it: 'Seleziona immagini'
  },

  // Active Workspace Header
  'Change Image': {
    fr: 'Changer d\'image',
    es: 'Cambiar imagen',
    id: 'Ganti Gambar',
    de: 'Anderes Bild',
    pt: 'Mudar Imagem',
    it: 'Cambia immagine'
  },
  'Change Photo': {
    fr: 'Changer de photo',
    es: 'Cambiar foto',
    id: 'Ganti Foto',
    de: 'Anderes Foto',
    pt: 'Mudar Foto',
    it: 'Cambia foto'
  },
  'Change Files': {
    fr: 'Changer de fichiers',
    es: 'Cambiar archivos',
    id: 'Ganti Berkas',
    de: 'Andere Dateien',
    pt: 'Mudar Arquivos',
    it: 'Cambia file'
  },

  // Compression & Format Controls
  'Compression Quality': {
    fr: 'Qualité de compression',
    es: 'Calidad de compresión',
    id: 'Kualitas Kompresi',
    de: 'Kompressionsqualität',
    pt: 'Qualidade da Compressão',
    it: 'Qualità di compressione'
  },
  '70%–80% produces an optimal balance between quality and file size.': {
    fr: '70 % à 80 % offre un compromis optimal entre netteté et légèreté.',
    es: 'Entre el 70 % y el 80 % se logra el equilibrio óptimo entre calidad y peso.',
    id: '70%–80% menghasilkan keseimbangan terbaik antara mutu dan ukuran file.',
    de: '70 %–80 % bieten die ideale Balance aus Qualität und Dateigröße.',
    pt: '70% a 80% gera o equilíbrio perfeito entre nitidez e tamanho.',
    it: 'Il 70%–80% garantisce il compromesso ideale tra qualità e leggerezza.'
  },
  'Output Format': {
    fr: 'Format de sortie',
    es: 'Formato de salida',
    id: 'Format Output',
    de: 'Ausgabeformat',
    pt: 'Formato de Saída',
    it: 'Formato di output'
  },
  'Same as Original': {
    fr: 'Identique à l\'original',
    es: 'Igual que el original',
    id: 'Sama seperti Asli',
    de: 'Wie Original',
    pt: 'Igual ao Original',
    it: 'Come l\'originale'
  },
  'Convert to JPG': {
    fr: 'Convertir en JPG',
    es: 'Convertir a JPG',
    id: 'Konversi ke JPG',
    de: 'In JPG konvertieren',
    pt: 'Converter para JPG',
    it: 'Converti in JPG'
  },
  'Convert to WebP (Recommended)': {
    fr: 'Convertir en WebP (Recommandé)',
    es: 'Convertir a WebP (Recomendado)',
    id: 'Konversi ke WebP (Direkomendasikan)',
    de: 'In WebP konvertieren (Empfohlen)',
    pt: 'Converter para WebP (Recomendado)',
    it: 'Converti in WebP (Consigliato)'
  },
  'Convert to PNG': {
    fr: 'Convertir en PNG',
    es: 'Convertir a PNG',
    id: 'Konversi ke PNG',
    de: 'In PNG konvertieren',
    pt: 'Converter para PNG',
    it: 'Converti in PNG'
  },

  // Stats
  'Original': {
    fr: 'Original',
    es: 'Original',
    id: 'Asli',
    de: 'Original',
    pt: 'Original',
    it: 'Originale'
  },
  'Compressed': {
    fr: 'Compressé',
    es: 'Comprimido',
    id: 'Terkonpres',
    de: 'Komprimiert',
    pt: 'Comprimido',
    it: 'Compresso'
  },
  'Saved': {
    fr: 'Économisé',
    es: 'Ahorro',
    id: 'Hemat',
    de: 'Gespart',
    pt: 'Economia',
    it: 'Risparmiato'
  },
  'Original Preview': {
    fr: 'Aperçu original',
    es: 'Vista previa original',
    id: 'Pratinjau Asli',
    de: 'Original-Vorschau',
    pt: 'Prévia Original',
    it: 'Anteprima originale'
  },
  'Compressed Preview': {
    fr: 'Aperçu compressé',
    es: 'Vista previa comprimida',
    id: 'Pratinjau Terkompres',
    de: 'Komprimierte Vorschau',
    pt: 'Prévia Comprimida',
    it: 'Anteprima compressa'
  },

  // Download Buttons
  'Download Compressed Image': {
    fr: 'Télécharger l\'image compressée',
    es: 'Descargar imagen comprimida',
    id: 'Unduh Gambar Terkompres',
    de: 'Komprimiertes Bild herunterladen',
    pt: 'Baixar Imagem Comprimida',
    it: 'Scarica immagine compressa'
  },
  'Download All Images': {
    fr: 'Télécharger toutes les images',
    es: 'Descargar todas las imágenes',
    id: 'Unduh Semua Gambar',
    de: 'Alle Bilder herunterladen',
    pt: 'Baixar Todas as Imagens',
    it: 'Scarica tutte le immagini'
  },
  'Download Resized Image': {
    fr: 'Télécharger l\'image redimensionnée',
    es: 'Descargar imagen redimensionada',
    id: 'Unduh Gambar Berubah Ukuran',
    de: 'Skaliertes Bild herunterladen',
    pt: 'Baixar Imagem Redimensionada',
    it: 'Scarica immagine ridimensionata'
  },
  'Download Image': {
    fr: 'Télécharger l\'image',
    es: 'Descargar imagen',
    id: 'Unduh Gambar',
    de: 'Bild herunterladen',
    pt: 'Baixar Imagem',
    it: 'Scarica immagine'
  },
  'Download Cropped Image': {
    fr: 'Télécharger l\'image recadrée',
    es: 'Descargar imagen recortada',
    id: 'Unduh Gambar Terpotong',
    de: 'Zugeschnittenes Bild herunterladen',
    pt: 'Baixar Imagem Recortada',
    it: 'Scarica immagine ritagliata'
  },
  'Download Transformed Image': {
    fr: 'Télécharger l\'image transformée',
    es: 'Descargar imagen transformada',
    id: 'Unduh Gambar Hasil Rotasi',
    de: 'Transformiertes Bild herunterladen',
    pt: 'Baixar Imagem Transformada',
    it: 'Scarica immagine trasformata'
  },
  'Download PNG Image': {
    fr: 'Télécharger l\'image PNG',
    es: 'Descargar imagen PNG',
    id: 'Unduh Gambar PNG',
    de: 'PNG-Bild herunterladen',
    pt: 'Baixar Imagem PNG',
    it: 'Scarica immagine PNG'
  },
  'Download All as PNG': {
    fr: 'Tout télécharger en PNG',
    es: 'Descargar todo como PNG',
    id: 'Unduh Semua sebagai PNG',
    de: 'Alle als PNG herunterladen',
    pt: 'Baixar Tudo como PNG',
    it: 'Scarica tutto come PNG'
  },
  'Download JPG Image': {
    fr: 'Télécharger l\'image JPG',
    es: 'Descargar imagen JPG',
    id: 'Unduh Gambar JPG',
    de: 'JPG-Bild herunterladen',
    pt: 'Baixar Imagem JPG',
    it: 'Scarica immagine JPG'
  },
  'Download WebP Image': {
    fr: 'Télécharger l\'image WebP',
    es: 'Descargar imagen WebP',
    id: 'Unduh Gambar WebP',
    de: 'WebP-Bild herunterladen',
    pt: 'Baixar Imagem WebP',
    it: 'Scarica immagine WebP'
  },
  'Download Converted File': {
    fr: 'Télécharger le fichier converti',
    es: 'Descargar archivo convertido',
    id: 'Unduh Berkas Hasil Konversi',
    de: 'Konvertierte Datei herunterladen',
    pt: 'Baixar Arquivo Convertido',
    it: 'Scarica file convertito'
  },
  'Download All Converted Files': {
    fr: 'Télécharger tous les fichiers convertis',
    es: 'Descargar todos los archivos',
    id: 'Unduh Semua Berkas Konversi',
    de: 'Alle konvertierten Dateien herunterladen',
    pt: 'Baixar Todos os Arquivos',
    it: 'Scarica tutti i file convertiti'
  },
  'Download Grayscale Image': {
    fr: 'Télécharger l\'image en noir et blanc',
    es: 'Descargar imagen en escala de grises',
    id: 'Unduh Gambar Hitam Putih',
    de: 'Graustufenbild herunterladen',
    pt: 'Baixar Imagem em Escala de Cinza',
    it: 'Scarica immagine in scala di grigi'
  },
  'Download Enhanced Image': {
    fr: 'Télécharger l\'image retouchée',
    es: 'Descargar imagen mejorada',
    id: 'Unduh Gambar Hasil Edit',
    de: 'Optimiertes Bild herunterladen',
    pt: 'Baixar Imagem Aprimorada',
    it: 'Scarica immagine ottimizzata'
  },
  'Download Filtered Image': {
    fr: 'Télécharger l\'image filtrée',
    es: 'Descargar imagen filtrada',
    id: 'Unduh Gambar Berfilter',
    de: 'Gefiltertes Bild herunterladen',
    pt: 'Baixar Imagem Filtrada',
    it: 'Scarica immagine filtrata'
  },
  'Download Decoded Image': {
    fr: 'Télécharger l\'image décodée',
    es: 'Descargar imagen decodificada',
    id: 'Unduh Gambar Hasil Dekode',
    de: 'Dekodiertes Bild herunterladen',
    pt: 'Baixar Imagem Decodificada',
    it: 'Scarica immagine decodificata'
  },
  'Download Ready Post': {
    fr: 'Télécharger le visuel prêt',
    es: 'Descargar publicación lista',
    id: 'Unduh Postingan Siap Pakai',
    de: 'Fertigen Post herunterladen',
    pt: 'Baixar Post Pronto',
    it: 'Scarica post pronto'
  },
  'Download Passport Photo': {
    fr: 'Télécharger la photo de passeport',
    es: 'Descargar foto tamaño pasaporte',
    id: 'Unduh Pasfoto Paspor',
    de: 'Passfoto herunterladen',
    pt: 'Baixar Foto para Passaporte',
    it: 'Scarica fototessera'
  },
  'Download Meme PNG': {
    fr: 'Télécharger le mème PNG',
    es: 'Descargar meme PNG',
    id: 'Unduh Meme PNG',
    de: 'Meme als PNG herunterladen',
    pt: 'Baixar Meme em PNG',
    it: 'Scarica meme PNG'
  },

  // Resizing Controls
  'Resolution Presets': {
    fr: 'Préréglages de résolution',
    es: 'Resoluciones predefinidas',
    id: 'Preset Resolusi',
    de: 'Auflösungsvorlagen',
    pt: 'Resoluções Prontas',
    it: 'Risoluzioni predefinite'
  },
  'Width (px)': {
    fr: 'Largeur (px)',
    es: 'Ancho (px)',
    id: 'Lebar (px)',
    de: 'Breite (px)',
    pt: 'Largura (px)',
    it: 'Larghezza (px)'
  },
  'Height (px)': {
    fr: 'Hauteur (px)',
    es: 'Alto (px)',
    id: 'Tinggi (px)',
    de: 'Höhe (px)',
    pt: 'Altura (px)',
    it: 'Altezza (px)'
  },
  'Lock aspect ratio (recommended)': {
    fr: 'Conserver les proportions (recommandé)',
    es: 'Mantener relación de aspecto (recomendado)',
    id: 'Kunci rasio aspek (direkomendasikan)',
    de: 'Seitenverhältnis beibehalten (empfohlen)',
    pt: 'Travar proporção (recomendado)',
    it: 'Blocca proporzioni (consigliato)'
  },

  // Target Size Controls
  'Quick Target Presets': {
    fr: 'Tailles cibles rapides',
    es: 'Tamaños objetivo rápidos',
    id: 'Preset Target Cepat',
    de: 'Schnellvorlagen Zielgröße',
    pt: 'Tamanhos Alvo Rápidos',
    it: 'Dimensioni target rapide'
  },
  'Or Custom Target (KB)': {
    fr: 'Ou taille personnalisée (Ko)',
    es: 'O tamaño personalizado (KB)',
    id: 'Atau Target Khusus (KB)',
    de: 'Oder eigene Zielgröße (KB)',
    pt: 'Ou Tamanho Personalizado (KB)',
    it: 'O dimensione personalizzata (KB)'
  },
  'Recalculate Closest Size': {
    fr: 'Recalculer la taille la plus proche',
    es: 'Recalcular tamaño más cercano',
    id: 'Hitung Ulang Ukuran Terdekat',
    de: 'Nächste Größe neu berechnen',
    pt: 'Recalcular Tamanho Mais Próximo',
    it: 'Ricalcola dimensione ottimale'
  },

  // Cropper Ratios
  'Aspect Ratio Presets': {
    fr: 'Ratios d\'aspect',
    es: 'Proporciones de aspecto',
    id: 'Preset Rasio Aspek',
    de: 'Seitenverhältnis-Vorlagen',
    pt: 'Proporções Prontas',
    it: 'Proporzioni predefinite'
  },
  'Freehand': {
    fr: 'Libre',
    es: 'Libre',
    id: 'Bebas',
    de: 'Frei',
    pt: 'Livre',
    it: 'Libero'
  },
  '1:1 Square': {
    fr: '1:1 Carré',
    es: '1:1 Cuadrado',
    id: '1:1 Persegi',
    de: '1:1 Quadratisch',
    pt: '1:1 Quadrado',
    it: '1:1 Quadrato'
  },
  '16:9 Widescreen': {
    fr: '16:9 Écran large',
    es: '16:9 Panorámico',
    id: '16:9 Layar Lebar',
    de: '16:9 Breitbild',
    pt: '16:9 Panorâmico',
    it: '16:9 Widescreen'
  },
  '4:3 Standard': {
    fr: '4:3 Standard',
    es: '4:3 Estándar',
    id: '4:3 Standar',
    de: '4:3 Standard',
    pt: '4:3 Padrão',
    it: '4:3 Standard'
  },
  '3:2 Classic': {
    fr: '3:2 Classique',
    es: '3:2 Clásico',
    id: '3:2 Klasik',
    de: '3:2 Klassisch',
    pt: '3:2 Clássico',
    it: '3:2 Classico'
  },
  '9:16 Story': {
    fr: '9:16 Story / Réel',
    es: '9:16 Historia / Reel',
    id: '9:16 Story',
    de: '9:16 Story',
    pt: '9:16 Story / Reels',
    it: '9:16 Storia / Reel'
  },

  // Rotate & Flip
  'Rotate Orientation': {
    fr: 'Rotation de l\'image',
    es: 'Rotación de imagen',
    id: 'Rotasi Gambar',
    de: 'Bild drehen',
    pt: 'Girar Orientação',
    it: 'Rotazione immagine'
  },
  'Flip / Mirror': {
    fr: 'Retourner / Miroir',
    es: 'Voltear / Espejo',
    id: 'Balik / Cermin',
    de: 'Spiegeln',
    pt: 'Inverter / Espelhar',
    it: 'Rifletti / Specchio'
  },
  '↺ Rotate Left 90°': {
    fr: '↺ Tourner à gauche 90°',
    es: '↺ Girar izquierda 90°',
    id: '↺ Putar Kiri 90°',
    de: '↺ 90° nach links drehen',
    pt: '↺ Girar à esquerda 90°',
    it: '↺ Ruota a sinistra 90°'
  },
  '↻ Rotate Right 90°': {
    fr: '↻ Tourner à droite 90°',
    es: '↻ Girar derecha 90°',
    id: '↻ Putar Kanan 90°',
    de: '↻ 90° nach rechts drehen',
    pt: '↻ Girar à direita 90°',
    it: '↻ Ruota a destra 90°'
  },
  'Rotate 180° (Upside Down)': {
    fr: 'Tourner 180° (Inverser)',
    es: 'Girar 180° (Invertir)',
    id: 'Putar 180° (Terbalik)',
    de: '180° drehen (Auf den Kopf)',
    pt: 'Girar 180° (De ponta-cabeça)',
    it: 'Ruota di 180° (Capovolgi)'
  },
  '⇄ Flip Horizontal': {
    fr: '⇄ Miroir horizontal',
    es: '⇄ Volteo horizontal',
    id: '⇄ Balik Horizontal',
    de: '⇄ Horizontal spiegeln',
    pt: '⇄ Espelhar horizontalmente',
    it: '⇄ Rifletti orizzontale'
  },
  '⇅ Flip Vertical': {
    fr: '⇅ Miroir vertical',
    es: '⇅ Volteo vertical',
    id: '⇅ Balik Vertikal',
    de: '⇅ Vertikal spiegeln',
    pt: '⇅ Espelhar verticalmente',
    it: '⇅ Rifletti verticale'
  },

  // Color Fill & Targets
  'Background Color (Transparency Fill)': {
    fr: 'Couleur d\'arrière-plan (remplacement de la transparence)',
    es: 'Color de fondo (relleno de transparencia)',
    id: 'Warna Latar Belakang (Pengisi Transparansi)',
    de: 'Hintergrundfarbe (Ersatz für Transparenz)',
    pt: 'Cor de Fundo (Preenchimento de Transparência)',
    it: 'Colore di sfondo (riempimento trasparenza)'
  },
  'Target Conversion Format': {
    fr: 'Format cible de conversion',
    es: 'Formato de conversión objetivo',
    id: 'Format Target Konversi',
    de: 'Ziel-Konvertierungsformat',
    pt: 'Formato Alvo de Conversão',
    it: 'Formato di conversione di destinazione'
  },
  'White': {
    fr: 'Blanc',
    es: 'Blanco',
    id: 'Putih',
    de: 'Weiß',
    pt: 'Branco',
    it: 'Bianco'
  },
  'Black': {
    fr: 'Noir',
    es: 'Negro',
    id: 'Hitam',
    de: 'Schwarz',
    pt: 'Preto',
    it: 'Nero'
  },
  'Light Gray': {
    fr: 'Gris clair',
    es: 'Gris claro',
    id: 'Abu-abu Terang',
    de: 'Hellgrau',
    pt: 'Cinza Claro',
    it: 'Grigio chiaro'
  },

  // Adjustments & Filters
  'Toggle Before / After': {
    fr: 'Basculer Avant / Après',
    es: 'Alternar Antes / Después',
    id: 'Alihkan Sebelum / Sesudah',
    de: 'Vorher / Nachher umschalten',
    pt: 'Alternar Antes / Depois',
    it: 'Alterna Prima / Dopo'
  },
  'Reset All Sliders': {
    fr: 'Réinitialiser les curseurs',
    es: 'Restablecer controles',
    id: 'Atur Ulang Semua Slider',
    de: 'Alle Regler zurücksetzen',
    pt: 'Redefinir Controles',
    it: 'Ripristina tutti i cursori'
  },
  'Reset Filters': {
    fr: 'Réinitialiser les filtres',
    es: 'Restablecer filtros',
    id: 'Atur Ulang Filter',
    de: 'Filter zurücksetzen',
    pt: 'Redefinir Filtros',
    it: 'Ripristina filtri'
  },

  // Color Tools
  'Copy HEX': {
    fr: 'Copier HEX',
    es: 'Copiar HEX',
    id: 'Salin HEX',
    de: 'HEX kopieren',
    pt: 'Copiar HEX',
    it: 'Copia HEX'
  },
  'Copy RGB': {
    fr: 'Copier RGB',
    es: 'Copiar RGB',
    id: 'Salin RGB',
    de: 'RGB kopieren',
    pt: 'Copiar RGB',
    it: 'Copia RGB'
  },
  'Re-Analyze Color Clustering': {
    fr: 'Ré-analyser la palette',
    es: 'Reanalizar paleta de color',
    id: 'Analisis Ulang Palet',
    de: 'Farbpalette neu analysieren',
    pt: 'Reanalisar Paleta de Cores',
    it: 'Rianalizza la palette'
  },
  'Export Palette as PNG': {
    fr: 'Exporter la palette en PNG',
    es: 'Exportar paleta en PNG',
    id: 'Ekspor Palet sebagai PNG',
    de: 'Farbpalette als PNG exportieren',
    pt: 'Exportar Paleta em PNG',
    it: 'Esporta palette come PNG'
  },
  'HEX Code': {
    fr: 'Code HEX',
    es: 'Código HEX',
    id: 'Kode HEX',
    de: 'HEX-Farbcode',
    pt: 'Código HEX',
    it: 'Codice HEX'
  },
  'RGB Code': {
    fr: 'Code RGB',
    es: 'Código RGB',
    id: 'Kode RGB',
    de: 'RGB-Farbcode',
    pt: 'Código RGB',
    it: 'Codice RGB'
  },
  'HSL Code': {
    fr: 'Code HSL',
    es: 'Código HSL',
    id: 'Kode HSL',
    de: 'HSL-Farbcode',
    pt: 'Código HSL',
    it: 'Codice HSL'
  },
  'Recent Picked Colors': {
    fr: 'Couleurs récentes prélevées',
    es: 'Colores seleccionados recientemente',
    id: 'Warna yang Baru Dipilih',
    de: 'Zuletzt gewählte Farben',
    pt: 'Cores Selecionadas Recentemente',
    it: 'Colori campionati di recente'
  },

  // Developer & Code Tools
  'Download All Sizes': {
    fr: 'Télécharger toutes les tailles',
    es: 'Descargar todos los tamaños',
    id: 'Unduh Semua Ukuran',
    de: 'Alle Größen herunterladen',
    pt: 'Baixar Todos os Tamanhos',
    it: 'Scarica tutte le dimensioni'
  },
  'Copy HTML Tags': {
    fr: 'Copier les balises HTML',
    es: 'Copiar etiquetas HTML',
    id: 'Salin Tag HTML',
    de: 'HTML-Tags kopieren',
    pt: 'Copiar Tags HTML',
    it: 'Copia tag HTML'
  },
  'Copy Data URL': {
    fr: 'Copier l\'URL de données',
    es: 'Copiar Data URL',
    id: 'Salin Data URL',
    de: 'Data-URL kopieren',
    pt: 'Copiar Data URL',
    it: 'Copia Data URL'
  },
  'Copy Raw Base64': {
    fr: 'Copier le Base64 brut',
    es: 'Copiar Base64 sin formato',
    id: 'Salin Base64 Mentah',
    de: 'Reines Base64 kopieren',
    pt: 'Copiar Base64 Puro',
    it: 'Copia Base64 grezzo'
  },
  'Download .txt File': {
    fr: 'Télécharger le fichier .txt',
    es: 'Descargar archivo .txt',
    id: 'Unduh Berkas .txt',
    de: '.txt-Datei herunterladen',
    pt: 'Baixar Arquivo .txt',
    it: 'Scarica file .txt'
  },
  'Decode Image': {
    fr: 'Décoder l\'image',
    es: 'Decodificar imagen',
    id: 'Dekode Gambar',
    de: 'Bild dekodieren',
    pt: 'Decodificar Imagem',
    it: 'Decodifica immagine'
  },
  'Clear': {
    fr: 'Effacer',
    es: 'Borrar',
    id: 'Bersihkan',
    de: 'Löschen',
    pt: 'Limpar',
    it: 'Cancella'
  },
  'HTML Header Code': {
    fr: 'Code HTML pour l\'en-tête',
    es: 'Código HTML para cabecera',
    id: 'Kode Header HTML',
    de: 'HTML-Header-Code',
    pt: 'Código HTML para o Cabeçalho',
    it: 'Codice HTML per header'
  },
  'Base64 Output String': {
    fr: 'Chaîne de sortie Base64',
    es: 'Cadena Base64 resultante',
    id: 'String Output Base64',
    de: 'Base64-Ausgabezeichenfolge',
    pt: 'String de Saída Base64',
    it: 'Stringa Base64 generata'
  },
  'Paste Base64 String or Data URL': {
    fr: 'Coller la chaîne Base64 ou la Data URL',
    es: 'Pegar cadena Base64 o Data URL',
    id: 'Tempel String Base64 atau Data URL',
    de: 'Base64-String oder Data-URL einfügen',
    pt: 'Colar String Base64 ou Data URL',
    it: 'Incolla stringa Base64 o Data URL'
  },

  // Social Media Resizer
  'Platform Template': {
    fr: 'Modèle de plateforme',
    es: 'Plantilla de plataforma',
    id: 'Template Platform',
    de: 'Plattform-Vorlage',
    pt: 'Modelo de Plataforma',
    it: 'Modello piattaforma'
  },
  'Framing Mode': {
    fr: 'Mode de cadrage',
    es: 'Modo de encuadre',
    id: 'Mode Pembingkaian',
    de: 'Rahmenmodus',
    pt: 'Modo de Enquadramento',
    it: 'Modalità inquadratura'
  },
  'Padding Color (For Fit Mode)': {
    fr: 'Couleur des bordures (mode ajusté)',
    es: 'Color de relleno (modo ajuste)',
    id: 'Warna Padding (Untuk Mode Pas)',
    de: 'Randfarbe (für Einpassen-Modus)',
    pt: 'Cor das Bordas (Modo Ajustar)',
    it: 'Colore dei bordi (modalità adatta)'
  },

  // Passport Photo Resizer
  'National Specification Preset': {
    fr: 'Norme nationale officielle',
    es: 'Especificación nacional oficial',
    id: 'Standar Resmi Negara',
    de: 'Offizielle Länder-Vorgabe',
    pt: 'Padrão Oficial do País',
    it: 'Specifiche nazionali ufficiali'
  },
  'Width (mm)': {
    fr: 'Largeur (mm)',
    es: 'Ancho (mm)',
    id: 'Lebar (mm)',
    de: 'Breite (mm)',
    pt: 'Largura (mm)',
    it: 'Larghezza (mm)'
  },
  'Height (mm)': {
    fr: 'Hauteur (mm)',
    es: 'Alto (mm)',
    id: 'Tinggi (mm)',
    de: 'Höhe (mm)',
    pt: 'Altura (mm)',
    it: 'Altezza (mm)'
  },
  'Resolution Density (DPI)': {
    fr: 'Résolution d\'impression (DPI)',
    es: 'Resolución de impresión (DPI)',
    id: 'Kerapatan Cetak (DPI)',
    de: 'Druckauflösung (DPI)',
    pt: 'Resolução de Impressão (DPI)',
    it: 'Risoluzione di stampa (DPI)'
  },
  'Toggle Biometric Guidelines': {
    fr: 'Afficher / Masquer les repères biométriques',
    es: 'Mostrar / Ocultar guías biométricas',
    id: 'Tampilkan / Sembunyikan Garis Panduan Biometrik',
    de: 'Biometrische Hilfslinien ein-/ausblenden',
    pt: 'Alternar Linhas Guia Biométricas',
    it: 'Mostra / Nascondi linee guida biometriche'
  },

  // Meme Generator
  '+ Add Moveable Text Box': {
    fr: '+ Ajouter une zone de texte',
    es: '+ Añadir cuadro de texto',
    id: '+ Tambah Kotak Teks',
    de: '+ Textfeld hinzufügen',
    pt: '+ Adicionar Caixa de Texto',
    it: '+ Aggiungi casella di testo'
  },
  'Top Caption': {
    fr: 'Texte du haut',
    es: 'Texto superior',
    id: 'Teks Atas',
    de: 'Oberer Text',
    pt: 'Texto Superior',
    it: 'Testo superiore'
  },
  'Bottom Caption': {
    fr: 'Texte du bas',
    es: 'Texto inferior',
    id: 'Teks Bawah',
    de: 'Unterer Text',
    pt: 'Texto Inferior',
    it: 'Testo inferiore'
  },
  'Text Color': {
    fr: 'Couleur du texte',
    es: 'Color del texto',
    id: 'Warna Teks',
    de: 'Textfarbe',
    pt: 'Cor do Texto',
    it: 'Colore del testo'
  },
  'Outline Color': {
    fr: 'Couleur du contour',
    es: 'Color del contorno',
    id: 'Warna Garis Tepi',
    de: 'Konturfarbe',
    pt: 'Cor do Contorno',
    it: 'Colore del contorno'
  },
  'Font Family': {
    fr: 'Police de caractères',
    es: 'Tipografía',
    id: 'Jenis Huruf',
    de: 'Schriftart',
    pt: 'Fonte',
    it: 'Famiglia di caratteri'
  },
  'Auto-Uppercase Captions': {
    fr: 'Majuscules automatiques',
    es: 'Mayúsculas automáticas',
    id: 'Otomatis Huruf Besar',
    de: 'Automatische Großbuchstaben',
    pt: 'Maiúsculas automáticas',
    it: 'Maiuscole automatiche'
  }
};

/**
 * Render localized workspace HTML for a tool
 * @param {string} toolKey - Tool identifier (e.g. 'imageCompressor')
 * @param {string} lang - Language code ('en', 'fr', 'es', 'id', 'de', 'pt', 'it')
 * @returns {string} Fully localized HTML string with preserved IDs
 */
function renderWorkspace(toolKey, lang) {
  const workspaces = getRawWorkspaces();
  const rawHtml = workspaces[toolKey];
  if (!rawHtml) {
    throw new Error(`Workspace not found for key: ${toolKey}`);
  }

  if (lang === 'en') {
    return rawHtml;
  }

  let localized = rawHtml;

  // Replace text tokens in order of string length descending to prevent partial match conflicts
  const sortedEntries = Object.entries(WS_STRINGS).sort((a, b) => b[0].length - a[0].length);

  for (const [english, transMap] of sortedEntries) {
    const translation = transMap[lang];
    if (!translation) continue;

    // Replace inside >English< or in button/span/label text
    // Replace exact occurrences inside HTML text nodes
    const escaped = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Pattern 1: Exact inner text like >English<
    const p1 = new RegExp(`(>\\s*)${escaped}(\\s*<)`, 'g');
    localized = localized.replace(p1, `$1${translation}$2`);

    // Pattern 2: Placeholder attribute placeholder="English"
    const p2 = new RegExp(`(placeholder=["'])${escaped}(["'])`, 'g');
    localized = localized.replace(p2, `$1${translation}$2`);

    // Pattern 3: aria-label="English"
    const p3 = new RegExp(`(aria-label=["'])${escaped}(["'])`, 'g');
    localized = localized.replace(p3, `$1${translation}$2`);
  }

  return localized;
}

module.exports = {
  renderWorkspace,
  WS_STRINGS
};
