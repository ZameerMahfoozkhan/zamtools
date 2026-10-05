/**
 * Tools Translations: Compression Group
 * - imageCompressor
 * - imageToTargetSize
 */

const compressTools = {
  imageCompressor: {
    en: {
      name: 'Image Compressor',
      title: 'Image Compressor Online – Compress JPG, PNG & WebP | ZamTools',
      metaDescription: 'Compress JPG, PNG, and WebP images online for free. Adjust quality, compare file sizes, and download optimized images with 100% local browser processing.',
      h1: 'Image Compressor Online',
      lead: 'Reduce JPG, PNG, and WebP file sizes quickly and safely. Fine-tune your compression quality with a live slider, inspect before-and-after results, and download your optimized files with zero server uploads.',
      category: 'Compress',
      keywords: ['image compressor', 'compress image', 'reduce image size', 'compress jpg', 'compress png', 'compress webp', 'shrink image file'],
      howToTitle: 'How to Compress an Image Online',
      howToSteps: [
        { step: 1, title: 'Upload Your Image', text: 'Drag and drop any JPG, PNG, or WebP photo into the workspace or click "Choose Image".' },
        { step: 2, title: 'Adjust Quality Slider', text: 'Slide between 5% and 100%. Watch the live preview update instantly with real-time byte counts.' },
        { step: 3, title: 'Select Format (Optional)', text: 'Keep your original format or convert directly to WebP for even greater bandwidth savings.' },
        { step: 4, title: 'Download Optimized File', text: 'Click "Download Image" to save your compressed file immediately to your device.' }
      ],
      featuresTitle: 'Key Compressor Features',
      features: [
        { title: 'Real-Time Side-by-Side Comparison', text: 'Inspect the original and compressed versions side-by-side to guarantee clarity and sharpness.' },
        { title: 'Batch Processing Support', text: 'Select multiple photos to compress an entire batch quickly with sequential downloading.' },
        { title: 'Format Transcoding', text: 'Convert to modern WebP during compression to maximize byte reduction for web performance.' },
        { title: 'Zero Dimension Loss', text: 'Pixel dimensions are 100% preserved. We optimize data redundancy without unexpected downscaling.' }
      ],
      tipsTitle: 'Pro Tips for Optimal Compression',
      tipsText: 'For web photography, a quality setting between 72% and 82% usually cuts file size by 60%–80% with virtually imperceptible visual difference to human eyes. For graphics containing sharp contrast text and transparent backgrounds, consider exporting as WebP or keeping PNG.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How does browser-side image compression work?', a: 'Your browser reads the image into an HTML5 Canvas context in your computer\'s memory. The browser\'s native image encoders re-encode the pixels using your chosen quality parameter entirely locally.' },
        { q: 'Will compressing an image reduce its physical pixel dimensions?', a: 'No. The Image Compressor maintains your exact width and height. It optimizes compression tables and reduces high-frequency redundancies.' },
        { q: 'Why is WebP smaller than JPG at the same visual quality?', a: 'WebP uses advanced predictive block coding based on the VP8 video codec, predicting neighboring pixel blocks more accurately than legacy discrete cosine transform algorithms in JPEG.' },
        { q: 'Are my photos ever uploaded to a remote server?', a: 'Never. All compression calculations run directly in your browser\'s sandbox. Your photos stay strictly on your device.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    },

    fr: {
      name: 'Compresseur d\'image',
      title: 'Compresseur d\'image en ligne – Réduire JPG, PNG et WebP | ZamTools',
      metaDescription: 'Compressez vos images JPG, PNG et WebP gratuitement en ligne. Ajustez la qualité, comparez les tailles et téléchargez vos images optimisées en toute confidentialité.',
      h1: 'Compresseur d\'image en ligne gratuit',
      lead: 'Réduisez la taille de vos fichiers JPG, PNG et WebP rapidement et sans perte visuelle. Ajustez la qualité de compression en direct avec le curseur, visualisez le résultat avant/après et téléchargez vos images sans aucun transfert sur serveur.',
      category: 'Compression',
      keywords: ['compresseur image', 'compresser image', 'réduire taille image', 'compresser jpg', 'compresser png', 'compresser webp', 'optimiser photo'],
      howToTitle: 'Comment compresser une image en ligne',
      howToSteps: [
        { step: 1, title: 'Sélectionnez votre image', text: 'Glissez-déposez votre photo JPG, PNG ou WebP dans l\'espace de travail ou cliquez sur "Choisir une image".' },
        { step: 2, title: 'Réglez le curseur de qualité', text: 'Ajustez le niveau entre 5 % et 100 %. Observez en temps réel le gain de poids et l\'aperçu du résultat.' },
        { step: 3, title: 'Choisissez le format (optionnel)', text: 'Conservez le format d\'origine ou convertissez directement en WebP pour un gain de poids encore supérieur.' },
        { step: 4, title: 'Téléchargez l\'image optimisée', text: 'Cliquez sur "Télécharger l\'image" pour enregistrer votre fichier compressé directement sur votre appareil.' }
      ],
      featuresTitle: 'Fonctionnalités clés du compresseur',
      features: [
        { title: 'Comparaison avant/après en direct', text: 'Comparez l\'image originale et la version compressée côte à côte pour vérifier la netteté des détails.' },
        { title: 'Traitement par lot disponible', text: 'Sélectionnez plusieurs photos à la fois pour compresser rapidement une série d\'images avec téléchargement groupé.' },
        { title: 'Conversion WebP intégrée', text: 'Passez facilement au format WebP lors de la compression pour maximiser la vitesse de chargement de vos pages web.' },
        { title: 'Dimensions d\'origine préservées', text: 'La largeur et la hauteur en pixels restent strictement identiques. Seul le codage des données est optimisé.' }
      ],
      tipsTitle: 'Conseils pratiques pour une compression idéale',
      tipsText: 'Pour les photos destinées au web, un réglage de qualité compris entre 70 % et 80 % permet généralement de réduire la taille de 60 % à 80 % sans perte perceptible à l\'œil nu. Pour les logos ou graphiques contenant de la transparence, privilégiez le format WebP.',
      faqTitle: 'Questions fréquentes sur la compression d\'image',
      faqs: [
        { q: 'Comment fonctionne la compression d\'image dans le navigateur ?', a: 'Votre navigateur charge l\'image dans un contexte Canvas HTML5 en mémoire locale. Les encodeurs natifs du navigateur réencodent les pixels selon le niveau de qualité choisi, sans aucun échange réseau.' },
        { q: 'La compression modifie-t-elle les dimensions en pixels de la photo ?', a: 'Non. Le compresseur d\'image conserve exactement la largeur et la hauteur d\'origine. Si vous souhaitez modifier les dimensions, utilisez notre outil de redimensionnement.' },
        { q: 'Pourquoi le format WebP est-il plus léger que le JPG ?', a: 'Le format WebP utilise des algorithmes de prédiction spatiale dérivés du codec VP8, ce qui lui permet de coder les blocs de pixels avec un rendement nettement supérieur au JPEG classique.' },
        { q: 'Mes images sont-elles envoyées sur un serveur distant ?', a: 'Absolument pas. Tout le traitement s\'exécute localement dans votre navigateur. Vos données et photos ne quittent jamais votre ordinateur ou smartphone.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    },

    es: {
      name: 'Compresor de imágenes',
      title: 'Comprimir imágenes online gratis – JPG, PNG y WebP | ZamTools',
      metaDescription: 'Comprime imágenes JPG, PNG y WebP online gratis. Reduce el peso de tus fotos sin perder calidad visual y con procesamiento 100% privado en tu navegador.',
      h1: 'Comprimir imágenes online gratis',
      lead: 'Reduce el tamaño de tus fotos JPG, PNG y WebP de forma rápida, eficiente y totalmente segura. Ajusta el nivel de compresión con el deslizador en tiempo real, compara el antes y después y descarga tu imagen optimizada sin subir nada a servidores.',
      category: 'Compresión',
      keywords: ['comprimir imagen', 'compresor de fotos', 'reducir tamano imagen', 'comprimir jpg', 'comprimir png', 'comprimir webp', 'bajar peso foto'],
      howToTitle: 'Cómo comprimir una imagen online',
      howToSteps: [
        { step: 1, title: 'Carga tu imagen', text: 'Arrastra cualquier foto JPG, PNG o WebP al área de trabajo o haz clic en "Seleccionar imagen".' },
        { step: 2, title: 'Ajusta la calidad', text: 'Mueve el control deslizante entre 5% y 100%. Verás el cálculo en tiempo real del peso resultante y la previsualización.' },
        { step: 3, title: 'Elige formato (opcional)', text: 'Mantén el formato original o transfiere a WebP para obtener el máximo ahorro de espacio.' },
        { step: 4, title: 'Descarga tu archivo optimizado', text: 'Haz clic en "Descargar imagen" para guardar el archivo comprimido directamente en tu dispositivo.' }
      ],
      featuresTitle: 'Características principales del compresor',
      features: [
        { title: 'Comparación interactiva en vivo', text: 'Inspecciona la foto original junto a la comprimida para garantizar que el texto y las texturas se mantengan nítidos.' },
        { title: 'Compresión de varias fotos', text: 'Selecciona múltiples imágenes para comprimir un lote completo con opción de descarga secuencial.' },
        { title: 'Conversión directa a WebP', text: 'Aprovecha las ventajas del formato WebP para aligerar la carga de tu sitio web o aplicación.' },
        { title: 'Resolución de píxeles intacta', text: 'El ancho y alto de tu fotografía no se alteran. La reducción de peso se logra optimizando datos redundantes.' }
      ],
      tipsTitle: 'Consejos para optimizar tus imágenes',
      tipsText: 'Para fotografías destinadas a páginas web, una calidad entre 75% y 80% suele reducir entre un 60% y 80% del peso con una diferencia visual prácticamente imperceptible. Para ilustraciones con texto o fondo transparente, exportar en WebP ofrece excelentes resultados.',
      faqTitle: 'Preguntas frecuentes sobre la compresión',
      faqs: [
        { q: '¿Cómo funciona la compresión local en el navegador?', a: 'Tu navegador lee la imagen en la memoria RAM utilizando las API Canvas y File de HTML5. El motor de codificación nativo genera el nuevo archivo sin enviar datos a ningún servidor externo.' },
        { q: '¿Comprimir una imagen reduce sus dimensiones de píxeles?', a: 'No. El compresor conserva el ancho y el alto exactos de la foto original. Si necesitas cambiar las dimensiones físicas, utiliza nuestro Redimensionador de imágenes.' },
        { q: '¿Por qué WebP genera archivos más pequeños que JPG?', a: 'WebP utiliza predicción espacial basada en el códec VP8, lo que comprime gradientes y detalles con mucha mayor precisión que los algoritmos tradicionales de JPEG.' },
        { q: '¿Mis imágenes se suben a algún servidor de ZamTools?', a: 'Nunca. El procesamiento ocurre exclusivamente en tu navegador de forma privada. Tus archivos no salen de tu dispositivo.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    },

    id: {
      name: 'Kompres Gambar',
      title: 'Kompres Gambar Online – Perkecil Ukuran JPG, PNG & WebP | ZamTools',
      metaDescription: 'Kompres gambar JPG, PNG, dan WebP online gratis. Atur kualitas kompresi, bandingkan ukuran file, dan unduh hasil optimasi dengan pemrosesan 100% lokal di browser.',
      h1: 'Kompres Gambar Online Gratis',
      lead: 'Perkecil ukuran file gambar JPG, PNG, dan WebP dengan cepat dan aman. Sesuaikan kualitas menggunakan slider interaktif, bandingkan hasil sebelum dan sesudah kompresi, lalu unduh hasilnya tanpa mengunggah file ke server mana pun.',
      category: 'Kompresi',
      keywords: ['kompres gambar', 'perkecil ukuran foto', 'kompres jpg', 'kompres png', 'kompres foto online', 'kurangi kb foto', 'kompres webp'],
      howToTitle: 'Cara Mengompres Gambar Secara Online',
      howToSteps: [
        { step: 1, title: 'Pilih Gambar Anda', text: 'Tarik dan lepas foto JPG, PNG, atau WebP ke area kerja atau klik tombol "Pilih Gambar".' },
        { step: 2, title: 'Atur Kualitas Kompresi', text: 'Geser slider antara 5% hingga 100%. Lihat perubahan ukuran byte dan perbandingan visual secara langsung.' },
        { step: 3, title: 'Pilih Format (Opsional)', text: 'Pertahankan format asli atau konversi ke WebP untuk penghematan ukuran file yang lebih besar.' },
        { step: 4, title: 'Unduh Gambar Terkompresi', text: 'Klik "Unduh Gambar" untuk menyimpan hasil optimasi langsung ke folder unduhan perangkat Anda.' }
      ],
      featuresTitle: 'Keunggulan Alat Kompres Gambar',
      features: [
        { title: 'Perbandingan Sebelum & Sesudah', text: 'Bandingkan gambar asli dan hasil kompresi berdampingan untuk memastikan detail foto tetap tajam.' },
        { title: 'Dukungan Banyak Foto Sekaligus', text: 'Pilih beberapa gambar sekaligus untuk proses kompresi cepat dengan fitur unduh bertahap.' },
        { title: 'Konversi ke WebP', text: 'Ubah gambar ke format WebP modern saat mengompres untuk meningkatkan kecepatan loading website.' },
        { title: 'Dimensi Piksel Tetap Terjaga', text: 'Lebar dan tinggi piksel foto asli Anda tidak akan menyusut tanpa izin Anda.' }
      ],
      tipsTitle: 'Tips Memilih Kualitas Kompresi Terbaik',
      tipsText: 'Untuk foto web atau lampiran email, pengaturan kualitas antara 70% hingga 80% biasanya dapat memangkas ukuran file hingga 60%–80% tanpa penurunan kualitas visual yang kentara di mata manusia.',
      faqTitle: 'Tanya Jawab Seputar Kompresi Gambar',
      faqs: [
        { q: 'Bagaimana cara kerja kompresi gambar di browser?', a: 'Browser Anda memproses gambar di memori RAM menggunakan HTML5 Canvas. Enkoder bawaan browser mengompres piksel sesuai kualitas yang Anda tentukan secara lokal.' },
        { q: 'Apakah kompresi mengubah ukuran resolusi piksel foto?', a: 'Tidak. Kompresi gambar ini hanya memadatkan data warna tanpa mengubah resolusi panjang dan lebar piksel gambar Anda.' },
        { q: 'Mengapa format WebP lebih kecil daripada JPG?', a: 'Format WebP memakai algoritma prediksi blok piksel yang lebih mutakhir, menghasilkan kompresi yang jauh lebih efisien pada kualitas visual yang sebanding.' },
        { q: 'Apakah foto saya diunggah ke server ZamTools?', a: 'Sama sekali tidak. Semua proses kompresi berjalan di dalam browser perangkat Anda. Privasi foto Anda 100% terlindungi.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    },

    de: {
      name: 'Bild komprimieren',
      title: 'Bild komprimieren online – JPG, PNG & WebP verkleinern | ZamTools',
      metaDescription: 'Komprimieren Sie JPG, PNG und WebP Bilder kostenlos online. Dateigröße reduzieren mit Live-Vorschau und 100 % lokaler Verarbeitung im Browser.',
      h1: 'Bilder online komprimieren',
      lead: 'Reduzieren Sie die Dateigröße von JPG-, PNG- und WebP-Bildern schnell, verlustarm und datensicher. Stellen Sie die Kompressionsstufe stufenlos ein, vergleichen Sie Vorher/Nachher direkt im Browser und laden Sie das optimierte Bild ohne Server-Upload herunter.',
      category: 'Komprimieren',
      keywords: ['bild komprimieren', 'bild verkleinern dateigroesse', 'jpg komprimieren', 'png komprimieren', 'foto komprimieren online', 'webp komprimieren'],
      howToTitle: 'So komprimieren Sie ein Bild online',
      howToSteps: [
        { step: 1, title: 'Bild auswählen', text: 'Ziehen Sie Ihre JPG-, PNG- oder WebP-Datei per Drag & Drop in das Feld oder klicken Sie auf "Bild auswählen".' },
        { step: 2, title: 'Qualität anpassen', text: 'Verschieben Sie den Regler zwischen 5 % und 100 %. Die Dateigröße und Bildvorschau aktualisieren sich in Echtzeit.' },
        { step: 3, title: 'Format wählen (optional)', text: 'Behalten Sie das Ausgangsformat bei oder wählen Sie WebP für noch stärkere Speicherplatzersparnis.' },
        { step: 4, title: 'Optimiertes Bild herunterladen', text: 'Klicken Sie auf "Bild herunterladen", um die komprimierte Bilddatei direkt auf Ihrem Gerät zu speichern.' }
      ],
      featuresTitle: 'Hauptfunktionen des Bildkomprimierers',
      features: [
        { title: 'Echtzeit-Vergleichsansicht', text: 'Vergleichen Sie Original und komprimierte Version nebeneinander, um Detailtreue und Schärfe zu prüfen.' },
        { title: 'Stapelverarbeitung mehrerer Bilder', text: 'Wählen Sie mehrere Fotos auf einmal aus, um Bildserien zeitsparend nacheinander zu komprimieren.' },
        { title: 'Integrierte WebP-Konvertierung', text: 'Konvertieren Sie Bilder direkt ins moderne WebP-Format für kürzere Ladezeiten auf Websites.' },
        { title: 'Volle Pixelauflösung bleibt erhalten', text: 'Breite und Höhe in Pixeln bleiben unberührt. Die Dateigröße schrumpft rein durch Datenoptimierung.' }
      ],
      tipsTitle: 'Praxistipps für optimale Bildkompression',
      tipsText: 'Für Fotos auf Webseiten liefert eine Qualitätsstufe von 75 % bis 82 % meist das ideale Verhältnis: 60 % bis 80 % geringere Dateigröße bei praktisch unsichtbarem Qualitätsverlust für das menschliche Auge.',
      faqTitle: 'Häufig gestellte Fragen zur Bildkompression',
      faqs: [
        { q: 'Wie funktioniert die browserbasierte Bildkompression?', a: 'Ihr Browser lädt das Bild in den Arbeitsspeicher und berechnet die Kompression mithilfe von HTML5 Canvas APIs direkt auf Ihrem Prozessor, ganz ohne Datentransfer über das Internet.' },
        { q: 'Werden die Pixelabmessungen des Bildes verkleinert?', a: 'Nein. Der Bildkomprimierer behält die exakte Pixelbreite und -höhe bei. Zum Ändern der Bildmaße nutzen Sie unser Tool zur Bildskalierung.' },
        { q: 'Warum ist WebP kleiner als JPG bei gleicher Schärfe?', a: 'WebP basiert auf modernen Prädiktionsalgorithmen des VP8-Codecs, die Farbverläufe und Bilddetails wesentlich effizienter codieren als das klassische JPEG-Format.' },
        { q: 'Werden meine Fotos auf fremde Server hochgeladen?', a: 'Nein, keinesfalls. Die gesamte Verarbeitung geschieht privat und sicher in der Sandbox Ihres eigenen Webbrowsers.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    },

    pt: {
      name: 'Comprimir imagem',
      title: 'Comprimir imagem online grátis – Reduzir JPG, PNG e WebP | ZamTools',
      metaDescription: 'Comprima imagens JPG, PNG e WebP online grátis. Reduza o peso dos seus arquivos sem perda visual e com processamento 100% seguro no seu navegador.',
      h1: 'Comprimir imagens online grátis',
      lead: 'Reduza o tamanho de fotos JPG, PNG e WebP com máxima rapidez, nitidez e privacidade. Ajuste a qualidade em tempo real com a barra deslizante, inspecione a comparação antes/depois e baixe suas imagens sem enviar nada para servidores externos.',
      category: 'Compressão',
      keywords: ['comprimir imagem', 'reduzir tamanho foto', 'comprimir jpg', 'comprimir png', 'diminuir kb foto', 'otimizar imagem', 'comprimir webp'],
      howToTitle: 'Como comprimir uma imagem online',
      howToSteps: [
        { step: 1, title: 'Selecione sua imagem', text: 'Arraste e solte sua foto JPG, PNG ou WebP na área de trabalho ou clique em "Escolher imagem".' },
        { step: 2, title: 'Ajuste a qualidade', text: 'Mova o controle deslizante entre 5% e 100%. Acompanhe a estimativa de tamanho e a prévia ao vivo.' },
        { step: 3, title: 'Escolha o formato (opcional)', text: 'Mantenha o formato original ou converta para WebP para economizar ainda mais espaço.' },
        { step: 4, title: 'Baixe a foto otimizada', text: 'Clique em "Baixar imagem" para salvar o arquivo comprimido diretamente no seu dispositivo.' }
      ],
      featuresTitle: 'Recursos do compressor de imagens',
      features: [
        { title: 'Comparação antes e depois ao vivo', text: 'Verifique a imagem original lado a lado com a versão otimizada para garantir nitidez nos detalhes.' },
        { title: 'Suporte a vários arquivos', text: 'Selecione várias imagens para processar lotes rapidamente com a opção de download sequencial.' },
        { title: 'Conversão rápida para WebP', text: 'Gere arquivos no moderno padrão WebP para acelerar o carregamento do seu site ou aplicativo.' },
        { title: 'Dimensões em pixels preservadas', text: 'A largura e altura da imagem permanecem intactas. Reduzimos o peso sem distorcer o enquadramento.' }
      ],
      tipsTitle: 'Dicas práticas para uma boa compressão',
      tipsText: 'Para publicações na web e redes sociais, uma qualidade entre 70% e 80% costuma reduzir o arquivo entre 60% e 80% sem perdas perceptíveis a olho nu.',
      faqTitle: 'Perguntas frequentes sobre compressão',
      faqs: [
        { q: 'Como funciona a compressão no navegador?', a: 'O seu próprio navegador renderiza a foto na memória local usando Canvas HTML5 e recodifica os pixels de acordo com a qualidade escolhida, sem uso de internet.' },
        { q: 'A compressão altera a largura e altura da imagem?', a: 'Não. O compressor mantém a resolução exata em pixels da foto original. Para alterar largura ou altura, use nosso Redimensionador de imagens.' },
        { q: 'Por que o formato WebP é mais leve que o JPG?', a: 'O WebP utiliza técnicas de previsão espacial do codec VP8, codificando blocos adjacentes com maior eficiência que o antigo algoritmo JPEG.' },
        { q: 'Minhas imagens são enviadas para algum servidor?', a: 'Nunca. O processamento ocorre exclusivamente no seu dispositivo, garantindo total privacidade para suas fotos pessoais ou profissionais.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    },

    it: {
      name: 'Comprimi immagini',
      title: 'Comprimi immagini online gratis – Riduci JPG, PNG e WebP | ZamTools',
      metaDescription: 'Comprimi immagini JPG, PNG e WebP online gratis. Riduci le dimensioni dei file mantenendo la qualità visiva, con elaborazione 100% locale nel browser.',
      h1: 'Comprimi immagini online gratis',
      lead: 'Riduci il peso dei tuoi file JPG, PNG e WebP in modo veloce, sicuro e senza perdita di qualità. Regola la qualità con il cursore in tempo reale, confronta il risultato prima e dopo e scarica l\'immagine ottimizzata senza caricare file su server remoti.',
      category: 'Compressione',
      keywords: ['comprimi immagini', 'riduci peso foto', 'comprimere jpg', 'comprimere png', 'ridurre kb immagine', 'ottimizzare foto online'],
      howToTitle: 'Come comprimere un\'immagine online',
      howToSteps: [
        { step: 1, title: 'Carica la tua immagine', text: 'Trascina una foto JPG, PNG o WebP nell\'area di lavoro oppure fai clic su "Scegli immagine".' },
        { step: 2, title: 'Regola il livello di qualità', text: 'Sposta il cursore tra il 5% e il 100%. Osserva in tempo reale l\'anteprima e la riduzione del peso in KB.' },
        { step: 3, title: 'Scegli il formato (facoltativo)', text: 'Mantieni il formato originale o converti in WebP per ridurre ulteriormente le dimensioni del file.' },
        { step: 4, title: 'Scarica l\'immagine ottimizzata', text: 'Fai clic su "Scarica immagine" per salvare il file compresso direttamente sul tuo dispositivo.' }
      ],
      featuresTitle: 'Caratteristiche principali del compressore',
      features: [
        { title: 'Confronto interattivo prima/dopo', text: 'Verifica la qualità visiva dell\'immagine originale affiancata a quella compressa per assicurare la massima nitidezza.' },
        { title: 'Compressione di più immagini', text: 'Seleziona più file contemporaneamente per comprimere serie di foto con download sequenziale.' },
        { title: 'Supporto al formato WebP', text: 'Genera immagini WebP moderne per velocizzare il caricamento del tuo sito web o ecommerce.' },
        { title: 'Risoluzione originale intatta', text: 'Larghezza e altezza in pixel rimangono invariate. Viene ottimizzata solo la codifica dei dati.' }
      ],
      tipsTitle: 'Consigli utili per una compressione ideale',
      tipsText: 'Per immagini destinate al web, impostare una qualità compresa tra il 72% e l\'82% permette di ridurre le dimensioni del 60%–80% senza differenze visibili a occhio nudo.',
      faqTitle: 'Domande frequenti sulla compressione immagini',
      faqs: [
        { q: 'Come funziona la compressione nel browser?', a: 'Il tuo browser carica l\'immagine nella RAM tramite Canvas HTML5 ed esegue la ricodifica direttamente sul tuo dispositivo, senza inviare dati sulla rete.' },
        { q: 'La compressione riduce la risoluzione in pixel?', a: 'No. Il compressore mantiene inalterate larghezza e altezza della foto originale. Per modificare i pixel, usa il nostro strumento di Ridimensionamento.' },
        { q: 'Perché WebP è più leggero del JPG?', a: 'Il formato WebP sfrutta algoritmi di previsione spaziale del codec video VP8, comprimendo i blocchi con maggiore efficienza rispetto al JPEG standard.' },
        { q: 'Le mie immagini vengono salvate sui vostri server?', a: 'Assolutamente no. Tutto il procedimento avviene in locale nel tuo browser. Le tue immagini rimangono private e al sicuro sul tuo dispositivo.' }
      ],
      relatedTools: ['imageToTargetSize', 'imageResizer', 'webpConverter', 'imageCropper']
    }
  },

  imageToTargetSize: {
    en: {
      name: 'Compress to Target Size',
      title: 'Compress Image to Target Size (KB / MB) Online | ZamTools',
      metaDescription: 'Compress images to an exact target file size (e.g. 50KB, 100KB, 200KB, 500KB) online for free. Ideal for job applications, passports, and portal forms.',
      h1: 'Compress Image to Exact Target Size',
      lead: 'Need an image under 50KB, 100KB, or 200KB for an official government portal, job application, or university form? Set your exact target file size in KB or MB and let our iterative algorithm compress it with optimal clarity.',
      category: 'Compress',
      keywords: ['compress to target size', 'compress image to 50kb', 'compress image to 100kb', 'reduce image size in kb', 'exact file size compressor'],
      howToTitle: 'How to Compress an Image to a Specific File Size',
      howToSteps: [
        { step: 1, title: 'Upload Image', text: 'Select your photo or document scan in JPG, PNG, or WebP format.' },
        { step: 2, title: 'Set Target File Size', text: 'Enter your desired limit in KB (e.g., 50, 100, 200) or pick a preset button.' },
        { step: 3, title: 'Iterative Calculation', text: 'Our engine performs fast binary search iterations to find the exact highest-quality threshold.' },
        { step: 4, title: 'Download Conforming Image', text: 'Download the optimized file that meets your portal upload requirement.' }
      ],
      featuresTitle: 'Built for Form & Portal Requirements',
      features: [
        { title: 'Exact Threshold Matching', text: 'Guarantees the resulting file size stays strictly below your required upper limit.' },
        { title: 'Maximum Visual Clarity', text: 'Calculates the highest possible quality setting that still fits within your byte budget.' },
        { title: 'Quick Presets', text: 'One-click buttons for popular upload limits: 20KB, 50KB, 100KB, 200KB, and 500KB.' },
        { title: 'Zero Cloud Uploads', text: 'Confidential document scans and ID photos are processed entirely inside your browser.' }
      ],
      tipsTitle: 'Tips for Strict Portal Limits',
      tipsText: 'If your target size is very small (such as under 30KB) for a high-resolution photo, the tool may also recommend scaling dimensions slightly to avoid pixelation artifacts while keeping the file under the limit.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Why do portals require exact file sizes like 50KB or 100KB?', a: 'Government and admission portals enforce strict database storage quotas and standardized document processing systems.' },
        { q: 'How does ZamTools calculate the target size?', a: 'It uses an intelligent binary search algorithm to test multiple compression ratios in milliseconds until it pinpoints the highest visual quality under your limit.' },
        { q: 'Is it safe to compress sensitive ID cards and tax receipts here?', a: 'Yes. Because processing is 100% client-side in your browser, your sensitive documents never touch any server.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    },

    fr: {
      name: 'Compresser à une taille cible',
      title: 'Compresser image à une taille cible (Ko / Mo) en ligne | ZamTools',
      metaDescription: 'Compressez vos photos à une taille exacte (50 Ko, 100 Ko, 200 Ko, 500 Ko) gratuitement en ligne. Parfait pour les démarches administratives et concours.',
      h1: 'Compresser une image à une taille précise',
      lead: 'Vous devez fournir une photo de moins de 50 Ko, 100 Ko ou 200 Ko pour un formulaire officiel ou une candidature ? Indiquez la taille maximale souhaitée et notre algorithme ajuste automatiquement la qualité optimale.',
      category: 'Compression',
      keywords: ['compresser taille cible', 'réduire photo 50 ko', 'compresser image 100 ko', 'taille exacte photo', 'diminuer taille ko'],
      howToTitle: 'Comment compresser une image à une taille précise',
      howToSteps: [
        { step: 1, title: 'Importez votre photo', text: 'Glissez votre image JPG, PNG ou WebP dans l\'espace de travail.' },
        { step: 2, title: 'Définissez la taille limite', text: 'Indiquez le poids cible en Ko (ex. 50, 100, 200) ou cliquez sur un raccourci.' },
        { step: 3, title: 'Calcul intelligent', text: 'L\'outil teste instantanément les réglages pour obtenir la meilleure qualité sans dépasser la limite.' },
        { step: 4, title: 'Téléchargez le résultat', text: 'Enregistrez votre photo conforme aux exigences du portail en un clic.' }
      ],
      featuresTitle: 'Idéal pour les démarches en ligne',
      features: [
        { title: 'Respect strict de la limite', text: 'Garantit que le poids final ne dépassera en aucun cas le plafond imposé par le portail.' },
        { title: 'Qualité maximale préservée', text: 'Trouve automatiquement le niveau de netteté le plus élevé possible pour le quota accordé.' },
        { title: 'Préréglages pratiques', text: 'Boutons en un clic pour les plafonds courants : 20 Ko, 50 Ko, 100 Ko, 200 Ko et 500 Ko.' },
        { title: 'Confidentialité totale', text: 'Vos pièces d\'identité et documents scannés sont traités exclusivement sur votre appareil.' }
      ],
      tipsTitle: 'Conseil pour les petits fichiers',
      tipsText: 'Pour atteindre des limites très basses (moins de 50 Ko) sur une photo haute résolution, une légère réduction des dimensions peut être appliquée pour préserver la netteté du texte.',
      faqTitle: 'Questions fréquentes sur la taille cible',
      faqs: [
        { q: 'Pourquoi certains sites imposent-ils une limite en Ko ?', a: 'Les administrations et universités appliquent ces limites pour éviter de saturer leurs serveurs et accélérer le traitement des dossiers.' },
        { q: 'Comment le calcul est-il effectué ?', a: 'Notre algorithme procède par recherche dichotomique en quelques millisecondes dans votre navigateur pour identifier le taux de compression idéal.' },
        { q: 'Mes documents personnels restent-ils confidentiels ?', a: 'Oui. Le traitement étant entièrement local, aucune donnée ni document n\'est transféré sur un serveur externe.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    },

    es: {
      name: 'Comprimir a tamaño exacto',
      title: 'Comprimir imagen a tamaño exacto (KB / MB) online | ZamTools',
      metaDescription: 'Comprime imágenes a un tamaño específico (50KB, 100KB, 200KB, 500KB) online gratis. Ideal para trámites oficiales, visas y solicitudes de empleo.',
      h1: 'Comprimir imagen a tamaño exacto en KB',
      lead: '¿Necesitas que tu foto pese menos de 50KB, 100KB o 200KB para subirla a un portal gubernamental, visado o trámite universitario? Define el peso máximo y nuestro algoritmo ajustará la compresión exacta con la mayor nitidez posible.',
      category: 'Compresión',
      keywords: ['comprimir a tamano exacto', 'reducir imagen a 50kb', 'comprimir foto a 100kb', 'reducir kb de imagen', 'tamano limite foto'],
      howToTitle: 'Cómo ajustar una foto a un peso determinado',
      howToSteps: [
        { step: 1, title: 'Sube tu imagen', text: 'Selecciona tu foto o documento escaneado en formato JPG, PNG o WebP.' },
        { step: 2, title: 'Indica el tamaño deseado', text: 'Escribe el peso límite en KB (por ejemplo 50, 100 o 200) o elige un valor predefinido.' },
        { step: 3, title: 'Ajuste inteligente', text: 'El sistema calcula en milisegundos la tasa de compresión más alta que respeta tu límite.' },
        { step: 4, title: 'Descarga tu archivo', text: 'Guarda tu imagen lista y aprobada para subir al portal oficial.' }
      ],
      featuresTitle: 'Diseñado para trámites y formularios',
      features: [
        { title: 'Límite garantizado', text: 'Asegura que el archivo final quede siempre por debajo del peso exigido por el sistema.' },
        { title: 'Máxima nitidez', text: 'Aprovecha cada kilobyte disponible para mantener la imagen lo más clara y legible posible.' },
        { title: 'Botones rápidos', text: 'Acceso directo con un clic a límites habituales: 20KB, 50KB, 100KB, 200KB y 500KB.' },
        { title: 'Seguridad para documentos', text: 'DNI, pasaportes y constancias se procesan de forma privada en tu propio navegador.' }
      ],
      tipsTitle: 'Consejo para fotos de documentos',
      tipsText: 'Si la exigencia es muy estricta (por ejemplo menos de 40KB), combinar una reducción leve de dimensiones con la compresión produce resultados mucho más legibles.',
      faqTitle: 'Preguntas frecuentes sobre tamaño objetivo',
      faqs: [
        { q: '¿Por qué los portales exigen fotos de menos de 100KB?', a: 'Para optimizar sus bases de datos y procesar millones de expedientes con rapidez sin saturar sus plataformas.' },
        { q: '¿Cómo logra el sistema llegar al peso exacto?', a: 'Aplica una búsqueda binaria matemática que prueba diferentes factores de calidad en fracciones de segundo hasta encontrar el valor óptimo.' },
        { q: '¿Es seguro para documentos oficiales?', a: 'Completamente seguro. No enviamos ninguna imagen a servidores en la nube; todo ocurre en tu navegador.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    },

    id: {
      name: 'Kompres ke Ukuran Target',
      title: 'Kompres Gambar ke Ukuran Tertentu (KB / MB) Online | ZamTools',
      metaDescription: 'Kompres foto ke ukuran file tertentu (50KB, 100KB, 200KB, 500KB) online gratis. Sangat cocok untuk pendaftaran CPNS, paspor, dan portal resmi.',
      h1: 'Kompres Gambar ke Ukuran Target Tepat',
      lead: 'Butuh foto berukuran di bawah 50KB, 100KB, atau 200KB untuk pendaftaran kerja, syarat beasiswa, atau portal pemerintah? Tentukan batas maksimal ukuran file Anda dalam KB atau MB, dan biarkan algoritma kami mengoptimalkannya.',
      category: 'Kompresi',
      keywords: ['kompres foto ke 50kb', 'kompres gambar 100kb', 'perkecil foto 200kb', 'kompres ukuran tepat', 'syarat cpns foto'],
      howToTitle: 'Cara Mengompres Gambar ke Ukuran KB Tertentu',
      howToSteps: [
        { step: 1, title: 'Pilih Berkas', text: 'Masukkan foto atau pindaian dokumen Anda dalam format JPG, PNG, atau WebP.' },
        { step: 2, title: 'Masukkan Target Ukuran', text: 'Ketik batas KB yang Anda inginkan (misal: 50, 100, 200) atau pilih tombol preset.' },
        { step: 3, title: 'Kalkulasi Otomatis', text: 'Sistem menguji kompresi terbaik agar pas dengan batas tanpa mengorbankan ketajaman.' },
        { step: 4, title: 'Unduh Hasil', text: 'Unduh file yang siap diunggah ke portal tanpa khawatir ditolak karena ukuran terlalu besar.' }
      ],
      featuresTitle: 'Solusi Lengkap Syarat Unggah Dokumen',
      features: [
        { title: 'Pasti di Bawah Batas', text: 'Menjamin ukuran file akhir berada tepat di bawah batas yang dipersyaratkan portal.' },
        { title: 'Kualitas Gambar Tertinggi', text: 'Mengoptimalkan ruang byte yang tersedia demi mempertahankan keterbacaan teks dan wajah.' },
        { title: 'Pilihan Preset Cepat', text: 'Tombol instan untuk ukuran populer: 20KB, 50KB, 100KB, 200KB, dan 500KB.' },
        { title: 'Aman untuk Dokumen KTP', text: 'Dokumen identitas sensitif diproses secara privat tanpa pernah dikirim ke server luar.' }
      ],
      tipsTitle: 'Tips untuk Batas Sangat Kecil',
      tipsText: 'Jika portal mewajibkan ukuran di bawah 50KB untuk foto beresolusi tinggi, perkecil sedikit dimensi piksel agar teks dan foto tetap terlihat tajam.',
      faqTitle: 'Tanya Jawab Kompresi Ukuran Target',
      faqs: [
        { q: 'Mengapa situs pendaftaran membatasi ukuran file?', a: 'Untuk menghemat penyimpanan server dan memastikan proses verifikasi dokumen ribuan peserta berlangsung cepat.' },
        { q: 'Bagaimana cara ZamTools menghitung ukuran target?', a: 'Menggunakan algoritma pencarian biner lokal yang menguji tingkat kompresi dalam hitungan milidetik langsung di perangkat Anda.' },
        { q: 'Apakah aman mengompres pindaian KTP atau ijazah di sini?', a: 'Sangat aman. Semua proses terjadi 100% di browser Anda tanpa ada data yang diunggah ke server.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    },

    de: {
      name: 'Bild auf Zielgröße komprimieren',
      title: 'Bild auf genaue Dateigröße komprimieren (KB / MB) | ZamTools',
      metaDescription: 'Komprimieren Sie Bilder kostenlos online auf eine exakte Dateigröße (z.B. 50KB, 100KB, 200KB). Ideal für Bewerbungsportale und Behördenformulare.',
      h1: 'Bilder auf exakte Dateigröße komprimieren',
      lead: 'Müssen Sie ein Foto auf unter 50 KB, 100 KB oder 200 KB für ein Bewerbungsportal, Visaantrag oder Universitätsformular bringen? Geben Sie Ihre gewünschte Obergrenze in KB oder MB ein – unser Algorithmus ermittelt automatisch die beste Qualität.',
      category: 'Komprimieren',
      keywords: ['bild auf 50kb komprimieren', 'bild auf 100kb komprimieren', 'zielgroesse bild komprimieren', 'foto dateigroesse begrenzen', 'kb reduzierer'],
      howToTitle: 'So passen Sie ein Bild an eine maximale Dateigröße an',
      howToSteps: [
        { step: 1, title: 'Bild hochladen', text: 'Wählen Sie Ihr JPG-, PNG- oder WebP-Bild aus.' },
        { step: 2, title: 'Zielgröße festlegen', text: 'Geben Sie die gewünschte Obergrenze in KB ein (z. B. 50, 100, 200) oder wählen Sie eine Vorlage.' },
        { step: 3, title: 'Präzise Berechnung', text: 'Unser Algorithmus ermittelt in Millisekunden die höchstmögliche Bildqualität unterhalb Ihres Limits.' },
        { step: 4, title: 'Datei herunterladen', text: 'Speichern Sie das vorschriftsmäßige Bild mit einem Klick ab.' }
      ],
      featuresTitle: 'Perfekt für Online-Formulare & Portale',
      features: [
        { title: 'Garantierte Einhaltung des Limits', text: 'Stellt sicher, dass das Bild die vom jeweiligen Portal vorgeschriebene Dateigröße nicht überschreitet.' },
        { title: 'Maximale Bildschärfe', text: 'Reizt das erlaubte Speicherkontingent optimal aus, um Gesichter und Schrift lesbar zu halten.' },
        { title: 'Schnelle Voreinstellungen', text: 'Sofortauswahl für gängige Grenzwerte: 20 KB, 50 KB, 100 KB, 200 KB und 500 KB.' },
        { title: 'Schutz vertraulicher Dokumente', text: 'Ausweise und Scans werden ausschließlich lokal im Browser auf Ihrem eigenen Computer verarbeitet.' }
      ],
      tipsTitle: 'Tipp bei sehr strengen Grenzen',
      tipsText: 'Soll ein hochauflösendes Foto unter 50 KB schrumpfen, empfiehlt es sich, zusätzlich die Bildabmessungen leicht zu reduzieren, um Bildrauschen zu vermeiden.',
      faqTitle: 'Häufig gestellte Fragen zur Zielgrößen-Kompression',
      faqs: [
        { q: 'Warum fordern Behörden oft strikte Dateigrößen?', a: 'Um Serverkapazitäten zu schonen und standardisierte Prüfprozesse bei Formularen zu gewährleisten.' },
        { q: 'Wie funktioniert die Berechnung?', a: 'Eine lokale binäre Suchfunktion testet mehrere Kompressionsstufen sekundenschnell direkt im Browser.' },
        { q: 'Sind persönliche Dokumente geschützt?', a: 'Ja, vollkommen. Es findet kein Upload auf Server statt – alles bleibt auf Ihrem Gerät.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    },

    pt: {
      name: 'Comprimir para tamanho alvo',
      title: 'Comprimir imagem para tamanho exato (KB / MB) online | ZamTools',
      metaDescription: 'Comprima fotos para um tamanho de arquivo exato (50KB, 100KB, 200KB, 500KB) online grátis. Ideal para concursos, vistos e formulários.',
      h1: 'Comprimir imagem para tamanho exato em KB',
      lead: 'Precisa enviar uma foto com menos de 50KB, 100KB ou 200KB para um concurso público, visto ou portal institucional? Defina o limite exato em KB ou MB e nosso algoritmo encontrará a melhor qualidade possível.',
      category: 'Compressão',
      keywords: ['comprimir para 50kb', 'comprimir imagem 100kb', 'reduzir foto para 200kb', 'tamanho limite foto', 'comprimir para tamanho exato'],
      howToTitle: 'Como comprimir uma foto para um tamanho específico',
      howToSteps: [
        { step: 1, title: 'Envie sua imagem', text: 'Selecione sua foto nos formatos JPG, PNG ou WebP.' },
        { step: 2, title: 'Defina o limite em KB', text: 'Digite o valor desejado em KB (ex: 50, 100, 200) ou selecione um botão de atalho.' },
        { step: 3, title: 'Ajuste inteligente', text: 'O sistema calcula rapidamente a melhor nitidez que cabe no seu limite de tamanho.' },
        { step: 4, title: 'Baixe o arquivo', text: 'Salve a imagem pronta para upload sem risco de rejeição pelo portal.' }
      ],
      featuresTitle: 'Feito para portais e exigências formais',
      features: [
        { title: 'Teto rigoroso respeitado', text: 'Garante que o arquivo gerado nunca excederá o limite estipulado pelo formulário.' },
        { title: 'Nitidez otimizada', text: 'Maximiza a qualidade visual aproveitando cada kilobyte disponível do limite.' },
        { title: 'Atalhos comuns', text: 'Acesso rápido com um clique para 20KB, 50KB, 100KB, 200KB e 500KB.' },
        { title: 'Segurança absoluta', text: 'Documentos e fotos pessoais são processados apenas no seu navegador.' }
      ],
      tipsTitle: 'Dica para limites rigorosos',
      tipsText: 'Para limites muito baixos (como menos de 50KB em fotos tiradas no celular), reduzir um pouco as dimensões em pixels garante uma imagem muito mais nítida.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Por que os portais limitam o tamanho em KB?', a: 'Para evitar sobrecarga de banco de dados e garantir uploads rápidos para todos os usuários.' },
        { q: 'Como o ZamTools atinge o tamanho correto?', a: 'Usando um algoritmo de busca binária que roda no navegador e testa fatores de compressão em milissegundos.' },
        { q: 'É seguro para documentos com dados pessoais?', a: 'Sim, totalmente seguro, pois nenhum dado é transferido para servidores.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    },

    it: {
      name: 'Comprimi a dimensione target',
      title: 'Comprimi immagine a dimensione esatta (KB / MB) online | ZamTools',
      metaDescription: 'Comprimi immagini a un peso specifico (50KB, 100KB, 200KB, 500KB) online gratis. Perfetto per concorsi pubblici, visti e documenti online.',
      h1: 'Comprimi immagine a dimensione esatta in KB',
      lead: 'Devi caricare una foto con limite massimo di 50KB, 100KB o 200KB su un portale della pubblica amministrazione o per una candidatura? Imposta il peso target esatto e il nostro algoritmo calcolerà la qualità ottimale.',
      category: 'Compressione',
      keywords: ['comprimi a 50kb', 'comprimi immagine 100kb', 'riduci foto a 200kb', 'dimensione target immagine', 'peso limite foto'],
      howToTitle: 'Come impostare una dimensione limite per un\'immagine',
      howToSteps: [
        { step: 1, title: 'Carica l\'immagine', text: 'Seleziona la tua foto o scansione in formato JPG, PNG o WebP.' },
        { step: 2, title: 'Specifica la dimensione in KB', text: 'Inserisci il peso massimo desiderato (es. 50, 100, 200) oppure usa i tasti rapidi.' },
        { step: 3, title: 'Ottimizzazione automatica', text: 'Il sistema determina in pochi millisecondi il livello qualitativo massimo consentito dal limite.' },
        { step: 4, title: 'Scarica il file conforme', text: 'Salva l\'immagine pronta per essere caricata sul portale senza errori di dimensione.' }
      ],
      featuresTitle: 'Ottimizzato per moduli e concorsi',
      features: [
        { title: 'Limite rigorosamente rispettato', text: 'Assicura che il file finale non superi la soglia massima richiesta dal sistema.' },
        { title: 'Qualità visiva superiore', text: 'Sfrutta ogni singolo kilobyte a disposizione per preservare volti e testi leggibili.' },
        { title: 'Preimpostazioni rapide', text: 'Pulsanti veloci per i limiti più frequenti: 20KB, 50KB, 100KB, 200KB e 500KB.' },
        { title: 'Privacy garantita', text: 'Documenti personali e ricevute fiscali non vengono mai trasmessi su server remoti.' }
      ],
      tipsTitle: 'Consiglio per limiti molto bassi',
      tipsText: 'Se il limite richiesto è inferiore a 50KB, ridurre leggermente le dimensioni in pixel permette di evitare artefatti sgranati.',
      faqTitle: 'Domande frequenti sulla dimensione target',
      faqs: [
        { q: 'Perché i siti istituzionali richiedono limiti precisi in KB?', a: 'Per gestire al meglio i carichi dei database e uniformare le procedure di verifica digitale.' },
        { q: 'Come viene calcolata la dimensione target?', a: 'Attraverso un algoritmo di ricerca binaria eseguito localmente nel tuo browser in pochi istanti.' },
        { q: 'È sicuro utilizzare questo strumento per documenti d\'identità?', a: 'Sì, è sicuro al 100% poiché le immagini rimangono confinate nel tuo dispositivo.' }
      ],
      relatedTools: ['imageCompressor', 'passportPhotoResizer', 'imageResizer', 'jpgToPng']
    }
  }
};

module.exports = compressTools;
