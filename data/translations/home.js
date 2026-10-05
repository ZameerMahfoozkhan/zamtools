/**
 * Localized Content for Homepage and Tools Hub
 * Supports all 7 languages: en, fr, es, id, de, pt, it
 */

const HOME_TRANSLATIONS = {
  en: {
    home: {
      title: "ZamTools — Fast, Free & Private Online Image Tools",
      metaDescription: "Compress, resize, convert, crop, and edit images right in your browser. Fast local processing with no file uploads, accounts, or software installs.",
      ogTitle: "ZamTools — Fast, Free & Private Online Image Tools",
      ogDescription: "Compress, resize, convert, crop, and edit images right in your browser. 100% local client-side processing.",
      eyebrow: "Private & Local Browser Processing",
      h1: "Free Online Image Tools",
      lead: "Compress, resize, convert, crop and edit images instantly — right in your browser.",
      subLead: "Fast processing. No account required. Your images stay on your device.",
      exploreBtn: "Explore Image Tools",
      compressBtn: "Compress an Image",
      pills: [
        "⚡ Instant Compress",
        "📐 Precision Resize",
        "🔄 WebP / JPG / PNG",
        "✂️ Smart Crop",
        "🎨 Color Picker"
      ],
      searchTitle: "What do you want to do?",
      searchDesc: "Type a task like \"compress\", \"resize\", \"convert\", or \"palette\" to filter instantly.",
      searchPlaceholder: "Search image tools...",
      popularEyebrow: "Quick Access",
      popularTitle: "Popular Everyday Tools",
      popularDesc: "The most frequently used image utilities, ready right inside your browser.",
      openTool: "Open Tool →",
      categoriesEyebrow: "Catalog",
      categoriesTitle: "All Tool Categories",
      categoriesDesc: "Browse our complete suite of 20 browser-based image utilities.",
      principlesEyebrow: "Our Principles",
      principlesTitle: "Why Choose ZamTools?",
      principlesDesc: "Built for professionals who need fast, simple utilities without intrusive hurdles.",
      principles: [
        {
          title: "Your Images Stay Local",
          desc: "Supported tools process your photos directly inside your browser via HTML5 Canvas & File APIs. No remote servers ever receive your files."
        },
        {
          title: "Instant Browser Speed",
          desc: "Because there is no network round-trip upload or cloud queue delay, operations like resizing, conversion, and compression happen instantly."
        },
        {
          title: "Zero Accounts or Signups",
          desc: "No email barriers, no passwords, and no subscription walls. Drop your image, make your changes, and download the finished file immediately."
        },
        {
          title: "Works on Any Device",
          desc: "Engineered with a responsive, mobile-first design system that works equally smoothly on phones, tablets, laptops, and ultra-wide desktops."
        }
      ],
      workflowEyebrow: "Workflow",
      workflowTitle: "How ZamTools Works",
      workflowDesc: "Get your image tasks done in three straightforward steps.",
      workflowSteps: [
        {
          num: "1",
          title: "Select Your Tool",
          desc: "Pick the exact utility you need from our categorized catalog or use the quick search bar above."
        },
        {
          num: "2",
          title: "Drop Your Image",
          desc: "Drag and drop your JPG, PNG, or WebP file. Your browser reads it into memory locally without transmitting it anywhere."
        },
        {
          num: "3",
          title: "Fine-Tune & Download",
          desc: "Adjust quality, dimensions, or filters with live interactive feedback and download your optimized image with one click."
        }
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Frequently Asked Questions",
      faqDesc: "Clear, direct answers about ZamTools and how your images are handled.",
      faqs: [
        {
          q: "Are ZamTools image utilities free to use?",
          a: "Yes. All image tools on ZamTools are free to use. There are no subscriptions, hidden fees, watermarks, or usage quotas for everyday image processing."
        },
        {
          q: "Are my images uploaded to your servers?",
          a: "No. Supported tools process your files directly inside your browser using HTML5 Canvas, Blob, and FileReader APIs. Your original and processed images stay on your device."
        },
        {
          q: "Do I need to install any software or plugins?",
          a: "None at all. ZamTools works inside any modern web browser including Chrome, Edge, Safari, and Firefox across Windows, macOS, Linux, iOS, and Android."
        },
        {
          q: "Which image formats are supported?",
          a: "We natively support JPG, JPEG, PNG, and modern WebP formats. Developer utilities also support Base64 string encoding and decoding."
        },
        {
          q: "Why should I use WebP instead of JPG or PNG?",
          a: "WebP provides superior compression for web images, often producing files that are 25% to 35% smaller than comparable JPEGs and PNGs while retaining alpha transparency and sharp visual clarity."
        }
      ],
      guidesEyebrow: "Practical Guides",
      guidesTitle: "Image Optimization Knowledge",
      guidesDesc: "Read our in-depth guides to improve web speed, choose formats, and master image sizing.",
      readGuide: "Read Guide →"
    },
    toolsHub: {
      title: "All Image Tools – Free, Fast & Private Utilities | ZamTools",
      metaDescription: "Browse all 20 free online image tools on ZamTools. Compress, resize, convert, crop, and edit images right in your browser with no file uploads.",
      ogTitle: "All Online Image Tools | ZamTools",
      ogDescription: "Explore 20 free, fast, and private image tools that process locally in your browser.",
      h1: "All Online Image Tools",
      lead: "Discover 20 free, browser-based image utilities built for web speed, precision editing, and complete file privacy.",
      breadcrumbHome: "Home",
      breadcrumbTools: "All Tools"
    }
  },

  fr: {
    home: {
      title: "ZamTools — Outils d'image en ligne gratuits, rapides et confidentiels",
      metaDescription: "Compressez, redimensionnez, convertissez, recadrez et modifiez vos images directement dans votre navigateur. Traitement local sans téléversement ni inscription.",
      ogTitle: "ZamTools — Outils d'image en ligne gratuits et confidentiels",
      ogDescription: "Compressez, redimensionnez, convertissez et éditez vos images localement dans votre navigateur sans téléversement.",
      eyebrow: "Traitement local & confidentiel dans le navigateur",
      h1: "Outils d'image gratuits en ligne",
      lead: "Compressez, redimensionnez, convertissez, recadrez et retouchez vos images instantanément — directement dans votre navigateur.",
      subLead: "Traitement ultra-rapide. Aucun compte requis. Vos fichiers restent sur votre appareil.",
      exploreBtn: "Explorer les outils",
      compressBtn: "Compresser une image",
      pills: [
        "⚡ Compression instantanée",
        "📐 Redimensionnement précis",
        "🔄 WebP / JPG / PNG",
        "✂️ Recadrage intelligent",
        "🎨 Sélecteur de couleur"
      ],
      searchTitle: "Que souhaitez-vous faire ?",
      searchDesc: "Tapez une tâche comme « compresser », « redimensionner » ou « convertir » pour filtrer instantanément.",
      searchPlaceholder: "Rechercher un outil d'image...",
      popularEyebrow: "Accès rapide",
      popularTitle: "Outils populaires du quotidien",
      popularDesc: "Les utilitaires d'image les plus demandés, prêts à l'emploi directement dans votre navigateur.",
      openTool: "Ouvrir l'outil →",
      categoriesEyebrow: "Catalogue",
      categoriesTitle: "Toutes les catégories d'outils",
      categoriesDesc: "Parcourez notre suite complète de 20 utilitaires d'image exécutés côté client.",
      principlesEyebrow: "Nos principes",
      principlesTitle: "Pourquoi choisir ZamTools ?",
      principlesDesc: "Conçu pour les créateurs et développeurs recherchant efficacité, simplicité et respect de la vie privée.",
      principles: [
        {
          title: "Vos images restent sur votre appareil",
          desc: "Nos outils traitent vos photos localement via les API HTML5 Canvas et FileReader. Aucun serveur distant ne reçoit vos images."
        },
        {
          title: "Vitesse d'exécution instantanée",
          desc: "Sans délai de transfert réseau ni file d'attente sur serveur cloud, vos opérations de redimensionnement et compression sont immédiates."
        },
        {
          title: "Sans inscription ni abonnement",
          desc: "Aucune saisie d'e-mail, aucun mot de passe, aucun filigrane. Déposez votre image, appliquez vos réglages et téléchargez le résultat."
        },
        {
          title: "Compatible avec tous vos écrans",
          desc: "Interface moderne et réactive, parfaitement adaptée aux smartphones, tablettes, ordinateurs portables et moniteurs larges."
        }
      ],
      workflowEyebrow: "Fonctionnement",
      workflowTitle: "Comment fonctionne ZamTools",
      workflowDesc: "Réalisez vos tâches d'image en trois étapes simples.",
      workflowSteps: [
        {
          num: "1",
          title: "Choisissez votre outil",
          desc: "Sélectionnez l'utilitaire souhaité dans notre catalogue ou via la barre de recherche rapide ci-dessus."
        },
        {
          num: "2",
          title: "Déposez votre image",
          desc: "Glissez-déposez votre fichier JPG, PNG ou WebP. Votre navigateur le charge localement en mémoire sans le transférer."
        },
        {
          num: "3",
          title: "Ajustez et téléchargez",
          desc: "Réglez la qualité, la taille ou les filtres avec un aperçu interactif en direct et téléchargez votre image optimisée."
        }
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Foire aux questions",
      faqDesc: "Des réponses transparentes et précises sur ZamTools et le traitement de vos fichiers.",
      faqs: [
        {
          q: "Les outils ZamTools sont-ils gratuits ?",
          a: "Oui. Tous les outils sur ZamTools sont entièrement gratuits, sans frais cachés, sans filigrane et sans limite d'utilisation quotidienne."
        },
        {
          q: "Mes images sont-elles téléversées sur vos serveurs ?",
          a: "Non. Les outils pris en charge traitent vos fichiers directement dans votre navigateur via HTML5 Canvas et Blob. Vos photos ne quittent jamais votre machine."
        },
        {
          q: "Faut-il installer un logiciel ou une extension ?",
          a: "Absolument aucun. ZamTools fonctionne sur n'importe quel navigateur web moderne (Chrome, Firefox, Safari, Edge) sur ordinateur et mobile."
        },
        {
          q: "Quels formats d'image sont pris en charge ?",
          a: "Nous prenons en charge nativement le JPG, le JPEG, le PNG et le WebP. Les utilitaires développeurs gèrent également le format Base64."
        },
        {
          q: "Pourquoi utiliser le WebP plutôt que le JPG ou le PNG ?",
          a: "Le WebP offre une compression remarquable, produisant des fichiers 25 à 35 % plus légers que le JPEG à qualité visuelle équivalente tout en supportant la transparence."
        }
      ],
      guidesEyebrow: "Guides pratiques",
      guidesTitle: "Comprendre l'optimisation d'images",
      guidesDesc: "Consultez nos articles complets pour maîtriser la vitesse web, les formats et les résolutions.",
      readGuide: "Lire le guide →"
    },
    toolsHub: {
      title: "Tous les outils d'image – Utilitaires gratuits en ligne | ZamTools",
      metaDescription: "Découvrez nos 20 outils d'image en ligne gratuits. Compressez, redimensionnez, convertissez et retouchez vos images en toute confidentialité dans votre navigateur.",
      ogTitle: "Tous les outils d'image en ligne | ZamTools",
      ogDescription: "Explorez 20 outils d'image gratuits, rapides et confidentiels exécutés directement dans votre navigateur.",
      h1: "Tous les outils d'image en ligne",
      lead: "Découvrez 20 utilitaires d'image gratuits conçus pour la performance web, l'édition de précision et la confidentialité totale.",
      breadcrumbHome: "Accueil",
      breadcrumbTools: "Tous les outils"
    }
  },

  es: {
    home: {
      title: "ZamTools — Herramientas de imagen online gratis, rápidas y privadas",
      metaDescription: "Comprime, redimensiona, convierte, recorta y edita imágenes directamente en tu navegador. Procesamiento local rápido sin subir archivos ni registrarte.",
      ogTitle: "ZamTools — Herramientas de imagen online gratis y privadas",
      ogDescription: "Comprime, redimensiona, convierte y edita imágenes localmente en tu navegador sin subirlas a ningún servidor.",
      eyebrow: "Procesamiento local y privado en el navegador",
      h1: "Herramientas de imagen online gratis",
      lead: "Comprime, redimensiona, convierte, recorta y edita imágenes al instante, directamente en tu navegador.",
      subLead: "Procesamiento rápido. Sin cuentas ni registros. Tus imágenes nunca salen de tu dispositivo.",
      exploreBtn: "Explorar herramientas",
      compressBtn: "Comprimir una imagen",
      pills: [
        "⚡ Compresión instantánea",
        "📐 Redimensionado exacto",
        "🔄 WebP / JPG / PNG",
        "✂️ Recorte inteligente",
        "🎨 Selector de color"
      ],
      searchTitle: "¿Qué deseas hacer?",
      searchDesc: "Escribe una tarea como «comprimir», «redimensionar» o «convertir» para filtrar al instante.",
      searchPlaceholder: "Buscar herramientas de imagen...",
      popularEyebrow: "Acceso rápido",
      popularTitle: "Herramientas populares de uso diario",
      popularDesc: "Las utilidades de imagen más utilizadas, listas para usar directamente en tu navegador.",
      openTool: "Abrir herramienta →",
      categoriesEyebrow: "Catálogo",
      categoriesTitle: "Todas las categorías de herramientas",
      categoriesDesc: "Explora nuestra suite completa de 20 utilidades de imagen ejecutadas en el navegador.",
      principlesEyebrow: "Nuestros principios",
      principlesTitle: "¿Por qué elegir ZamTools?",
      principlesDesc: "Diseñado para usuarios y desarrolladores que necesitan herramientas rápidas, limpias y respetuosas con la privacidad.",
      principles: [
        {
          title: "Tus imágenes se quedan en tu dispositivo",
          desc: "Nuestras herramientas procesan tus fotos localmente con HTML5 Canvas y FileReader. Ningún servidor externo recibe tus archivos."
        },
        {
          title: "Velocidad inmediata sin esperas",
          desc: "Al no requerir subidas de archivos ni colas en la nube, las conversiones y compresiones se completan al instante."
        },
        {
          title: "Sin registros ni límites de suscripción",
          desc: "Sin pedir correo, sin contraseñas y sin marcas de agua. Arrastra tu imagen, aplica tus cambios y descarga tu archivo."
        },
        {
          title: "Funciona en cualquier pantalla",
          desc: "Diseño moderno y fluido optimizado para teléfonos móviles, tabletas, ordenadores portátiles y pantallas panorámicas."
        }
      ],
      workflowEyebrow: "Flujo de trabajo",
      workflowTitle: "Cómo funciona ZamTools",
      workflowDesc: "Optimiza y transforma tus fotos en solo tres sencillos pasos.",
      workflowSteps: [
        {
          num: "1",
          title: "Elige tu herramienta",
          desc: "Selecciona la utilidad que necesitas en nuestro catálogo categorizado o usa el buscador superior."
        },
        {
          num: "2",
          title: "Arrastra tu imagen",
          desc: "Suelta tu archivo JPG, PNG o WebP. Tu navegador lo carga en memoria local sin enviarlo por la red."
        },
        {
          num: "3",
          title: "Ajusta y descarga",
          desc: "Modifica la calidad, dimensiones o filtros con vista previa en tiempo real y descarga tu imagen optimizada con un clic."
        }
      ],
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre ZamTools",
      faqDesc: "Respuestas claras sobre el funcionamiento y la privacidad de tus imágenes.",
      faqs: [
        {
          q: "¿Las utilidades de ZamTools son gratuitas?",
          a: "Sí. Todas las herramientas de ZamTools son completamente gratuitas, sin tarifas ocultas, sin marcas de agua y sin cuotas de uso."
        },
        {
          q: "¿Se suben mis imágenes a sus servidores?",
          a: "No. Las herramientas compatibles procesan tus fotos en tu navegador mediante HTML5 Canvas y Blob. Tus archivos se quedan en tu equipo."
        },
        {
          q: "¿Necesito instalar alguna aplicación o extensión?",
          a: "En absoluto. ZamTools funciona en cualquier navegador moderno como Chrome, Safari, Edge y Firefox en PC y móvil."
        },
        {
          q: "¿Qué formatos de imagen son compatibles?",
          a: "Soportamos de forma nativa JPG, JPEG, PNG y WebP. Las utilidades de desarrollo también admiten cadenas Base64."
        },
        {
          q: "¿Por qué utilizar WebP en lugar de JPG o PNG?",
          a: "WebP ofrece una compresión superior, reduciendo el peso del archivo entre un 25 % y un 35 % frente a JPEG manteniendo nitidez y canal alfa."
        }
      ],
      guidesEyebrow: "Guías prácticas",
      guidesTitle: "Conocimiento sobre optimización de imágenes",
      guidesDesc: "Descubre artículos especializados para acelerar tu web, elegir formatos y ajustar dimensiones.",
      readGuide: "Leer guía →"
    },
    toolsHub: {
      title: "Todas las herramientas de imagen – Utilitarios gratis online | ZamTools",
      metaDescription: "Explora 20 herramientas de imagen online gratis en ZamTools. Comprime, redimensiona, convierte y edita fotos en tu navegador sin subidas de archivos.",
      ogTitle: "Todas las herramientas de imagen online | ZamTools",
      ogDescription: "Descubre 20 herramientas de imagen gratuitas, rápidas y privadas en tu navegador.",
      h1: "Todas las herramientas de imagen online",
      lead: "Explora 20 utilidades de imagen gratuitas diseñadas para maximizar el rendimiento web, la precisión y la privacidad.",
      breadcrumbHome: "Inicio",
      breadcrumbTools: "Todas las herramientas"
    }
  },

  id: {
    home: {
      title: "ZamTools — Alat Gambar Online Gratis, Cepat & Aman",
      metaDescription: "Kompres, ubah ukuran, konversi, potong, dan edit gambar langsung di browser Anda. Pemrosesan lokal instan tanpa unggah berkas atau daftar akun.",
      ogTitle: "ZamTools — Alat Gambar Online Gratis & Privasi Terjaga",
      ogDescription: "Kompres, ubah ukuran, dan edit gambar di browser secara lokal tanpa mengirim berkas ke server.",
      eyebrow: "Pemrosesan Lokal & Privat di Browser Anda",
      h1: "Alat Gambar Online Gratis",
      lead: "Kompres, ubah ukuran, konversi, potong, dan edit gambar secara instan — langsung di peramban Anda.",
      subLead: "Proses secepat kilat. Tanpa akun. Berkas Anda tetap aman di perangkat Anda.",
      exploreBtn: "Jelajahi Alat Gambar",
      compressBtn: "Kompres Gambar",
      pills: [
        "⚡ Kompres Instan",
        "📐 Ubah Ukuran Akurat",
        "🔄 WebP / JPG / PNG",
        "✂️ Pangkas Cerdas",
        "🎨 Pemilih Warna"
      ],
      searchTitle: "Apa yang ingin Anda lakukan?",
      searchDesc: "Ketik kata kunci seperti \"kompres\", \"ukuran\", \"konversi\", atau \"palet\" untuk menyaring langsung.",
      searchPlaceholder: "Cari alat gambar...",
      popularEyebrow: "Akses Cepat",
      popularTitle: "Alat Populer Sehari-hari",
      popularDesc: "Utilitas gambar yang paling sering digunakan, siap pakai langsung di peramban Anda.",
      openTool: "Buka Alat →",
      categoriesEyebrow: "Katalog",
      categoriesTitle: "Semua Kategori Alat",
      categoriesDesc: "Jelajahi 20 utilitas gambar berbasis browser kami yang lengkap dan praktis.",
      principlesEyebrow: "Prinsip Kami",
      principlesTitle: "Mengapa Memilih ZamTools?",
      principlesDesc: "Dibuat untuk para kreator dan profesional yang membutuhkan utilitas cepat, bersih, dan aman.",
      principles: [
        {
          title: "Gambar Anda Tetap di Perangkat",
          desc: "Alat kami memproses foto secara lokal melalui API HTML5 Canvas dan FileReader. Server eksternal tidak pernah melihat berkas Anda."
        },
        {
          title: "Kecepatan Instan Tanpa Antrean",
          desc: "Tanpa transfer data jaringan atau antrean cloud, proses pengubahan ukuran dan kompresi berlangsung seketika."
        },
        {
          title: "Tanpa Pendaftaran Akun",
          desc: "Tanpa login, tanpa kata sandi, dan tanpa watermark. Tarik gambar Anda, sesuaikan pengaturan, dan unduh hasilnya langsung."
        },
        {
          title: "Bekerja di Semua Perangkat",
          desc: "Desain responsif yang bekerja mulus di ponsel, tablet, laptop, hingga monitor komputer desktop beresolusi tinggi."
        }
      ],
      workflowEyebrow: "Alur Kerja",
      workflowTitle: "Cara Kerja ZamTools",
      workflowDesc: "Selesaikan pengeditan gambar Anda dalam tiga langkah mudah.",
      workflowSteps: [
        {
          num: "1",
          title: "Pilih Alat",
          desc: "Pilih alat yang Anda butuhkan dari katalog terorganisir atau gunakan kotak pencarian cepat di atas."
        },
        {
          num: "2",
          title: "Tarik Gambar Anda",
          desc: "Seret dan lepas file JPG, PNG, atau WebP Anda. Browser memuatnya ke memori lokal tanpa mengunggahnya."
        },
        {
          num: "3",
          title: "Atur & Unduh",
          desc: "Sesuaikan kualitas, ukuran, atau filter dengan pratinjau langsung dan unduh gambar optimal Anda dengan satu klik."
        }
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Pertanyaan yang Sering Diajukan",
      faqDesc: "Jawaban langsung dan jelas tentang ZamTools serta keamanan berkas gambar Anda.",
      faqs: [
        {
          q: "Apakah semua alat di ZamTools gratis?",
          a: "Ya. Semua alat gambar di ZamTools gratis digunakan tanpa biaya tersembunyi, tanpa watermark, dan tanpa batasan kuota pemakaian harian."
        },
        {
          q: "Apakah gambar saya diunggah ke server?",
          a: "Tidak. Alat yang didukung memproses file langsung di browser Anda menggunakan HTML5 Canvas dan FileReader. Foto Anda tidak pernah meninggalkan perangkat."
        },
        {
          q: "Apakah saya perlu menginstal perangkat lunak khusus?",
          a: "Sama sekali tidak. ZamTools berjalan di semua peramban modern seperti Chrome, Firefox, Safari, dan Edge di komputer maupun smartphone."
        },
        {
          q: "Format gambar apa saja yang didukung?",
          a: "Kami mendukung JPG, JPEG, PNG, dan format modern WebP secara bawaan. Utilitas pengembang juga mendukung string Base64."
        },
        {
          q: "Mengapa sebaiknya menggunakan format WebP daripada JPG atau PNG?",
          a: "WebP memberikan kompresi unggul yang menghasilkan ukuran berkas 25% hingga 35% lebih kecil dibandingkan JPEG biasa dengan ketajaman setara."
        }
      ],
      guidesEyebrow: "Panduan Praktis",
      guidesTitle: "Panduan Optimasi Gambar",
      guidesDesc: "Baca panduan lengkap kami untuk mempercepat situs web, memilih format, dan mengatur resolusi gambar.",
      readGuide: "Baca Panduan →"
    },
    toolsHub: {
      title: "Semua Alat Gambar – Utilitas Online Gratis & Cepat | ZamTools",
      metaDescription: "Jelajahi 20 alat gambar online gratis di ZamTools. Kompres, ubah ukuran, konversi, dan edit gambar langsung di browser tanpa unggah berkas.",
      ogTitle: "Semua Alat Gambar Online | ZamTools",
      ogDescription: "Temukan 20 alat gambar gratis, cepat, dan menjaga privasi di browser Anda.",
      h1: "Semua Alat Gambar Online",
      lead: "Temukan 20 utilitas gambar berbasis browser gratis yang dirancang untuk kecepatan web, pengeditan presisi, dan privasi penuh.",
      breadcrumbHome: "Beranda",
      breadcrumbTools: "Semua Alat"
    }
  },

  de: {
    home: {
      title: "ZamTools — Schnelle, kostenlose & private Online-Bildtools",
      metaDescription: "Bilder direkt im Browser komprimieren, skalieren, konvertieren, zuschneiden und bearbeiten. Schnelle lokale Verarbeitung ohne Datei-Uploads oder Registrierung.",
      ogTitle: "ZamTools — Kostenlose Online-Bildtools im Browser",
      ogDescription: "Bilder direkt im Browser komprimieren, skalieren und bearbeiten. 100 % lokale Verarbeitung ohne Server-Uploads.",
      eyebrow: "Private & lokale Verarbeitung im Webbrowser",
      h1: "Kostenlose Online-Bildtools",
      lead: "Bilder sofort im Browser komprimieren, skalieren, konvertieren, zuschneiden und optimieren.",
      subLead: "Blitzschnell. Ohne Konto oder Anmeldung. Ihre Fotos verbleiben sicher auf Ihrem Gerät.",
      exploreBtn: "Alle Tools entdecken",
      compressBtn: "Bild komprimieren",
      pills: [
        "⚡ Sofort-Kompression",
        "📐 Exakte Skalierung",
        "🔄 WebP / JPG / PNG",
        "✂️ Intelligentes Zuschneiden",
        "🎨 Farbpipette"
      ],
      searchTitle: "Was möchten Sie tun?",
      searchDesc: "Geben Sie eine Aufgabe wie „komprimieren“, „skalieren“ oder „konvertieren“ ein, um sofort zu filtern.",
      searchPlaceholder: "Bildtools durchsuchen...",
      popularEyebrow: "Schnellzugriff",
      popularTitle: "Beliebte Werkzeuge für den Alltag",
      popularDesc: "Die am häufigsten genutzten Bildwerkzeuge, sofort einsatzbereit in Ihrem Browser.",
      openTool: "Tool öffnen →",
      categoriesEyebrow: "Katalog",
      categoriesTitle: "Alle Werkzeugkategorien",
      categoriesDesc: "Entdecken Sie unsere vollständige Suite von 20 browserbasierten Bildbearbeitungs-Tools.",
      principlesEyebrow: "Unsere Grundsätze",
      principlesTitle: "Warum ZamTools wählen?",
      principlesDesc: "Entwickelt für Kreative und Profis, die schnelle, saubere Tools ohne nervige Hürden schätzen.",
      principles: [
        {
          title: "Ihre Bilder bleiben privat",
          desc: "Unterstützte Tools verarbeiten Ihre Fotos lokal über HTML5 Canvas und FileReader. Kein fremder Server empfängt Ihre Dateien."
        },
        {
          title: "Sofortige Geschwindigkeit ohne Ladezeiten",
          desc: "Da keine Upload-Übertragungen oder Cloud-Warteschlangen anfallen, erfolgen Skalierung und Komprimierung unverzüglich."
        },
        {
          title: "Keine Registrierung oder Abos",
          desc: "Keine E-Mail-Abfragen, keine Passwörter und keine Wasserzeichen. Bild einfügen, anpassen und sofort herunterladen."
        },
        {
          title: "Funktioniert auf jedem Endgerät",
          desc: "Modernes responsives Design, das auf Smartphones, Tablets, Laptops und Breitbildmonitoren gleichermaßen flüssig läuft."
        }
      ],
      workflowEyebrow: "Ablauf",
      workflowTitle: "So funktioniert ZamTools",
      workflowDesc: "Erledigen Sie Ihre Bildaufgaben in drei unkomplizierten Schritten.",
      workflowSteps: [
        {
          num: "1",
          title: "Werkzeug wählen",
          desc: "Wählen Sie das gewünschte Hilfsprogramm aus unserem Katalog oder nutzen Sie die Suchleiste oben."
        },
        {
          num: "2",
          title: "Bild ablegen",
          desc: "Ziehen Sie Ihre JPG-, PNG- oder WebP-Datei per Drag & Drop hinein. Ihr Browser liest sie lokal in den Arbeitsspeicher."
        },
        {
          num: "3",
          title: "Anpassen & Herunterladen",
          desc: "Passen Sie Qualität, Maße oder Filter mit Live-Vorschau an und laden Sie Ihr Bild mit einem Klick herunter."
        }
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Häufig gestellte Fragen",
      faqDesc: "Klare und direkte Antworten zu ZamTools und zum Schutz Ihrer Bilddateien.",
      faqs: [
        {
          q: "Sind die Bildwerkzeuge auf ZamTools kostenlos?",
          a: "Ja. Alle Tools auf ZamTools sind dauerhaft kostenlos nutzbar – ohne versteckte Kosten, ohne Wasserzeichen und ohne Kontingentbegrenzungen."
        },
        {
          q: "Werden meine Bilder auf Ihre Server hochgeladen?",
          a: "Nein. Unterstützte Werkzeuge verarbeiten Ihre Dateien lokal im Browser via HTML5 Canvas und Blob APIs. Ihre Dateien verlassen Ihr Gerät nicht."
        },
        {
          q: "Muss ich zusätzliche Software oder Add-ons installieren?",
          a: "Nein, überhaupt nicht. ZamTools läuft in jedem aktuellen Browser wie Chrome, Firefox, Safari und Edge unter Windows, macOS, Linux, iOS und Android."
        },
        {
          q: "Welche Bildformate werden unterstützt?",
          a: "Wir unterstützen JPG, JPEG, PNG und das moderne WebP-Format. Entwicklertools verarbeiten zudem Base64-Strings."
        },
        {
          q: "Warum sollte ich WebP statt JPG oder PNG verwenden?",
          a: "WebP bietet eine hervorragende Kompression, die oft 25 % bis 35 % kleinere Dateien als JPEG bei vergleichbarer Bildqualität und Transparenz erzeugt."
        }
      ],
      guidesEyebrow: "Praxis-Ratgeber",
      guidesTitle: "Wissen zur Bildoptimierung",
      guidesDesc: "Lesen Sie unsere fundierten Anleitungen zu Web-Performance, Dateiformaten und optimalen Bildabmessungen.",
      readGuide: "Ratgeber lesen →"
    },
    toolsHub: {
      title: "Alle Bildtools – Kostenlose & schnelle Online-Tools | ZamTools",
      metaDescription: "Entdecken Sie alle 20 kostenlosen Online-Bildtools auf ZamTools. Bilder komprimieren, skalieren, konvertieren und bearbeiten ohne Server-Uploads.",
      ogTitle: "Alle Online-Bildtools | ZamTools",
      ogDescription: "Entdecken Sie 20 kostenlose, schnelle und datenschutzfreundliche Bildtools direkt im Browser.",
      h1: "Alle Online-Bildtools",
      lead: "20 kostenlose, browserbasierte Bildbearbeitungswerkzeuge für maximale Web-Performance, Präzision und Datensicherheit.",
      breadcrumbHome: "Startseite",
      breadcrumbTools: "Alle Tools"
    }
  },

  pt: {
    home: {
      title: "ZamTools — Ferramentas de imagem online grátis, rápidas e privadas",
      metaDescription: "Comprima, redimensione, converta, recorte e edite imagens diretamente no seu navegador. Processamento local rápido sem upload de arquivos nem cadastro.",
      ogTitle: "ZamTools — Ferramentas de imagem online grátis e privadas",
      ogDescription: "Comprima, redimensione, converta e edite imagens localmente no navegador com total privacidade.",
      eyebrow: "Processamento local e confidencial no navegador",
      h1: "Ferramentas de imagem online grátis",
      lead: "Comprima, redimensione, converta, recorte e edite fotos instantaneamente — direto no seu navegador.",
      subLead: "Processamento veloz. Sem criação de conta. Suas imagens nunca saem do seu dispositivo.",
      exploreBtn: "Explorar ferramentas",
      compressBtn: "Comprimir imagem",
      pills: [
        "⚡ Compressão instantânea",
        "📐 Redimensionamento exato",
        "🔄 WebP / JPG / PNG",
        "✂️ Recorte inteligente",
        "🎨 Seletor de cores"
      ],
      searchTitle: "O que você deseja fazer?",
      searchDesc: "Digite uma ação como \"comprimir\", \"redimensionar\" ou \"converter\" para filtrar na hora.",
      searchPlaceholder: "Pesquisar ferramentas de imagem...",
      popularEyebrow: "Acesso Rápido",
      popularTitle: "Ferramentas populares para o dia a dia",
      popularDesc: "Os utilitários de imagem mais procurados, prontos para uso direto no seu navegador.",
      openTool: "Abrir ferramenta →",
      categoriesEyebrow: "Catálogo",
      categoriesTitle: "Todas as categorias de ferramentas",
      categoriesDesc: "Navegue pelo nosso conjunto completo de 20 utilitários de imagem executados no cliente.",
      principlesEyebrow: "Nossos Princípios",
      principlesTitle: "Por que escolher o ZamTools?",
      principlesDesc: "Criado para quem precisa de utilitários rápidos, práticos e totalmente respeitadores da privacidade.",
      principles: [
        {
          title: "Suas imagens ficam no seu dispositivo",
          desc: "Nossas ferramentas processam suas fotos localmente via HTML5 Canvas e FileReader. Nenhum servidor externo recebe seus arquivos."
        },
        {
          title: "Velocidade imediata sem esperas",
          desc: "Sem necessidade de upload pela internet nem filas de processamento na nuvem, suas edições ocorrem no mesmo instante."
        },
        {
          title: "Zero contas ou assinaturas",
          desc: "Sem exigir e-mails, sem senhas e sem marcas d'água. Arraste sua foto, faça os ajustes e baixe o resultado imediatamente."
        },
        {
          title: "Funciona em qualquer aparelho",
          desc: "Design responsivo e fluido desenvolvido para smartphones, tablets, notebooks e computadores de alta resolução."
        }
      ],
      workflowEyebrow: "Como Funciona",
      workflowTitle: "Como usar o ZamTools",
      workflowDesc: "Edite e otimize suas imagens em três etapas simples e diretas.",
      workflowSteps: [
        {
          num: "1",
          title: "Escolha sua ferramenta",
          desc: "Selecione o utilitário desejado em nosso catálogo ou use a barra de busca rápida acima."
        },
        {
          num: "2",
          title: "Arraste sua imagem",
          desc: "Solte seu arquivo JPG, PNG ou WebP. Seu navegador o carrega na memória local sem transmiti-lo."
        },
        {
          num: "3",
          title: "Ajuste e baixe",
          desc: "Defina qualidade, proporções ou filtros com pré-visualização em tempo real e baixe com um clique."
        }
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Perguntas Frequentes",
      faqDesc: "Respostas transparentes sobre o funcionamento e a privacidade dos seus arquivos no ZamTools.",
      faqs: [
        {
          q: "As ferramentas do ZamTools são realmente gratuitas?",
          a: "Sim. Todas as ferramentas no ZamTools são gratuitas, sem taxas ocultas, sem marcas d'água e sem restrições de quantidade diária."
        },
        {
          q: "Minhas imagens são enviadas para algum servidor?",
          a: "Não. As ferramentas compatíveis processam seus arquivos diretamente no navegador através das APIs HTML5 Canvas e Blob."
        },
        {
          q: "Preciso instalar algum programa ou extensão?",
          a: "Não. O ZamTools funciona perfeitamente em qualquer navegador moderno como Chrome, Firefox, Safari e Edge em qualquer sistema operacional."
        },
        {
          q: "Quais formatos de imagem são suportados?",
          a: "Oferecemos suporte nativo para JPG, JPEG, PNG e WebP. Utilitários para desenvolvedores também suportam dados em Base64."
        },
        {
          q: "Por que usar WebP em vez de JPG ou PNG?",
          a: "O WebP proporciona compressão superior, reduzindo o tamanho dos arquivos em até 25% a 35% em relação ao JPEG com nitidez equivalente e suporte a transparência."
        }
      ],
      guidesEyebrow: "Guias Práticos",
      guidesTitle: "Conhecimento sobre Otimização de Imagens",
      guidesDesc: "Leia nossos guias completos para acelerar seu site, escolher formatos certos e ajustar dimensões ideais.",
      readGuide: "Ler artigo →"
    },
    toolsHub: {
      title: "Todas as ferramentas de imagem – Utilitários online grátis | ZamTools",
      metaDescription: "Conheça todas as 20 ferramentas de imagem online grátis no ZamTools. Comprima, redimensione, converta e edite fotos no navegador sem uploads.",
      ogTitle: "Todas as ferramentas de imagem online | ZamTools",
      ogDescription: "Explore 20 ferramentas de imagem gratuitas, rápidas e seguras direto no navegador.",
      h1: "Todas as ferramentas de imagem online",
      lead: "Descubra 20 utilitários de imagem gratuitos criados para máxima performance na web, precisão de edição e privacidade total.",
      breadcrumbHome: "Início",
      breadcrumbTools: "Todas as ferramentas"
    }
  },

  it: {
    home: {
      title: "ZamTools — Strumenti per immagini online gratuiti, veloci e privati",
      metaDescription: "Comprimi, ridimensiona, converti, ritaglia e modifica immagini direttamente nel browser. Elaborazione locale veloce senza caricare file né registrazioni.",
      ogTitle: "ZamTools — Strumenti per immagini online gratuiti e privati",
      ogDescription: "Comprimi, ridimensiona, converti ed elabora immagini localmente nel browser senza caricamenti su server.",
      eyebrow: "Elaborazione locale e privata nel browser",
      h1: "Strumenti per immagini online gratuiti",
      lead: "Comprimi, ridimensiona, converti, ritaglia e modifica le tue immagini all'istante — direttamente nel tuo browser.",
      subLead: "Elaborazione immediata. Nessun account richiesto. Le tue immagini rimangono sul tuo dispositivo.",
      exploreBtn: "Esplora gli strumenti",
      compressBtn: "Comprimi un'immagine",
      pills: [
        "⚡ Compressione istantanea",
        "📐 Ridimensionamento preciso",
        "🔄 WebP / JPG / PNG",
        "✂️ Ritaglio intelligente",
        "🎨 Selettore di colore"
      ],
      searchTitle: "Cosa desideri fare?",
      searchDesc: "Digita un'azione come \"comprimi\", \"ridimensiona\" o \"converti\" per filtrare immediatamente.",
      searchPlaceholder: "Cerca strumenti per immagini...",
      popularEyebrow: "Accesso rapido",
      popularTitle: "Strumenti popolari per ogni giorno",
      popularDesc: "Le utilità per immagini più richieste, pronte per l'uso direttamente nel tuo browser.",
      openTool: "Apri strumento →",
      categoriesEyebrow: "Catalogo",
      categoriesTitle: "Tutte le categorie di strumenti",
      categoriesDesc: "Esplora la nostra raccolta completa di 20 utilità per immagini elaborate sul client.",
      principlesEyebrow: "I nostri principi",
      principlesTitle: "Perché scegliere ZamTools?",
      principlesDesc: "Creato per professionisti e utenti che cercano utilità veloci, chiare e rispettose della privacy.",
      principles: [
        {
          title: "Le tue immagini restano private",
          desc: "I nostri strumenti elaborano le tue foto localmente tramite HTML5 Canvas e FileReader. Nessun server remoto riceve i tuoi file."
        },
        {
          title: "Velocità immediata senza attese",
          desc: "Senza dover caricare file su Internet né attendere code nel cloud, ridimensionamento e compressione sono istantanei."
        },
        {
          title: "Nessun account né abbonamento",
          desc: "Nessuna email richiesta, nessuna password e nessuna filigrana. Trascina la tua foto, regolala e scarica il file finito."
        },
        {
          title: "Funziona su qualsiasi dispositivo",
          desc: "Interfaccia moderna e reattiva ottimizzata per smartphone, tablet, computer portatili e grandi monitor desktop."
        }
      ],
      workflowEyebrow: "Come funziona",
      workflowTitle: "Come funziona ZamTools",
      workflowDesc: "Ottimizza e trasforma le tue immagini in tre semplici passaggi.",
      workflowSteps: [
        {
          num: "1",
          title: "Seleziona lo strumento",
          desc: "Scegli l'utilità desiderata dal catalogo organizzato o utilizza la barra di ricerca rapida in alto."
        },
        {
          num: "2",
          title: "Trascina la tua immagine",
          desc: "Trascina il tuo file JPG, PNG o WebP. Il browser lo carica in memoria locale senza trasmetterlo via web."
        },
        {
          num: "3",
          title: "Regola e scarica",
          desc: "Imposta qualità, dimensioni o filtri con anteprima in tempo reale e scarica l'immagine ottimizzata con un clic."
        }
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Domande frequenti",
      faqDesc: "Risposte trasparenti e dettagliate su ZamTools e sulla sicurezza delle tue immagini.",
      faqs: [
        {
          q: "Gli strumenti di ZamTools sono gratuiti?",
          a: "Sì. Tutti gli strumenti su ZamTools sono completamente gratuiti, senza costi nascosti, senza watermark e senza limiti di utilizzo."
        },
        {
          q: "Le mie immagini vengono caricate sui vostri server?",
          a: "No. Gli strumenti supportati elaborano i file direttamente nel tuo browser tramite HTML5 Canvas e Blob. Le tue foto non lasciano il tuo dispositivo."
        },
        {
          q: "Devo installare software o estensioni?",
          a: "Assolutamente no. ZamTools funziona in qualsiasi browser moderno come Chrome, Firefox, Safari ed Edge su computer e dispositivi mobili."
        },
        {
          q: "Quali formati di immagine sono supportati?",
          a: "Supportiamo nativamente JPG, JPEG, PNG e il moderno formato WebP. Gli strumenti per sviluppatori gestiscono anche stringhe Base64."
        },
        {
          q: "Perché dovrei usare WebP al posto di JPG o PNG?",
          a: "Il formato WebP garantisce una compressione superiore, riducendo le dimensioni dei file dal 25% al 35% rispetto al JPEG a parità di qualità visiva."
        }
      ],
      guidesEyebrow: "Guide pratiche",
      guidesTitle: "Conoscenze sull'ottimizzazione delle immagini",
      guidesDesc: "Scopri le nostre guide approfondite per velocizzare i siti web, scegliere i formati corretti e gestire le risoluzioni.",
      readGuide: "Leggi la guida →"
    },
    toolsHub: {
      title: "Tutti gli strumenti per immagini – Utilità online gratis | ZamTools",
      metaDescription: "Scopri tutti i 20 strumenti per immagini online gratuiti su ZamTools. Comprimi, ridimensiona, converti e modifica immagini nel browser senza caricamenti.",
      ogTitle: "Tutti gli strumenti per immagini online | ZamTools",
      ogDescription: "Esplora 20 strumenti per immagini gratuiti, veloci e privati eseguiti direttamente nel tuo browser.",
      h1: "Tutti gli strumenti per immagini online",
      lead: "Scopri 20 utilità per immagini gratuite create per migliorare la velocità web, la precisione di editing e la totale privacy dei file.",
      breadcrumbHome: "Home",
      breadcrumbTools: "Tutti gli strumenti"
    }
  }
};

module.exports = {
  HOME_TRANSLATIONS
};
