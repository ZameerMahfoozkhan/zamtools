/**
 * Localized Content for Category Landing Pages
 * Covers: catCompression, catResizing, catConversion, catEditing
 * Supports all 7 languages: en, fr, es, id, de, pt, it
 */

const CATEGORY_TRANSLATIONS = {
  catCompression: {
    en: {
      title: "Free Online Image Compression Tools | ZamTools",
      metaDescription: "Reduce JPG, PNG, and WebP file sizes directly in your browser. Choose visual quality or set strict target KB limits without file uploads.",
      h1: "Image Compression Tools",
      lead: "Minimize image payload for fast web loading and email attachments with zero server uploads.",
      breadcrumb: "Compression",
      overviewTitle: "Why Browser-Based Image Compression Matters",
      overviewP1: "Images frequently make up more than 60% of total web page payload. Compressing your pictures before publishing slashes bandwidth costs, accelerates first contentful paint (FCP), and improves Core Web Vitals.",
      overviewP2: "ZamTools performs all mathematical quantizations and Huffman encoding directly inside your browser. No remote servers ever receive your sensitive photos or graphic assets.",
      benefitsTitle: "Key Advantages",
      benefits: [
        { title: "No Server Uploads", desc: "Private files never leave your device, ensuring maximum confidentiality." },
        { title: "Target File Sizing", desc: "Hit strict 50KB, 100KB, or 200KB limits required by government and job portals." },
        { title: "Visual Comparison", desc: "Inspect before and after previews with instant byte-savings calculations." }
      ],
      faqs: [
        { q: "How does browser compression work?", a: "Your browser uses HTML5 Canvas to re-encode image pixel matrices with calibrated lossy or lossless compression algorithms directly in memory." },
        { q: "Will I lose image sharpness?", a: "At 75% to 85% quality, human eyes rarely detect visual changes while file size is typically reduced by 40% to 70%." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    },
    fr: {
      title: "Outils de compression d'image en ligne gratuits | ZamTools",
      metaDescription: "Réduisez la taille de vos fichiers JPG, PNG et WebP directement dans votre navigateur. Compression par qualité ou taille cible en Ko sans téléversement.",
      h1: "Outils de compression d'image",
      lead: "Allégez vos images pour des temps de chargement ultra-rapides et des pièces jointes optimisées sans envoyer vos fichiers sur un serveur.",
      breadcrumb: "Compression",
      overviewTitle: "Pourquoi la compression locale dans le navigateur est essentielle",
      overviewP1: "Les images représentent souvent plus de 60 % du poids total d'une page web. Compresser vos visuels avant publication réduit l'empreinte carbone numérique et améliore nettement les Core Web Vitals de Google.",
      overviewP2: "ZamTools réalise l'ensemble des calculs de quantification et de compression directement dans votre navigateur. Aucune donnée personnelle ou photo confidentielle ne transite par un serveur distant.",
      benefitsTitle: "Principaux avantages",
      benefits: [
        { title: "Zéro téléversement", desc: "Vos photos restent privées et ne quittent jamais votre machine." },
        { title: "Taille cible exacte", desc: "Respectez les limites strictes de 50 Ko, 100 Ko ou 200 Ko des formulaires officiels." },
        { title: "Comparatif visuel", desc: "Comparez instantanément le rendu avant/après et visualisez l'économie d'octets." }
      ],
      faqs: [
        { q: "Comment fonctionne la compression dans le navigateur ?", a: "Votre navigateur ré-encode la matrice de pixels via l'API HTML5 Canvas avec des algorithmes calibrés exécutés directement dans la mémoire vive." },
        { q: "Y a-t-il une perte de netteté visible ?", a: "Entre 75 % et 85 % de qualité, l'œil humain ne discerne quasiment aucune différence alors que le poids diminue de 40 % à 70 %." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    },
    es: {
      title: "Herramientas de compresión de imágenes online gratis | ZamTools",
      metaDescription: "Reduce el tamaño de archivos JPG, PNG y WebP directamente en tu navegador. Controla la calidad o define un límite exacto en KB sin subir archivos.",
      h1: "Herramientas de compresión de imágenes",
      lead: "Reduce el peso de tus fotos para acelerar tu página web o enviar adjuntos por correo sin subir tus archivos a ningún servidor.",
      breadcrumb: "Compresión",
      overviewTitle: "Por qué es crucial la compresión en el navegador",
      overviewP1: "Las imágenes suelen representar más del 60 % del peso de una web. Comprimir tus imágenes optimiza el ancho de banda y mejora sustancialmente las métricas Core Web Vitals de Google.",
      overviewP2: "ZamTools ejecuta los algoritmos de cuantización y codificación directamente en tu navegador. Tus fotos privadas o documentos escaneados nunca se envían a servidores remotos.",
      benefitsTitle: "Principales ventajas",
      benefits: [
        { title: "Sin subidas a servidores", desc: "Tus imágenes se mantienen privadas y seguras en tu dispositivo." },
        { title: "Tamaño objetivo en KB", desc: "Cumple con las limitaciones de 50KB, 100KB o 200KB exigidas por trámites y portales." },
        { title: "Comparador interactivo", desc: "Evalúa la calidad visual antes y después y comprueba el ahorro de datos en tiempo real." }
      ],
      faqs: [
        { q: "¿Cómo funciona la compresión en el navegador?", a: "El navegador utiliza HTML5 Canvas para re-codificar los píxeles en memoria aplicando algoritmos de optimización sin necesidad de servidores." },
        { q: "¿Se nota pérdida de calidad?", a: "Con ajustes entre el 75 % y el 85 %, la pérdida visual es imperceptible mientras que el peso del archivo se reduce entre un 40 % y un 70 %." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    },
    id: {
      title: "Alat Kompresi Gambar Online Gratis | ZamTools",
      metaDescription: "Kurangi ukuran file JPG, PNG, dan WebP langsung di browser Anda. Atur kualitas visual atau tentukan batas target KB tanpa unggah file.",
      h1: "Alat Kompresi Gambar",
      lead: "Kecilkan ukuran file foto untuk mempercepat situs web dan lampiran email tanpa mengirim file ke server.",
      breadcrumb: "Kompresi",
      overviewTitle: "Pentingnya Kompresi Gambar Berbasis Browser",
      overviewP1: "Gambar menyumbang lebih dari 60% bobot halaman web rata-rata. Mengompres gambar sebelum mempublikasikannya menghemat kuota internet dan meningkatkan skor Core Web Vitals.",
      overviewP2: "ZamTools menjalankan pemrosesan langsung di dalam browser Anda. Foto pribadi atau dokumen penting Anda tidak pernah dikirim ke server luar.",
      benefitsTitle: "Keunggulan Utama",
      benefits: [
        { title: "Tanpa Unggah File", desc: "Semua berkas diproses di perangkat Anda untuk menjaga kerahasiaan penuh." },
        { title: "Target Ukuran KB Pasti", desc: "Penuhi batas 50KB, 100KB, atau 200KB untuk portal beasiswa dan formulir resmi." },
        { title: "Perbandingan Visual", desc: "Bandingkan kualitas sebelum dan sesudah kompresi beserta rincian penghematan byte." }
      ],
      faqs: [
        { q: "Bagaimana cara kerja kompresi di peramban?", a: "Peramban Anda memanfaatkan HTML5 Canvas untuk mengodekan ulang matriks piksel langsung di memori perangkat." },
        { q: "Apakah gambar akan menjadi buram?", a: "Pada tingkat kualitas 75%–85%, penurunan visual hampir tidak kasat mata sementara ukuran file menyusut 40%–70%." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    },
    de: {
      title: "Kostenlose Online-Bildkomprimierungs-Tools | ZamTools",
      metaDescription: "Dateigröße von JPG, PNG und WebP direkt im Browser reduzieren. Qualitätsregelung oder feste Zielgröße in KB ohne Server-Uploads.",
      h1: "Bildkomprimierungs-Tools",
      lead: "Minimieren Sie die Dateigröße für blitzschnelle Webseiten und E-Mail-Anhänge mit vollständiger lokaler Privatsphäre.",
      breadcrumb: "Komprimierung",
      overviewTitle: "Warum lokale Bildkompression im Browser überlegen ist",
      overviewP1: "Bilder machen oft über 60 % der Ladezeit moderner Webseiten aus. Eine gezielte Komprimierung senkt Bandbreitenkosten und verbessert die Google Core Web Vitals.",
      overviewP2: "ZamTools führt alle Quantisierungs- und Enkodierungsschritte direkt in Ihrem Webbrowser aus. Keine fremden Server erhalten Ihre privaten oder geschäftlichen Bilddaten.",
      benefitsTitle: "Wesentliche Vorteile",
      benefits: [
        { title: "Keine Server-Uploads", desc: "Sensible Fotos verlassen zu keinem Zeitpunkt Ihr persönliches Endgerät." },
        { title: "Präzise Zielgröße in KB", desc: "Erfüllen Sie strenge Upload-Grenzen von 50KB, 100KB oder 200KB für Behördenportale." },
        { title: "Direkte Vorschau", desc: "Prüfen Sie Vorher-Nachher-Vergleiche und sofortige Speicherersparnis in Echtzeit." }
      ],
      faqs: [
        { q: "Wie funktioniert die Komprimierung im Browser?", a: "Ihr Webbrowser nutzt das HTML5-Canvas-Element, um Pixelmatrizen direkt im Arbeitsspeicher neu zu enkodieren." },
        { q: "Geht dabei sichtbare Bildschärfe verloren?", a: "Bei einer Qualität von 75 % bis 85 % sind visuelle Einbußen mit bloßem Auge kaum wahrnehmbar, während die Dateigröße um 40 % bis 70 % sinkt." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    },
    pt: {
      title: "Ferramentas de Compressão de Imagens Online Grátis | ZamTools",
      metaDescription: "Reduza o tamanho de arquivos JPG, PNG e WebP direto no seu navegador. Ajuste a qualidade ou defina um tamanho exato em KB sem uploads.",
      h1: "Ferramentas de Compressão de Imagem",
      lead: "Diminua o peso dos seus arquivos para acelerar páginas na internet e anexos de e-mail com total sigilo.",
      breadcrumb: "Compressão",
      overviewTitle: "Por que a compressão no navegador é a melhor escolha",
      overviewP1: "Imagens costumam representar mais de 60% do peso de um site. Comprimir suas fotos antes de publicar otimiza a experiência do usuário e melhora as métricas de SEO do Google.",
      overviewP2: "O ZamTools processa as matrizes de pixels diretamente na memória do seu navegador. Fotos pessoais ou documentos confidenciais nunca são transferidos para servidores terceiros.",
      benefitsTitle: "Vantagens Principais",
      benefits: [
        { title: "Sem envio para servidores", desc: "Seus arquivos ficam totalmente protegidos e isolados no seu dispositivo." },
        { title: "Tamanho exato em KB", desc: "Atenda às exigências de 50KB, 100KB ou 200KB para formulários de concursos e vistos." },
        { title: "Comparação instantânea", desc: "Analise a qualidade antes e depois com cálculo preciso da redução em bytes." }
      ],
      faqs: [
        { q: "Como a compressão é feita pelo navegador?", a: "O navegador utiliza o HTML5 Canvas para reprocessar e codificar os pixels localmente usando a memória RAM da máquina." },
        { q: "Vou perder qualidade visível?", a: "Entre 75% e 85% de qualidade, a perda de nitidez é imperceptível, enquanto o arquivo fica entre 40% e 70% mais leve." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    },
    it: {
      title: "Strumenti di compressione immagini online gratuiti | ZamTools",
      metaDescription: "Riduci le dimensioni di file JPG, PNG e WebP direttamente nel browser. Regola la qualità o imposta un limite in KB senza caricamenti su server.",
      h1: "Strumenti di compressione immagini",
      lead: "Riduci il peso delle tue foto per velocizzare siti web e allegati email con la massima protezione dei tuoi dati.",
      breadcrumb: "Compressione",
      overviewTitle: "Perché la compressione locale nel browser è vantaggiosa",
      overviewP1: "Le immagini costituiscono spesso oltre il 60% del peso complessivo di una pagina web. Comprimere i file prima della pubblicazione riduce il consumo di dati e velocizza i Core Web Vitals.",
      overviewP2: "ZamTools esegue tutti i calcoli di codifica direttamente nel tuo browser. Nessun server remoto riceve o archivia le tue immagini personali.",
      benefitsTitle: "Vantaggi principali",
      benefits: [
        { title: "Nessun caricamento su server", desc: "I tuoi file restano privati ed elaborati esclusivamente sul tuo computer o telefono." },
        { title: "Dimensione limite in KB", desc: "Soddisfa i requisiti di 50KB, 100KB o 200KB per concorsi pubblici e portali istituzionali." },
        { title: "Confronto prima e dopo", desc: "Valuta la nitidezza visiva e visualizza l'esatto risparmio di byte in tempo reale." }
      ],
      faqs: [
        { q: "Come funziona la compressione nel browser?", a: "Il browser sfrutta l'elemento HTML5 Canvas per ricodificare i pixel direttamente nella memoria locale senza comunicare con server esterni." },
        { q: "Si nota una perdita di qualità visibile?", a: "A un livello di qualità compreso tra il 75% e l'85%, l'occhio umano non percepisce variazioni, a fronte di un risparmio dal 40% al 70% di peso." }
      ],
      tools: ['imageCompressor', 'imageToTargetSize']
    }
  },

  catResizing: {
    en: {
      title: "Free Online Image Resizing Tools | ZamTools",
      metaDescription: "Scale pixel dimensions, prepare social media post graphics, and crop passport photos to official millimeter standards directly in your browser.",
      h1: "Image Resizing Tools",
      lead: "Resize images to exact pixel widths, aspect ratio presets, or official identity document specifications.",
      breadcrumb: "Resizing",
      overviewTitle: "Precision Pixel Scaling for Web & Print",
      overviewP1: "Displaying oversized images slows down web rendering, while distorted aspect ratios ruin brand presentations. Scaling images to exact container dimensions ensures crisp visual delivery.",
      overviewP2: "Our resizing suite includes general dimension scaling, instant social media post templates, and specialized biometric passport crop guides.",
      benefitsTitle: "Key Advantages",
      benefits: [
        { title: "Aspect Ratio Lock", desc: "Maintain original proportions automatically when modifying width or height." },
        { title: "Social Media Templates", desc: "Pre-configured dimensions for Instagram, YouTube, LinkedIn, Facebook, and X." },
        { title: "Biometric Passport Standards", desc: "Accurate head-height guides for US 2x2 inch and Schengen 35x45mm requirements." }
      ],
      faqs: [
        { q: "Does scaling down reduce file size?", a: "Yes. Reducing pixel dimensions dramatically reduces the total pixel count, yielding significantly smaller file sizes." },
        { q: "Can I enlarge small photos without blur?", a: "Enlarging beyond original resolution interpolates pixels. For best results, avoid upscaling beyond 125% of native dimensions." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },
    fr: {
      title: "Outils de redimensionnement d'image en ligne gratuits | ZamTools",
      metaDescription: "Modifiez les dimensions en pixels, adaptez vos visuels pour les réseaux sociaux et calibrez des photos d'identité aux normes officielles.",
      h1: "Outils de redimensionnement d'image",
      lead: "Redimensionnez vos images au pixel près, selon des ratios fixes ou aux normes officielles de documents d'identité.",
      breadcrumb: "Redimensionnement",
      overviewTitle: "Mise à l'échelle précise pour le web et l'impression",
      overviewP1: "Afficher des images trop volumineuses ralentit les sites web, tandis qu'un ratio déformé altère la qualité visuelle. Adapter vos dimensions avec précision garantit un rendu net et professionnel.",
      overviewP2: "Notre suite de redimensionnement intègre le redimensionnement libre, les formats prédéfinis pour réseaux sociaux et le gabarit biométrique pour passeports.",
      benefitsTitle: "Principaux avantages",
      benefits: [
        { title: "Verrouillage du ratio", desc: "Préservez automatiquement les proportions d'origine lors de la saisie." },
        { title: "Gabarits réseaux sociaux", desc: "Dimensions prêtes à l'emploi pour Instagram, YouTube, LinkedIn, Facebook et X." },
        { title: "Normes biométriques", desc: "Repères officiels pour passeport 35x45 mm (Schengen/France) et visa américain 2x2 pouces." }
      ],
      faqs: [
        { q: "Le redimensionnement réduit-il le poids du fichier ?", a: "Oui. Diminuer le nombre total de pixels réduit mathématiquement le volume de données à stocker." },
        { q: "Peut-on agrandir une photo sans la rendre floue ?", a: "Agrandir une petite image génère une interpolation de pixels. Pour une netteté optimale, évitez de dépasser 125 % de la taille originale." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },
    es: {
      title: "Herramientas para redimensionar imágenes online gratis | ZamTools",
      metaDescription: "Modifica dimensiones en píxeles, prepara imágenes para redes sociales y recorta fotos tamaño pasaporte según estándares oficiales.",
      h1: "Herramientas para redimensionar imágenes",
      lead: "Ajusta las medidas de tus fotos a resoluciones exactas, formatos de redes sociales o medidas biométricas para documentos.",
      breadcrumb: "Redimensionar",
      overviewTitle: "Escalado de píxeles con máxima precisión",
      overviewP1: "Cargar imágenes con dimensiones desproporcionadas ralentiza cualquier sitio web. Ajustar el tamaño a las dimensiones del contenedor asegura máxima nitidez y rendimiento.",
      overviewP2: "ZamTools ofrece redimensionamiento general con bloqueo de proporción, plantillas para redes sociales y guías biométricas para fotos oficiales.",
      benefitsTitle: "Principales ventajas",
      benefits: [
        { title: "Bloqueo de relación de aspecto", desc: "Mantén las proporciones originales sin deformar rostros ni elementos gráficos." },
        { title: "Formatos para redes sociales", desc: "Medidas exactas para Instagram, portadas de YouTube, LinkedIn y publicaciones de X." },
        { title: "Guías para pasaporte y visado", desc: "Alineación de ojos y barbilla para estándares Schengen (35x45 mm) y EE. UU. (2x2 pulgadas)." }
      ],
      faqs: [
        { q: "¿Reducir dimensiones disminuye el peso del archivo?", a: "Sí. Al reducir la cantidad total de píxeles, el tamaño en KB disminuye de forma proporcional." },
        { q: "¿Es recomendable ampliar fotos pequeñas?", a: "Ampliar una imagen por encima de su resolución original puede generar desenfoque. Se recomienda no exceder el 125 % de la resolución nativa." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },
    id: {
      title: "Alat Pengubah Ukuran Gambar Online Gratis | ZamTools",
      metaDescription: "Ubah resolusi piksel, siapkan format media sosial, dan potong foto paspor sesuai standar resmi langsung di peramban Anda.",
      h1: "Alat Pengubah Ukuran Gambar",
      lead: "Ubah dimensi foto ke ukuran piksel tertentu, format media sosial, atau standar paspor resmi.",
      breadcrumb: "Ubah Ukuran",
      overviewTitle: "Skala Piksel Akurat untuk Kebutuhan Digital dan Cetak",
      overviewP1: "Menampilkan gambar dengan dimensi terlalu besar memperlambat rendering web. Menyesuaikan resolusi piksel secara pas menghasilkan tampilan yang tajam dan hemat memori.",
      overviewP2: "Utilitas kami mencakup pengubahan skala bebas, template siap pakai untuk jejaring sosial, dan panduan foto paspor resmi.",
      benefitsTitle: "Keunggulan Utama",
      benefits: [
        { title: "Kunci Rasio Aspek", desc: "Jaga proporsi asli secara otomatis saat mengubah nilai lebar atau tinggi." },
        { title: "Template Media Sosial", desc: "Ukuran standar untuk feed Instagram, thumbnail YouTube, LinkedIn, dan banner X." },
        { title: "Standar Paspor Biometrik", desc: "Panduan letak kepala untuk standar paspor internasional dan foto visa resmi." }
      ],
      faqs: [
        { q: "Apakah mengecilkan resolusi memperkecil ukuran file?", a: "Tentu saja. Mengurangi jumlah piksel otomatis menurunkan jumlah data yang disimpan." },
        { q: "Bisakah memperbesar foto tanpa membuatnya buram?", a: "Memperbesar foto kecil melampaui resolusi aslinya akan menimbulkan interpolasi. Hindari perbesaran di atas 125% dari dimensi asli." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },
    de: {
      title: "Kostenlose Online-Bildskalierungs-Tools | ZamTools",
      metaDescription: "Pixelabmessungen ändern, Grafiken für soziale Medien optimieren und Passfotos nach offiziellen Standards im Browser anpassen.",
      h1: "Bildskalierungs-Tools",
      lead: "Bilder auf exakte Pixelwerte, Seitenverhältnisse oder biometrische Passbild-Vorgaben anpassen.",
      breadcrumb: "Skalierung",
      overviewTitle: "Präzise Pixelanpassung für Web und Druck",
      overviewP1: "Überdimensionierte Bilder verlangsamen Webseiten spürbar. Eine gezielte Anpassung an die tatsächliche Anzeigegröße spart Speicherplatz und sorgt für gestochen scharfe Bilder.",
      overviewP2: "Unsere Werkzeuge unterstützen freie Skalierung mit Seitenverhältnis-Sperre, Vorlagen für soziale Netzwerke sowie biometrische Passbild-Schablonen.",
      benefitsTitle: "Wesentliche Vorteile",
      benefits: [
        { title: "Proportionen sperren", desc: "Automatische Wahrung des originalen Seitenverhältnisses bei Eingabe von Breite oder Höhe." },
        { title: "Social-Media-Vorlagen", desc: "Exakte Bildmaße für Instagram-Posts, YouTube-Thumbnails, LinkedIn und X." },
        { title: "Biometrische Passbild-Hilfen", desc: "Präzise Vorgaben für 35x45 mm (Deutschland/EU) und 2x2 Zoll (US-Visa)." }
      ],
      faqs: [
        { q: "Verringert das Verkleinern der Abmessungen die Dateigröße?", a: "Ja, signifikant. Durch die Reduzierung der Gesamtzahl an Pixeln sinkt der Speicherbedarf drastisch." },
        { q: "Kann ich kleine Bilder vergrößern, ohne dass sie unscharf werden?", a: "Ein Hochskalieren über die Originalauflösung hinaus erzeugt Unschärfen. Es empfiehlt sich, maximal bis 125 % der nativen Maße zu vergrößern." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },
    pt: {
      title: "Ferramentas de Redimensionamento de Imagem Online Grátis | ZamTools",
      metaDescription: "Altere medidas em pixels, prepare posts para redes sociais e enquadre fotos para passaporte conforme padrões oficiais no navegador.",
      h1: "Ferramentas de Redimensionamento de Imagem",
      lead: "Redimensione fotos para dimensões exatas em pixels, proporções ideais ou normas de documentos oficiais.",
      breadcrumb: "Redimensionamento",
      overviewTitle: "Redimensionamento com precisão de pixels para web e impressão",
      overviewP1: "Carregar fotos com resolução excessiva deixa qualquer página lenta. Dimensionar os arquivos para o tamanho de exibição correto garante nitidez e economia de dados.",
      overviewP2: "Nossos recursos incluem ajuste numérico com bloqueio de proporção, molduras para mídias sociais e enquadramento para passaportes e vistos.",
      benefitsTitle: "Vantagens Principais",
      benefits: [
        { title: "Bloqueio de Proporção", desc: "Evite distorções automáticas ao alterar largura ou altura da imagem." },
        { title: "Formatos para Redes Sociais", desc: "Dimensões prontas para Instagram, miniaturas do YouTube, LinkedIn e postagens do X." },
        { title: "Padrões para Passaporte", desc: "Guia de proporção facial para o padrão 3x4 / 35x45 mm e visto americano de 2x2 polegadas." }
      ],
      faqs: [
        { q: "Diminuir a resolução reduz o tamanho do arquivo?", a: "Sim. Quanto menor o número de pixels a processar, menor será o arquivo final em KB." },
        { q: "Posso ampliar imagens pequenas sem perda de nitidez?", a: "Ampliar fotos pequenas cria interpolação. Para melhores resultados, evite ampliar mais que 125% da resolução original." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    },
    it: {
      title: "Strumenti di ridimensionamento immagini online gratuiti | ZamTools",
      metaDescription: "Modifica le dimensioni in pixel, prepara immagini per i social network e ritaglia fototessere per passaporto secondo gli standard ufficiali.",
      h1: "Strumenti di ridimensionamento immagini",
      lead: "Ridimensiona le tue foto in pixel esatti, formati per i social media o standard biometrici per documenti d'identità.",
      breadcrumb: "Ridimensionamento",
      overviewTitle: "Ridimensionamento accurato per web e documenti",
      overviewP1: "Caricare immagini eccessivamente grandi rallenta i siti web. Adattare le misure all'effettiva visualizzazione preserva la nitidezza e ottimizza i tempi di caricamento.",
      overviewP2: "La nostra suite offre ridimensionamento proporzionale, modelli per tutti i principali social network e griglie per fototessere conformi ICAO.",
      benefitsTitle: "Vantaggi principali",
      benefits: [
        { title: "Blocco proporzioni", desc: "Mantieni automaticamente il rapporto d'aspetto originale inserendo altezza o larghezza." },
        { title: "Modelli social", desc: "Dimensioni preimpostate per post Instagram, miniature YouTube, LinkedIn e X." },
        { title: "Standard fototessera", desc: "Allineamento occhi-mento conforme agli standard 35x45 mm (Italia/Schengen) e 2x2 pollici (USA)." }
      ],
      faqs: [
        { q: "Ridurre i pixel diminuisce anche il peso del file?", a: "Sì, nettamente. Una minore quantità di pixel si traduce istantaneamente in un file più leggero." },
        { q: "Posso ingrandire foto a bassa risoluzione senza sgranare?", a: "Ingrandire oltre la dimensione reale genera interpolazione. È sconsigliato superare il 125% della risoluzione originaria." }
      ],
      tools: ['imageResizer', 'socialMediaImageResizer', 'passportPhotoResizer']
    }
  },

  catConversion: {
    en: {
      title: "Free Online Image Format Converter Tools | ZamTools",
      metaDescription: "Convert between JPG, PNG, and modern WebP image formats right inside your browser. Fast local encoding with transparency preservation.",
      h1: "Image Conversion Tools",
      lead: "Switch formats between JPG, PNG, and WebP instantly with zero quality loss and full alpha channel support.",
      breadcrumb: "Conversion",
      overviewTitle: "Modern Image Format Flexibility",
      overviewP1: "Different tasks demand different formats: PNG excels at crisp icons with alpha transparency, JPG is ideal for rich photographic scenes, and WebP merges the best of both worlds.",
      overviewP2: "All encoding is performed in your browser's memory using HTML5 Canvas. No file upload is required.",
      benefitsTitle: "Key Advantages",
      benefits: [
        { title: "Modern WebP Encoding", desc: "Slash image weight by up to 35% compared to JPEG while preserving transparency." },
        { title: "Custom PNG Backgrounds", desc: "Replace transparent PNG backgrounds with clean solid white or custom colors before JPG export." },
        { title: "Batch Support", desc: "Convert multiple graphic assets quickly in single workflows." }
      ],
      faqs: [
        { q: "What happens to PNG transparency when converted to JPG?", a: "Because JPEG does not support alpha channels, transparent pixels are replaced with a clean solid background color of your choice (default white)." },
        { q: "Is WebP supported by all modern browsers?", a: "Yes. WebP is supported natively across Chrome, Safari, Edge, Firefox, and all modern mobile operating systems." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    },
    fr: {
      title: "Outils de conversion de format d'image gratuits en ligne | ZamTools",
      metaDescription: "Convertissez vos images entre JPG, PNG et WebP directement dans votre navigateur. Encodage local rapide avec gestion de la transparence.",
      h1: "Outils de conversion d'image",
      lead: "Changez de format entre JPG, PNG et WebP en un instant avec un respect optimal de la netteté et de la transparence.",
      breadcrumb: "Conversion",
      overviewTitle: "La polyvalence des formats graphiques modernes",
      overviewP1: "Chaque format répond à un besoin précis : le PNG excelle pour les logos avec fond transparent, le JPG convient aux photographies riches, et le WebP réunit le meilleur des deux univers.",
      overviewP2: "Toutes les conversions s'exécutent en mémoire dans votre navigateur via HTML5 Canvas, sans nécessiter le moindre téléversement sur un serveur.",
      benefitsTitle: "Principaux avantages",
      benefits: [
        { title: "Encodage WebP moderne", desc: "Réduisez le poids de vos visuels jusqu'à 35 % par rapport au JPEG tout en conservant la transparence." },
        { title: "Fond personnalisé pour PNG vers JPG", desc: "Remplacez la transparence par un fond blanc ou de la couleur de votre choix." },
        { title: "Traitement rapide", desc: "Convertissez vos fichiers sans attendre le moindre transfert réseau." }
      ],
      faqs: [
        { q: "Qu'advient-il de la transparence lors de la conversion d'un PNG en JPG ?", a: "Le format JPEG ne prenant pas en charge le canal alpha, les zones transparentes sont remplies avec la couleur d'arrière-plan choisie (blanc par défaut)." },
        { q: "Le format WebP est-il lisible partout ?", a: "Oui. Le WebP est désormais supporté par tous les navigateurs majeurs (Chrome, Safari, Firefox, Edge) sur mobile et ordinateur." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    },
    es: {
      title: "Herramientas de conversión de formato de imagen gratis | ZamTools",
      metaDescription: "Convierte entre JPG, PNG y formato moderno WebP directamente en tu navegador. Rápida codificación local con soporte de transparencia.",
      h1: "Herramientas de conversión de imagen",
      lead: "Cambia el formato de tus archivos entre JPG, PNG y WebP al instante sin pérdida de nitidez ni esperas.",
      breadcrumb: "Conversión",
      overviewTitle: "Flexibilidad de formatos para la web moderna",
      overviewP1: "Cada formato gráfico tiene su propósito: PNG es ideal para logotipos con canal alfa transparente, JPG es perfecto para fotos complejas y WebP ofrece máxima eficiencia para la web.",
      overviewP2: "Toda la codificación se realiza localmente en la memoria de tu navegador mediante HTML5 Canvas, garantizando rapidez y privacidad.",
      benefitsTitle: "Principales ventajas",
      benefits: [
        { title: "Codificación WebP avanzada", desc: "Ahorra hasta un 35 % de peso respecto a JPEG conservando la nitidez y el canal alfa." },
        { title: "Sustitución de transparencia", desc: "Al convertir de PNG a JPG, define el color de fondo sólido para rellenar áreas transparentes." },
        { title: "Procesamiento en memoria", desc: "Tus imágenes no se envían a ningún servidor externo." }
      ],
      faqs: [
        { q: "¿Qué ocurre con la transparencia al pasar de PNG a JPG?", a: "Dado que JPEG no soporta transparencia, los píxeles transparentes se rellenan con el color sólido elegido (por defecto, blanco)." },
        { q: "¿Es compatible WebP en todos los navegadores?", a: "Sí. WebP es compatible con más del 97 % de los navegadores globales actuales, incluidos Chrome, Safari, Firefox y Edge." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    },
    id: {
      title: "Alat Konversi Format Gambar Online Gratis | ZamTools",
      metaDescription: "Konversi antara format JPG, PNG, dan WebP langsung di browser Anda. Enkoding lokal cepat dengan dukungan transparansi penuh.",
      h1: "Alat Konversi Gambar",
      lead: "Ubah format antara JPG, PNG, dan WebP secara instan tanpa penurunan kualitas dan tanpa upload berkas.",
      breadcrumb: "Konversi",
      overviewTitle: "Fleksibilitas Format Gambar untuk Kebutuhan Web",
      overviewP1: "Setiap format memiliki fungsi terbaiknya: PNG ideal untuk logo dengan latar transparan, JPG terbaik untuk foto pemandangan, dan WebP memberikan kompresi efisien untuk web.",
      overviewP2: "Semua proses enkoding dijalankan langsung di browser Anda melalui HTML5 Canvas tanpa transfer file melalui server.",
      benefitsTitle: "Keunggulan Utama",
      benefits: [
        { title: "Enkoding WebP Modern", desc: "Pangkas ukuran file hingga 35% dibandingkan JPEG dengan kualitas visual setara." },
        { title: "Latar Belakang Kustom PNG ke JPG", desc: "Ganti transparansi dengan warna solid putih atau warna lain sebelum menyimpan ke JPG." },
        { title: "Proses Cepat & Privat", desc: "Semua berkas tetap berada di perangkat Anda selama proses konversi." }
      ],
      faqs: [
        { q: "Apa yang terjadi pada transparansi saat PNG diubah ke JPG?", a: "Karena JPEG tidak mendukung saluran alfa, piksel transparan akan diisi dengan warna latar solid (default putih)." },
        { q: "Apakah WebP didukung oleh semua browser?", a: "Ya. WebP kini didukung secara native oleh Chrome, Safari, Edge, Firefox, dan browser ponsel cerdas." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    },
    de: {
      title: "Kostenlose Online-Bildkonvertierungs-Tools | ZamTools",
      metaDescription: "Bilder zwischen JPG, PNG und modernem WebP direkt im Browser konvertieren. Schnelle lokale Kodierung mit Erhalt von Transparenzen.",
      h1: "Bildkonvertierungs-Tools",
      lead: "Wechseln Sie Formate zwischen JPG, PNG und WebP ohne Qualitätsverlust und ohne Serverübertragung.",
      breadcrumb: "Konvertierung",
      overviewTitle: "Maximale Formatflexibilität für moderne Bildanforderungen",
      overviewP1: "Jedes Format hat seine Stärken: PNG eignet sich perfekt für Grafiken mit transparentem Hintergrund, JPG für facettenreiche Fotos und WebP vereint hohe Kompression mit zeitgemäßer Web-Effizienz.",
      overviewP2: "Die gesamte Neukodierung erfolgt im Arbeitsspeicher Ihres Browsers via HTML5 Canvas. Keine Bilddaten müssen an externe Server gesendet werden.",
      benefitsTitle: "Wesentliche Vorteile",
      benefits: [
        { title: "Effiziente WebP-Kodierung", desc: "Bis zu 35 % kleinere Dateigrößen im Vergleich zu JPEG bei voller Beibehaltung der Transparenz." },
        { title: "Farbiger Hintergrund bei PNG zu JPG", desc: "Ersetzen Sie transparente Bereiche vor dem JPG-Export durch sauberes Weiß oder Wunschfarben." },
        { title: "Lokale Datenverarbeitung", desc: "Ihre Fotos verbleiben während der gesamten Konvertierung sicher auf Ihrem Rechner." }
      ],
      faqs: [
        { q: "Was passiert mit transparenten Bereichen beim Wechsel von PNG zu JPG?", a: "Da JPG keine Transparenzkanäle unterstützt, werden transparente Pixel durch eine von Ihnen gewählte Hintergrundfarbe (standardmäßig Weiß) ersetzt." },
        { q: "Wird WebP von allen modernen Browsern unterstützt?", a: "Ja. WebP wird von Chrome, Firefox, Safari, Edge und allen gängigen mobilen Betriebssystemen vollständig unterstützt." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    },
    pt: {
      title: "Ferramentas de Conversão de Formatos de Imagem Grátis | ZamTools",
      metaDescription: "Converta entre JPG, PNG e WebP moderno direto no seu navegador. Codificação local rápida com preservação de canal alfa.",
      h1: "Ferramentas de Conversão de Imagem",
      lead: "Alterne formatos entre JPG, PNG e WebP instantaneamente com alta fidelidade visual e sem envio de arquivos.",
      breadcrumb: "Conversão",
      overviewTitle: "Flexibilidade total entre os principais formatos de imagem",
      overviewP1: "Cada formato atende a um objetivo específico: o PNG é insubstituível para gráficos com fundo transparente, o JPG é perfeito para fotos complexas e o WebP oferece máxima eficiência para carregamento rápido.",
      overviewP2: "Toda a conversão ocorre dentro do seu navegador através da API HTML5 Canvas, sem passar por servidores externos.",
      benefitsTitle: "Vantagens Principais",
      benefits: [
        { title: "Codificação WebP Avançada", desc: "Economize até 35% de espaço em relação ao JPEG mantendo nitidez e transparência." },
        { title: "Cor de fundo em PNG para JPG", desc: "Defina uma cor sólida (como branco) para preencher a transparência ao salvar em JPG." },
        { title: "Privacidade Garantida", desc: "Suas imagens nunca são enviadas para servidores nem armazenadas na nuvem." }
      ],
      faqs: [
        { q: "O que acontece com a transparência do PNG ao converter para JPG?", a: "Como o formato JPG não possui canal alfa, os pixels transparentes recebem uma cor de fundo sólida de sua escolha (branco por padrão)." },
        { q: "O formato WebP funciona em todos os navegadores?", a: "Sim. O WebP é suportado nativamente pelo Chrome, Safari, Edge, Firefox e por navegadores de smartphones iOS e Android." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    },
    it: {
      title: "Strumenti di conversione formati immagine online gratis | ZamTools",
      metaDescription: "Converti tra formati JPG, PNG e moderno WebP direttamente nel browser. Codifica locale veloce con supporto trasparenza.",
      h1: "Strumenti di conversione immagini",
      lead: "Converti file tra JPG, PNG e WebP in modo immediato, senza perdita di qualità visiva né caricamento di file.",
      breadcrumb: "Conversione",
      overviewTitle: "Flessibilità di formato per il web moderno",
      overviewP1: "Ciascun formato grafico ha un utilizzo d'elezione: il PNG è ideale per icone con canale alfa trasparente, il JPG eccelle nelle fotografie e il WebP offre la massima leggerezza per il web.",
      overviewP2: "La codifica viene eseguita direttamente nella memoria locale del tuo browser grazie all'HTML5 Canvas, garantendo riservatezza e velocità assolute.",
      benefitsTitle: "Vantaggi principali",
      benefits: [
        { title: "Codifica WebP moderna", desc: "Riduci il peso dei file fino al 35% rispetto a JPEG preservando nitidezza e trasparenza." },
        { title: "Sostituzione trasparenza PNG-JPG", desc: "Riempi i pixel trasparenti con uno sfondo a tinta unita (bianco predefinito) prima del salvataggio." },
        { title: "Zero caricamenti esterni", desc: "Le tue foto rimangono all'interno del tuo dispositivo durante ogni operazione." }
      ],
      faqs: [
        { q: "Cosa succede alla trasparenza quando converto da PNG a JPG?", a: "Il formato JPG non supporta il canale alfa; i pixel trasparenti vengono quindi riempiti con il colore di sfondo selezionato (bianco di default)." },
        { q: "Il formato WebP è supportato da tutti i browser?", a: "Sì. WebP è pienamente supportato da Chrome, Safari, Firefox, Edge e da tutti i browser su smartphone." }
      ],
      tools: ['jpgToPng', 'pngToGithubJpg', 'webpConverter', 'imageFormatConverter', 'imageToPdf']
    }
  },

  catEditing: {
    en: {
      title: "Free Online Image Editing & Filter Tools | ZamTools",
      metaDescription: "Crop, rotate, flip, adjust brightness, enhance contrast, and convert photos to grayscale directly inside your web browser.",
      h1: "Image Editing Tools",
      lead: "Fine-tune and retouch your images with intuitive browser-based editing controls and live canvas preview.",
      breadcrumb: "Editing",
      overviewTitle: "Essential Image Adjustments Made Simple",
      overviewP1: "You do not need heavy desktop photo editors to perform common image tweaks. ZamTools provides clean interactive canvas tools for fast adjustments right when you need them.",
      overviewP2: "Crop with aspect ratio locks, rotate and flip orientations, transform pictures into monochrome grayscale, adjust exposure, or sharpen subtle edge details.",
      benefitsTitle: "Key Advantages",
      benefits: [
        { title: "Interactive Canvas Controls", desc: "Draggable crop boxes, live sliders, and immediate visual feedback." },
        { title: "Lossless Adjustments", desc: "Export high-resolution uncompressed or tuned files directly from memory." },
        { title: "No Signups or Installs", desc: "Open any tool and start editing immediately without software bloat." }
      ],
      faqs: [
        { q: "Can I undo my edits?", a: "Yes. Every tool includes a Reset button to revert back to your original loaded image at any time." },
        { q: "Are edited photos saved on my computer?", a: "When you click Download, your browser saves the edited image directly to your local Downloads folder." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    },
    fr: {
      title: "Outils de retouche et d'édition d'image gratuits en ligne | ZamTools",
      metaDescription: "Recadrez, pivotez, ajustez la luminosité, réglez le contraste et passez vos photos en noir et blanc directement dans votre navigateur.",
      h1: "Outils de retouche d'image",
      lead: "Retouchez et ajustez vos images facilement grâce à nos contrôles interactifs exécutés directement dans le navigateur.",
      breadcrumb: "Retouche",
      overviewTitle: "Les retouches photo essentielles à portée de main",
      overviewP1: "Il n'est pas nécessaire d'installer des logiciels lourds pour des retouches courantes. ZamTools met à votre disposition des outils canvas interactifs et réactifs.",
      overviewP2: "Recadrez avec des ratios fixes, pivotez ou retournez vos visuels, transformez vos clichés en niveaux de gris et ajustez exposition ou netteté en temps réel.",
      benefitsTitle: "Principaux avantages",
      benefits: [
        { title: "Contrôles canvas interactifs", desc: "Zone de recadrage ajustable, curseurs fluides et aperçu instantané." },
        { title: "Rendu haute précision", desc: "Exportez des fichiers optimisés directement depuis la mémoire du navigateur." },
        { title: "Sans logiciel ni compte", desc: "Commencez vos retouches immédiatement sans installer d'application." }
      ],
      faqs: [
        { q: "Puis-je annuler mes modifications ?", a: "Oui. Chaque outil dispose d'un bouton de réinitialisation pour retrouver votre image d'origine en un clic." },
        { q: "Où sont enregistrées les photos modifiées ?", a: "Lorsque vous cliquez sur Télécharger, le fichier est enregistré directement dans le dossier Téléchargements de votre appareil." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    },
    es: {
      title: "Herramientas de edición y retoque de imágenes gratis | ZamTools",
      metaDescription: "Recorta, rota, voltea, ajusta brillo y contraste o convierte a escala de grises tus fotos directamente en tu navegador.",
      h1: "Herramientas de edición de imagen",
      lead: "Retoca y ajusta tus imágenes con controles interactivos sencillos y vista previa en tiempo real en tu navegador.",
      breadcrumb: "Edición",
      overviewTitle: "Ajustes fotográficos esenciales al instante",
      overviewP1: "No necesitas instalar programas pesados para realizar ajustes comunes. ZamTools te ofrece utilidades interactivas que se ejecutan directamente en tu navegador.",
      overviewP2: "Recorta con proporciones fijas, gira y voltea orientaciones, convierte fotos a blanco y negro profesional o regula la exposición y nitidez al instante.",
      benefitsTitle: "Principales ventajas",
      benefits: [
        { title: "Controles interactivos", desc: "Cajas de recorte arrastrables, controles deslizantes y previsualización inmediata." },
        { title: "Alta resolución", desc: "Descarga tus imágenes retocadas manteniendo la resolución original de tus archivos." },
        { title: "Sin registros ni programas", desc: "Abre la herramienta y comienza a editar sin necesidad de instalar software." }
      ],
      faqs: [
        { q: "¿Puedo deshacer mis cambios?", a: "Sí. Todas las herramientas incluyen un botón de reinicio para volver a la imagen original cuando lo desees." },
        { q: "¿Dónde se guardan las imágenes editadas?", a: "Al pulsar en Descargar, el archivo se guarda directamente en la carpeta de descargas de tu dispositivo." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    },
    id: {
      title: "Alat Pengeditan & Filter Gambar Online Gratis | ZamTools",
      metaDescription: "Potong, putar, balik, atur kecerahan, tingkatkan kontras, dan ubah foto menjadi hitam putih langsung di browser Anda.",
      h1: "Alat Pengeditan Gambar",
      lead: "Sempurnakan foto Anda dengan kontrol pengeditan intuitif dan pratinjau langsung di kanvas peramban.",
      breadcrumb: "Pengeditan",
      overviewTitle: "Penyesuaian Gambar Penting Menjadi Lebih Mudah",
      overviewP1: "Anda tidak perlu menginstal software pengeditan foto yang berat untuk tugas harian. ZamTools menyediakan alat interaktif yang cepat dan ringan langsung di browser.",
      overviewP2: "Pangkas dengan rasio tetap, putar arah foto, ubah gambar menjadi monokrom, serta atur pencahayaan dan ketajaman secara instan.",
      benefitsTitle: "Keunggulan Utama",
      benefits: [
        { title: "Kontrol Kanvas Interaktif", desc: "Kotak potong yang dapat digeser, slider responsif, dan pratinjau visual langsung." },
        { title: "Resolusi Berkualitas Tinggi", desc: "Unduh file hasil editan dengan resolusi tajam langsung dari memori perangkat." },
        { title: "Tanpa Instalasi Aplikasi", desc: "Buka halaman alat dan langsung mulai mengedit tanpa perlu mendaftar." }
      ],
      faqs: [
        { q: "Bisakah saya mengulang pengeditan?", a: "Tentu. Setiap alat dilengkapi tombol Reset untuk kembali ke gambar asli kapan saja." },
        { q: "Di mana foto hasil editan tersimpan?", a: "Saat Anda menekan Unduh, file akan otomatis tersimpan di folder Unduhan perangkat Anda." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    },
    de: {
      title: "Kostenlose Online-Bildbearbeitungs-Tools | ZamTools",
      metaDescription: "Bilder zuschneiden, drehen, spiegeln, Helligkeit und Kontrast anpassen oder in Graustufen umwandeln – direkt im Webbrowser.",
      h1: "Bildbearbeitungs-Tools",
      lead: "Optimieren und retuschieren Sie Ihre Bilder mit intuitiven Browser-Werkzeugen und interaktiver Live-Vorschau.",
      breadcrumb: "Bearbeitung",
      overviewTitle: "Wesentliche Bildkorrekturen schnell und unkompliziert",
      overviewP1: "Für alltägliche Bildkorrekturen benötigen Sie keine schwere Desktop-Software. ZamTools stellt Ihnen schlanke, interaktive Canvas-Werkzeuge direkt im Browser bereit.",
      overviewP2: "Bilder mit festen Seitenverhältnissen zuschneiden, spiegeln oder drehen, in stilvolles Schwarz-Weiß umwandeln sowie Belichtung und Kantenschärfe justieren.",
      benefitsTitle: "Wesentliche Vorteile",
      benefits: [
        { title: "Interaktive Canvas-Steuerung", desc: "Verschiebbare Zuschnittsrahmen, stufenlose Schieberegler und sofortige Voransicht." },
        { title: "Hochwertige Ausgabe", desc: "Exportieren Sie optimierte Bilddateien direkt aus dem lokalen Arbeitsspeicher." },
        { title: "Ohne Installation oder Anmeldung", desc: "Starten Sie sofort mit der Bildbearbeitung ohne Downloads oder Benutzerkonten." }
      ],
      faqs: [
        { q: "Kann ich Änderungen rückgängig machen?", a: "Ja. Jedes Tool verfügt über eine Zurücksetzen-Schaltfläche, mit der Sie jederzeit zum Originalbild zurückkehren." },
        { q: "Wo werden bearbeitete Fotos gespeichert?", a: "Nach Klick auf Herunterladen speichert Ihr Browser das fertige Bild direkt im Download-Ordner Ihres Geräts." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    },
    pt: {
      title: "Ferramentas de Edição e Filtros de Imagem Grátis | ZamTools",
      metaDescription: "Corte, gire, inverta, ajuste brilho e contraste ou converta fotos para escala de cinza diretamente no seu navegador.",
      h1: "Ferramentas de Edição de Imagem",
      lead: "Ajuste e retoque suas imagens com controles visuais intuitivos e pré-visualização ao vivo no navegador.",
      breadcrumb: "Edição",
      overviewTitle: "Ajustes essenciais em fotos sem complicações",
      overviewP1: "Você não precisa de softwares pesados para tarefas comuns de edição. O ZamTools oferece ferramentas ágeis que funcionam direto no seu navegador.",
      overviewP2: "Recorte com proporções travadas, gire e inverta orientações, transforme fotos em preto e branco sofisticado e ajuste exposição e nitidez em tempo real.",
      benefitsTitle: "Vantagens Principais",
      benefits: [
        { title: "Controles Interativos", desc: "Caixa de corte arrastável, seletores intuitivos e retorno visual imediato." },
        { title: "Qualidade Preservada", desc: "Exporte fotos em alta resolução direto da memória do navegador." },
        { title: "Sem Instalação nem Conta", desc: "Acesse a ferramenta e edite suas fotos sem barreiras ou cadastros." }
      ],
      faqs: [
        { q: "Posso desfazer as alterações feitas?", a: "Sim. Todas as ferramentas possuem um botão de redefinição para restaurar a foto original a qualquer momento." },
        { q: "Onde as imagens editadas são salvas?", a: "Ao clicar em Baixar, o arquivo é gravado diretamente na pasta de Downloads do seu computador ou celular." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    },
    it: {
      title: "Strumenti di modifica e filtri per immagini gratuiti | ZamTools",
      metaDescription: "Ritaglia, ruota, rifletti, regola luminosità e contrasto o converti in scala di grigi le tue foto direttamente nel browser.",
      h1: "Strumenti di modifica immagini",
      lead: "Ritocca e ottimizza le tue immagini con controlli intuitivi e anteprima live eseguita direttamente nel browser.",
      breadcrumb: "Modifica",
      overviewTitle: "Le regolazioni essenziali per le tue immagini",
      overviewP1: "Non servono programmi di fotoritocco complessi per le modifiche di tutti i giorni. ZamTools offre strumenti su canvas interattivi, veloci e leggeri.",
      overviewP2: "Ritaglia con proporzioni bloccate, ruota e rifletti foto, trasforma scatti a colori in bianco e nero e ottimizza nitidezza ed esposizione.",
      benefitsTitle: "Vantaggi principali",
      benefits: [
        { title: "Controlli canvas interattivi", desc: "Riquadro di ritaglio trascinabile, cursori fluidi e riscontro visivo immediato." },
        { title: "Uscita in alta risoluzione", desc: "Esporta i file ottimizzati direttamente dalla memoria del browser." },
        { title: "Senza installazioni né account", desc: "Apri lo strumento e inizia subito a ritoccare senza ostacoli." }
      ],
      faqs: [
        { q: "Posso annullare le modifiche applicate?", a: "Sì. Ogni strumento dispone di un pulsante di ripristino per tornare all'immagine originale in qualsiasi momento." },
        { q: "Dove vengono salvate le immagini modificate?", a: "Facendo clic su Scarica, il file viene salvato direttamente nella cartella Download del tuo dispositivo." }
      ],
      tools: ['imageCropper', 'imageRotateFlip', 'grayscaleImage', 'brightnessContrast', 'blurSharpenImage']
    }
  }
};

module.exports = {
  CATEGORY_TRANSLATIONS
};
