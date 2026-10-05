/**
 * Tools Translations: Editing Group
 * - imageCropper
 * - imageRotateFlip
 * - grayscaleImage
 * - brightnessContrast
 * - blurSharpenImage
 */

const editTools = {
  imageCropper: {
    en: {
      name: 'Image Cropper',
      title: 'Image Cropper Online – Crop Photos to Exact Aspect Ratios | ZamTools',
      metaDescription: 'Crop JPG, PNG, and WebP photos online for free. Interactive canvas cropping with aspect ratio locks (1:1, 4:3, 16:9, freeform) and instant download.',
      h1: 'Image Cropper Online',
      lead: 'Crop and frame your photos with interactive canvas selection. Lock standard aspect ratios like 1:1 square, 4:3 portrait, 16:9 landscape, or freely adjust the crop box to highlight what matters most.',
      category: 'Edit',
      keywords: ['image cropper', 'crop image online', 'photo cropper', 'square crop 1:1', 'crop 16:9 landscape', 'free photo cropper'],
      howToTitle: 'How to Crop an Image Online',
      howToSteps: [
        { step: 1, title: 'Upload Photo', text: 'Select an image from your computer or phone.' },
        { step: 2, title: 'Choose Aspect Ratio', text: 'Pick Freeform, 1:1 Square, 4:3, or 16:9 widescreen ratio.' },
        { step: 3, title: 'Adjust Crop Box', text: 'Drag the handles on the interactive canvas to frame the focal point.' },
        { step: 4, title: 'Download Cropped Image', text: 'Click Crop & Download to save the new image.' }
      ],
      featuresTitle: 'Key Cropping Features',
      features: [
        { title: 'Interactive Canvas Handles', text: 'Fluidly drag corner handles with visual grid overlay for rule-of-thirds framing.' },
        { title: 'Preset Aspect Ratios', text: 'One-click locks for 1:1, 4:3, 3:2, and 16:9 widescreen video dimensions.' },
        { title: 'Lossless Crop Precision', text: 'Cuts pixels cleanly without reducing color depth or injecting compression noise.' },
        { title: '100% Private Processing', text: 'Runs locally in browser RAM without transmitting sensitive photos to the cloud.' }
      ],
      tipsTitle: 'Framing Pro Tip',
      tipsText: 'Use the 1:1 square crop for social media avatars and product thumbnails. For website headers and hero images, a 16:9 crop creates a cinematic landscape feel.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Does cropping reduce image resolution?', a: 'Cropping removes unwanted outer pixels, so the final pixel dimensions will be smaller, matching the exact cropped area.' },
        { q: 'Can I crop PNG files with transparent backgrounds?', a: 'Yes! The cropper preserves alpha channel transparency in PNG and WebP files.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },

    fr: {
      name: 'Recadrer une image',
      title: 'Recadrer une image en ligne – Rogner photos et formats | ZamTools',
      metaDescription: 'Recadrez vos images JPG, PNG et WebP gratuitement en ligne. Rognage interactif avec ratios fixes (1:1, 4:3, 16:9 ou libre) sans perte de qualité.',
      h1: 'Recadrer une image en ligne',
      lead: 'Cadrez et rognez vos photos avec précision grâce à notre zone de sélection interactive. Verrouillez des ratios standard (carré 1:1, 4:3, 16:9) ou découpez librement la zone de votre choix en toute simplicité.',
      category: 'Retouche',
      keywords: ['recadrer image', 'rogner photo en ligne', 'decouper photo', 'cadrage 1:1 carre', 'rogner image 16:9'],
      howToTitle: 'Comment recadrer une photo en ligne',
      howToSteps: [
        { step: 1, title: 'Importez votre photo', text: 'Glissez votre fichier dans l\'espace de recadrage.' },
        { step: 2, title: 'Choisissez le ratio', text: 'Sélectionnez Libre, Carré 1:1, 4:3 ou 16:9 selon l\'usage prévu.' },
        { step: 3, title: 'Ajustez la zone', text: 'Déplacez le cadre de sélection pour isoler le sujet principal.' },
        { step: 4, title: 'Téléchargez l\'image', text: 'Enregistrez votre photo parfaitement cadrée sur votre appareil.' }
      ],
      featuresTitle: 'Les atouts de l\'outil de recadrage',
      features: [
        { title: 'Sélection interactive fluide', text: 'Déplacez facilement les poignées d\'angle pour un cadrage au millimètre près.' },
        { title: 'Ratios prédéfinis', text: 'Verrouillez les proportions 1:1, 4:3 ou 16:9 pour un rendu équilibré sans calcul.' },
        { title: 'Découpe nette et précise', text: 'Élimine les bordures superflues en conservant la netteté intégrale des pixels conservés.' },
        { title: 'Confidentialité totale', text: 'Vos photos personnelles restent sur votre appareil et ne sont jamais envoyées sur un serveur.' }
      ],
      tipsTitle: 'Conseil de composition',
      tipsText: 'Utilisez le format 1:1 pour vos photos de profil et vignettes. Pour une bannière ou une illustration d\'article, le 16:9 offre un résultat immersif.',
      faqTitle: 'Questions fréquentes sur le recadrage',
      faqs: [
        { q: 'Le recadrage altère-t-il la qualité des pixels conservés ?', a: 'Non, les pixels situés à l\'intérieur de votre sélection conservent leur netteté et leurs couleurs intactes.' },
        { q: 'Puis-je recadrer un PNG avec fond transparent ?', a: 'Oui, la transparence est fidèlement préservée lors du recadrage.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },

    es: {
      name: 'Recortar imagen',
      title: 'Recortar imagen online gratis – Encuadre y proporciones fijas | ZamTools',
      metaDescription: 'Recorta fotos JPG, PNG y WebP online gratis. Selector interactivo con proporciones bloqueadas (1:1, 4:3, 16:9 o libre) sin pérdida de calidad.',
      h1: 'Recortar fotos online gratis',
      lead: 'Encuadra y recorta tus imágenes fácilmente en el lienzo interactivo. Ajusta proporciones fijas como cuadrado 1:1, 4:3 o panorámico 16:9, o selecciona un área personalizada para resaltar lo más importante.',
      category: 'Edición',
      keywords: ['recortar imagen', 'recortar foto online', 'encuadrar foto', 'recorte cuadrado 1:1', 'recortar imagen 16:9 gratis'],
      howToTitle: 'Cómo recortar una imagen online',
      howToSteps: [
        { step: 1, title: 'Sube tu foto', text: 'Selecciona una imagen desde tu dispositivo.' },
        { step: 2, title: 'Elige la proporción', text: 'Opta por proporción libre, cuadrado 1:1, 4:3 o formato 16:9.' },
        { step: 3, title: 'Ajusta el área', text: 'Mueve los bordes de selección sobre el elemento clave de la foto.' },
        { step: 4, title: 'Descarga el recorte', text: 'Guarda la imagen recortada inmediatamente en tu equipo.' }
      ],
      featuresTitle: 'Herramientas de recorte precisas',
      features: [
        { title: 'Manipulación sencilla', text: 'Controles visuales intuitivos para seleccionar la parte deseada de la foto.' },
        { title: 'Proporciones estándar', text: 'Bloqueos rápidos para perfiles sociales, fotos impresas y formatos de video.' },
        { title: 'Máxima definición', text: 'Conserva la calidad original de los píxeles seleccionados sin compresión excesiva.' },
        { title: 'Privacidad garantizada', text: 'El recorte se realiza dentro de tu navegador sin subir archivos a la red.' }
      ],
      tipsTitle: 'Consejo de encuadre',
      tipsText: 'El recorte cuadrado 1:1 es el estándar para fotos de perfil y fotos de producto. Para cabeceras de blogs, el formato 16:9 proporciona una estética amplia y limpia.',
      faqTitle: 'Preguntas frecuentes sobre recorte',
      faqs: [
        { q: '¿Recortar disminuye el tamaño del archivo?', a: 'Sí, al descartar los píxeles de los bordes, el archivo resultante tiene menores dimensiones y menor peso en KB.' },
        { q: '¿Se mantiene el fondo transparente en archivos PNG?', a: 'Sí, los canales de transparencia se mantienen perfectamente.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },

    id: {
      name: 'Potong Gambar',
      title: 'Potong Gambar Online – Crop Foto Rasio 1:1, 4:3, 16:9 | ZamTools',
      metaDescription: 'Potong gambar JPG, PNG, dan WebP online gratis. Crop foto dengan rasio aspek terkunci (1:1, 4:3, 16:9 atau bebas) secara instan tanpa pecah.',
      h1: 'Potong Gambar Online Gratis',
      lead: 'Potong dan atur fokus gambar Anda dengan kanvas interaktif. Gunakan rasio standar seperti kotak 1:1, potret 4:3, lanskap 16:9, atau atur bingkai secara bebas untuk menonjolkan bagian terpenting foto.',
      category: 'Edit',
      keywords: ['potong gambar', 'crop foto online', 'crop gambar kotak 1:1', 'potong foto 16:9', 'crop foto gratis'],
      howToTitle: 'Cara Memotong Gambar Secara Online',
      howToSteps: [
        { step: 1, title: 'Pilih Foto', text: 'Unggah foto dari galeri komputer atau HP Anda.' },
        { step: 2, title: 'Tentukan Rasio', text: 'Pilih mode Bebas, Persegi 1:1, 4:3, atau format layar lebar 16:9.' },
        { step: 3, title: 'Sesuaikan Bingkai', text: 'Geser titik sudut kanvas untuk mengarahkan fokus foto.' },
        { step: 4, title: 'Unduh Hasil Crop', text: 'Simpan gambar yang telah dipotong dengan rapi.' }
      ],
      featuresTitle: 'Keunggulan Alat Potong Gambar',
      features: [
        { title: 'Kontrol Kanvas Fleksibel', text: 'Tarik sudut bingkai dengan mudah untuk menyesuaikan area potongan.' },
        { title: 'Rasio Standar Siap Pakai', text: 'Kunci otomatis untuk foto profil kotak, banner, dan wallpaper.' },
        { title: 'Kualitas Tetap Terjaga', text: 'Memotong area luar tanpa mengurangi ketajaman area foto yang dipilih.' },
        { title: 'Proses Lokal Cepat', text: 'Eksekusi langsung di browser tanpa antrean jaringan.' }
      ],
      tipsTitle: 'Tips Komposisi Foto',
      tipsText: 'Rasio 1:1 cocok untuk foto profil dan katalog marketplace. Untuk header website, rasio 16:9 memberikan sudut pandang lanskap yang sinematik.',
      faqTitle: 'Tanya Jawab Seputar Pemotongan Foto',
      faqs: [
        { q: 'Apakah memotong gambar membuat foto buram?', a: 'Tidak. Bagian foto yang Anda pertahankan tetap memiliki ketajaman dan warna yang sama persis dengan aslinya.' },
        { q: 'Bisakah memotong foto PNG transparan?', a: 'Bisa. Transparansi pada PNG atau WebP akan tetap utuh setelah dipotong.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },

    de: {
      name: 'Bild zuschneiden',
      title: 'Bild zuschneiden online – Fotos beschneiden mit festem Seitenverhältnis | ZamTools',
      metaDescription: 'Schneiden Sie JPG, PNG und WebP Bilder kostenlos online zu. Interaktiver Zuschnitt mit festen Seitenverhältnissen (1:1, 4:3, 16:9) ohne Qualitätsverlust.',
      h1: 'Bilder online zuschneiden',
      lead: 'Wählen Sie Bildausschnitte präzise mit dem interaktiven Auswahlrahmen. Nutzen Sie feste Standard-Seitenverhältnisse wie quadratisch 1:1, 4:3, 16:9 oder schneiden Sie frei nach Belieben zu.',
      category: 'Bearbeiten',
      keywords: ['bild zuschneiden', 'foto beschneiden online', 'ausschnitt waehlen bild', 'quadratisch 1:1 zuschneiden', 'bild 16:9 beschneiden'],
      howToTitle: 'So schneiden Sie ein Bild online zu',
      howToSteps: [
        { step: 1, title: 'Bild hochladen', text: 'Ziehen Sie Ihre Fotodatei in den Arbeitsbereich.' },
        { step: 2, title: 'Seitenverhältnis wählen', text: 'Wählen Sie Frei, Quadratisch 1:1, 4:3 oder Breitbild 16:9.' },
        { step: 3, title: 'Ausschnitt festlegen', text: 'Verschieben Sie die Ecken des Rahmens auf das gewünschte Motiv.' },
        { step: 4, title: 'Zuschnitt herunterladen', text: 'Speichern Sie das zugeschnittene Bild direkt ab.' }
      ],
      featuresTitle: 'Leistungsfähiges Zuschneidewerkzeug',
      features: [
        { title: 'Interaktiver Auswahlrahmen', text: 'Intuitive Eckengriffe für eine millimetergenaue Ausrichtung des Ausschnitts.' },
        { title: 'Standard-Seitenverhältnisse', text: 'Schnelle Voreinstellungen für Profilbilder, Druckformate und Headergrafiken.' },
        { title: 'Verlustfreie Bildschärfe', text: 'Entfernt Randbereiche ohne Qualitätsminderung der verbleibenden Bildfläche.' },
        { title: 'Sicher im Browser', text: 'Ihre persönlichen Bilder werden nicht auf fremde Server übertragen.' }
      ],
      tipsTitle: 'Gestaltungstipp',
      tipsText: 'Für Avatare und Produktbilder eignet sich das quadratische Format 1:1 am besten. Für Webseiten-Hero-Banner sorgt das 16:9-Format für eine moderne Breitbildoptik.',
      faqTitle: 'Häufig gestellte Fragen zum Zuschneiden',
      faqs: [
        { q: 'Verliert das Bild beim Zuschnitt an Qualität?', a: 'Nein, die Bildpixel innerhalb des gewählten Ausschnitts behalten ihre volle Farbtiefe und Schärfe.' },
        { q: 'Bleibt ein transparenter Hintergrund bei PNGs erhalten?', a: 'Ja, Transparenzkanäle in PNG- und WebP-Dateien werden exakt übernommen.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },

    pt: {
      name: 'Cortar imagem',
      title: 'Cortar imagem online grátis – Enquadramento com proporção fixa | ZamTools',
      metaDescription: 'Corte fotos JPG, PNG e WebP online grátis. Ferramenta de recorte interativa com proporções fixas (1:1, 4:3, 16:9 ou livre) sem perda de qualidade.',
      h1: 'Cortar imagens online grátis',
      lead: 'Enquadre e corte suas imagens com facilidade na área interativa. Bloqueie proporções como quadrado 1:1, 4:3 ou panorâmico 16:9, ou defina livremente a área de recorte para destacar o essencial.',
      category: 'Editar',
      keywords: ['cortar imagem', 'recortar foto online', 'crop imagem gratis', 'corte quadrado 1:1', 'cortar imagem 16:9'],
      howToTitle: 'Como cortar uma imagem online',
      howToSteps: [
        { step: 1, title: 'Envie sua foto', text: 'Carregue uma imagem do seu celular ou computador.' },
        { step: 2, title: 'Defina a proporção', text: 'Escolha formato Livre, Quadrado 1:1, 4:3 ou 16:9.' },
        { step: 3, title: 'Posicione o quadro', text: 'Ajuste os cantos da caixa de seleção para enquadrar o assunto principal.' },
        { step: 4, title: 'Baixe o resultado', text: 'Salve a foto recortada de forma limpa e rápida.' }
      ],
      featuresTitle: 'Destaques da ferramenta de recorte',
      features: [
        { title: 'Seleção intuitiva', text: 'Arraste as alças para definir o corte com precisão milimétrica.' },
        { title: 'Proporções travadas', text: 'Garante enquadramento perfeito para redes sociais e apresentações.' },
        { title: 'Qualidade preservada', text: 'Elimina bordas desnecessárias mantendo a nitidez dos pixels restantes.' },
        { title: '100% privado no aparelho', text: 'Nenhuma foto sua é transmitida para a nuvem.' }
      ],
      tipsTitle: 'Dica de enquadramento',
      tipsText: 'Para fotos de perfil no WhatsApp ou Instagram, use o formato quadrado 1:1. Para capas e banners, o formato 16:9 é o ideal.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Cortar reduz a resolução?', a: 'Elimina os pixels externos ao corte, resultando em dimensões menores e proporcionais à área escolhida.' },
        { q: 'O fundo transparente é mantido em PNGs?', a: 'Sim, a transparência permanece intacta após o recorte.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },

    it: {
      name: 'Ritaglia immagini',
      title: 'Ritaglia immagini online gratis – Inquadratura e proporzioni fisse | ZamTools',
      metaDescription: 'Ritaglia immagini JPG, PNG e WebP online gratis. Ritaglio interattivo con proporzioni bloccate (1:1, 4:3, 16:9 o libera) senza sgranare.',
      h1: 'Ritaglia immagini online gratis',
      lead: 'Inquadra e ritaglia le tue foto con precisione grazie all\'area di selezione interattiva. Blocca proporzioni standard come quadrato 1:1, 4:3, 16:9 panoramico o ritaglia a mano libera per evidenziare il soggetto principale.',
      category: 'Modifica',
      keywords: ['ritaglia immagini', 'crop foto online', 'ritagliare foto quadrato 1:1', 'ritaglio 16:9', 'ritaglia foto gratis'],
      howToTitle: 'Come ritagliare un\'immagine online',
      howToSteps: [
        { step: 1, title: 'Carica la foto', text: 'Trascina l\'immagine nello spazio di lavoro.' },
        { step: 2, title: 'Scegli le proporzioni', text: 'Seleziona rapporto Libero, Quadrato 1:1, 4:3 o 16:9.' },
        { step: 3, title: 'Regola la selezione', text: 'Trascina i cursori angolari per inquadrare il dettaglio desiderato.' },
        { step: 4, title: 'Scarica l\'immagine', text: 'Salva subito la foto ritagliata sul tuo dispositivo.' }
      ],
      featuresTitle: 'Caratteristiche dello strumento di ritaglio',
      features: [
        { title: 'Controlli su tela fluidi', text: 'Maniglie intuitive per definire la composizione desiderata in pochi gesti.' },
        { title: 'Rapporti d\'aspetto fissi', text: 'Blocco automatico per immagini profilo quadrate o sfondi orizzontali.' },
        { title: 'Qualità inalterata', text: 'Conserva la massima risoluzione dell\'area selezionata senza compressione extra.' },
        { title: 'Nessun caricamento cloud', text: 'L\'elaborazione avviene sul tuo dispositivo in piena riservatezza.' }
      ],
      tipsTitle: 'Consiglio di inquadratura',
      tipsText: 'Il formato 1:1 è perfetto per avatar social e schede prodotto, mentre il 16:9 è la scelta ideale per sfondi widescreen e testate di siti web.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Il ritaglio abbassa la qualità della foto?', a: 'No, i pixel all\'interno dell\'area selezionata mantengono intatta la loro fedeltà originale.' },
        { q: 'I file PNG trasparenti conservano la trasparenza?', a: 'Sì, la trasparenza viene preservata senza alterazioni.' }
      ],
      relatedTools: ['imageRotateFlip', 'imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    }
  },

  imageRotateFlip: {
    en: {
      name: 'Rotate & Flip Image',
      title: 'Rotate & Flip Image Online – Turn 90°, 180° or Mirror | ZamTools',
      metaDescription: 'Rotate photos 90 degrees clockwise, counterclockwise, 180 degrees, or flip horizontally and vertically online for free with instant browser processing.',
      h1: 'Rotate & Flip Image Online',
      lead: 'Fix sideways smartphone photos or mirror images horizontally and vertically. Turn photos 90° clockwise, 90° counter-clockwise, or 180° upside down in seconds without quality loss.',
      category: 'Edit',
      keywords: ['rotate image', 'flip image', 'mirror image online', 'rotate photo 90 degrees', 'turn photo upside down', 'fix photo orientation'],
      howToTitle: 'How to Rotate or Flip an Image Online',
      howToSteps: [
        { step: 1, title: 'Upload Photo', text: 'Select your sideways or upside-down photo.' },
        { step: 2, title: 'Choose Rotation or Flip', text: 'Click Rotate 90° CW, Rotate 90° CCW, Flip Horizontally, or Flip Vertically.' },
        { step: 3, title: 'Inspect Real-Time Preview', text: 'Verify the corrected orientation in the preview canvas.' },
        { step: 4, title: 'Download Fixed Image', text: 'Download your properly aligned photo immediately.' }
      ],
      featuresTitle: 'Orientation Tools',
      features: [
        { title: '90° and 180° Turns', text: 'Rotate clockwise or counter-clockwise to fix camera sensor orientation mismatches.' },
        { title: 'Horizontal & Vertical Mirroring', text: 'Flip selfies to mirror perspective or create inverted graphic effects.' },
        { title: 'Canvas Preservation', text: 'Recalculates bounding canvas dimensions automatically so no edges are truncated.' },
        { title: 'Private & Secure', text: 'Your private photos are corrected directly in your browser\'s memory.' }
      ],
      tipsTitle: 'Camera Orientation Tip',
      tipsText: 'Smartphones often store orientation in EXIF metadata that certain websites fail to read, causing photos to appear sideways. Rotating and re-saving here permanently fixes the pixel orientation.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Why do my phone photos sometimes upload sideways?', a: 'Mobile cameras save orientation tags in EXIF headers. Some websites ignore these headers, causing images to display rotated. Re-saving here fixes the pixels permanently.' },
        { q: 'Does flipping an image horizontally reduce clarity?', a: 'No. Mirroring merely swaps pixel columns left-to-right without changing colors or degrading resolution.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    },

    fr: {
      name: 'Pivoter et retourner une image',
      title: 'Pivoter et retourner une image en ligne – Tourner 90°, 180° ou miroir | ZamTools',
      metaDescription: 'Pivotez vos photos à 90°, 180° ou appliquez un effet miroir horizontal/vertical en ligne gratuitement. Corrigez l\'orientation de vos photos instantanément.',
      h1: 'Pivoter et retourner une image en ligne',
      lead: 'Corrigez l\'orientation de photos prises de travers avec votre smartphone ou appliquez un effet miroir. Pivotez à 90° vers la droite, 90° vers la gauche ou retournez vos images verticalement et horizontalement.',
      category: 'Retouche',
      keywords: ['pivoter image', 'retourner photo en ligne', 'effet miroir photo', 'tourner photo 90 degres', 'corriger orientation image'],
      howToTitle: 'Comment pivoter ou retourner une photo',
      howToSteps: [
        { step: 1, title: 'Sélectionnez votre photo', text: 'Importez l\'image à corriger dans l\'outil.' },
        { step: 2, title: 'Pivotez ou inversez', text: 'Cliquez sur Tourner 90° à droite, à gauche, ou Miroir horizontal/vertical.' },
        { step: 3, title: 'Contrôlez l\'orientation', text: 'Vérifiez le résultat obtenu directement dans la fenêtre d\'aperçu.' },
        { step: 4, title: 'Téléchargez l\'image redressée', text: 'Enregistrez la photo avec sa nouvelle orientation définitive.' }
      ],
      featuresTitle: 'Outils d\'orientation complets',
      features: [
        { title: 'Rotation à 90° et 180°', text: 'Redressez facilement les clichés enregistrés dans le mauvais sens.' },
        { title: 'Miroir horizontal et vertical', text: 'Idéal pour inverser la perspective d\'un selfie ou d\'un dessin.' },
        { title: 'Recalcul automatique du cadre', text: 'Les dimensions s\'adaptent immédiatement sans couper les coins de l\'image.' },
        { title: 'Traitement local sécurisé', text: 'Vos photos de famille ou professionnelles ne quittent pas votre appareil.' }
      ],
      tipsTitle: 'Astuce orientation smartphone',
      tipsText: 'Certains sites ignorent les balises d\'orientation EXIF des smartphones, affichant les photos sur le côté. Cet outil réencode les pixels de façon permanente pour que l\'affichage soit correct partout.',
      faqTitle: 'Questions fréquentes sur la rotation',
      faqs: [
        { q: 'Pourquoi mes photos s\'affichent-elles parfois à l\'envers sur certains sites ?', a: 'C\'est souvent lié aux métadonnées d\'orientation EXIF ignorées par certains navigateurs ou serveurs. Notre outil réencode la disposition réelle des pixels.' },
        { q: 'L\'effet miroir réduit-il la netteté ?', a: 'Non, l\'inversion horizontale réordonne simplement les colonnes de pixels sans perte de netteté.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    },

    es: {
      name: 'Rotar y voltear imagen',
      title: 'Rotar y voltear fotos online gratis – Girar 90°, 180° o espejo | ZamTools',
      metaDescription: 'Gira fotos 90 grados, 180 grados o aplica efecto espejo horizontal y vertical online gratis. Corrige la orientación de tus imágenes en segundos.',
      h1: 'Rotar y voltear fotos online gratis',
      lead: 'Corrige fotos que quedaron de costado o de cabeza al tomarlas con tu móvil. Rota 90° a la derecha, 90° a la izquierda o aplica efecto espejo horizontal y vertical sin perder definición.',
      category: 'Edición',
      keywords: ['rotar imagen', 'voltear foto online', 'girar foto 90 grados', 'efecto espejo foto', 'cambiar orientacion imagen'],
      howToTitle: 'Cómo girar o voltear una imagen online',
      howToSteps: [
        { step: 1, title: 'Carga tu foto', text: 'Sube la imagen que deseas orientar correctamente.' },
        { step: 2, title: 'Aplica rotación o volteo', text: 'Presiona girar 90° a la derecha, izquierda o invertir horizontal/verticalmente.' },
        { step: 3, title: 'Comprueba el resultado', text: 'Revisa la orientación en la vista previa interactiva.' },
        { step: 4, title: 'Descarga tu foto', text: 'Guarda la imagen corregida lista para compartir.' }
      ],
      featuresTitle: 'Opciones de orientación precisas',
      features: [
        { title: 'Giro de 90° y 180°', text: 'Soluciona errores de orientación de cámaras y sensores de teléfonos.' },
        { title: 'Efecto espejo simétrico', text: 'Invierte selfies o composiciones con un solo clic.' },
        { title: 'Ajuste de lienzo automático', text: 'Intercambia ancho y alto sin recortar esquinas.' },
        { title: 'Seguridad en tu navegador', text: 'Todo se procesa en tu dispositivo sin riesgo para tu privacidad.' }
      ],
      tipsTitle: 'Por qué ocurren giros indeseados',
      tipsText: 'Las cámaras móviles guardan la orientación en etiquetas EXIF que algunos portales no leen. Rotar la imagen aquí reescribe los píxeles para que se vea bien en cualquier aplicación.',
      faqTitle: 'Preguntas frecuentes sobre rotación',
      faqs: [
        { q: '¿Por qué mis fotos salen giradas al subirlas a la web?', a: 'Porque algunas plataformas no leen las etiquetas EXIF de los teléfonos móviles. Este proceso fija los píxeles de manera definitiva.' },
        { q: '¿Voltear una foto degrada los colores?', a: 'No, simplemente reubica los píxeles en orden inverso de izquierda a derecha.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    },

    id: {
      name: 'Putar dan Balik Gambar',
      title: 'Putar dan Balik Foto Online – Rotasi 90°, 180° atau Mirror | ZamTools',
      metaDescription: 'Putar foto 90 derajat searah jarum jam, 180 derajat, atau balik cermin horizontal dan vertikal online gratis langsung di browser Anda.',
      h1: 'Putar & Balik Gambar Online',
      lead: 'Perbaiki foto miring atau terbalik hasil jepretan kamera ponsel. Putar foto 90° ke kanan, 90° ke kiri, 180°, atau buat efek cermin (mirror) horizontal dan vertikal dengan mudah.',
      category: 'Edit',
      keywords: ['putar gambar', 'rotasi foto online', 'balik gambar horizontal', 'mirror foto online', 'perbaiki foto miring'],
      howToTitle: 'Cara Memutar atau Membalik Gambar Online',
      howToSteps: [
        { step: 1, title: 'Pilih Foto', text: 'Unggah foto yang posisinya miring atau terbalik.' },
        { step: 2, title: 'Pilih Aksi Rotasi', text: 'Klik tombol Putar 90° atau Balik Horizontal/Vertikal sesuai kebutuhan.' },
        { step: 3, title: 'Lihat Pratinjau', text: 'Pastikan orientasi foto sudah tegak dan pas pada pratinjau.' },
        { step: 4, title: 'Unduh Foto Baru', text: 'Simpan foto dengan posisi orientasi yang telah diperbaiki.' }
      ],
      featuresTitle: 'Kemudahan Pengaturan Orientasi',
      features: [
        { title: 'Rotasi 90° & 180°', text: 'Mengubah posisi potret menjadi lanskap atau sebaliknya.' },
        { title: 'Efek Cermin (Mirroring)', text: 'Membalikkan arah selfie atau objek secara horizontal/vertikal.' },
        { title: 'Tanpa Terpotong', text: 'Menyesuaikan dimensi kanvas otomatis sehingga tidak ada bagian yang terpotong.' },
        { title: 'Proses Aman & Cepat', text: 'Berjalan langsung di RAM browser Anda tanpa upload ke server.' }
      ],
      tipsTitle: 'Tips Orientasi Kamera HP',
      tipsText: 'Kamera ponsel terkadang menyimpan data orientasi dalam metadata EXIF yang gagal dibaca beberapa website. Memutar dan menyimpannya di sini memastikan foto tampil tegak di mana saja.',
      faqTitle: 'Tanya Jawab Rotasi Gambar',
      faqs: [
        { q: 'Mengapa foto saya miring saat diunggah ke website tertentu?', a: 'Beberapa portal tidak mendukung pembacaan tag EXIF ponsel. Memutar dan menyimpan kembali foto di sini menyusun ulang piksel secara permanen.' },
        { q: 'Apakah membalik foto mengurangi resolusi?', a: 'Sama sekali tidak. Proses mirror hanya membalik urutan kolom piksel tanpa mengubah detail warna.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    },

    de: {
      name: 'Bild drehen & spiegeln',
      title: 'Bild drehen & spiegeln online – 90°, 180° Drehung & Spiegeleffekt | ZamTools',
      metaDescription: 'Drehen Sie Bilder um 90 Grad, 180 Grad oder spiegeln Sie Fotos horizontal und vertikal kostenlos online. Schnelle Korrektur falscher Ausrichtungen.',
      h1: 'Bilder online drehen und spiegeln',
      lead: 'Korrigieren Sie versehentlich quer aufgenommene Smartphone-Fotos oder spiegeln Sie Bilder horizontal und vertikal. Drehen Sie Bilder um 90° im oder gegen den Uhrzeigersinn ohne Schärfeverlust.',
      category: 'Bearbeiten',
      keywords: ['bild drehen online', 'foto spiegeln', 'bild um 90 grad drehen', 'spiegeleffekt foto', 'bildausrichtung korrigieren'],
      howToTitle: 'So drehen oder spiegeln Sie ein Bild online',
      howToSteps: [
        { step: 1, title: 'Bild hochladen', text: 'Wählen Sie das falsch ausgerichtete Bild aus.' },
        { step: 2, title: 'Drehung oder Spiegelung wählen', text: 'Klicken Sie auf 90° nach rechts, nach links oder Horizontal/Vertikal spiegeln.' },
        { step: 3, title: 'Vorschau kontrollieren', text: 'Prüfen Sie die korrigierte Ausrichtung direkt im Anzeigefenster.' },
        { step: 4, title: 'Bild herunterladen', text: 'Speichern Sie das aufgerichtete Bild ab.' }
      ],
      featuresTitle: 'Vielseitige Ausrichtungsfunktionen',
      features: [
        { title: '90° und 180° Drehungen', text: 'Korrigiert fehlerhafte Orientierungssensoren von Kameras im Handumdrehen.' },
        { title: 'Horizontales & vertikales Spiegeln', text: 'Perfekt für Selfies oder symmetrische Designeffekte.' },
        { title: 'Automatische Bildabmessungen', text: 'Tauscht Breite und Höhe bei 90°-Drehungen fehlerfrei aus.' },
        { title: '100 % vertraulich', text: 'Ihre Fotos werden ausschließlich lokal im Speicher Ihres Browsers gedreht.' }
      ],
      tipsTitle: 'Hintergrund zu EXIF-Orientierung',
      tipsText: 'Smartphones hinterlegen die Drehung oft nur in unsichtbaren EXIF-Daten, die manche Portale ignorieren. Durch das erneute Speichern hier werden die Pixel physisch richtig angeordnet.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Warum werden Bilder im Internet manchmal seitlich angezeigt?', a: 'Viele Webseiten ignorieren die EXIF-Ausrichtungsdaten von Kameras. Unsere Software schreibt die Pixel dauerhaft in die richtige Position um.' },
        { q: 'Leidet die Bildqualität beim Spiegeln?', a: 'Nein, es werden lediglich die Pixelspalten vertauscht, ohne Neuberechnung der Farben.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    },

    pt: {
      name: 'Girar e inverter imagem',
      title: 'Girar e inverter imagem online grátis – Girar 90°, 180° ou espelhar | ZamTools',
      metaDescription: 'Gire fotos em 90 graus, 180 graus ou espelhe horizontal e verticalmente online grátis. Corrija fotos deitadas em segundos no navegador.',
      h1: 'Girar e inverter fotos online grátis',
      lead: 'Corrija fotos que ficaram deitadas ao fotografar com o smartphone ou aplique efeitos de espelho. Gire 90° para a direita, 90° para a esquerda ou inverta a orientação horizontal e verticalmente.',
      category: 'Editar',
      keywords: ['girar imagem', 'inverter foto online', 'espelhar imagem', 'girar foto 90 graus', 'corrigir orientacao foto'],
      howToTitle: 'Como girar ou espelhar uma foto online',
      howToSteps: [
        { step: 1, title: 'Selecione a foto', text: 'Carregue a imagem que deseja rotacionar.' },
        { step: 2, title: 'Escolha girar ou espelhar', text: 'Clique em Girar 90° ou Inverter horizontal/verticalmente.' },
        { step: 3, title: 'Veja a prévia', text: 'Verifique se a orientação ficou correta na tela.' },
        { step: 4, title: 'Baixe a imagem', text: 'Salve a foto pronta com a nova orientação permanente.' }
      ],
      featuresTitle: 'Recursos práticos de rotação',
      features: [
        { title: 'Rotação de 90° e 180°', text: 'Endireite imagens tiradas na vertical ou horizontal rapidamente.' },
        { title: 'Espelhamento horizontal e vertical', text: 'Inverta fotos para corrigir perspectivas de selfies ou criar reflexos.' },
        { title: 'Enquadramento completo', text: 'Ajusta a largura e altura para que nada fique cortado.' },
        { title: 'Total privacidade', text: 'Suas fotos não são enviadas para nenhum servidor externo.' }
      ],
      tipsTitle: 'Dica sobre fotos de celular',
      tipsText: 'Ao girar fotos aqui, o alinhamento é gravado diretamente nos pixels, garantindo que elas fiquem na posição correta em qualquer rede social ou formulário.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Por que algumas fotos abrem deitadas?', a: 'Isso ocorre quando sites não leem os metadados EXIF do celular. Nossa ferramenta corrige os pixels fisicamente.' },
        { q: 'Espelhar a foto altera a qualidade?', a: 'Não, o espelhamento apenas inverte as colunas de pixels sem perdas de cor.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    },

    it: {
      name: 'Ruota e capovolgi immagine',
      title: 'Ruota e capovolgi immagini online gratis – Ruota 90°, 180° o specchia | ZamTools',
      metaDescription: 'Ruota foto di 90 gradi, 180 gradi o crea un effetto specchio orizzontale e verticale online gratis. Correggi l\'orientamento delle tue foto in pochi secondi.',
      h1: 'Ruota e capovolgi immagini online gratis',
      lead: 'Raddrizza foto scattate di traverso o capovolte dal tuo smartphone oppure crea effetti di riflesso speculare. Ruota di 90° in senso orario, antiorario o capovolgi in orizzontale e verticale.',
      category: 'Modifica',
      keywords: ['ruota immagine', 'capovolgi foto online', 'specchia immagine', 'ruotare foto 90 gradi', 'orientamento immagine smartphone'],
      howToTitle: 'Come ruotare o specchiare un\'immagine online',
      howToSteps: [
        { step: 1, title: 'Carica la foto', text: 'Seleziona l\'immagine da raddrizzare.' },
        { step: 2, title: 'Scegli la rotazione', text: 'Premi Ruota 90° a destra, a sinistra o Specchia orizzontalmente/verticalmente.' },
        { step: 3, title: 'Controlla l\'anteprima', text: 'Verifica il corretto orientamento visualizzato.' },
        { step: 4, title: 'Scarica il risultato', text: 'Salva subito la foto orientata nel modo desiderato.' }
      ],
      featuresTitle: 'Funzionalità di orientamento',
      features: [
        { title: 'Rotazione 90° e 180°', text: 'Corregge errori di rotazione causati dai sensori degli smartphone.' },
        { title: 'Effetto specchio immediato', text: 'Inverti orizzontalmente selfie e disegni con un solo clic.' },
        { title: 'Adattamento automatico della tela', text: 'Ricalcola larghezza e altezza senza tagliare i bordi.' },
        { title: 'Sicurezza al 100%', text: 'Elaborazione svolta sul tuo dispositivo senza passaggi online.' }
      ],
      tipsTitle: 'Consiglio utile',
      tipsText: 'Riorientare e risalvare la foto qui fissa definitivamente l\'orientamento reale dei pixel, risolvendo problemi di visualizzazione su siti terzi.',
      faqTitle: 'Domande frequenti sulla rotazione',
      faqs: [
        { q: 'Perché alcune foto appaiono ruotate quando le invio?', a: 'Spesso dipende dai metadati EXIF che alcuni programmi non interpretano. Riassegnare i pixel qui risolve il problema.' },
        { q: 'L\'effetto specchio degrada i dettagli?', a: 'No, l\'inversione speculare non tocca le informazioni cromatiche della foto.' }
      ],
      relatedTools: ['imageCropper', 'imageResizer', 'grayscaleImage', 'imageCompressor']
    }
  },

  grayscaleImage: {
    en: {
      name: 'Grayscale Image',
      title: 'Grayscale Image Converter Online – Black & White Filter | ZamTools',
      metaDescription: 'Convert color photos to black and white grayscale online for free. Precise luminance weighting algorithms directly in your browser.',
      h1: 'Grayscale Image Converter Online',
      lead: 'Transform color photos into timeless monochrome and black-and-white graphics. Uses standard ITU-R BT.709 luminance formulas to calculate natural contrast and tone depth.',
      category: 'Edit',
      keywords: ['grayscale image', 'convert to black and white', 'black and white photo filter', 'monochrome image online', 'desaturate photo'],
      howToTitle: 'How to Convert an Image to Grayscale',
      howToSteps: [
        { step: 1, title: 'Upload Color Image', text: 'Select a JPG, PNG, or WebP picture from your device.' },
        { step: 2, title: 'Automatic Conversion', text: 'Luminance weights (0.2126 R + 0.7152 G + 0.0722 B) are applied in real time.' },
        { step: 3, title: 'Review Monochrome', text: 'Examine contrast depth in the live preview window.' },
        { step: 4, title: 'Download Black & White Image', text: 'Download your polished monochrome photograph.' }
      ],
      featuresTitle: 'Monochrome Processing',
      features: [
        { title: 'Accurate Photometric Luminance', text: 'Matches the human eye\'s natural spectral sensitivity to green, red, and blue light.' },
        { title: 'High Dynamic Range', text: 'Maintains subtle shadow and highlight detail without blown-out whites.' },
        { title: 'Instant Execution', text: 'Transforms full-resolution photos in milliseconds using HTML5 Canvas pixel arrays.' },
        { title: 'Privacy Guaranteed', text: 'No uploads or remote storage. Your photos remain on your computer.' }
      ],
      tipsTitle: 'Black & White Photography Tip',
      tipsText: 'Black and white photography emphasizes texture, lighting contrast, and geometry. Images with strong directional lighting produce striking monochrome portraits and architectural shots.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'What is the formula used for grayscale conversion?', a: 'We use the standard photometric ITU-R BT.709 luminance formula: Y = 0.2126 R + 0.7152 G + 0.0722 B, which accurately reflects human eye sensitivity.' },
        { q: 'Does converting to grayscale reduce file size?', a: 'Because three color channels (R, G, B) are flattened into identical values, compressing the resulting image with PNG or JPG yields noticeably smaller file sizes.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    },

    fr: {
      name: 'Image en niveaux de gris',
      title: 'Convertir image en noir et blanc en ligne – Niveaux de gris | ZamTools',
      metaDescription: 'Convertissez vos photos couleur en noir et blanc gratuitement en ligne. Calcul photométrique précis de la luminance directement dans votre navigateur.',
      h1: 'Convertir une image en noir et blanc',
      lead: 'Transformez vos photos couleur en élégantes compositions monochromes en noir et blanc. Utilise les formules photométriques standard de luminance pour un contraste et des nuances de gris naturels.',
      category: 'Retouche',
      keywords: ['image noir et blanc', 'convertir photo en noir et blanc', 'niveaux de gris en ligne', 'filtre monochrome photo', 'desaturer image'],
      howToTitle: 'Comment convertir une image en noir et blanc',
      howToSteps: [
        { step: 1, title: 'Chargez votre photo', text: 'Sélectionnez votre fichier JPG, PNG ou WebP.' },
        { step: 2, title: 'Conversion immédiate', text: 'Les coefficients de luminance sont appliqués en temps réel à chaque pixel.' },
        { step: 3, title: 'Vérifiez les nuances', text: 'Appréciez les contrastes et les ombres dans la fenêtre d\'aperçu.' },
        { step: 4, title: 'Téléchargez le visuel', text: 'Enregistrez votre photo en noir et blanc en haute définition.' }
      ],
      featuresTitle: 'Points forts du filtre noir et blanc',
      features: [
        { title: 'Luminance photométrique réelle', text: 'Prend en compte la sensibilité de l\'œil humain pour un rendu équilibré des tons de gris.' },
        { title: 'Nuances et contrastes préservés', text: 'Garde les détails fins dans les zones d\'ombres et les hautes lumières.' },
        { title: 'Rapidité d\'exécution', text: 'Convertit instantanément les photos haute résolution en mémoire locale.' },
        { title: 'Confidentialité assurée', text: 'Aucune donnée n\'est transmise sur internet.' }
      ],
      tipsTitle: 'Conseil artistique',
      tipsText: 'Le noir et blanc sublime les portraits expressifs, la photographie d\'architecture et les paysages à fort contraste ombres/lumières.',
      faqTitle: 'Questions fréquentes sur les niveaux de gris',
      faqs: [
        { q: 'Quelle formule est utilisée pour les nuances de gris ?', a: 'Nous utilisons la formule standard ITU-R BT.709 (Y = 0.2126 R + 0.7152 G + 0.0722 B), qui correspond fidèlement à la vision humaine.' },
        { q: 'Le fichier en noir et blanc est-il plus léger ?', a: 'Oui, la simplification des informations chromatiques permet aux compresseurs d\'obtenir des fichiers plus légers.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    },

    es: {
      name: 'Escala de grises',
      title: 'Convertir fotos a blanco y negro online – Escala de grises | ZamTools',
      metaDescription: 'Pasa fotos a blanco y negro online gratis. Conversión precisa con fórmula de luminancia fotométrica en tiempo real en tu navegador.',
      h1: 'Convertir fotos a blanco y negro',
      lead: 'Transforma tus fotos a color en clásicas imágenes monocromáticas en blanco y negro. Aplica la fórmula de luminancia estándar para lograr contrastes naturales y profundidad tonal.',
      category: 'Edición',
      keywords: ['foto blanco y negro', 'convertir a escala de grises', 'filtro blanco y negro online', 'desaturar foto', 'imagen monocromatica'],
      howToTitle: 'Cómo convertir una foto a blanco y negro',
      howToSteps: [
        { step: 1, title: 'Sube tu foto', text: 'Elige tu archivo JPG, PNG o WebP.' },
        { step: 2, title: 'Cálculo fotométrico', text: 'El sistema calcula la escala de grises al instante.' },
        { step: 3, title: 'Examina el contraste', text: 'Visualiza la riqueza de grises en la pantalla de muestra.' },
        { step: 4, title: 'Descarga tu imagen', text: 'Guarda la foto en blanco y negro con calidad profesional.' }
      ],
      featuresTitle: 'Características de la conversión',
      features: [
        { title: 'Fórmula de luminancia real', text: 'Respeta la sensibilidad óptica del ojo humano hacia verdes, rojos y azules.' },
        { title: 'Rango dinámico cuidado', text: 'Evita zonas quemadas o negros empastados sin detalle.' },
        { title: 'Procesamiento en memoria', text: 'Funciona en segundos directamente en tu navegador.' },
        { title: 'Privacidad absoluta', text: 'Tus fotos nunca se transfieren a servidores externos.' }
      ],
      tipsTitle: 'Consejo fotográfico',
      tipsText: 'El blanco y negro resalta texturas, expresiones faciales y líneas geométricas con un dramatismo que el color a veces distrae.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Qué fórmula matemática se aplica?', a: 'La norma internacional ITU-R BT.709, que equilibra el peso de los canales de color según la vista humana.' },
        { q: '¿Ocupa menos espacio una foto en blanco y negro?', a: 'Generalmente sí, ya que los compresores pueden empaquetar datos idénticos de color con mayor eficiencia.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    },

    id: {
      name: 'Gambar Skala Abu-abu',
      title: 'Ubah Foto ke Hitam Putih Online – Skala Abu-abu | ZamTools',
      metaDescription: 'Ubah foto berwarna menjadi hitam putih online gratis. Formula luminansi akurat untuk kontras foto monokrom yang elegan di browser.',
      h1: 'Ubah Foto Menjadi Hitam Putih',
      lead: 'Ubah foto berwarna menjadi gambar monokrom hitam putih yang klasik dan elegan. Menggunakan rumus pencahayaan standar untuk menghasilkan gradasi abu-abu yang alami dan seimbang.',
      category: 'Edit',
      keywords: ['foto hitam putih', 'ubah ke grayscale online', 'filter hitam putih', 'foto monokrom online', 'desaturasi warna foto'],
      howToTitle: 'Cara Mengubah Foto Menjadi Hitam Putih',
      howToSteps: [
        { step: 1, title: 'Unggah Gambar', text: 'Pilih foto berwarna yang ingin Anda ubah.' },
        { step: 2, title: 'Proses Skala Abu-abu', text: 'Sistem langsung memproses nilai pencahayaan piksel secara lokal.' },
        { step: 3, title: 'Periksa Gradasi', text: 'Lihat keindahan kontras hitam putih pada pratinjau.' },
        { step: 4, title: 'Unduh Hasil', text: 'Simpan foto hitam putih Anda ke perangkat.' }
      ],
      featuresTitle: 'Keunggulan Konversi Hitam Putih',
      features: [
        { title: 'Luminansi Fotometrik', text: 'Menyesuaikan sensitivitas alami mata manusia terhadap warna dasar.' },
        { title: 'Detail Bayangan Utuh', text: 'Menjaga detail pada area gelap dan terang tetap terlihat jelas.' },
        { title: 'Konversi Kilat', text: 'Memproses foto beresolusi tinggi dalam sekejap tanpa internet.' },
        { title: 'Data Aman', text: 'Foto tetap tersimpan di perangkat Anda tanpa risiko kebocoran data.' }
      ],
      tipsTitle: 'Saran Fotografi',
      tipsText: 'Foto dengan pencahayaan kuat dan bayangan kontras sangat cocok untuk efek hitam putih agar tekstur objek terlihat dramatis.',
      faqTitle: 'Tanya Jawab Hitam Putih',
      faqs: [
        { q: 'Apakah foto hitam putih ukurannya lebih kecil?', a: 'Ya, karena informasi spektrum warna disederhanakan, proses kompresi biasanya menghasilkan file yang lebih ringan.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    },

    de: {
      name: 'Bild in Graustufen umwandeln',
      title: 'Bild in Schwarz-Weiß umwandeln online – Graustufen | ZamTools',
      metaDescription: 'Wandeln Sie Farbfotos kostenlos online in Schwarz-Weiß um. Exakte Helligkeitsberechnung nach ITU-R BT.709 für harmonische Kontraste.',
      h1: 'Bilder in Schwarz-Weiß umwandeln',
      lead: 'Verwandeln Sie Farbfotografien in zeitlose Schwarz-Weiß-Aufnahmen. Nutzt die fotometrische ITU-R BT.709 Luminanz-Formel für natürliche Graustufen und ausgewogene Kontraste.',
      category: 'Bearbeiten',
      keywords: ['bild schwarz weiss umwandeln', 'graustufen bild online', 'foto entfaerben', 'monochrom bild konverter', 'schwarz weiss filter'],
      howToTitle: 'So wandeln Sie ein Bild in Schwarz-Weiß um',
      howToSteps: [
        { step: 1, title: 'Farbbild auswählen', text: 'Laden Sie Ihre Bilddatei hoch.' },
        { step: 2, title: 'Automatische Umwandlung', text: 'Die Farbwerte werden in Echtzeit in Graustufen umgerechnet.' },
        { step: 3, title: 'Kontraste prüfen', text: 'Beurteilen Sie Schattendetails im Vorschaubild.' },
        { step: 4, title: 'Schwarz-Weiß-Bild speichern', text: 'Laden Sie das monochrome Foto direkt herunter.' }
      ],
      featuresTitle: 'Präzise Monochrom-Verarbeitung',
      features: [
        { title: 'Normgerechte Helligkeitsgewichtung', text: 'Gleicht die Farbwerte an das menschliche Helligkeitsempfinden an.' },
        { title: 'Reiche Tonwertabstufung', text: 'Verhindert das Ausbrennen von Lichtern und das Absaufen von Schatten.' },
        { title: 'Sofortige Berechnung', text: 'Konvertiert Megapixel-Fotos in Sekundenbruchteilen im Browser.' },
        { title: 'Höchster Datenschutz', text: 'Keine Serverübertragung – Ihre Bilder bleiben privat.' }
      ],
      tipsTitle: 'Fototipp für Schwarz-Weiß',
      tipsText: 'Schwarz-Weiß-Bilder leben von Licht und Schatten. Motive mit starker Richtungsbeleuchtung oder markanten Linien wirken besonders ausdrucksstark.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Welche Formel wird verwendet?', a: 'Die internationale Norm ITU-R BT.709: Y = 0,2126 R + 0,7152 G + 0,0722 B.' },
        { q: 'Wird die Dateigröße kleiner?', a: 'Da die Farbkanäle identisch belegt werden, lassen sich Schwarz-Weiß-Bilder meist effizienter komprimieren.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    },

    pt: {
      name: 'Imagem em tons de cinza',
      title: 'Converter foto para preto e branco online – Tons de cinza | ZamTools',
      metaDescription: 'Converta fotos coloridas em preto e branco online grátis. Cálculo fotométrico de luminância direto no seu navegador com alto contraste.',
      h1: 'Converter imagem em preto e branco',
      lead: 'Transforme fotografias coloridas em elegantes imagens monocromáticas em preto e branco. Utiliza a fórmula padrão de luminância fotométrica para graduações de cinza naturais.',
      category: 'Editar',
      keywords: ['foto preto e branco', 'converter tons de cinza online', 'filtro preto e branco', 'desaturar imagem', 'foto monocromatica'],
      howToTitle: 'Como converter fotos para preto e branco',
      howToSteps: [
        { step: 1, title: 'Envie sua foto', text: 'Selecione uma imagem colorida nos formatos JPG, PNG ou WebP.' },
        { step: 2, title: 'Conversão automática', text: 'Os valores de luminância são calculados instantaneamente.' },
        { step: 3, title: 'Analise o contraste', text: 'Observe as nuances na janela de prévia.' },
        { step: 4, title: 'Baixe o arquivo', text: 'Salve a foto em preto e branco com máxima nitidez.' }
      ],
      featuresTitle: 'Vantagens do filtro monocromático',
      features: [
        { title: 'Luminância fotométrica', text: 'Simula a sensibilidade natural dos olhos humanos às cores.' },
        { title: 'Contraste preservado', text: 'Mantém informações visíveis em sombras e partes claras.' },
        { title: 'Processamento instantâneo', text: 'Gera a nova imagem em milissegundos sem gastar dados.' },
        { title: 'Total segurança', text: 'Nenhuma foto é armazenada ou enviada para terceiros.' }
      ],
      tipsTitle: 'Dica fotográfica',
      tipsText: 'A fotografia monocromática destaca formas, texturas e emoções. Fotos de arquitetura e retratos ganham destaque especial sem a distração das cores.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'A foto fica menor em tamanho?', a: 'Sim, pela uniformidade das cores nos canais, a compressão costuma diminuir o peso em KB.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    },

    it: {
      name: 'Immagine in scala di grigi',
      title: 'Converti foto in bianco e nero online – Scala di grigi | ZamTools',
      metaDescription: 'Trasforma foto a colori in elegante bianco e nero online gratis. Formula di luminanza fotometrica ad alto contrasto direttamente nel browser.',
      h1: 'Converti immagini in bianco e nero',
      lead: 'Trasforma foto a colori in eleganti scatti monocromatici in bianco e nero. Applica la formula fotometrica standard ITU-R BT.709 per un contrasto armonico e sfumature di grigio naturali.',
      category: 'Modifica',
      keywords: ['foto bianco e nero online', 'scala di grigi immagine', 'convertire foto bianco e nero', 'filtro monocromatico', 'desatura colori foto'],
      howToTitle: 'Come convertire una foto in bianco e nero',
      howToSteps: [
        { step: 1, title: 'Carica la foto', text: 'Scegli l\'immagine a colori da convertire.' },
        { step: 2, title: 'Elaborazione istantanea', text: 'Il calcolo della luminanza viene eseguito in tempo reale.' },
        { step: 3, title: 'Valuta il contrasto', text: 'Osserva l\'anteprima delle ombre e delle luci.' },
        { step: 4, title: 'Scarica l\'immagine', text: 'Salva subito lo scatto monocromatico sul tuo dispositivo.' }
      ],
      featuresTitle: 'Punti di forza della scala di grigi',
      features: [
        { title: 'Formula fotometrica reale', text: 'Riproduce la risposta visiva naturale dell\'occhio umano alla luce.' },
        { title: 'Profondità di sfumature', text: 'Mantiene nitidi i dettagli nelle ombre senza bruciare le luci.' },
        { title: 'Velocità pura', text: 'Elabora foto ad altissima risoluzione senza ritardi.' },
        { title: 'Privacy al 100%', text: 'Tutto rimane protetto nella memoria del tuo browser.' }
      ],
      tipsTitle: 'Consiglio visivo',
      tipsText: 'Il bianco e nero è eccezionale per enfatizzare geometrie, volti e dettagli materici con un tocco senza tempo.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Il file finale occupa meno spazio?', a: 'Generalmente sì, poiché le informazioni cromatiche semplificate si comprimono più facilmente.' }
      ],
      relatedTools: ['brightnessContrast', 'blurSharpenImage', 'imageCompressor', 'imageCropper']
    }
  },

  brightnessContrast: {
    en: {
      name: 'Brightness & Contrast',
      title: 'Adjust Brightness & Contrast Online – Exposure & Saturation | ZamTools',
      metaDescription: 'Adjust image brightness, contrast, and saturation online for free. Real-time canvas sliders to fix underexposed and dull photos in your browser.',
      h1: 'Adjust Brightness & Contrast Online',
      lead: 'Fix dark photos, brighten shadows, and boost color saturation with precision sliders. Preview changes in real time and download corrected photos without heavy editing software.',
      category: 'Edit',
      keywords: ['brightness contrast online', 'adjust brightness image', 'increase contrast photo', 'fix underexposed picture', 'photo lighting adjuster'],
      howToTitle: 'How to Adjust Image Lighting and Colors',
      howToSteps: [
        { step: 1, title: 'Upload Photo', text: 'Select an underexposed or flat photo.' },
        { step: 2, title: 'Adjust Sliders', text: 'Move Brightness, Contrast, and Saturation sliders to find the sweet spot.' },
        { step: 3, title: 'Compare in Real Time', text: 'Check the canvas preview as you adjust the controls.' },
        { step: 4, title: 'Download Enhanced Image', text: 'Save your professionally balanced photo in seconds.' }
      ],
      featuresTitle: 'Precise Color & Exposure Sliders',
      features: [
        { title: 'Real-Time Canvas Filtering', text: 'Live feedback with every slider nudge for effortless adjustments.' },
        { title: 'Saturation Boosting', text: 'Revitalize washed-out foliage and skies with vibrant color saturation.' },
        { title: 'Shadow Recovery', text: 'Lighten dark underexposed details without washing out blacks.' },
        { title: 'No Account Required', text: 'Edit and download as many photos as you need without watermarks.' }
      ],
      tipsTitle: 'Lighting Adjustment Tip',
      tipsText: 'When increasing brightness on dark photos, also raise contrast slightly (+5% to +15%) to prevent the image from looking hazy or washed out.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How does real-time brightness adjustment work?', a: 'It utilizes hardware-accelerated canvas filter matrices to recalculate RGB channel values instantly in your browser memory.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    fr: {
      name: 'Luminosité et contraste',
      title: 'Régler luminosité et contraste en ligne – Exposition et saturation | ZamTools',
      metaDescription: 'Ajustez la luminosité, le contraste et la saturation de vos photos en ligne gratuitement. Curseurs en temps réel pour corriger les photos sous-exposées.',
      h1: 'Régler luminosité et contraste en ligne',
      lead: 'Éclaircissez les photos trop sombres, réhaussez les contrastes et ravivez les couleurs avec nos curseurs de précision. Visualisez les changements en direct et téléchargez vos images corrigées sans logiciel complexe.',
      category: 'Retouche',
      keywords: ['luminosite contraste en ligne', 'eclaircir photo sombre', 'augmenter contraste image', 'corriger exposition photo', 'regler saturation image'],
      howToTitle: 'Comment corriger l\'exposition d\'une photo',
      howToSteps: [
        { step: 1, title: 'Importez votre photo', text: 'Choisissez une image trop sombre ou terne.' },
        { step: 2, title: 'Réglez les curseurs', text: 'Ajustez la luminosité, le contraste et la saturation jusqu\'à obtenir le résultat parfait.' },
        { step: 3, title: 'Visualisez en direct', text: 'Observez immédiatement le rendu sur la photo.' },
        { step: 4, title: 'Téléchargez l\'image sublimée', text: 'Enregistrez votre photo corrigée en un clic.' }
      ],
      featuresTitle: 'Contrôles d\'exposition précis',
      features: [
        { title: 'Aperçu instantané', text: 'Chaque mouvement de curseur modifie l\'image sans le moindre délai.' },
        { title: 'Ravivage des couleurs', text: 'Donnez de l\'éclat aux ciels et paysages avec le curseur de saturation.' },
        { title: 'Débouchage des ombres', text: 'Révélez les détails masqués dans les zones sombres.' },
        { title: 'Accès libre et privé', text: 'Retouchez vos photos sans inscription et en toute sécurité locale.' }
      ],
      tipsTitle: 'Astuce retouche d\'exposition',
      tipsText: 'Lorsque vous augmentez la luminosité d\'une photo sombre, pensez à augmenter aussi légèrement le contraste (+10 %) pour éviter un effet terne ou délavé.',
      faqTitle: 'Questions fréquentes sur la luminosité',
      faqs: [
        { q: 'Comment le réglage est-il calculé ?', a: 'Le navigateur applique des matrices de transformation chromatique directement sur les canaux RGB de l\'image en mémoire locale.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    es: {
      name: 'Brillo y contraste',
      title: 'Ajustar brillo y contraste online – Exposición y saturación | ZamTools',
      metaDescription: 'Ajusta el brillo, contraste y saturación de fotos online gratis. Controles en tiempo real para aclarar fotos oscuras y mejorar colores en tu navegador.',
      h1: 'Ajustar brillo y contraste online',
      lead: 'Aclara fotografías oscuras, equilibra sombras y resalta los colores con controles deslizantes de precisión. Observa los cambios en vivo y descarga fotos con aspecto profesional sin instalar programas pesados.',
      category: 'Edición',
      keywords: ['brillo contraste online', 'aclarar foto oscura', 'aumentar contraste imagen', 'corregir exposicion foto', 'ajustar saturacion'],
      howToTitle: 'Cómo ajustar el brillo y contraste de una foto',
      howToSteps: [
        { step: 1, title: 'Carga tu foto', text: 'Sube la imagen que deseas mejorar.' },
        { step: 2, title: 'Mueve los controles', text: 'Regula brillo, contraste y saturación hasta alcanzar el equilibrio deseado.' },
        { step: 3, title: 'Previsualiza en tiempo real', text: 'Compara los cambios directamente en la pantalla.' },
        { step: 4, title: 'Descarga tu imagen corregida', text: 'Guarda la foto con iluminación óptima.' }
      ],
      featuresTitle: 'Ajustes de iluminación fotográfica',
      features: [
        { title: 'Respuesta inmediata', text: 'Los cambios se reflejan al instante al mover cada deslizador.' },
        { title: 'Saturación vibrante', text: 'Realza fotos apagadas haciendo que los colores cobren vida.' },
        { title: 'Recuperación de sombras', text: 'Rescata información en partes oscuras sin quemar los blancos.' },
        { title: 'Sin marcas de agua', text: 'Exporta tus fotos libremente con resolución completa.' }
      ],
      tipsTitle: 'Consejo de iluminación',
      tipsText: 'Al subir el brillo en fotos oscuras, incrementa también un poco el contraste para evitar que la imagen se vea lechosa o sin fuerza.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cómo funciona el ajuste de brillo en el navegador?', a: 'Se calculan nuevas matrices de color en el lienzo HTML5 acelerado por hardware de tu equipo.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    id: {
      name: 'Kecerahan & Kontras',
      title: 'Atur Kecerahan & Kontras Foto Online – Saturasi Warna | ZamTools',
      metaDescription: 'Sesuaikan kecerahan, kontras, dan saturasi gambar online gratis. Terangkan foto gelap dan pertajam warna secara instan di browser Anda.',
      h1: 'Atur Kecerahan & Kontras Gambar',
      lead: 'Perbaiki foto yang terlalu gelap, seimbangkan bayangan, dan buat warna foto lebih hidup dengan slider presisi. Lihat pratinjau langsung dan unduh foto yang disempurnakan tanpa aplikasi edit yang rumit.',
      category: 'Edit',
      keywords: ['atur kecerahan foto', 'terangkan foto gelap online', 'tambah kontras gambar', 'kecerahan kontras online', 'atur saturasi foto'],
      howToTitle: 'Cara Mengatur Kecerahan dan Kontras Foto',
      howToSteps: [
        { step: 1, title: 'Pilih Gambar', text: 'Masukkan foto yang ingin disesuaikan pencahayaannya.' },
        { step: 2, title: 'Geser Slider', text: 'Atur tingkat kecerahan, kontras, dan saturasi warna.' },
        { step: 3, title: 'Cek Perubahan', text: 'Lihat perbedaannya langsung pada tampilan foto.' },
        { step: 4, title: 'Unduh Hasil Terang', text: 'Simpan foto yang sudah terlihat jauh lebih jelas.' }
      ],
      featuresTitle: 'Pengaturan Pencahayaan Lengkap',
      features: [
        { title: 'Pratinjau Instan', text: 'Perubahan warna dan cahaya terlihat seketika saat menggeser kontrol.' },
        { title: 'Saturasi Tajam', text: 'Membuat warna langit, makanan, dan alam terlihat lebih memikat.' },
        { title: 'Terangkan Area Gelap', text: 'Mengangkat detail tersembunyi pada foto malam atau bayangan.' },
        { title: 'Gratis dan Privat', text: 'Semua proses berjalan lokal di HP atau komputer Anda.' }
      ],
      tipsTitle: 'Tips Pencahayaan',
      tipsText: 'Jika Anda menaikkan kecerahan pada foto yang sangat gelap, naikkan juga sedikit nilai kontras agar foto tidak tampak kusam dan pudar.',
      faqTitle: 'Tanya Jawab Kecerahan & Kontras',
      faqs: [
        { q: 'Apakah foto saya akan kehilangan kualitas asli?', a: 'Tidak, resolusi piksel asli Anda tetap utuh, hanya pencahayaan dan rona warna yang disesuaikan.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    de: {
      name: 'Helligkeit & Kontrast anpassen',
      title: 'Helligkeit & Kontrast online anpassen – Belichtung & Sättigung | ZamTools',
      metaDescription: 'Passen Sie Helligkeit, Kontrast und Farbsättigung kostenlos online an. Dunkle Bilder aufhellen und Farben intensivieren mit Live-Vorschau im Browser.',
      h1: 'Helligkeit und Kontrast online anpassen',
      lead: 'Hellen Sie unterbelichtete Fotos auf, optimieren Sie Schatten und verleihen Sie Farben neue Frische mit präzisen Schiebereglern. Betrachten Sie Änderungen in Echtzeit und laden Sie korrigierte Bilder ohne schwere Software herunter.',
      category: 'Bearbeiten',
      keywords: ['helligkeit kontrast online', 'dunkles bild aufhellen', 'kontrast erhoehen bild', 'foto belichtung anpassen', 'farbsaettigung bild online'],
      howToTitle: 'So passen Sie Helligkeit und Kontrast online an',
      howToSteps: [
        { step: 1, title: 'Bild auswählen', text: 'Laden Sie ein zu dunkles oder blasses Foto hoch.' },
        { step: 2, title: 'Regler einstellen', text: 'Justieren Sie Helligkeit, Kontrast und Farbsättigung nach Wunsch.' },
        { step: 3, title: 'Live-Wirkung prüfen', text: 'Verfolgen Sie die Auswirkung jedes Reglers im Vorschaubild.' },
        { step: 4, title: 'Optimiertes Bild herunterladen', text: 'Speichern Sie das fertige Foto mit idealer Belichtung.' }
      ],
      featuresTitle: 'Präzise Belichtungskorrektur',
      features: [
        { title: 'Echtzeit-Rückmeldung', text: 'Sofortige visuelle Aktualisierung der Bildpixel bei Reglerbewegungen.' },
        { title: 'Farben intensivieren', text: 'Kräftigere Farbtöne durch feinstufige Sättigungskontrolle.' },
        { title: 'Tiefen aufhellen', text: 'Holt Details aus Schattenbereichen hervor, ohne Weißwerte zu überstrahlen.' },
        { title: 'Keine Anmeldung nötig', text: 'Kostenlose Nutzung ohne Begrenzungen oder Wasserzeichen.' }
      ],
      tipsTitle: 'Tipp zur Bildaufhellung',
      tipsText: 'Erhöhen Sie beim Aufhellen dunkler Bilder stets auch den Kontrast um 5 % bis 15 %, damit das Foto nicht milchig wirkt.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Werden Bilder bei der Belichtungskorrektur hochgeladen?', a: 'Nein, sämtliche Berechnungen führt die Rendering-Engine Ihres eigenen Browsers aus.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    pt: {
      name: 'Brilho e contraste',
      title: 'Ajustar brilho e contraste online – Exposição e saturação | ZamTools',
      metaDescription: 'Ajuste brilho, contraste e saturação de imagens online grátis. Clareie fotos escuras e realce cores em tempo real no seu navegador.',
      h1: 'Ajustar brilho e contraste online',
      lead: 'Clareie fotos escuras, equilibre sombras e deixe as cores mais vivas com controles de alta precisão. Visualize tudo em tempo real e baixe imagens perfeitas sem complicação.',
      category: 'Editar',
      keywords: ['brilho contraste online', 'clarear foto escura', 'aumentar contraste imagem', 'ajustar exposicao foto', 'saturacao de cores foto'],
      howToTitle: 'Como regular o brilho e contraste de uma imagem',
      howToSteps: [
        { step: 1, title: 'Envie a foto', text: 'Carregue a imagem que precisa de correção de luz.' },
        { step: 2, title: 'Ajuste os controles', text: 'Modifique o brilho, o contraste e a saturação.' },
        { step: 3, title: 'Confira a prévia', text: 'Veja as melhorias refletidas ao vivo no quadro.' },
        { step: 4, title: 'Baixe a foto', text: 'Salve a foto aprimorada diretamente no seu dispositivo.' }
      ],
      featuresTitle: 'Controles finos de iluminação',
      features: [
        { title: 'Ajuste em tempo real', text: 'Mudança instantânea na visualização a cada toque nos seletores.' },
        { title: 'Cores mais vivas', text: 'Recupere a intensidade de paisagens e fotos desbotadas.' },
        { title: 'Resgate de áreas escuras', text: 'Ilumine sombras profundas sem estourar o restante da imagem.' },
        { title: 'Privacidade garantida', text: 'Edição 100% no navegador sem passar por servidores externos.' }
      ],
      tipsTitle: 'Dica de iluminação',
      tipsText: 'Ao clarear uma imagem escura, aumente também um pouco o contraste para preservar a profundidade dos tons pretos.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'As fotos perdem qualidade ao aumentar o brilho?', a: 'A resolução continua a mesma; apenas os canais de cor e luminosidade são recalculados.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    it: {
      name: 'Luminosità e contrasto',
      title: 'Regola luminosità e contrasto online – Esposizione e saturazione | ZamTools',
      metaDescription: 'Regola luminosità, contrasto e saturazione delle foto online gratis. Schiarisci foto buie e vivacizza i colori in tempo reale nel tuo browser.',
      h1: 'Regola luminosità e contrasto online',
      lead: 'Schiarisci foto troppo scure, recupera le ombre e ravviva la saturazione dei colori con cursori precisi. Guarda le modifiche in tempo reale e scarica foto bilanciate senza software pesanti.',
      category: 'Modifica',
      keywords: ['luminosita contrasto online', 'schiarire foto scura', 'aumentare contrasto immagine', 'regolare esposizione foto', 'saturazione colori online'],
      howToTitle: 'Come regolare luminosità e contrasto',
      howToSteps: [
        { step: 1, title: 'Carica la foto', text: 'Scegli l\'immagine da illuminare o correggere.' },
        { step: 2, title: 'Regola i valori', text: 'Sposta i cursori di luminosità, contrasto e saturazione.' },
        { step: 3, title: 'Guarda l\'anteprima', text: 'Verifica il miglioramento cromatico in tempo reale.' },
        { step: 4, title: 'Scarica il file', text: 'Salva subito la foto con la nuova illuminazione.' }
      ],
      featuresTitle: 'Regolazioni dell\'illuminazione',
      features: [
        { title: 'Risposta istantanea', text: 'Visualizzazione immediata degli effetti sullo schermo.' },
        { title: 'Vivacità cromatica', text: 'Rendi i colori più brillanti ed entusiasmanti.' },
        { title: 'Recupero ombre', text: 'Estrae dettagli preziosi dalle zone poco illuminate.' },
        { title: 'Zero server cloud', text: 'Tutte le regolazioni restano private sul tuo computer.' }
      ],
      tipsTitle: 'Consiglio pratico',
      tipsText: 'Quando schiarisci un\'immagine sottoesposta, incrementa leggermente anche il contrasto per non farla sembrare opaca o priva di mordente.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Le regolazioni alterano le dimensioni della foto?', a: 'No, le dimensioni fisiche rimangono invariate.' }
      ],
      relatedTools: ['blurSharpenImage', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    }
  },

  blurSharpenImage: {
    en: {
      name: 'Blur & Sharpen',
      title: 'Blur & Sharpen Image Online – Gaussian Blur & Edge Sharpener | ZamTools',
      metaDescription: 'Blur or sharpen images online for free. Soften background distractions with smooth blur or enhance edge definition with 3x3 convolution kernels.',
      h1: 'Blur & Sharpen Image Online',
      lead: 'Apply smooth Gaussian blur to obscure background details or enhance sharpness with a 3x3 convolution matrix kernel. Fast, interactive, and processed locally in your browser.',
      category: 'Edit',
      keywords: ['blur image online', 'sharpen image online', 'gaussian blur photo', 'increase sharpness picture', 'unblur edges photo'],
      howToTitle: 'How to Blur or Sharpen an Image Online',
      howToSteps: [
        { step: 1, title: 'Upload Photo', text: 'Select your photo in JPG, PNG, or WebP format.' },
        { step: 2, title: 'Choose Effect', text: 'Select Blur to soften details or Sharpen to emphasize edges.' },
        { step: 3, title: 'Adjust Intensity', text: 'Fine-tune the radius or strength slider with live feedback.' },
        { step: 4, title: 'Download Processed Photo', text: 'Download your newly filtered photo.' }
      ],
      featuresTitle: 'Precision Filtering',
      features: [
        { title: 'Gaussian-Like Blur', text: 'Smooth, pleasing blur ideal for creating depth-of-field effects and privacy masks.' },
        { title: 'Convolution Edge Sharpening', text: 'Uses high-pass matrix kernels to bring out crisp lines and textured surfaces.' },
        { title: 'Fine Intensity Control', text: 'Dial in subtle micro-sharpening or pronounced background blurring.' },
        { title: 'Private & Local', text: 'Your photos are processed entirely in browser memory.' }
      ],
      tipsTitle: 'Sharpening Tip',
      tipsText: 'Subtle sharpening (values between 15% and 35%) works best for photos that feel slightly soft after resizing. Avoid over-sharpening, which can introduce halos around high-contrast edges.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How does convolution sharpening work?', a: 'It calculates a weighted difference between a center pixel and its surrounding 8 neighbors, boosting local contrast along high-frequency edges.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    fr: {
      name: 'Flou et netteté',
      title: 'Flouter et netteté d\'image en ligne – Flou gaussien & accentuation | ZamTools',
      metaDescription: 'Ajoutez du flou ou améliorez la netteté de vos photos en ligne gratuitement. Atténuez les arrière-plans ou rehaussez les détails avec précision.',
      h1: 'Flouter et accentuer la netteté d\'une image',
      lead: 'Appliquez un flou élégant pour masquer des détails confidentiels ou rehaussez la netteté des contours grâce à un filtre de convolution. Rapide, précis et exécuté localement dans votre navigateur.',
      category: 'Retouche',
      keywords: ['flouter image en ligne', 'nettete photo en ligne', 'flou gaussien image', 'rendre photo plus nette', 'accentuer contours photo'],
      howToTitle: 'Comment flouter ou accentuer une photo',
      howToSteps: [
        { step: 1, title: 'Chargez votre photo', text: 'Importez votre fichier JPG, PNG ou WebP.' },
        { step: 2, title: 'Choisissez l\'effet', text: 'Sélectionnez Flou pour adoucir ou Netteté pour faire ressortir les détails.' },
        { step: 3, title: 'Réglez l\'intensité', text: 'Ajustez le curseur pour doser l\'effet souhaité avec aperçu direct.' },
        { step: 4, title: 'Téléchargez l\'image', text: 'Récupérez votre photo transformée en un clic.' }
      ],
      featuresTitle: 'Des filtres de qualité professionnelle',
      features: [
        { title: 'Flou harmonieux', text: 'Parfait pour créer une mise en valeur de premier plan ou anonymiser un élément.' },
        { title: 'Matrice de netteté précise', text: 'Rehausse les micro-contrastes pour faire ressortir textures et détails.' },
        { title: 'Dosage sur mesure', text: 'Réglez l\'intensité avec précision sans dénaturer la photo.' },
        { title: 'Confidentialité totale', text: 'Traitement réalisé localement sans passage par le cloud.' }
      ],
      tipsTitle: 'Conseil de netteté',
      tipsText: 'Une accentuation légère (20 % à 30 %) redonne du piquant aux photos légèrement floues après redimensionnement sans créer d\'artéfacts désagréables.',
      faqTitle: 'Questions fréquentes sur le flou et la netteté',
      faqs: [
        { q: 'Comment fonctionne l\'accentuation de netteté ?', a: 'Elle applique une matrice de convolution 3x3 qui augmente le micro-contraste au niveau des bordures de pixels.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    es: {
      name: 'Desenfocar y enfocar',
      title: 'Desenfocar y enfocar fotos online – Desenfoque gaussiano y nitidez | ZamTools',
      metaDescription: 'Desenfoca o aumenta la nitidez de fotos online gratis. Suaviza fondos con desenfoque gaussiano o resalta detalles y bordes en tu navegador.',
      h1: 'Desenfocar y enfocar imágenes online',
      lead: 'Aplica desenfoque suave para difuminar fondos o destaca contornos y texturas con una matriz de enfoque por convolución. Ajuste en tiempo real y procesamiento 100% privado.',
      category: 'Edición',
      keywords: ['desenfocar imagen online', 'aumentar nitidez foto', 'desenfoque gaussiano online', 'enfocar foto borrosa', 'resaltar bordes imagen'],
      howToTitle: 'Cómo desenfocar o enfocar una foto online',
      howToSteps: [
        { step: 1, title: 'Sube tu imagen', text: 'Selecciona una foto en formato JPG, PNG o WebP.' },
        { step: 2, title: 'Elige el modo', text: 'Selecciona Desenfocar para suavizar o Enfocar para aumentar nitidez.' },
        { step: 3, title: 'Modula la fuerza', text: 'Mueve el control deslizante hasta ver el punto justo.' },
        { step: 4, title: 'Guarda la foto', text: 'Descarga tu imagen lista en tu dispositivo.' }
      ],
      featuresTitle: 'Filtros visuales avanzados',
      features: [
        { title: 'Desenfoque progresivo', text: 'Ideal para destacar sujetos principales o anonimizar información confidencial.' },
        { title: 'Matriz de enfoque 3x3', text: 'Potencia bordes y líneas sutiles para recuperar sensación de definición.' },
        { title: 'Control milimétrico', text: 'Permite ajustes muy sutiles o transformaciones intensas.' },
        { title: 'Privacidad garantizada', text: 'Tus fotos se procesan en la memoria de tu propio navegador.' }
      ],
      tipsTitle: 'Consejo para enfocar fotos',
      tipsText: 'Un enfoque suave (entre 15% y 30%) es la mejor opción para corregir fotos que quedaron ligeramente blandas tras reducir su tamaño.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cómo funciona el filtro de enfoque?', a: 'Compara los valores del píxel central con sus vecinos para acentuar el contraste local en los bordes.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    id: {
      name: 'Buramkan & Pertajam Gambar',
      title: 'Buramkan & Pertajam Foto Online – Efek Blur & Sharpness | ZamTools',
      metaDescription: 'Buramkan atau pertajam foto online gratis. Berikan efek blur lembut pada latar belakang atau pertegas garis tepi foto di browser Anda.',
      h1: 'Buramkan & Pertajam Gambar Online',
      lead: 'Berikan efek blur lembut untuk menyamarkan detail latar belakang atau pertajam garis tepi foto yang kurang fokus dengan filter konvolusi. Cepat, interaktif, dan aman di perangkat Anda.',
      category: 'Edit',
      keywords: ['buramkan foto online', 'pertajam foto buram', 'efek blur gambar', 'menajamkan foto', 'filter ketajaman gambar'],
      howToTitle: 'Cara Memburamkan atau Mempertajam Foto',
      howToSteps: [
        { step: 1, title: 'Pilih Foto', text: 'Masukkan gambar JPG, PNG, atau WebP.' },
        { step: 2, title: 'Pilih Efek', text: 'Pilih Buramkan (Blur) atau Pertajam (Sharpen).' },
        { step: 3, title: 'Atur Intensitas', text: 'Geser slider untuk menentukan seberapa kuat efek diterapkan.' },
        { step: 4, title: 'Unduh Hasil', text: 'Simpan foto yang sudah disempurnakan.' }
      ],
      featuresTitle: 'Filter Presisi Tinggi',
      features: [
        { title: 'Blur Halus', text: 'Bagus untuk menciptakan efek kedalaman bidang atau menyamarkan teks rahasia.' },
        { title: 'Penajaman Garis Tepi', text: 'Meningkatkan kontras mikro untuk menonjolkan tekstur dan detail halus.' },
        { title: 'Slider Fleksibel', text: 'Memungkinkan penajaman tipis yang alami tanpa merusak foto.' },
        { title: 'Aman Tanpa Upload', text: 'File tidak dikirim ke internet, semua diproses lokal.' }
      ],
      tipsTitle: 'Tips Mempertajam Foto',
      tipsText: 'Gunakan tingkat penajaman sedang (sekitar 20%–30%) agar foto terlihat segar tanpa menimbulkan lingkaran putih aneh di sekitar garis kontras tinggi.',
      faqTitle: 'Tanya Jawab Filter',
      faqs: [
        { q: 'Bagaimana cara kerja penajaman foto?', a: 'Sistem memperkuat kontras antara piksel yang berdampingan sehingga mata manusia melihat garis tepi menjadi lebih tegas.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    de: {
      name: 'Bild weichzeichnen & schärfen',
      title: 'Bild weichzeichnen & schärfen online – Gaußscher Weichzeichner | ZamTools',
      metaDescription: 'Bilder kostenlos online weichzeichnen oder schärfen. Sanfte Unschärfe für Hintergründe oder gezielte Kantenschärfung direkt im Browser.',
      h1: 'Bilder online weichzeichnen und schärfen',
      lead: 'Wenden Sie einen weichen Gaußschen Unschärfeeffekt an, um störende Hintergründe abzumildern, oder verstärken Sie Kantenkontraste mit einer präzisen Faltungsmatrix. Schnell, interaktiv und privat im Browser.',
      category: 'Bearbeiten',
      keywords: ['bild weichzeichnen online', 'bild schaerfen online', 'gausscher weichzeichner foto', 'unscharfes bild schaerfen', 'kantenschaerfe foto'],
      howToTitle: 'So zeichnen Sie Bilder online weich oder scharf',
      howToSteps: [
        { step: 1, title: 'Bild auswählen', text: 'Laden Sie Ihre Datei in das Werkzeug.' },
        { step: 2, title: 'Effekt festlegen', text: 'Wählen Sie Weichzeichnen zur Abdämpfung oder Schärfen zur Detailhervorhebung.' },
        { step: 3, title: 'Stärke einstellen', text: 'Justieren Sie den Radius- bzw. Intensitätsregler mit Live-Vorschau.' },
        { step: 4, title: 'Ergebnis herunterladen', text: 'Speichern Sie das bearbeitete Foto ab.' }
      ],
      featuresTitle: 'Moderne Filtertechnologie',
      features: [
        { title: 'Gaußsche Weichzeichnung', text: 'Harmonische Unschärfe für Schärfentiefe-Effekte oder Anonymisierung.' },
        { title: 'Faltungsbasierte Schärfung', text: 'Erhöht Mikrokontraste an Objektkanten für knackige Bilddetails.' },
        { title: 'Fein abgestufte Regelung', text: 'Von subtiler Nachschärfung bis hin zu starker Unschärfe stufenlos dosierbar.' },
        { title: 'Kein Datenabfluss', text: 'Ihre Fotos werden ausschließlich lokal auf Ihrem Rechner gefiltert.' }
      ],
      tipsTitle: 'Praxistipp zum Nachschärfen',
      tipsText: 'Eine dezente Schärfung (ca. 20 % bis 30 %) empfiehlt sich nach jedem Verkleinern von Fotos, um den leichten Weichzeichnereffekt der Skalierung auszugleichen.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Wie funktioniert das Nachschärfen?', a: 'Eine 3x3-Faltungsmatrix vergleicht jeden Pixel mit seinen 8 Nachbarpixeln und hebt den Kontrast an Farbübergängen gezielt an.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    pt: {
      name: 'Desfocar e aumentar nitidez',
      title: 'Desfocar e aumentar nitidez de imagem online – Blur & Nitidez | ZamTools',
      metaDescription: 'Desfoque ou aumente a nitidez de fotos online grátis. Suavize fundos com desfoque gaussiano ou ressalte contornos diretamente no navegador.',
      h1: 'Desfocar e aumentar nitidez de fotos',
      lead: 'Aplique um desfoque suave para ocultar detalhes do fundo ou aumente a nitidez dos contornos com matriz de convolução. Ajuste em tempo real com processamento 100% no seu dispositivo.',
      category: 'Editar',
      keywords: ['desfocar imagem online', 'aumentar nitidez foto', 'desfoque gaussiano foto', 'tornar foto nitida online', 'realcar detalhes foto'],
      howToTitle: 'Como desfocar ou nitidificar fotos',
      howToSteps: [
        { step: 1, title: 'Envie sua imagem', text: 'Selecione uma foto JPG, PNG ou WebP.' },
        { step: 2, title: 'Selecione o filtro', text: 'Escolha Desfocar para suavizar ou Aumentar Nitidez para realçar.' },
        { step: 3, title: 'Regule a intensidade', text: 'Mova o controle deslizante acompanhando o resultado na tela.' },
        { step: 4, title: 'Baixe a foto', text: 'Salve a foto pronta no seu computador ou celular.' }
      ],
      featuresTitle: 'Filtros visuais avançados',
      features: [
        { title: 'Desfoque suave', text: 'Ótimo para dar destaque ao assunto principal ou ocultar dados pessoais.' },
        { title: 'Matriz de nitidez', text: 'Realça micro-contrastes em texturas e linhas finas.' },
        { title: 'Controle contínuo', text: 'Permite desde pequenos toques sutis até efeitos marcantes.' },
        { title: 'Processamento local', text: 'Nenhum dado sai do seu computador durante a edição.' }
      ],
      tipsTitle: 'Dica de nitidez',
      tipsText: 'Usar uma nitidez sutil (entre 15% e 25%) é excelente após redimensionar fotos para compensar a suavização natural da escala.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Como o filtro de nitidez atua?', a: 'Ele recalcula a diferença de cor nas bordas adjacentes para fazer com que os contornos pareçam mais destacados.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    },

    it: {
      name: 'Sfoca e aumenta nitidezza',
      title: 'Sfoca e aumenta nitidezza immagini online – Blur & Contrasto | ZamTools',
      metaDescription: 'Sfoca o aumenta la nitidezza delle immagini online gratis. Sfocatura gaussiana per sfondi o accentuazione dei contorni nel browser.',
      h1: 'Sfoca e aumenta nitidezza delle foto',
      lead: 'Applica una sfocatura morbida per attenuare elementi di disturbo sullo sfondo oppure aumenta la nitidezza dei contorni con una matrice di convoluzione. Preciso, rapido e privato.',
      category: 'Modifica',
      keywords: ['sfoca immagine online', 'aumentare nitidezza foto', 'sfocatura gaussiana online', 'foto nitida online', 'filtro nitidezza immagine'],
      howToTitle: 'Come sfocare o rendere nitida un\'immagine',
      howToSteps: [
        { step: 1, title: 'Carica la foto', text: 'Scegli il file JPG, PNG o WebP.' },
        { step: 2, title: 'Scegli l\'effetto', text: 'Seleziona Sfoca per ammorbidire o Nitidezza per mettere a fuoco.' },
        { step: 3, title: 'Regola la forza', text: 'Sposta il cursore per trovare il livello perfetto.' },
        { step: 4, title: 'Scarica il risultato', text: 'Salva subito l\'immagine con l\'effetto applicato.' }
      ],
      featuresTitle: 'Filtri fotografici precisi',
      features: [
        { title: 'Sfocatura progressiva', text: 'Ideale per creare profondità di campo o proteggere dati riservati.' },
        { title: 'Accentua contorni', text: 'Evidenzia dettagli e linee per foto più incisive.' },
        { title: 'Regolazione precisa', text: 'Permette interventi misurati per risultati sempre naturali.' },
        { title: 'Nessun upload esterno', text: 'Tutta l\'elaborazione resta protetta sul tuo dispositivo.' }
      ],
      tipsTitle: 'Consiglio pratico',
      tipsText: 'Una leggera accentuazione della nitidezza (tra il 15% e il 25%) è il tocco finale perfetto per foto ridimensionate destinate a siti web.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Come funziona l\'aumento di nitidezza?', a: 'La matrice analizza il contrasto locale tra pixel contigui aumentandone la separazione percettiva.' }
      ],
      relatedTools: ['brightnessContrast', 'grayscaleImage', 'imageCompressor', 'imageCropper']
    }
  }
};

module.exports = editTools;
