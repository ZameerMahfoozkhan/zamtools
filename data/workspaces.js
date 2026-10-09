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
  'Drop an image here to resize': {
    fr: 'Déposez une image ici pour la redimensionner',
    es: 'Arrastra una imagen aquí para redimensionar',
    id: 'Tarik gambar ke sini untuk mengubah ukuran',
    de: 'Bild hierher ziehen zum Skalieren',
    pt: 'Arraste uma imagem aqui para redimensionar',
    it: 'Trascina qui un\'immagine da ridimensionare'
  },
  'Drop an image here to hit a target size': {
    fr: 'Déposez une image ici pour atteindre une taille cible',
    es: 'Arrastra una imagen aquí para alcanzar un tamaño objetivo',
    id: 'Tarik gambar ke sini untuk mencapai ukuran target',
    de: 'Bild hierher ziehen für Ziel-Dateigröße',
    pt: 'Arraste uma imagem aqui para atingir o tamanho alvo',
    it: 'Trascina qui un\'immagine per raggiungere la dimensione target'
  },
  'Drop an image here to crop': {
    fr: 'Déposez une image ici pour la recadrer',
    es: 'Arrastra una imagen aquí para recortar',
    id: 'Tarik gambar ke sini untuk memotong',
    de: 'Bild hierher ziehen zum Zuschneiden',
    pt: 'Arraste uma imagem aqui para recortar',
    it: 'Trascina qui un\'immagine da ritagliare'
  },
  'Drop an image here to rotate or flip': {
    fr: 'Déposez une image ici pour pivoter ou retourner',
    es: 'Arrastra una imagen aquí para rotar o voltear',
    id: 'Tarik gambar ke sini untuk memutar atau membalik',
    de: 'Bild hierher ziehen zum Drehen oder Spiegeln',
    pt: 'Arraste uma imagem aqui para girar ou inverter',
    it: 'Trascina qui un\'immagine da ruotare o capovolgere'
  },
  'Drop JPG / JPEG images here': {
    fr: 'Déposez vos images JPG / JPEG ici',
    es: 'Arrastra imágenes JPG / JPEG aquí',
    id: 'Tarik gambar JPG / JPEG ke sini',
    de: 'JPG- / JPEG-Bilder hierher ziehen',
    pt: 'Arraste imagens JPG / JPEG aqui',
    it: 'Trascina qui le immagini JPG / JPEG'
  },
  'Drop your PNG file here': {
    fr: 'Déposez votre fichier PNG ici',
    es: 'Arrastra tu archivo PNG aquí',
    id: 'Tarik berkas PNG Anda ke sini',
    de: 'PNG-Datei hierher ziehen',
    pt: 'Arraste seu arquivo PNG aqui',
    it: 'Trascina qui il tuo file PNG'
  },
  'Drop JPG or PNG images here': {
    fr: 'Déposez des images JPG ou PNG ici',
    es: 'Arrastra imágenes JPG o PNG aquí',
    id: 'Tarik gambar JPG atau PNG ke sini',
    de: 'JPG- oder PNG-Bilder hierher ziehen',
    pt: 'Arraste imagens JPG ou PNG aqui',
    it: 'Trascina qui immagini JPG o PNG'
  },
  'Drop images here to convert': {
    fr: 'Déposez des images ici pour les convertir',
    es: 'Arrastra imágenes aquí para convertir',
    id: 'Tarik gambar ke sini untuk konversi',
    de: 'Bilder hierher ziehen zum Konvertieren',
    pt: 'Arraste imagens aqui para converter',
    it: 'Trascina qui le immagini da convertire'
  },
  'Drop an image here to convert to grayscale': {
    fr: 'Déposez une image ici pour la convertir en niveaux de gris',
    es: 'Arrastra una imagen aquí para convertir a escala de grises',
    id: 'Tarik gambar ke sini untuk mengubah ke skala abu-abu',
    de: 'Bild hierher ziehen für Graustufen',
    pt: 'Arraste uma imagem aqui para converter em escala de cinza',
    it: 'Trascina qui un\'immagine da convertire in scala di grigi'
  },
  'Drop an image here to adjust lighting': {
    fr: 'Déposez une image ici pour ajuster la lumière',
    es: 'Arrastra una imagen aquí para ajustar la iluminación',
    id: 'Tarik gambar ke sini untuk mengatur pencahayaan',
    de: 'Bild hierher ziehen zum Anpassen der Beleuchtung',
    pt: 'Arraste uma imagem aqui para ajustar a iluminação',
    it: 'Trascina qui un\'immagine per regolare la luminosità'
  },
  'Drop an image here to blur or sharpen': {
    fr: 'Déposez une image ici pour flouter ou accentuer',
    es: 'Arrastra una imagen aquí para desenfocar o enfocar',
    id: 'Tarik gambar ke sini untuk memburamkan atau mempertajam',
    de: 'Bild hierher ziehen zum Weich- oder Scharfzeichnen',
    pt: 'Arraste uma imagem aqui para desfocar ou nitidez',
    it: 'Trascina qui un\'immagine per sfocare o aumentare la nitidezza'
  },
  'Drop an image here to pick colors': {
    fr: 'Déposez une image ici pour prélever des couleurs',
    es: 'Arrastra una imagen aquí para seleccionar colores',
    id: 'Tarik gambar ke sini untuk memilih warna',
    de: 'Bild hierher ziehen zum Auswählen von Farben',
    pt: 'Arraste uma imagem aqui para selecionar cores',
    it: 'Trascina qui un\'immagine per prelevare i colori'
  },
  'Drop an image here to extract palette': {
    fr: 'Déposez une image ici pour extraire une palette',
    es: 'Arrastra una imagen aquí para extraer paleta',
    id: 'Tarik gambar ke sini untuk mengekstrak palet',
    de: 'Bild hierher ziehen zum Extrahieren der Palette',
    pt: 'Arraste uma imagem aqui para extrair paleta',
    it: 'Trascina qui un\'immagine per estrarre la tavolozza'
  },
  'Drop your logo or icon image here': {
    fr: 'Déposez votre logo ou icône ici',
    es: 'Arrastra tu logo o icono aquí',
    id: 'Tarik gambar logo atau ikon Anda ke sini',
    de: 'Logo oder Icon hierher ziehen',
    pt: 'Arraste seu logo ou ícone aqui',
    it: 'Trascina qui il tuo logo o icona'
  },
  'Drop an image here to convert to Base64': {
    fr: 'Déposez une image ici pour la convertir en Base64',
    es: 'Arrastra una imagen aquí para convertir a Base64',
    id: 'Tarik gambar ke sini untuk mengonversi ke Base64',
    de: 'Bild hierher ziehen zum Konvertieren in Base64',
    pt: 'Arraste uma imagem aqui para converter em Base64',
    it: 'Trascina qui un\'immagine da convertire in Base64'
  },
  'Drop an image here to format for social media': {
    fr: 'Déposez une image ici pour adapter aux réseaux sociaux',
    es: 'Arrastra una imagen aquí para adaptar a redes sociales',
    id: 'Tarik gambar ke sini untuk menyesuaikan medsos',
    de: 'Bild hierher ziehen für Social Media',
    pt: 'Arraste uma imagem aqui para redes sociais',
    it: 'Trascina qui un\'immagine per i social media'
  },
  'Drop your portrait photo here': {
    fr: 'Déposez votre photo d\'identité ici',
    es: 'Arrastra tu foto de retrato aquí',
    id: 'Tarik foto potret Anda ke sini',
    de: 'Porträtfoto hierher ziehen',
    pt: 'Arraste sua foto de retrato aqui',
    it: 'Trascina qui la tua foto ritratto'
  },
  'Drop an image here to create a meme': {
    fr: 'Déposez une image ici pour créer un mème',
    es: 'Arrastra una imagen aquí para crear un meme',
    id: 'Tarik gambar ke sini untuk membuat meme',
    de: 'Bild hierher ziehen, um ein Meme zu erstellen',
    pt: 'Arraste uma imagem aqui para criar um meme',
    it: 'Trascina qui un\'immagine per creare un meme'
  },
  'or click to browse from your computer or phone': {
    fr: 'ou cliquez pour parcourir depuis votre appareil',
    es: 'o haz clic para examinar desde tu equipo o móvil',
    id: 'atau klik untuk memilih dari komputer atau ponsel',
    de: 'oder klicken, um ein Bild vom Gerät auszuwählen',
    pt: 'ou clique para selecionar do seu aparelho',
    it: 'o fai clic per sfogliare dal tuo computer o telefono'
  },
  'or click to browse your files': {
    fr: 'ou cliquez pour parcourir vos fichiers',
    es: 'o haz clic para explorar tus archivos',
    id: 'atau klik untuk memilih berkas Anda',
    de: 'oder klicken, um Ihre Dateien zu durchsuchen',
    pt: 'ou clique para navegar pelos seus arquivos',
    it: 'o fai clic per sfogliare i tuoi file'
  },
  'or click to browse': {
    fr: 'ou cliquez pour parcourir',
    es: 'o haz clic para explorar',
    id: 'atau klik untuk memilih',
    de: 'oder klicken zum Auswählen',
    pt: 'ou clique para navegar',
    it: 'o fai clic per sfogliare'
  },
  'JPG, PNG, or WebP formats': {
    fr: 'Formats JPG, PNG ou WebP',
    es: 'Formatos JPG, PNG o WebP',
    id: 'Format JPG, PNG, atau WebP',
    de: 'JPG-, PNG- oder WebP-Formate',
    pt: 'Formatos JPG, PNG ou WebP',
    it: 'Formati JPG, PNG o WebP'
  },
  'JPG, PNG, or WebP': {
    fr: 'JPG, PNG ou WebP',
    es: 'JPG, PNG o WebP',
    id: 'JPG, PNG, atau WebP',
    de: 'JPG, PNG oder WebP',
    pt: 'JPG, PNG ou WebP',
    it: 'JPG, PNG o WebP'
  },
  'Single or multiple files supported': {
    fr: 'Fichier unique ou fichiers multiples acceptés',
    es: 'Admite uno o varios archivos',
    id: 'Mendukung satu atau beberapa berkas',
    de: 'Einzelne oder mehrere Dateien unterstützt',
    pt: 'Suporta um ou vários arquivos',
    it: 'Supporta uno o più file'
  },
  'Convert to high-performance WebP': {
    fr: 'Convertir vers le format haute performance WebP',
    es: 'Convierte a WebP de alto rendimiento',
    id: 'Konversi ke WebP berkinerja tinggi',
    de: 'In hochperformantes WebP konvertieren',
    pt: 'Converter para WebP de alto desempenho',
    it: 'Converti in WebP ad alte prestazioni'
  },
  'Convert between JPG, PNG, and WebP': {
    fr: 'Convertir entre JPG, PNG et WebP',
    es: 'Convierte entre JPG, PNG y WebP',
    id: 'Konversi antara JPG, PNG, dan WebP',
    de: 'Zwischen JPG, PNG und WebP konvertieren',
    pt: 'Converta entre JPG, PNG e WebP',
    it: 'Converti tra JPG, PNG e WebP'
  },
  'PNG, JPG, or WebP (Square images work best)': {
    fr: 'PNG, JPG ou WebP (images carrées recommandées)',
    es: 'PNG, JPG o WebP (las imágenes cuadradas funcionan mejor)',
    id: 'PNG, JPG, atau WebP (gambar persegi berfungsi paling baik)',
    de: 'PNG, JPG oder WebP (quadratische Bilder funktionieren am besten)',
    pt: 'PNG, JPG ou WebP (imagens quadradas funcionam melhor)',
    it: 'PNG, JPG o WebP (le immagini quadrate funzionano meglio)'
  },
  'JPG, PNG, WebP, SVG, or GIF': {
    fr: 'JPG, PNG, WebP, SVG ou GIF',
    es: 'JPG, PNG, WebP, SVG ou GIF',
    id: 'JPG, PNG, WebP, SVG, atau GIF',
    de: 'JPG, PNG, WebP, SVG oder GIF',
    pt: 'JPG, PNG, WebP, SVG ou GIF',
    it: 'JPG, PNG, WebP, SVG o GIF'
  },
  'Supported formats:': {
    fr: 'Formats pris en charge :',
    es: 'Formatos compatibles:',
    id: 'Format yang didukung:',
    de: 'Unterstützte Formate:',
    pt: 'Formatos suportados:',
    it: 'Formati supportati:'
  },
  'Supports:': {
    fr: 'Formats supportés :',
    es: 'Formatos compatibles:',
    id: 'Mendukung:',
    de: 'Unterstützt:',
    pt: 'Suporta:',
    it: 'Supporta:'
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
  'Add More Images': {
    fr: 'Ajouter des images',
    es: 'Añadir más imágenes',
    id: 'Tambah Gambar Lain',
    de: 'Weitere Bilder hinzufügen',
    pt: 'Adicionar Mais Imagens',
    it: 'Aggiungi altre immagini'
  },
  'Clear All': {
    fr: 'Tout effacer',
    es: 'Borrar todo',
    id: 'Hapus Semua',
    de: 'Alles leeren',
    pt: 'Limpar Tudo',
    it: 'Cancella tutto'
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
  'Download All as ZIP': {
    fr: 'Tout télécharger (ZIP)',
    es: 'Descargar todo como ZIP',
    id: 'Unduh Semua sebagai ZIP',
    de: 'Alle als ZIP herunterladen',
    pt: 'Baixar Tudo como ZIP',
    it: 'Scarica tutto come ZIP'
  },
  'Download Active Image': {
    fr: 'Télécharger l\'image active',
    es: 'Descargar imagen activa',
    id: 'Unduh Gambar Aktif',
    de: 'Aktives Bild herunterladen',
    pt: 'Baixar Imagem Ativa',
    it: 'Scarica immagine attiva'
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
  'Freehand Drag Mode': {
    fr: 'Mode libre par glisser',
    es: 'Modo libre al arrastrar',
    id: 'Mode Tarik Bebas',
    de: 'Freihand-Ziehmodus',
    pt: 'Modo Livre ao Arrastar',
    it: 'Modalità trascina libero'
  },
  'Freehand Drag Resize': {
    fr: 'Redimensionnement libre',
    es: 'Redimensionar libremente',
    id: 'Ubah Ukuran Bebas',
    de: 'Freihand-Skalierung',
    pt: 'Redimensionar Livre',
    it: 'Ridimensionamento libero'
  },
  'Drag the corner or edge handles on the preview to resize interactively (Freehand mode).': {
    fr: 'Faites glisser les poignées de coin ou de bord pour redimensionner librement.',
    es: 'Arrastra los tiradores de las esquinas o bordes para redimensionar libremente.',
    id: 'Tarik pegangan sudut atau tepi pada pratinjau untuk mengubah ukuran bebas.',
    de: 'Ziehen Sie die Eck- oder Kantengriffe, um das Bild interaktiv frei zu skalieren.',
    pt: 'Arraste as alças de canto ou borda na visualização para redimensionar livremente.',
    it: 'Trascina le maniglie angolari o dei bordi nell\'anteprima per ridimensionare liberamente.'
  },
  'Click canvas to lock': {
    fr: 'Cliquez sur l\'image pour verrouiller',
    es: 'Haz clic en el lienzo para fijar',
    id: 'Klik kanvas untuk mengunci',
    de: 'Klicken zum Fixieren',
    pt: 'Clique na tela para fixar',
    it: 'Clicca sull\'immagine per bloccare'
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
  },

  // Additional Controls & Options
  'Custom Dimensions': {
    fr: 'Dimensions personnalisées',
    es: 'Dimensiones personalizadas',
    id: 'Dimensi Kustom',
    de: 'Benutzerdefinierte Maße',
    pt: 'Dimensões Personalizadas',
    it: 'Dimensioni personalizzate'
  },
  '1920 px (Full HD Width)': {
    fr: '1920 px (Largeur Full HD)',
    es: '1920 px (Ancho Full HD)',
    id: '1920 px (Lebar Full HD)',
    de: '1920 px (Full HD Breite)',
    pt: '1920 px (Largura Full HD)',
    it: '1920 px (Larghezza Full HD)'
  },
  '1280 px (HD Width)': {
    fr: '1280 px (Largeur HD)',
    es: '1280 px (Ancho HD)',
    id: '1280 px (Lebar HD)',
    de: '1280 px (HD Breite)',
    pt: '1280 px (Largura HD)',
    it: '1280 px (Larghezza HD)'
  },
  '1080 px (Social Square / Banner)': {
    fr: '1080 px (Carré réseaux sociaux / Bannière)',
    es: '1080 px (Cuadrado para redes / Banner)',
    id: '1080 px (Persegi Medsos / Spanduk)',
    de: '1080 px (Social Square / Banner)',
    pt: '1080 px (Quadrado Social / Banner)',
    it: '1080 px (Quadrato social / Banner)'
  },
  '720 px (Standard Web Width)': {
    fr: '720 px (Largeur web standard)',
    es: '720 px (Ancho web estándar)',
    id: '720 px (Lebar Web Standar)',
    de: '720 px (Standard-Webbreite)',
    pt: '720 px (Largura Web Padrão)',
    it: '720 px (Larghezza web standard)'
  },
  'Output Quality': {
    fr: 'Qualité de sortie',
    es: 'Calidad de salida',
    id: 'Kualitas Output',
    de: 'Ausgabequalität',
    pt: 'Qualidade de Saída',
    it: 'Qualità di output'
  },
  'New Dimensions': {
    fr: 'Nouvelles dimensions',
    es: 'Nuevas dimensions',
    id: 'Dimensi Baru',
    de: 'Neue Abmessungen',
    pt: 'Novas Dimensões',
    it: 'Nuove dimensioni'
  },
  'Est. File Size': {
    fr: 'Taille est. du fichier',
    es: 'Tamaño est. de archivo',
    id: 'Perkiraan Ukuran Berkas',
    de: 'Geschätzte Dateigröße',
    pt: 'Tamanho Est. do Arquivo',
    it: 'Dimensione stimata file'
  },
  'Target': {
    fr: 'Cible',
    es: 'Objetivo',
    id: 'Target',
    de: 'Ziel',
    pt: 'Alvo',
    it: 'Target'
  },
  'Closest Achievable': {
    fr: 'Taille la plus proche',
    es: 'Tamaño más cercano',
    id: 'Paling Mendekati',
    de: 'Nächstmögliche Größe',
    pt: 'Mais Próximo Possível',
    it: 'Più vicina raggiungibile'
  },
  'Reduction': {
    fr: 'Réduction',
    es: 'Reducción',
    id: 'Pengurangan',
    de: 'Reduzierung',
    pt: 'Redução',
    it: 'Riduzione'
  },
  'Optimizing quality and dimensions iteratively...': {
    fr: 'Optimisation itérative de la qualité et des dimensions...',
    es: 'Optimizando calidad y dimensiones de forma iterativa...',
    id: 'Mengoptimalkan kualitas dan dimensi secara iteratif...',
    de: 'Qualität und Abmessungen werden iterativ optimiert...',
    pt: 'Otimizando qualidade e dimensões iterativamente...',
    it: 'Ottimizzazione iterativa di qualità e dimensioni...'
  },
  'JPG / JPEG (Best for strict limits)': {
    fr: 'JPG / JPEG (Idéal pour limites strictes)',
    es: 'JPG / JPEG (Ideal para límites estrictos)',
    id: 'JPG / JPEG (Terbaik untuk batas ketat)',
    de: 'JPG / JPEG (Ideal für strenge Limits)',
    pt: 'JPG / JPEG (Melhor para limites estritos)',
    it: 'JPG / JPEG (Ideale per limiti rigorosi)'
  },
  'WebP (Efficient)': {
    fr: 'WebP (Efficace)',
    es: 'WebP (Eficiente)',
    id: 'WebP (Efisien)',
    de: 'WebP (Effizient)',
    pt: 'WebP (Eficiente)',
    it: 'WebP (Efficiente)'
  },
  'Zoom Level': {
    fr: 'Niveau de zoom',
    es: 'Nivel de zoom',
    id: 'Tingkat Zoom',
    de: 'Zoomstufe',
    pt: 'Nível de Zoom',
    it: 'Livello di zoom'
  },
  'Rotate 90°': {
    fr: 'Pivoter 90°',
    es: 'Girar 90°',
    id: 'Putar 90°',
    de: '90° drehen',
    pt: 'Girar 90°',
    it: 'Ruota di 90°'
  },
  'Cropped Output Result': {
    fr: 'Résultat du recadrage',
    es: 'Resultado recortado',
    id: 'Hasil Gambar Terpotong',
    de: 'Zugeschnittenes Ergebnis',
    pt: 'Resultado do Recorte',
    it: 'Risultato ritagliato'
  },
  'Click and drag inside the blue box to reposition. Drag the corner handles to resize.': {
    fr: 'Cliquez et glissez à l\'intérieur du cadre bleu pour repositionner. Glissez les coins pour redimensionner.',
    es: 'Haz clic y arrastra dentro del recuadro azul para mover. Arrastra las esquinas para cambiar el tamaño.',
    id: 'Klik dan tarik ke dalam kotak biru untuk memposisikan ulang. Tarik sudut untuk mengubah ukuran.',
    de: 'Im blauen Kasten ziehen zum Verschieben. Eckpunkte ziehen zum Ändern der Größe.',
    pt: 'Clique e arraste dentro da caixa azul para reposicionar. Arraste as alças dos cantos para redimensionar.',
    it: 'Fai clic e trascina all\'interno del riquadro blu per riposizionare. Trascina gli angoli per ridimensionare.'
  },
  'Angle': {
    fr: 'Angle',
    es: 'Ángulo',
    id: 'Sudut',
    de: 'Winkel',
    pt: 'Ângulo',
    it: 'Angolo'
  },
  'Mirror': {
    fr: 'Miroir',
    es: 'Espejo',
    id: 'Cermin',
    de: 'Spiegelung',
    pt: 'Espelhar',
    it: 'Specchia'
  },
  'None': {
    fr: 'Aucun',
    es: 'Ninguno',
    id: 'Tidak ada',
    de: 'Keine',
    pt: 'Nenhum',
    it: 'Nessuno'
  },
  'JPG Input': {
    fr: 'Entrée JPG',
    es: 'Entrada JPG',
    id: 'Input JPG',
    de: 'JPG-Eingang',
    pt: 'Entrada JPG',
    it: 'Input JPG'
  },
  'PNG Output': {
    fr: 'Sortie PNG',
    es: 'Salida PNG',
    id: 'Output PNG',
    de: 'PNG-Ausgang',
    pt: 'Saída PNG',
    it: 'Output PNG'
  },
  'PNG Input': {
    fr: 'Entrée PNG',
    es: 'Entrada PNG',
    id: 'Input PNG',
    de: 'PNG-Eingang',
    pt: 'Entrada PNG',
    it: 'Input PNG'
  },
  'JPG Output': {
    fr: 'Sortie JPG',
    es: 'Salida JPG',
    id: 'Output JPG',
    de: 'JPG-Ausgang',
    pt: 'Saída JPG',
    it: 'Output JPG'
  },
  'Custom Color': {
    fr: 'Couleur personnalisée',
    es: 'Color personalizado',
    id: 'Warna Khusus',
    de: 'Eigene Farbe',
    pt: 'Cor Personalizada',
    it: 'Colore personalizzato'
  },
  'JPG Quality': {
    fr: 'Qualité JPG',
    es: 'Calidad JPG',
    id: 'Kualitas JPG',
    de: 'JPG-Qualität',
    pt: 'Qualidade JPG',
    it: 'Qualità JPG'
  },
  'WebP Quality': {
    fr: 'Qualité WebP',
    es: 'Calidad WebP',
    id: 'Kualitas WebP',
    de: 'WebP-Qualität',
    pt: 'Qualidade WebP',
    it: 'Qualità WebP'
  },
  'WebP Size': {
    fr: 'Taille WebP',
    es: 'Tamaño WebP',
    id: 'Ukuran WebP',
    de: 'WebP-Größe',
    pt: 'Tamanho WebP',
    it: 'Dimensione WebP'
  },
  '80%–85% provides optimal web compression without visible artifacts.': {
    fr: '80 %–85 % offre une compression optimale pour le web sans artéfacts visibles.',
    es: '80%–85% ofrece una compresión web óptima sin artefactos visibles.',
    id: '80%–85% memberikan kompresi web optimal tanpa artefak yang terlihat.',
    de: '80 %–85 % bietet optimale Web-Kompression ohne sichtbare Artefakte.',
    pt: '80%–85% oferece compressão web ideal sem artefatos visíveis.',
    it: 'L\'80%–85% offre una compressione web ottimale senza artefatti visibili.'
  },
  'WebP (High Speed & Small Size)': {
    fr: 'WebP (Haute vitesse &amp; petite taille)',
    es: 'WebP (Alta velocidad y tamaño reducido)',
    id: 'WebP (Kecepatan Tinggi &amp; Ukuran Kecil)',
    de: 'WebP (Hohe Geschwindigkeit &amp; kleine Größe)',
    pt: 'WebP (Alta Velocidade e Tamanho Reduzido)',
    it: 'WebP (Alta velocità e dimensioni ridotte)'
  },
  'WebP (High Speed &amp; Small Size)': {
    fr: 'WebP (Haute vitesse &amp; petite taille)',
    es: 'WebP (Alta velocidad y tamaño reducido)',
    id: 'WebP (Kecepatan Tinggi &amp; Ukuran Kecil)',
    de: 'WebP (Hohe Geschwindigkeit &amp; kleine Größe)',
    pt: 'WebP (Alta Velocidade e Tamanho Reduzido)',
    it: 'WebP (Alta velocità e dimensioni ridotte)'
  },
  'JPG / JPEG (Universal Compatibility)': {
    fr: 'JPG / JPEG (Compatibilité universelle)',
    es: 'JPG / JPEG (Compatibilidad universal)',
    id: 'JPG / JPEG (Kompatibilitas Universal)',
    de: 'JPG / JPEG (Universelle Kompatibilität)',
    pt: 'JPG / JPEG (Compatibilidade Universal)',
    it: 'JPG / JPEG (Compatibilità universale)'
  },
  'PNG (Lossless & Transparent)': {
    fr: 'PNG (Sans perte &amp; transparent)',
    es: 'PNG (Sin pérdidas y transparente)',
    id: 'PNG (Tanpa Penurunan Mutu &amp; Transparan)',
    de: 'PNG (Verlustfrei &amp; transparent)',
    pt: 'PNG (Sem perdas e transparente)',
    it: 'PNG (Senza perdita e trasparente)'
  },
  'PNG (Lossless &amp; Transparent)': {
    fr: 'PNG (Sans perte &amp; transparent)',
    es: 'PNG (Sin pérdidas y transparente)',
    id: 'PNG (Tanpa Penurunan Mutu &amp; Transparan)',
    de: 'PNG (Verlustfrei &amp; transparent)',
    pt: 'PNG (Sem perdas e transparente)',
    it: 'PNG (Senza perdita e trasparente)'
  },
  'Source Format': {
    fr: 'Format source',
    es: 'Formato de origen',
    id: 'Format Sumber',
    de: 'Quellformat',
    pt: 'Formato de Origem',
    it: 'Formato di origine'
  },
  'Target Format': {
    fr: 'Format cible',
    es: 'Formato de destino',
    id: 'Format Target',
    de: 'Zielformat',
    pt: 'Formato de Destino',
    it: 'Formato di destinazione'
  },
  'Grayscale': {
    fr: 'Niveaux de gris',
    es: 'Escala de grises',
    id: 'Skala Abu-abu',
    de: 'Graustufen',
    pt: 'Escala de Cinza',
    it: 'Scala di grigi'
  },
  'Brightness': {
    fr: 'Luminosité',
    es: 'Brillo',
    id: 'Kecerahan',
    de: 'Helligkeit',
    pt: 'Brilho',
    it: 'Luminosità'
  },
  'Contrast': {
    fr: 'Contraste',
    es: 'Contraste',
    id: 'Kontras',
    de: 'Kontrast',
    pt: 'Contraste',
    it: 'Contrasto'
  },
  'Saturation': {
    fr: 'Saturation',
    es: 'Saturación',
    id: 'Saturasi',
    de: 'Sättigung',
    pt: 'Saturação',
    it: 'Saturazione'
  },
  'Blur Radius': {
    fr: 'Rayon de flou',
    es: 'Radio de desenfoque',
    id: 'Radius Blur',
    de: 'Unschärferadius',
    pt: 'Raio de Desfoque',
    it: 'Raggio di sfocatura'
  },
  'Sharpen Intensity': {
    fr: 'Intensité de netteté',
    es: 'Intensidad de enfoque',
    id: 'Intensitas Ketajaman',
    de: 'Schärfeintensität',
    pt: 'Intensidade de Nitidez',
    it: 'Intensità di nitidezza'
  },
  'Active Sample': {
    fr: 'Échantillon actif',
    es: 'Muestra activa',
    id: 'Sampel Aktif',
    de: 'Aktive Farbprobe',
    pt: 'Amostra Ativa',
    it: 'Campione attivo'
  },
  'Click canvas to lock': {
    fr: 'Cliquez sur l\'image pour verrouiller',
    es: 'Haz clic en el lienzo para fijar',
    id: 'Klik kanvas untuk mengunci',
    de: 'Klicken zum Fixieren',
    pt: 'Clique na tela para fixar',
    it: 'Fai clic sulla tela per bloccare'
  },
  'Hover over the image for enlarged pixel magnification. Click anywhere to capture.': {
    fr: 'Survolez l\'image pour voir les pixels agrandis. Cliquez n\'importe où pour capturer.',
    es: 'Pasa el cursor sobre la imagen para ampliar los píxeles. Haz clic para capturar.',
    id: 'Arahkan kursor ke gambar untuk perbesaran piksel. Klik di mana saja untuk mengambil warna.',
    de: 'Fahren Sie über das Bild für Lupenansicht. Klicken Sie zum Auswählen.',
    pt: 'Passe o mouse sobre a imagem para ampliar os pixels. Clique em qualquer ponto para capturar.',
    it: 'Passa il mouse sull\'immagine per ingrandire i pixel. Fai clic per catturare.'
  },
  'Extracted Dominant Swatches (Click to Copy)': {
    fr: 'Nuances dominantes extraites (cliquez pour copier)',
    es: 'Muestras dominantes extraídas (clic para copiar)',
    id: 'Sampel Warna Dominan (Klik untuk Menyalin)',
    de: 'Extrahierte Hauptfarben (Klicken zum Kopieren)',
    pt: 'Amostras Dominantes Extraídas (Clique para Copiar)',
    it: 'Campioni dominanti estratti (fai clic per copiare)'
  },
  'Generated Favicon Sizes': {
    fr: 'Tailles de favicons générées',
    es: 'Tamaños de favicon generados',
    id: 'Ukuran Favicon Dihasilkan',
    de: 'Generierte Favicon-Größen',
    pt: 'Tamanhos de Favicon Gerados',
    it: 'Dimensioni favicon generate'
  },
  'Paste Base64 String or Data URL': {
    fr: 'Collez la chaîne Base64 ou Data URL',
    es: 'Pega la cadena Base64 o Data URL',
    id: 'Tempel String Base64 atau Data URL',
    de: 'Base64-String oder Data-URL einfügen',
    pt: 'Cole a String Base64 ou Data URL',
    it: 'Incolla la stringa Base64 o il Data URL'
  },
  'Instagram Square (1080 × 1080 px)': {
    fr: 'Carré Instagram (1080 × 1080 px)',
    es: 'Cuadrado Instagram (1080 × 1080 px)',
    id: 'Instagram Persegi (1080 × 1080 px)',
    de: 'Instagram Quadrat (1080 × 1080 px)',
    pt: 'Instagram Quadrado (1080 × 1080 px)',
    it: 'Instagram quadrato (1080 × 1080 px)'
  },
  'Instagram Portrait (1080 × 1350 px)': {
    fr: 'Portrait Instagram (1080 × 1350 px)',
    es: 'Retrato Instagram (1080 × 1350 px)',
    id: 'Instagram Potret (1080 × 1350 px)',
    de: 'Instagram Porträt (1080 × 1350 px)',
    pt: 'Instagram Retrato (1080 × 1350 px)',
    it: 'Instagram ritratto (1080 × 1350 px)'
  },
  'Instagram Story / Reel (1080 × 1920 px)': {
    fr: 'Story / Reel Instagram (1080 × 1920 px)',
    es: 'Historia / Reel de Instagram (1080 × 1920 px)',
    id: 'Instagram Story / Reel (1080 × 1920 px)',
    de: 'Instagram Story / Reel (1080 × 1920 px)',
    pt: 'Instagram Story / Reel (1080 × 1920 px)',
    it: 'Instagram Story / Reel (1080 × 1920 px)'
  },
  'Facebook Post (1200 × 630 px)': {
    fr: 'Publication Facebook (1200 × 630 px)',
    es: 'Publicación de Facebook (1200 × 630 px)',
    id: 'Postingan Facebook (1200 × 630 px)',
    de: 'Facebook-Beitrag (1200 × 630 px)',
    pt: 'Publicação no Facebook (1200 × 630 px)',
    it: 'Post Facebook (1200 × 630 px)'
  },
  'Facebook Cover (820 × 312 px)': {
    fr: 'Couverture Facebook (820 × 312 px)',
    es: 'Portada de Facebook (820 × 312 px)',
    id: 'Sampul Facebook (820 × 312 px)',
    de: 'Facebook-Titelbild (820 × 312 px)',
    pt: 'Capa do Facebook (820 × 312 px)',
    it: 'Copertina Facebook (820 × 312 px)'
  },
  'YouTube Thumbnail (1280 × 720 px)': {
    fr: 'Miniature YouTube (1280 × 720 px)',
    es: 'Miniatura de YouTube (1280 × 720 px)',
    id: 'Thumbnail YouTube (1280 × 720 px)',
    de: 'YouTube-Thumbnail (1280 × 720 px)',
    pt: 'Miniatura do YouTube (1280 × 720 px)',
    it: 'Miniatura YouTube (1280 × 720 px)'
  },
  'LinkedIn Post (1200 × 627 px)': {
    fr: 'Publication LinkedIn (1200 × 627 px)',
    es: 'Publicación de LinkedIn (1200 × 627 px)',
    id: 'Postingan LinkedIn (1200 × 627 px)',
    de: 'LinkedIn-Beitrag (1200 × 627 px)',
    pt: 'Publicação no LinkedIn (1200 × 627 px)',
    it: 'Post LinkedIn (1200 × 627 px)'
  },
  'X (Twitter) Post (1200 × 675 px)': {
    fr: 'Publication X (Twitter) (1200 × 675 px)',
    es: 'Publicación de X (Twitter) (1200 × 675 px)',
    id: 'Postingan X (Twitter) (1200 × 675 px)',
    de: 'X (Twitter)-Beitrag (1200 × 675 px)',
    pt: 'Publicação no X (Twitter) (1200 × 675 px)',
    it: 'Post X (Twitter) (1200 × 675 px)'
  },
  'Fill (Crop center to fill canvas)': {
    fr: 'Remplir (recadrer le centre pour remplir)',
    es: 'Rellenar (recortar el centro para llenar lienzo)',
    id: 'Isi Penuh (Potong tengah hingga penuh)',
    de: 'Ausfüllen (Zentriert zuschneiden)',
    pt: 'Preencher (recortar o centro para preencher)',
    it: 'Riempi (ritaglia il centro per riempire la tela)'
  },
  'Fit (Contain whole image with padding)': {
    fr: 'Ajuster (conserver toute l\'image avec marges)',
    es: 'Ajustar (contener imagen completa con margen)',
    id: 'Sesuaikan (Muat seluruh gambar dengan padding)',
    de: 'Einpassen (Ganzes Bild mit Rand)',
    pt: 'Ajustar (conter imagem inteira com margens)',
    it: 'Adatta (contieni l\'intera immagine con margini)'
  },
  'Modern Sans': {
    fr: 'Sans-serif moderne',
    es: 'Sans-serif moderno',
    id: 'Sans-serif Modern',
    de: 'Modernes Sans-Serif',
    pt: 'Sans-serif Moderno',
    it: 'Sans-serif moderno'
  },
  'Font Size': {
    fr: 'Taille de police',
    es: 'Tamaño de fuente',
    id: 'Ukuran Font',
    de: 'Schriftgröße',
    pt: 'Tamanho da Fonte',
    it: 'Dimensione carattere'
  },
  'Click and drag any text caption directly on the canvas to reposition.': {
    fr: 'Cliquez et glissez le texte directement sur le canevas pour le repositionner.',
    es: 'Haz clic y arrastra cualquier texto directamente en el lienzo para moverlo.',
    id: 'Klik dan tarik teks langsung di kanvas untuk memposisikan ulang.',
    de: 'Text direkt auf der Arbeitsfläche anklicken und ziehen zum Neupositionieren.',
    pt: 'Clique e arraste qualquer legenda de texto diretamente na tela para reposicionar.',
    it: 'Fai clic e trascina il testo direttamente sulla tela per riposizionarlo.'
  },
  'Format': {
    fr: 'Format',
    es: 'Formato',
    id: 'Format',
    de: 'Format',
    pt: 'Formato',
    it: 'Formato'
  },
  'Dimensions': {
    fr: 'Dimensions',
    es: 'Dimensiones',
    id: 'Dimensi',
    de: 'Abmessungen',
    pt: 'Dimensões',
    it: 'Dimensioni'
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
