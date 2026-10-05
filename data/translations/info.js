/**
 * Localized Content for Informational and Legal Pages
 * Covers: about, contact, faq, privacyPolicy, terms, disclaimer, cookiePolicy, notFound (404)
 * Supports all 7 languages: en, fr, es, id, de, pt, it
 */

const INFO_TRANSLATIONS = {
  about: {
    en: {
      title: "About ZamTools — Fast, Private Online Image Utilities",
      metaDescription: "Learn about the mission, architecture, and technology behind ZamTools. We build client-side image tools that prioritize user privacy and speed.",
      h1: "About ZamTools",
      lead: "Fast, simple, and strictly private browser-based utilities designed for creators, developers, and everyday users worldwide.",
      missionTitle: "Our Mission",
      missionP1: "ZamTools was created to eliminate the friction of modern digital media manipulation. We believe essential graphic tasks like compressing photos, resizing dimensions, and converting between web formats should be fast, completely free, and genuinely private.",
      missionP2: "Most online converters force you to upload personal photos to their cloud servers, waiting in queue while exposing your private documents. ZamTools flips this paradigm by executing image algorithms directly inside your browser using the HTML5 Canvas, Blob, and WebAssembly APIs.",
      valuesTitle: "Core Architectural Principles",
      values: [
        { title: "Client-Side Processing", desc: "Your images stay on your device. Zero bytes of your graphic data are uploaded to our servers." },
        { title: "Instant Execution", desc: "No upload latency or server queues. Transformations execute at the native speed of your device." },
        { title: "Universal Accessibility", desc: "No subscriptions, mandatory signups, or usage quotas for everyday image utilities." },
        { title: "Clean & Uncluttered", desc: "Intuitive interfaces designed without misleading download traps or intrusive popups." }
      ],
      breadcrumb: "About"
    },
    fr: {
      title: "À propos de ZamTools — Outils d'image en ligne confidentiels",
      metaDescription: "Découvrez la mission et l'architecture de ZamTools : des utilitaires d'image exécutés localement dans le navigateur pour garantir vitesse et vie privée.",
      h1: "À propos de ZamTools",
      lead: "Des utilitaires d'image rapides, simples et strictement confidentiels, conçus pour les créateurs, développeurs et internautes du monde entier.",
      missionTitle: "Notre mission",
      missionP1: "ZamTools a été conçu pour éliminer les contraintes liées au traitement d'images numériques. Nous sommes convaincus que compresser, redimensionner ou convertir des photos doit être immédiat, entièrement gratuit et respectueux de la confidentialité.",
      missionP2: "Contrairement à la majorité des services qui exigent de téléverser vos fichiers sur des serveurs distants, ZamTools exécute l'ensemble des algorithmes directement dans votre navigateur grâce aux API HTML5 Canvas et FileReader.",
      valuesTitle: "Nos principes fondateurs",
      values: [
        { title: "Traitement 100 % local", desc: "Vos photos restent sur votre appareil. Aucun octet d'image n'est transféré sur nos serveurs." },
        { title: "Vitesse immédiate", desc: "Zéro délai de transfert ou d'attente sur serveur cloud. Les calculs s'exécutent à la puissance de votre processeur." },
        { title: "Accès libre et universel", desc: "Aucun abonnement, aucune inscription obligatoire et aucun filigrane imposé." },
        { title: "Interface épurée", desc: "Une ergonomie fluide, sans bannières trompeuses ni popups intrusifs." }
      ],
      breadcrumb: "À propos"
    },
    es: {
      title: "Acerca de ZamTools — Herramientas de imagen online privadas",
      metaDescription: "Conoce la misión y tecnología de ZamTools: utilidades de imagen procesadas localmente en el navegador para máxima velocidad y privacidad.",
      h1: "Acerca de ZamTools",
      lead: "Utilidades de imagen rápidas, limpias y estrictamente privadas, diseñadas para creadores, diseñadores y usuarios de todo el mundo.",
      missionTitle: "Nuestra misión",
      missionP1: "ZamTools nació para eliminar las barreras en la optimización de imágenes digitales. Creemos que comprimir fotos, cambiar dimensiones o convertir formatos debe ser un proceso inmediato, gratuito y totalmente confidencial.",
      missionP2: "La mayoría de herramientas web te obligan a subir tus fotos personales a servidores remotos. ZamTools transforma este concepto ejecutando todos los algoritmos directamente en tu navegador mediante HTML5 Canvas.",
      valuesTitle: "Nuestros principios fundamentales",
      values: [
        { title: "Procesamiento en tu dispositivo", desc: "Tus fotos nunca salen de tu equipo. Ningún byte se envía a servidores externos." },
        { title: "Velocidad instantánea", desc: "Sin esperas de subida ni colas en la nube. Las conversiones ocurren al instante." },
        { title: "Acceso libre y sin barreras", desc: "Sin registros obligatorios, sin suscripciones y sin marcas de agua." },
        { title: "Diseño limpio y enfocado", desc: "Interfaces intuitivas sin botones de descarga falsos ni elementos molestos." }
      ],
      breadcrumb: "Acerca de"
    },
    id: {
      title: "Tentang ZamTools — Utilitas Gambar Online Cepat & Aman",
      metaDescription: "Pelajari visi dan teknologi ZamTools: alat pemrosesan gambar berbasis browser yang mengutamakan kecepatan dan perlindungan privasi.",
      h1: "Tentang ZamTools",
      lead: "Utilitas gambar berbasis peramban yang cepat, sederhana, dan menjaga privasi, dirancang untuk para kreator dan pengguna di seluruh dunia.",
      missionTitle: "Misi Kami",
      missionP1: "ZamTools hadir untuk mempermudah pengolahan media digital sehari-hari. Kami percaya bahwa mengompres, mengubah ukuran, dan mengonversi format gambar harus bisa dilakukan secara instan, gratis, dan aman.",
      missionP2: "Banyak layanan online mengharuskan Anda mengunggah foto ke server mereka. ZamTools berbeda karena menjalankan seluruh algoritma langsung di memori browser Anda menggunakan API HTML5 Canvas.",
      valuesTitle: "Prinsip Utama Kami",
      values: [
        { title: "Pemrosesan Lokal", desc: "Gambar Anda tetap berada di perangkat. Tidak ada berkas yang dikirim ke server luar." },
        { title: "Kecepatan Instan", desc: "Tanpa waktu tunggu transfer jaringan. Operasi berjalan sesuai kecepatan perangkat Anda." },
        { title: "Akses Terbuka", desc: "Tanpa biaya langganan, tanpa pembuatan akun, dan tanpa watermark." },
        { title: "Tampilan Bersih", desc: "Antarmuka ramah pengguna tanpa iklan jebakan atau pop-up mengganggu." }
      ],
      breadcrumb: "Tentang"
    },
    de: {
      title: "Über ZamTools — Schnelle, private Online-Bildwerkzeuge",
      metaDescription: "Erfahren Sie mehr über die Mission von ZamTools: Bildverarbeitung direkt im Browser für maximale Datensicherheit und Geschwindigkeit.",
      h1: "Über ZamTools",
      lead: "Schnelle, einfache und datenschutzfreundliche Web-Tools für Kreative, Entwickler und Anwender weltweit.",
      missionTitle: "Unsere Mission",
      missionP1: "ZamTools wurde ins Leben gerufen, um die Bearbeitung digitaler Bilder so mühelos wie möglich zu gestalten. Das Komprimieren, Skalieren und Konvertieren sollte sekundenschnell, kostenlos und absolut privat sein.",
      missionP2: "Herkömmliche Online-Dienste verlangen das Hochladen persönlicher Dateien auf Cloud-Server. ZamTools verarbeitet alle Bilddaten unmittelbar lokal in Ihrem Browser über HTML5 Canvas und FileReader.",
      valuesTitle: "Unsere Leitprinzipien",
      values: [
        { title: "100 % lokale Verarbeitung", desc: "Ihre Fotos verbleiben auf Ihrem Endgerät. Kein einziges Byte wird übertragen." },
        { title: "Verzögerungsfreie Geschwindigkeit", desc: "Keine Upload-Wartezeiten oder Cloud-Warteschlangen. Alles geschieht in Echtzeit." },
        { title: "Vollkommen kostenfrei", desc: "Keine Abos, keine Zwangsregistrierung und keine störenden Wasserzeichen." },
        { title: "Aufgeräumtes Design", desc: "Klare Benutzerführung ohne irreführende Download-Schaltflächen." }
      ],
      breadcrumb: "Über uns"
    },
    pt: {
      title: "Sobre o ZamTools — Utilitários de Imagem Rápidos e Privados",
      metaDescription: "Conheça o propósito e a tecnologia do ZamTools: ferramentas de imagem processadas localmente no navegador com foco em privacidade.",
      h1: "Sobre o ZamTools",
      lead: "Utilitários práticos, rápidos e estritamente confidenciais, criados para quem valoriza produtividade e segurança de dados.",
      missionTitle: "Nossa Missão",
      missionP1: "O ZamTools foi idealizado para simplificar o tratamento de imagens cotidianas. Acreditamos que comprimir, redimensionar e converter arquivos deve ser um processo ágil, gratuito e totalmente seguro.",
      missionP2: "Enquanto a maioria dos conversores exige o upload de fotos para servidores distantes, o ZamTools executa os cálculos diretamente no seu navegador através das APIs HTML5 Canvas.",
      valuesTitle: "Nossos Pilares",
      values: [
        { title: "Processamento no Cliente", desc: "Suas fotos nunca saem do seu aparelho. Nenhum arquivo é transferido para servidores." },
        { title: "Velocidade Imediata", desc: "Sem tempo de envio pela rede. As alterações são calculadas na velocidade do seu dispositivo." },
        { title: "Livre de Barreiras", desc: "Sem cadastros, sem assinaturas pagas e sem aplicação de marcas d'água." },
        { title: "Interface Limpa", desc: "Ambiente intuitivo e direto, sem botões falsos ou publicidades invasivas." }
      ],
      breadcrumb: "Sobre"
    },
    it: {
      title: "Chi siamo — ZamTools, utilità per immagini veloci e private",
      metaDescription: "Scopri la missione e l'architettura di ZamTools: strumenti per immagini elaborati direttamente nel browser per la massima riservatezza.",
      h1: "Chi siamo",
      lead: "Strumenti per immagini veloci, semplici e totalmente privati, pensati per creatori, professionisti e utenti di tutto il mondo.",
      missionTitle: "La nostra missione",
      missionP1: "ZamTools nasce con l'obiettivo di rendere immediata e accessibile l'ottimizzazione grafica. Riteniamo che comprimere, ridimensionare e convertire immagini debba essere un'operazione istantanea, gratuita e sicura.",
      missionP2: "La maggior parte dei servizi richiede il caricamento dei tuoi file personali su server cloud. ZamTools esegue invece ogni elaborazione direttamente nella memoria del tuo browser tramite HTML5 Canvas.",
      valuesTitle: "I nostri valori",
      values: [
        { title: "Elaborazione sul dispositivo", desc: "Le tue foto rimangono sul tuo computer o smartphone. Nessun byte viene trasmesso altrove." },
        { title: "Velocità senza attese", desc: "Nessun tempo di upload né code di attesa. Le operazioni sono immediate." },
        { title: "Accesso libero e trasparente", desc: "Nessun account obbligatorio, nessun abbonamento e nessun watermark." },
        { title: "Esperienza d'uso pulita", desc: "Interfacce chiare e funzionali, prive di elementi ingannevoli o popup invasivi." }
      ],
      breadcrumb: "Chi siamo"
    }
  },

  contact: {
    en: {
      title: "Contact ZamTools — Feedback & Support",
      metaDescription: "Get in touch with the ZamTools development team. Submit feedback, feature requests, or report technical issues.",
      h1: "Contact ZamTools",
      lead: "Have a suggestion, bug report, or feature request? We welcome your input to help improve ZamTools.",
      emailLabel: "Support & Inquiries Email:",
      email: "hello@zamtools.online",
      responseTime: "We typically respond to inquiries within 24–48 business hours.",
      formTitle: "Send Us a Message",
      faqNote: "Before reaching out, check our frequently asked questions for immediate answers.",
      breadcrumb: "Contact"
    },
    fr: {
      title: "Contactez ZamTools — Assistance et retours",
      metaDescription: "Prenez contact avec l'équipe ZamTools. Envoyez vos suggestions d'outils, retours d'expérience ou signalements de bugs.",
      h1: "Contactez ZamTools",
      lead: "Une suggestion, une remarque ou un problème technique à signaler ? Votre avis nous aide à faire évoluer ZamTools.",
      emailLabel: "E-mail d'assistance et contact :",
      email: "hello@zamtools.online",
      responseTime: "Nous répondons généralement aux demandes sous 24 à 48 heures ouvrées.",
      formTitle: "Nous envoyer un message",
      faqNote: "Avant de nous écrire, pensez à consulter notre foire aux questions pour une réponse immédiate.",
      breadcrumb: "Contact"
    },
    es: {
      title: "Contacto ZamTools — Soporte y sugerencias",
      metaDescription: "Contacta con el equipo de ZamTools. Envía sugerencias, ideas de nuevas herramientas o reportes de incidencias técnicas.",
      h1: "Contacto ZamTools",
      lead: "¿Tienes una sugerencia, pregunta o reporte técnico? Tu opinión nos ayuda a perfeccionar ZamTools día a día.",
      emailLabel: "Correo de contacto y asistencia:",
      email: "hello@zamtools.online",
      responseTime: "Normalmente respondemos en un plazo de 24 a 48 horas laborables.",
      formTitle: "Envíanos un mensaje",
      faqNote: "Antes de escribirnos, revisa nuestra sección de preguntas frecuentes para resolver dudas habituales.",
      breadcrumb: "Contacto"
    },
    id: {
      title: "Kontak ZamTools — Bantuan & Masukan",
      metaDescription: "Hubungi tim pengembang ZamTools. Sampaikan masukan, saran fitur baru, atau laporkan kendala teknis.",
      h1: "Hubungi ZamTools",
      lead: "Punya saran, pertanyaan, atau laporan kendala teknis? Masukan Anda sangat berharga bagi perkembangan ZamTools.",
      emailLabel: "Email Dukungan & Kontak:",
      email: "hello@zamtools.online",
      responseTime: "Kami biasanya merespons pesan dalam 24–48 jam kerja.",
      formTitle: "Kirim Pesan",
      faqNote: "Sebelum menghubungi kami, periksa halaman FAQ untuk melihat jawaban langsung atas pertanyaan umum.",
      breadcrumb: "Kontak"
    },
    de: {
      title: "Kontakt zu ZamTools — Feedback & Support",
      metaDescription: "Treten Sie mit dem ZamTools-Team in Kontakt. Senden Sie Feedback, Funktionswünsche oder technische Fehlermeldungen.",
      h1: "Kontakt zu ZamTools",
      lead: "Haben Sie Feedback, Fragen oder Vorschläge für neue Tools? Wir freuen uns über Ihre Rückmeldung.",
      emailLabel: "E-Mail für Anfragen und Support:",
      email: "hello@zamtools.online",
      responseTime: "Wir antworten in der Regel innerhalb von 24 bis 48 Geschäftsstunden.",
      formTitle: "Nachricht senden",
      faqNote: "Viele Antworten auf häufige Fragen finden Sie auch direkt in unserem FAQ-Bereich.",
      breadcrumb: "Kontakt"
    },
    pt: {
      title: "Contato ZamTools — Suporte e Sugestões",
      metaDescription: "Entre em contato com a equipe do ZamTools. Envie ideias, sugestões de novos recursos ou reporte problemas.",
      h1: "Fale Conosco",
      lead: "Tem alguma sugestão, dúvida ou problema técnico a relatar? Sua mensagem nos ajuda a melhorar o ZamTools.",
      emailLabel: "E-mail de suporte e contato:",
      email: "hello@zamtools.online",
      responseTime: "Costumamos responder às mensagens em até 24 a 48 horas úteis.",
      formTitle: "Envie sua mensagem",
      faqNote: "Antes de nos escrever, confira nossa seção de perguntas frequentes para obter respostas rápidas.",
      breadcrumb: "Contato"
    },
    it: {
      title: "Contatti ZamTools — Supporto e suggerimenti",
      metaDescription: "Mettiti in contatto con il team di ZamTools. Invia suggerimenti, nuove idee o segnalazioni tecniche.",
      h1: "Contatti ZamTools",
      lead: "Hai un suggerimento, una domanda o una segnalazione tecnica? Il tuo riscontro è prezioso per noi.",
      emailLabel: "Email di supporto e informazioni:",
      email: "hello@zamtools.online",
      responseTime: "Rispondiamo solitamente entro 24-48 ore lavorative.",
      formTitle: "Inviaci un messaggio",
      faqNote: "Prima di contattarci, consulta la nostra sezione FAQ per trovare subito le risposte più comuni.",
      breadcrumb: "Contatti"
    }
  },

  faq: {
    en: {
      title: "Frequently Asked Questions (FAQ) | ZamTools",
      metaDescription: "Detailed answers about ZamTools: browser processing mechanics, privacy guarantees, supported formats, and troubleshooting tips.",
      h1: "Frequently Asked Questions",
      lead: "Find quick, clear answers to common questions about ZamTools and our browser-based image utilities.",
      faqs: [
        { q: "Is ZamTools completely free to use?", a: "Yes. All 20 tools on ZamTools are 100% free with no subscriptions, usage fees, or hidden paywalls." },
        { q: "Are my photos uploaded to a remote server?", a: "No. All supported tools process your images directly in your web browser using HTML5 Canvas, Blob, and FileReader APIs. Your files never leave your device." },
        { q: "Which formats does ZamTools support?", a: "We support JPG, JPEG, PNG, and WebP natively across all editing, compression, and conversion tools, plus Base64 strings for developer utilities." },
        { q: "Can ZamTools handle high-resolution photos?", a: "Yes. Most tools comfortably handle 24MP to 48MP photos from modern smartphones and digital cameras, subject only to your device's available RAM." },
        { q: "Do I need to create an account or log in?", a: "No account is required. Open any tool, drop your image, and save the result immediately." },
        { q: "Does ZamTools add watermarks to my exported images?", a: "Never. Your output files are clean, untouched, and completely free of any branding or watermarks." }
      ],
      breadcrumb: "FAQ"
    },
    fr: {
      title: "Foire aux questions (FAQ) | ZamTools",
      metaDescription: "Toutes les réponses sur ZamTools : fonctionnement du traitement local, respect de la vie privée, formats supportés et astuces.",
      h1: "Foire aux questions",
      lead: "Retrouvez des réponses claires et détaillées sur le fonctionnement de ZamTools et la confidentialité de vos images.",
      faqs: [
        { q: "Les outils ZamTools sont-ils vraiment gratuits ?", a: "Oui. L'ensemble des 20 outils est 100 % gratuit, sans frais cachés, sans abonnement ni limite d'utilisation quotidienne." },
        { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non. Les outils traitent vos images directement dans votre navigateur via les API HTML5 Canvas et Blob. Vos fichiers restent en permanence sur votre appareil." },
        { q: "Quels formats d'image sont acceptés ?", a: "Nous prenons en charge le JPG, JPEG, PNG et WebP sur tous nos outils, ainsi que le format Base64 pour les utilitaires développeurs." },
        { q: "Puis-je traiter des photos en haute résolution ?", a: "Oui. Nos outils gèrent sans difficulté des clichés de 24 à 48 mégapixels, la seule limite étant la mémoire vive disponible sur votre appareil." },
        { q: "Faut-il créer un compte pour utiliser le site ?", a: "Aucun compte n'est nécessaire. Accédez à l'outil souhaité, glissez votre fichier et téléchargez le résultat sans attendre." },
        { q: "Ajoutez-vous des filigranes sur les images exportées ?", a: "Jamais. Vos fichiers résultants sont vierges de tout marquage ou filigrane promotionnel." }
      ],
      breadcrumb: "FAQ"
    },
    es: {
      title: "Preguntas frecuentes (FAQ) | ZamTools",
      metaDescription: "Respuestas claras sobre ZamTools: procesamiento local, garantías de privacidad, formatos compatibles y resolución de dudas.",
      h1: "Preguntas frecuentes",
      lead: "Encuentra respuestas inmediatas a las dudas más comunes sobre ZamTools y el funcionamiento de nuestras herramientas.",
      faqs: [
        { q: "¿ZamTools es completamente gratis?", a: "Sí. Las 20 herramientas de ZamTools son 100 % gratuitas, sin costes ocultos ni suscripciones de pago." },
        { q: "¿Se suben mis fotos a algún servidor?", a: "No. Todas las herramientas procesan tus imágenes localmente en tu navegador con HTML5 Canvas y Blob. Tus archivos nunca salen de tu equipo." },
        { q: "¿Qué formatos son compatibles?", a: "Admitimos de forma nativa JPG, JPEG, PNG y WebP en todas las utilidades, además de cadenas Base64 para herramientas técnicas." },
        { q: "¿Puedo procesar imágenes de alta resolución?", a: "Sí. La mayoría de herramientas procesa sin problemas imágenes de 24MP a 48MP de smartphones y cámaras digitales." },
        { q: "¿Tengo que registrarme o iniciar sesión?", a: "No es necesario crear ninguna cuenta. Arrastra tu foto, ajusta los parámetros y descarga el resultado al instante." },
        { q: "¿Añaden marcas de agua a mis imágenes?", a: "En absoluto. Tus archivos descargados están limpios y libres de marcas de agua o sellos publicitarios." }
      ],
      breadcrumb: "FAQ"
    },
    id: {
      title: "Pertanyaan yang Sering Diajukan (FAQ) | ZamTools",
      metaDescription: "Jawaban lengkap tentang ZamTools: cara kerja proses lokal di browser, privasi berkas, format yang didukung, dan tips penggunaan.",
      h1: "Pertanyaan yang Sering Diajukan",
      lead: "Temukan jawaban cepat dan jelas atas pertanyaan umum seputar ZamTools dan utilitas gambar berbasis browser kami.",
      faqs: [
        { q: "Apakah ZamTools benar-benar gratis digunakan?", a: "Ya. Semua 20 alat di ZamTools 100% gratis tanpa biaya tersembunyi, tanpa langganan, dan tanpa kuota harian." },
        { q: "Apakah foto saya diunggah ke server?", a: "Tidak. Semua alat memproses file secara lokal di browser Anda melalui HTML5 Canvas dan Blob API. Foto Anda tidak pernah meninggalkan perangkat Anda." },
        { q: "Format file apa saja yang didukung?", a: "Kami mendukung JPG, JPEG, PNG, dan WebP di semua alat, serta teks Base64 untuk utilitas pengembang." },
        { q: "Bisakah memproses foto beresolusi tinggi?", a: "Ya. Mayoritas alat dapat memproses foto 24MP hingga 48MP dengan lancar, bergantung pada kapasitas RAM perangkat Anda." },
        { q: "Apakah saya harus mendaftar atau membuat akun?", a: "Tidak perlu akun sama sekali. Buka alat yang diinginkan, masukkan gambar, dan unduh hasilnya langsung." },
        { q: "Apakah ZamTools memberi watermark pada hasil gambar?", a: "Sama sekali tidak. Gambar yang Anda unduh bersih tanpa tanda air atau logo promosi apa pun." }
      ],
      breadcrumb: "FAQ"
    },
    de: {
      title: "Häufig gestellte Fragen (FAQ) | ZamTools",
      metaDescription: "Detaillierte Antworten zu ZamTools: Lokale Browser-Verarbeitung, Datenschutzgarantien, unterstützte Bildformate und praktische Tipps.",
      h1: "Häufig gestellte Fragen",
      lead: "Hier finden Sie schnelle und präzise Antworten auf die wichtigsten Fragen rund um ZamTools und unsere Bildwerkzeuge.",
      faqs: [
        { q: "Ist ZamTools dauerhaft kostenlos?", a: "Ja. Alle 20 Bildwerkzeuge auf ZamTools können zu 100 % kostenlos und ohne versteckte Gebühren genutzt werden." },
        { q: "Werden meine Bilder auf externe Server übertragen?", a: "Nein. Die Werkzeuge verarbeiten Ihre Dateien lokal im Webbrowser über HTML5 Canvas und Blob APIs. Ihre Daten verlassen Ihr Gerät nicht." },
        { q: "Welche Bildformate werden unterstützt?", a: "Wir unterstützen JPG, JPEG, PNG und WebP uneingeschränkt, sowie Base64-Strings für Entwickler-Tools." },
        { q: "Können auch hochauflösende Fotos verarbeitet werden?", a: "Ja. Fotos mit 24 bis 48 Megapixeln aus modernen Smartphones lassen sich in der Regel problemlos bearbeiten." },
        { q: "Muss ich ein Benutzerkonto erstellen?", a: "Nein, eine Registrierung ist nicht erforderlich. Werkzeug aufrufen, Bild einfügen und das Ergebnis direkt sichern." },
        { q: "Werden Wasserzeichen auf meine Bilder gesetzt?", a: "Niemals. Ihre exportierten Dateien bleiben vollkommen frei von Kennzeichnungen oder Werbelogos." }
      ],
      breadcrumb: "FAQ"
    },
    pt: {
      title: "Perguntas Frequentes (FAQ) | ZamTools",
      metaDescription: "Respostas detalhadas sobre o ZamTools: processamento no navegador, garantias de privacidade, formatos aceitos e funcionamento.",
      h1: "Perguntas Frequentes",
      lead: "Encontre respostas diretas e esclarecedoras para as dúvidas mais comuns sobre o uso do ZamTools.",
      faqs: [
        { q: "O ZamTools é totalmente gratuito?", a: "Sim. Todas as 20 ferramentas do ZamTools são 100% gratuitas, sem taxas ocultas nem planos pagos." },
        { q: "Minhas fotos são enviadas para servidores?", a: "Não. Nossas ferramentas processam os arquivos diretamente no navegador usando HTML5 Canvas e Blob. Suas fotos permanecem no seu aparelho." },
        { q: "Quais formatos são aceitos?", a: "Oferecemos suporte nativo para JPG, JPEG, PNG e WebP em todas as funções, além de strings Base64 para desenvolvedores." },
        { q: "É possível editar fotos de alta resolução?", a: "Sim. Nossas ferramentas suportam fotos de 24MP a 48MP provenientes de smartphones modernos e câmeras fotográficas." },
        { q: "Preciso criar uma conta para usar as ferramentas?", a: "Nenhum cadastro é exigido. Basta acessar a página do utilitário, ajustar sua foto e baixar o arquivo final." },
        { q: "O ZamTools coloca marcas d'água nas imagens?", a: "Nunca. Seus arquivos exportados permanecem totalmente limpos e sem marcas de água." }
      ],
      breadcrumb: "FAQ"
    },
    it: {
      title: "Domande frequenti (FAQ) | ZamTools",
      metaDescription: "Tutte le risposte su ZamTools: funzionamento locale nel browser, tutela della privacy, formati gestiti e istruzioni pratiche.",
      h1: "Domande frequenti",
      lead: "Trova risposte immediate e dettagliate alle domande più frequenti su ZamTools e sulle nostre utilità per immagini.",
      faqs: [
        { q: "ZamTools è davvero gratuito?", a: "Sì. Tutti i 20 strumenti su ZamTools sono utilizzabili al 100% gratuitamente, senza costi nascosti né piani in abbonamento." },
        { q: "Le mie immagini vengono salvate sui vostri server?", a: "No. Tutti gli strumenti compatibili operano direttamente nel tuo browser tramite HTML5 Canvas e Blob. I file non lasciano il tuo dispositivo." },
        { q: "Quali formati grafici sono supportati?", a: "Supportiamo nativamente JPG, JPEG, PNG e WebP, oltre a stringhe Base64 per gli strumenti dedicati agli sviluppatori." },
        { q: "Posso elaborare foto ad altissima risoluzione?", a: "Sì. È possibile elaborare scatti da 24MP a 48MP realizzati con i più recenti smartphone e reflex digitali." },
        { q: "È necessario registrarsi o accedere?", a: "Non serve alcun account. Apri lo strumento, carica la foto e scarica il file ottimizzato in pochi istanti." },
        { q: "Vengono aggiunte filigrane alle foto salvate?", a: "Assolutamente no. I file scaricati sono privi di watermark, loghi promozionali o marchi applicati." }
      ],
      breadcrumb: "FAQ"
    }
  },

  privacyPolicy: {
    en: {
      title: "Privacy Policy | ZamTools",
      metaDescription: "Our commitment to user privacy: client-side processing, no image data collection, and transparent web practices.",
      h1: "Privacy Policy",
      lastUpdated: "Last updated: September 29, 2026",
      legalNotice: "",
      lead: "At ZamTools, we take your privacy seriously. This document outlines how your data is handled when you use our website.",
      sections: [
        {
          heading: "1. No Image Storage or Uploads",
          content: "ZamTools operates on a local client-side processing architecture. When you select or drop a picture into any of our image tools, the file is read directly into your device's browser memory using the HTML5 FileReader, Canvas, and WebAssembly APIs. Your images are never transmitted over the internet to our web servers, never stored in remote databases, and never inspected by third parties."
        },
        {
          heading: "2. Analytical Data",
          content: "We may collect non-personally identifiable technical telemetry (such as browser type, operating system, language preference, and page visit counts) strictly to monitor platform performance and diagnose user experience bugs. No personal identity information or image payloads are linked to this data."
        },
        {
          heading: "3. Local Browser Storage",
          content: "We use browser localStorage solely to remember non-sensitive user preferences, such as your dismissed language suggestion banner or theme choice. You can clear this storage at any time via your browser settings."
        },
        {
          heading: "4. Third-Party Links & Services",
          content: "Our website may contain links to external resources or guides. We do not control and are not responsible for the privacy practices of external web destinations."
        }
      ],
      breadcrumb: "Privacy Policy"
    },
    fr: {
      title: "Politique de confidentialité | ZamTools",
      metaDescription: "Notre engagement pour votre vie privée : traitement local dans le navigateur, aucune collecte d'images et transparence totale.",
      h1: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      legalNotice: "Avis important : Cette traduction est fournie à titre indicatif pour votre confort. En cas de divergence ou pour toute référence formelle, la version anglaise (English) demeure la référence principale.",
      lead: "Chez ZamTools, nous accordons une importance primordiale à votre vie privée. Ce document détaille le traitement de vos données lors de votre navigation.",
      sections: [
        {
          heading: "1. Zéro stockage et zéro téléversement d'images",
          content: "ZamTools repose sur une architecture d'exécution locale. Lorsque vous importez un fichier dans nos outils, celui-ci est chargé directement dans la mémoire vive de votre navigateur via les API HTML5. Vos images ne sont jamais transmises à des serveurs distants, jamais stockées dans des bases de données et jamais analysées par des tiers."
        },
        {
          heading: "2. Données techniques et mesure d'audience",
          content: "Nous pouvons collecter des données techniques anonymes (type de navigateur, système d'exploitation, langue choisie, pages visitées) dans le seul but de surveiller le bon fonctionnement du site et d'optimiser l'expérience utilisateur. Aucune image ni donnée nominative n'est associée à ces mesures."
        },
        {
          heading: "3. Stockage local (localStorage)",
          content: "Nous utilisons le stockage local du navigateur uniquement pour mémoriser des préférences non sensibles, telles que la fermeture du bandeau de langue. Vous pouvez effacer ces données à tout moment via les paramètres de votre navigateur."
        },
        {
          heading: "4. Liens externes",
          content: "Notre site peut contenir des liens vers des ressources externes. Nous n'exerçons aucun contrôle sur les politiques de confidentialité de ces sites tiers."
        }
      ],
      breadcrumb: "Confidentialité"
    },
    es: {
      title: "Política de privacidad | ZamTools",
      metaDescription: "Nuestro compromiso con la privacidad: procesamiento local en el navegador, sin subidas de imágenes y con total transparencia.",
      h1: "Política de privacidad",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      legalNotice: "Aviso importante: Esta traducción se ofrece a título informativo para facilitar su comprensión. En caso de discrepancia legal, la versión en inglés (English) se considera la referencia principal.",
      lead: "En ZamTools protegemos rigurosamente tu privacidad. Este documento detalla cómo se gestiona la información al usar nuestra plataforma.",
      sections: [
        {
          heading: "1. Sin almacenamiento ni subida de imágenes",
          content: "ZamTools opera mediante una arquitectura de procesamiento local en el navegador. Al seleccionar una imagen en cualquiera de nuestras herramientas, el archivo se procesa en la memoria de tu dispositivo mediante HTML5 Canvas y FileReader. Tus fotos nunca se envían por internet a servidores remotos ni se almacenan en bases de datos externas."
        },
        {
          heading: "2. Métricas y datos de telemetría técnica",
          content: "Podemos registrar datos técnicos anónimos (navegador, sistema operativo, idioma preferido y visitas de página) con el único fin de garantizar la estabilidad de la web y corregir errores. Ninguna foto ni dato identificativo se vincula a estos registros."
        },
        {
          heading: "3. Almacenamiento local del navegador",
          content: "Utilizamos localStorage únicamente para recordar preferencias básicas, como el idioma elegido o el cierre del aviso informativo. Puedes vaciar este almacenamiento cuando lo desees desde tu navegador."
        },
        {
          heading: "4. Enlaces a terceros",
          content: "Nuestra web puede incluir enlaces hacia otros sitios o guías externas, cuyas políticas de privacidad escapan a nuestro control."
        }
      ],
      breadcrumb: "Privacidad"
    },
    id: {
      title: "Kebijakan Privasi | ZamTools",
      metaDescription: "Komitmen kami terhadap privasi Anda: pemrosesan lokal di browser, tanpa penyimpanan file gambar, dan transparansi penuh.",
      h1: "Kebijakan Privasi",
      lastUpdated: "Terakhir diperbarui: 29 September 2026",
      legalNotice: "Pemberitahuan penting: Terjemahan ini disediakan untuk kemudahan Anda. Jika terjadi perbedaan penafsiran hukum, versi bahasa Inggris (English) menjadi rujukan utama.",
      lead: "Di ZamTools, privasi Anda adalah prioritas utama. Dokumen ini menjelaskan bagaimana data dikelola saat Anda menggunakan situs kami.",
      sections: [
        {
          heading: "1. Tidak Ada Penyimpanan atau Pengunggahan Gambar",
          content: "ZamTools beroperasi dengan arsitektur pemrosesan lokal di browser pengguna. Saat Anda memasukkan gambar ke dalam alat kami, berkas tersebut dibaca langsung ke dalam memori peramban Anda melalui API HTML5. Foto Anda tidak pernah dikirim melalui internet ke server kami dan tidak pernah disimpan dalam database eksternal."
        },
        {
          heading: "2. Data Analitik dan Teknis",
          content: "Kami dapat mencatat data teknis non-pribadi (seperti jenis peramban, sistem operasi, pilihan bahasa, dan halaman yang diakses) semata-mata untuk memantau kinerja situs web dan memperbaiki bug."
        },
        {
          heading: "3. Penyimpanan Lokal Browser",
          content: "Kami menggunakan localStorage browser hanya untuk menyimpan preferensi ringan seperti penutupan spanduk bahasa. Anda dapat menghapus data ini kapan saja melalui pengaturan browser Anda."
        },
        {
          heading: "4. Tautan Pihak Ketiga",
          content: "Situs web kami mungkin memuat tautan menuju situs eksternal. Kami tidak bertanggung jawab atas kebijakan privasi yang diterapkan oleh situs pihak ketiga tersebut."
        }
      ],
      breadcrumb: "Privasi"
    },
    de: {
      title: "Datenschutzerklärung | ZamTools",
      metaDescription: "Unser Versprechen für Ihre Privatsphäre: Lokale Verarbeitung im Webbrowser, keine Speicherung von Bilddateien und volle Transparenz.",
      h1: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      legalNotice: "Wichtiger Hinweis: Diese Übersetzung dient ausschließlich Informationszwecken. Bei rechtlichen Abweichungen gilt die englische Originalfassung (English) als maßgeblich.",
      lead: "Der Schutz Ihrer persönlichen Daten hat bei ZamTools höchste Priorität. Diese Richtlinie erklärt den Umgang mit Daten bei der Nutzung unserer Dienste.",
      sections: [
        {
          heading: "1. Keine Speicherung oder Übertragung von Bilddaten",
          content: "ZamTools nutzt eine strikt clientseitige Verarbeitungsarchitektur. Wenn Sie ein Bild in unsere Werkzeuge laden, wird dieses direkt im lokalen Arbeitsspeicher Ihres Browsers verarbeitet. Ihre Fotos werden zu keinem Zeitpunkt an unsere Server übertragen, dort gespeichert oder von Dritten eingesehen."
        },
        {
          heading: "2. Technische Telemetriedaten",
          content: "Wir erfassen gegebenenfalls anonymisierte technische Telemetriedaten (Browser-Typ, Betriebssystem, Spracheinstellungen, Seitenabrufe), um den reibungslosen Betrieb und die Zuverlässigkeit der Plattform sicherzustellen. Es findet keine Verknüpfung mit Bildinhalten statt."
        },
        {
          heading: "3. Lokale Speicherung (localStorage)",
          content: "Wir nutzen den localStorage Ihres Browsers ausschließlich zum Speichern unkritischer Einstellungen, etwa zur Deaktivierung des Sprachhinweises. Sie können diesen Speicher jederzeit über Ihre Browsereinstellungen löschen."
        },
        {
          heading: "4. Externe Links",
          content: "Unsere Webseite kann Verlinkungen zu externen Informationsangeboten enthalten. Wir haben keinen Einfluss auf die Datenschutzpraktiken externer Anbieter."
        }
      ],
      breadcrumb: "Datenschutz"
    },
    pt: {
      title: "Política de Privacidade | ZamTools",
      metaDescription: "Nosso compromisso com a sua privacidade: processamento local no navegador, sem upload de fotos e com transparência total.",
      h1: "Política de Privacidade",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      legalNotice: "Aviso importante: Esta tradução é fornecida para sua conveniência informativa. Em caso de divergência jurídica, a versão em inglês (English) prevalece como referência principal.",
      lead: "No ZamTools, a privacidade dos seus dados é tratada com total seriedade. Conheça as diretrizes de proteção aplicadas em nossa plataforma.",
      sections: [
        {
          heading: "1. Sem Armazenamento nem Upload de Imagens",
          content: "O ZamTools opera com arquitetura de processamento no lado do cliente. Ao carregar uma foto em qualquer uma de nossas ferramentas, o arquivo é lido diretamente na memória do seu navegador através de APIs do HTML5. Suas imagens nunca são enviadas para nossos servidores nem gravadas em bancos de dados."
        },
        {
          heading: "2. Dados Técnicos e Estatísticas",
          content: "Podemos coletar dados técnicos não identificáveis (como modelo de navegador, sistema operacional, idioma selecionado e páginas visualizadas) com a única finalidade de monitorar a estabilidade do sistema."
        },
        {
          heading: "3. Armazenamento Local (localStorage)",
          content: "Utilizamos o localStorage do navegador apenas para registrar preferências simples, como a dispensa do aviso de idioma. Você pode limpar esses dados a qualquer momento nas configurações do seu navegador."
        },
        {
          heading: "4. Links para Terceiros",
          content: "Nossas páginas podem incluir links para referências externas. Não nos responsabilizamos pelas práticas de privacidade de sites de terceiros."
        }
      ],
      breadcrumb: "Privacidade"
    },
    it: {
      title: "Informativa sulla Privacy | ZamTools",
      metaDescription: "Il nostro impegno per la tua privacy: elaborazione locale nel browser, nessun caricamento di immagini e massima trasparenza.",
      h1: "Informativa sulla Privacy",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      legalNotice: "Avviso importante: Questa traduzione è fornita a solo scopo informativo. In caso di discrepanze o controversie legali, la versione in lingua inglese (English) costituisce il riferimento ufficiale primario.",
      lead: "In ZamTools la protezione della tua privacy è fondamentale. Questo documento descrive le modalità di gestione dei dati durante la navigazione sul sito.",
      sections: [
        {
          heading: "1. Nessuna memorizzazione né caricamento di immagini",
          content: "ZamTools adotta un'architettura di elaborazione locale sul client. Quando inserisci un'immagine nei nostri strumenti, il file viene elaborato direttamente nella memoria del tuo browser tramite le API HTML5. Le tue immagini non vengono mai trasmesse su server remoti né archiviate in database esterni."
        },
        {
          heading: "2. Dati tecnici e metriche di utilizzo",
          content: "Possiamo raccogliere dati tecnici anonimi (tipo di browser, sistema operativo, lingua preferita e pagine consultate) esclusivamente per monitorare il corretto funzionamento della piattaforma e risolvere anomalie tecniche."
        },
        {
          heading: "3. Archiviazione locale del browser (localStorage)",
          content: "Impieghiamo il localStorage unicamente per memorizzare preferenze funzionali, come la chiusura del banner di suggerimento lingua. Puoi svuotare tale memoria in ogni momento dalle impostazioni del browser."
        },
        {
          heading: "4. Collegamenti a siti terzi",
          content: "Il nostro sito può contenere collegamenti a risorse o guide esterne. Non esercitiamo alcun controllo sulle politiche di riservatezza adottate da soggetti terzi."
        }
      ],
      breadcrumb: "Privacy"
    }
  },

  terms: {
    en: {
      title: "Terms of Use | ZamTools",
      metaDescription: "Terms of service and guidelines for using ZamTools image utilities.",
      h1: "Terms of Use",
      lastUpdated: "Last updated: September 29, 2026",
      legalNotice: "",
      lead: "By accessing and using ZamTools, you agree to comply with and be bound by the following terms and conditions.",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          content: "By accessing or using the ZamTools website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you disagree with any of these terms, you are prohibited from using this site."
        },
        {
          heading: "2. Permitted Use",
          content: "ZamTools grants you a personal, non-exclusive, revocable license to use our browser-based image utilities for personal or commercial image processing. You agree not to attempt to disrupt, reverse engineer, or abuse our infrastructure."
        },
        {
          heading: "3. Disclaimer of Warranties",
          content: "All tools and content on ZamTools are provided on an 'as-is' and 'as-available' basis without warranties of any kind, either express or implied."
        },
        {
          heading: "4. Limitation of Liability",
          content: "In no event shall ZamTools or its operators be liable for any damages (including, without limitation, loss of data or profit) arising from the use or inability to use our tools."
        }
      ],
      breadcrumb: "Terms"
    },
    fr: {
      title: "Conditions d'utilisation | ZamTools",
      metaDescription: "Conditions générales d'utilisation des outils de traitement d'images ZamTools.",
      h1: "Conditions d'utilisation",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      legalNotice: "Avis important : Cette traduction est fournie à titre indicatif. En cas de divergence juridique, la version anglaise (English) demeure la référence principale.",
      lead: "En accédant au site ZamTools et en utilisant nos utilitaires, vous acceptez d'être lié par les présentes conditions d'utilisation.",
      sections: [
        {
          heading: "1. Acceptation des conditions",
          content: "L'accès et l'utilisation de ZamTools sont soumis à l'acceptation des présentes conditions et de la législation en vigueur. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services."
        },
        {
          heading: "2. Usage autorisé",
          content: "ZamTools vous accorde une licence personnelle et non exclusive d'utilisation de ses outils en ligne à des fins personnelles ou professionnelles. Il est interdit d'entraver le bon fonctionnement de la plateforme."
        },
        {
          heading: "3. Absence de garantie",
          content: "Les outils et contenus de ZamTools sont fournis « en l'état », sans garantie expresse ou tacite quant à leur adéquation à un usage particulier."
        },
        {
          heading: "4. Limitation de responsabilité",
          content: "ZamTools et ses administrateurs ne sauraient être tenus responsables d'éventuels dommages ou pertes de données résultant de l'utilisation de nos utilitaires."
        }
      ],
      breadcrumb: "Conditions"
    },
    es: {
      title: "Términos de uso | ZamTools",
      metaDescription: "Condiciones de servicio y pautas para el uso de las herramientas de imagen de ZamTools.",
      h1: "Términos de uso",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      legalNotice: "Aviso importante: Esta traducción se facilita con fines informativos. En caso de discrepancia legal, prevalecerá la versión en inglés (English).",
      lead: "Al utilizar ZamTools, aceptas cumplir con los siguientes términos y condiciones de servicio.",
      sections: [
        {
          heading: "1. Aceptación de los términos",
          content: "El acceso y uso de ZamTools implica la aceptación plena de estos Términos de uso y de la normativa aplicable. Si no estás de acuerdo, debes abstenerte de utilizar la web."
        },
        {
          heading: "2. Uso autorizado",
          content: "ZamTools te otorga una licencia de uso personal, no exclusiva y revocable para optimizar imágenes para fines personales o comerciales, sin abusar de los recursos del sitio."
        },
        {
          heading: "3. Exclusión de garantías",
          content: "Las herramientas y contenidos se ofrecen «tal cual» y según disponibilidad, sin garantías de ningún tipo respecto a resultados específicos."
        },
        {
          heading: "4. Limitación de responsabilidad",
          content: "ZamTools y sus creadores no serán responsables de posibles pérdidas de datos o daños derivados del uso o de la imposibilidad de uso de las herramientas."
        }
      ],
      breadcrumb: "Términos"
    },
    id: {
      title: "Ketentuan Layanan | ZamTools",
      metaDescription: "Ketentuan penggunaan dan aturan layanan utilitas gambar ZamTools.",
      h1: "Ketentuan Layanan",
      lastUpdated: "Terakhir diperbarui: 29 September 2026",
      legalNotice: "Pemberitahuan penting: Terjemahan ini disediakan untuk kemudahan pemahaman. Jika timbul perbedaan hukum, versi bahasa Inggris (English) menjadi acuan utama.",
      lead: "Dengan mengakses dan menggunakan ZamTools, Anda menyetujui ketentuan dan aturan layanan berikut.",
      sections: [
        {
          heading: "1. Penerimaan Ketentuan",
          content: "Dengan mengakses situs ZamTools, Anda setuju untuk terikat oleh Ketentuan Layanan ini serta seluruh hukum yang berlaku."
        },
        {
          heading: "2. Izin Penggunaan",
          content: "ZamTools memberi Anda lisensi non-eksklusif untuk menggunakan utilitas gambar berbasis peramban kami untuk kebutuhan pribadi maupun komersial."
        },
        {
          heading: "3. Penafian Jaminan",
          content: "Layanan kami disediakan 'sebagaimana adanya' tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat."
        },
        {
          heading: "4. Batasan Tanggung Jawab",
          content: "ZamTools tidak bertanggung jawab atas kerugian atau kehilangan data yang mungkin timbul dari penggunaan atau ketidakmampuan menggunakan alat kami."
        }
      ],
      breadcrumb: "Ketentuan"
    },
    de: {
      title: "Nutzungsbedingungen | ZamTools",
      metaDescription: "Nutzungsbedingungen und Richtlinien für die Nutzung der Bildtools auf ZamTools.",
      h1: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      legalNotice: "Wichtiger Hinweis: Diese Übersetzung dient Informationszwecken. Im Falle rechtlicher Streitigkeiten ist die englische Fassung (English) maßgeblich.",
      lead: "Mit dem Zugriff auf ZamTools und der Nutzung unserer Werkzeuge erklären Sie sich mit den folgenden Bedingungen einverstanden.",
      sections: [
        {
          heading: "1. Annahme der Bedingungen",
          content: "Die Nutzung der Webseite ZamTools unterliegt diesen Nutzungsbedingungen sowie den geltenden gesetzlichen Bestimmungen."
        },
        {
          heading: "2. Zulässige Nutzung",
          content: "ZamTools gewährt Ihnen eine einfache, nicht übertragbare Lizenz zur Nutzung der browserbasierten Werkzeuge für private und gewerbliche Bildbearbeitungszwecke."
        },
        {
          heading: "3. Gewährleistungsausschluss",
          content: "Alle Werkzeuge und Inhalte werden ohne Mängelgewähr und nach Verfügbarkeit bereitgestellt."
        },
        {
          heading: "4. Haftungsbeschränkung",
          content: "ZamTools haftet nicht für Schäden oder Datenverluste, die aus der Nutzung oder Nichtverfügbarkeit der Tools entstehen."
        }
      ],
      breadcrumb: "Bedingungen"
    },
    pt: {
      title: "Termos de Uso | ZamTools",
      metaDescription: "Termos de serviço e diretrizes para o uso dos utilitários de imagem do ZamTools.",
      h1: "Termos de Uso",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      legalNotice: "Aviso importante: Esta tradução tem finalidade informativa. Em caso de divergências legais, a versão em inglês (English) é o documento oficial de referência.",
      lead: "Ao acessar e utilizar o ZamTools, você concorda com os termos e condições descritos a seguir.",
      sections: [
        {
          heading: "1. Aceitação dos Termos",
          content: "Ao acessar o site ZamTools, você concorda em cumprir estes Termos de Uso e todas as legislações aplicáveis."
        },
        {
          heading: "2. Licença de Uso",
          content: "Concedemos a você uma licença pessoal e revogável para utilizar nossas ferramentas de imagem para fins pessoais ou profissionais."
        },
        {
          heading: "3. Isenção de Garantias",
          content: "Os serviços e conteúdos são oferecidos 'no estado em que se encontram', sem garantias implícitas ou explícitas de qualquer natureza."
        },
        {
          heading: "4. Limitação de Responsabilidade",
          content: "O ZamTools não se responsabiliza por perdas de dados ou danos resultantes do uso das nossas ferramentas."
        }
      ],
      breadcrumb: "Termos"
    },
    it: {
      title: "Termini di Servizio | ZamTools",
      metaDescription: "Condizioni generali di utilizzo e linee guida per le utilità grafiche di ZamTools.",
      h1: "Termini di Servizio",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      legalNotice: "Avviso importante: Questa traduzione è resa disponibile a titolo informativo. In caso di discrepanze legali, la versione in lingua inglese (English) rimane il testo ufficiale di riferimento.",
      lead: "L'accesso e l'uso di ZamTools comportano l'accettazione espressa dei seguenti termini e condizioni contrattuali.",
      sections: [
        {
          heading: "1. Accettazione dei termini",
          content: "Accedendo al sito web ZamTools, accetti di essere vincolato dai presenti Termini di servizio e da tutte le leggi vigenti applicabili."
        },
        {
          heading: "2. Uso consentito",
          content: "ZamTools ti concede una licenza non esclusiva e revocabile per utilizzare gli strumenti per elaborare immagini personali o professionali."
        },
        {
          heading: "3. Esclusione di garanzia",
          content: "I servizi e i contenuti sono forniti 'così come sono', senza alcuna garanzia esplicita o implicita circa la continuità del servizio."
        },
        {
          heading: "4. Limitazione di responsabilità",
          content: "ZamTools e i suoi gestori non saranno responsabili per eventuali danni diretti o indiretti o perdite di dati derivanti dall'utilizzo degli strumenti."
        }
      ],
      breadcrumb: "Termini"
    }
  },

  disclaimer: {
    en: {
      title: "Disclaimer | ZamTools",
      metaDescription: "Legal disclaimer regarding accuracy, tool outputs, and informational resources on ZamTools.",
      h1: "Disclaimer",
      lastUpdated: "Last updated: September 29, 2026",
      legalNotice: "",
      lead: "The information and software tools provided on ZamTools are published for general informational and utility purposes.",
      sections: [
        {
          heading: "1. General Information",
          content: "The materials on ZamTools are provided on an 'as is' basis. While we strive to ensure image algorithms perform accurately across browsers, ZamTools makes no warranties regarding absolute mathematical precision or uninterrupted availability."
        },
        {
          heading: "2. User Responsibility",
          content: "Users are solely responsible for ensuring that images processed through ZamTools meet the technical requirements of third-party authorities (e.g. passport agencies, immigration portals, examination bodies)."
        }
      ],
      breadcrumb: "Disclaimer"
    },
    fr: {
      title: "Mentions légales et avertissement | ZamTools",
      metaDescription: "Mentions légales et avertissement concernant l'utilisation des outils et guides d'optimisation d'image ZamTools.",
      h1: "Mentions légales & Avertissement",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      legalNotice: "Avis important : Cette traduction est fournie à titre indicatif. En cas de litige, la version anglaise (English) fait foi.",
      lead: "Les informations et utilitaires fournis sur ZamTools sont mis à disposition à des fins pratiques et informatives générales.",
      sections: [
        {
          heading: "1. Informations générales",
          content: "Les outils de ZamTools sont proposés « en l'état ». Bien que nous veillions à la rigueur de nos algorithmes, nous ne pouvons garantir une disponibilité continue ou une compatibilité absolue avec tous les terminaux."
        },
        {
          heading: "2. Responsabilité de l'utilisateur",
          content: "Il incombe à chaque utilisateur de vérifier que les fichiers obtenus respectent les normes exigées par les tiers (administrations, organismes d'examen, consulats)."
        }
      ],
      breadcrumb: "Mentions légales"
    },
    es: {
      title: "Aviso legal | ZamTools",
      metaDescription: "Aviso legal sobre la exactitud, resultados de herramientas y recursos informativos en ZamTools.",
      h1: "Aviso legal",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      legalNotice: "Aviso importante: Esta traducción se proporciona con carácter informativo. En caso de disputa, la versión en inglés (English) se considera la referencia oficial.",
      lead: "La información y herramientas disponibles en ZamTools se ofrecen con fines prácticos y divulgativos generales.",
      sections: [
        {
          heading: "1. Información general",
          content: "Los recursos de ZamTools se proporcionan tal cual. Aunque cuidamos al máximo la exactitud técnica de los algoritmos en el navegador, no podemos garantizar una precisión absoluta o disponibilidad ininterrumpida."
        },
        {
          heading: "2. Responsabilidad del usuario",
          content: "Es responsabilidad exclusiva del usuario verificar que las imágenes generadas cumplan los requisitos específicos de entidades oficiales (pasaportes, oposiciones, trámites consulares)."
        }
      ],
      breadcrumb: "Aviso legal"
    },
    id: {
      title: "Penafian (Disclaimer) | ZamTools",
      metaDescription: "Penafian hukum mengenai akurasi, hasil pemrosesan alat, dan materi informasi di ZamTools.",
      h1: "Penafian",
      lastUpdated: "Terakhir diperbarui: 29 September 2026",
      legalNotice: "Pemberitahuan penting: Terjemahan ini disediakan untuk kemudahan Anda. Versi bahasa Inggris (English) merupakan rujukan hukum utama.",
      lead: "Informasi dan utilitas perangkat lunak di ZamTools disediakan untuk tujuan penggunaan praktis dan informatif umum.",
      sections: [
        {
          heading: "1. Informasi Umum",
          content: "Materi di ZamTools disediakan apa adanya. Kami berupaya memastikan keakuratan hasil pengolahan gambar, namun tidak memberikan jaminan mutlak atas ketiadaan kesalahan teknis."
        },
        {
          heading: "2. Tanggung Jawab Pengguna",
          content: "Pengguna bertanggung jawab penuh memastikan bahwa berkas foto yang dihasilkan memenuhi persyaratan resmi instansi atau lembaga penerima."
        }
      ],
      breadcrumb: "Penafian"
    },
    de: {
      title: "Haftungsausschluss (Disclaimer) | ZamTools",
      metaDescription: "Rechtlicher Hinweis zu Genauigkeit, Werkzeugausgaben und Informationsangeboten auf ZamTools.",
      h1: "Haftungsausschluss",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      legalNotice: "Wichtiger Hinweis: Diese Übersetzung dient lediglich Ihrer Information. Maßgeblich ist die englische Version (English).",
      lead: "Die auf ZamTools bereitgestellten Inhalte und Werkzeuge dienen allgemeinen praktischen Informationszwecken.",
      sections: [
        {
          heading: "1. Allgemeine Hinweise",
          content: "Alle Werkzeuge auf ZamTools werden ohne Mängelgewähr bereitgestellt. Wir bemühen uns um höchste Präzision, können jedoch keine Haftung für fehlerfreie oder unterbrechungsfreie Funktion übernehmen."
        },
        {
          heading: "2. Eigenverantwortung des Nutzers",
          content: "Nutzer sind selbst dafür verantwortlich zu prüfen, ob exportierte Bilddateien den behördlichen Richtlinien für Visa, Pässe oder Bewerbungen genügen."
        }
      ],
      breadcrumb: "Haftungsausschluss"
    },
    pt: {
      title: "Aviso Legal (Disclaimer) | ZamTools",
      metaDescription: "Aviso legal sobre precisão, resultados de ferramentas e recursos informativos do ZamTools.",
      h1: "Aviso Legal",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      legalNotice: "Aviso importante: Esta tradução é disponibilizada para facilidade de leitura. A versão em inglês (English) é a referência primária.",
      lead: "As informações e ferramentas disponibilizadas no ZamTools destinam-se a fins práticos e de utilidade geral.",
      sections: [
        {
          heading: "1. Informações Gerais",
          content: "Os recursos do ZamTools são fornecidos 'no estado em que se encontram'. Apesar dos nossos esforços na calibração dos algoritmos, não garantimos disponibilidade ininterrupta."
        },
        {
          heading: "2. Responsabilidade do Usuário",
          content: "Cabe ao próprio usuário certificar-se de que os arquivos gerados atendem às especificações técnicas exigidas por órgãos públicos e consulados."
        }
      ],
      breadcrumb: "Aviso Legal"
    },
    it: {
      title: "Disclaimer | ZamTools",
      metaDescription: "Note legali e liberatoria circa l'accuratezza e i risultati delle utilità grafiche di ZamTools.",
      h1: "Disclaimer",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      legalNotice: "Avviso importante: Questa traduzione è fornita a solo titolo informativo. La versione in lingua inglese (English) costituisce il riferimento ufficiale.",
      lead: "I contenuti e gli strumenti messi a disposizione su ZamTools hanno finalità pratiche e informative generali.",
      sections: [
        {
          heading: "1. Informazioni generali",
          content: "Gli strumenti di ZamTools sono forniti 'così come sono'. Pur impegnandoci per garantire la massima accuratezza, non rilasciamo garanzie circa la continuità o l'assoluta infallibilità dei calcoli."
        },
        {
          heading: "2. Responsabilità dell'utente",
          content: "L'utente è l'unico responsabile della conformità dei file elaborati rispetto ai requisiti richiesti da enti terzi, consolati o bandi pubblici."
        }
      ],
      breadcrumb: "Disclaimer"
    }
  },

  cookiePolicy: {
    en: {
      title: "Cookie Policy | ZamTools",
      metaDescription: "Information about how ZamTools uses browser local storage and avoids invasive tracking cookies.",
      h1: "Cookie Policy",
      lastUpdated: "Last updated: September 29, 2026",
      legalNotice: "",
      lead: "ZamTools is committed to clean web practices. We do not use intrusive third-party tracking cookies.",
      sections: [
        {
          heading: "1. Minimal Cookie Usage",
          content: "ZamTools does not employ invasive advertising or behavioural tracking cookies. We prioritize user privacy and browser efficiency."
        },
        {
          heading: "2. LocalStorage for Functional Preferences",
          content: "We use HTML5 localStorage to save functional preferences, such as keeping track of whether you dismissed the language suggestion banner or preferred theme settings. This data resides exclusively on your local computer."
        }
      ],
      breadcrumb: "Cookie Policy"
    },
    fr: {
      title: "Gestion des cookies | ZamTools",
      metaDescription: "Informations sur l'absence de cookies traceurs intrusifs et l'usage du stockage local sur ZamTools.",
      h1: "Politique relative aux cookies",
      lastUpdated: "Dernière mise à jour : 29 septembre 2026",
      legalNotice: "Avis important : Cette traduction est fournie à titre indicatif. En cas de divergence, la version anglaise (English) demeure la référence principale.",
      lead: "ZamTools privilégie une expérience web respectueuse de votre vie privée, sans traceurs publicitaires intrusifs.",
      sections: [
        {
          heading: "1. Utilisation minimale de cookies",
          content: "ZamTools n'utilise pas de cookies de profilage publicitaire ou de suivi intrusif à travers les sites web."
        },
        {
          heading: "2. Préférences fonctionnelles (localStorage)",
          content: "Nous utilisons le localStorage de votre navigateur uniquement pour retenir des réglages pratiques, comme la fermeture de la notification de langue. Ces données ne quittent jamais votre machine."
        }
      ],
      breadcrumb: "Cookies"
    },
    es: {
      title: "Política de cookies | ZamTools",
      metaDescription: "Información sobre el uso responsable de almacenamiento local y la ausencia de cookies de rastreo en ZamTools.",
      h1: "Política de cookies",
      lastUpdated: "Última actualización: 29 de septiembre de 2026",
      legalNotice: "Aviso importante: Esta traducción se ofrece a título informativo. La versión en inglés (English) permanece como referencia principal.",
      lead: "ZamTools se compromete con prácticas web limpias y transparentes, sin cookies publicitarias invasivas.",
      sections: [
        {
          heading: "1. Sin cookies de rastreo invasivo",
          content: "ZamTools no emplea cookies de seguimiento conductual ni redes de rastreo publicitario de terceros."
        },
        {
          heading: "2. Uso de localStorage para preferencias",
          content: "Utilizamos el almacenamiento local del navegador únicamente para recordar preferencias técnicas, como haber descartado el aviso de idioma. Puedes borrar estos datos cuando desees."
        }
      ],
      breadcrumb: "Cookies"
    },
    id: {
      title: "Kebijakan Cookie | ZamTools",
      metaDescription: "Informasi mengenai penggunaan penyimpanan lokal peramban dan penolakan cookie pelacak di ZamTools.",
      h1: "Kebijakan Cookie",
      lastUpdated: "Terakhir diperbarui: 29 September 2026",
      legalNotice: "Pemberitahuan penting: Terjemahan ini disediakan untuk kemudahan Anda. Versi bahasa Inggris (English) menjadi rujukan utama.",
      lead: "ZamTools berkomitmen pada praktik web yang bersih. Kami tidak menggunakan cookie pelacak pihak ketiga yang invasif.",
      sections: [
        {
          heading: "1. Penggunaan Cookie Minimal",
          content: "ZamTools tidak menerapkan cookie pelacak iklan lintas situs yang melacak perilaku penjelajahan Anda."
        },
        {
          heading: "2. LocalStorage untuk Preferensi",
          content: "Kami memanfaatkan fitur localStorage peramban hanya untuk mengingat preferensi ringan seperti penutupan pemberitahuan bahasa."
        }
      ],
      breadcrumb: "Cookie"
    },
    de: {
      title: "Cookie-Richtlinie | ZamTools",
      metaDescription: "Transparente Informationen über den Verzicht auf invasive Tracking-Cookies auf ZamTools.",
      h1: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 29. September 2026",
      legalNotice: "Wichtiger Hinweis: Diese Übersetzung dient zu Informationszwecken. Rechtlich bindend ist die englische Originalfassung (English).",
      lead: "ZamTools setzt auf einen sauberen, datenschutzorientierten Webauftritt ohne invasive Werbetracker.",
      sections: [
        {
          heading: "1. Minimaler Cookie-Einsatz",
          content: "ZamTools setzt keine invasiven Tracking-Cookies zur Verhaltensanalyse oder plattformübergreifenden Profilbildung ein."
        },
        {
          heading: "2. Lokaler Speicher für Nutzerwünsche",
          content: "Wir nutzen den localStorage Ihres Browsers ausschließlich, um funktionale Einstellungen wie die Bestätigung des Sprachhinweises lokal auf Ihrem Gerät zu speichern."
        }
      ],
      breadcrumb: "Cookies"
    },
    pt: {
      title: "Política de Cookies | ZamTools",
      metaDescription: "Informações sobre o uso consciente do armazenamento local e a ausência de cookies de rastreamento no ZamTools.",
      h1: "Política de Cookies",
      lastUpdated: "Última atualização: 29 de setembro de 2026",
      legalNotice: "Aviso importante: Esta tradução tem finalidade informativa. A versão em inglês (English) é o documento oficial de referência.",
      lead: "O ZamTools adota práticas limpas e transparentes, sem cookies invasivos de rastreamento de terceiros.",
      sections: [
        {
          heading: "1. Uso Mínimo de Cookies",
          content: "O ZamTools não utiliza cookies de monitoramento de comportamento ou redes de rastreamento de anúncios de terceiros."
        },
        {
          heading: "2. LocalStorage para Preferências",
          content: "Empregamos o recurso localStorage do navegador apenas para registrar ajustes úteis, como a dispensa do aviso de idiomas."
        }
      ],
      breadcrumb: "Cookies"
    },
    it: {
      title: "Informativa sui Cookie | ZamTools",
      metaDescription: "Trasparenza totale: assenza di cookie di profilazione invasivi e uso del localStorage su ZamTools.",
      h1: "Informativa sui Cookie",
      lastUpdated: "Ultimo aggiornamento: 29 settembre 2026",
      legalNotice: "Avviso importante: Questa traduzione è resa disponibile a scopo informativo. La versione in lingua inglese (English) costituisce il riferimento ufficiale.",
      lead: "ZamTools promuove un web pulito e rispettoso della riservatezza, senza cookie di tracciamento invasivi.",
      sections: [
        {
          heading: "1. Nessun tracciamento invasivo",
          content: "ZamTools non utilizza cookie di profilazione pubblicitaria né strumenti di tracciamento incrociato tra siti terzi."
        },
        {
          heading: "2. Uso del localStorage per preferenze",
          content: "Utilizziamo il localStorage del tuo browser esclusivamente per ricordare opzioni funzionali come la chiusura del banner di lingua."
        }
      ],
      breadcrumb: "Cookie"
    }
  },

  notFound: {
    en: {
      title: "Page Not Found (404) | ZamTools",
      metaDescription: "The page you are looking for does not exist or has been moved. Explore our 20 free online image tools on ZamTools.",
      h1: "404 — Page Not Found",
      lead: "Oops! We could not locate the page you requested. It might have been moved or the URL was entered incorrectly.",
      homeBtn: "Back to Homepage",
      toolsBtn: "Browse All Tools",
      breadcrumb: "404"
    },
    fr: {
      title: "Page introuvable (404) | ZamTools",
      metaDescription: "La page demandée est introuvable ou a été déplacée. Découvrez nos 20 outils d'image gratuits sur ZamTools.",
      h1: "404 — Page introuvable",
      lead: "Oups ! La page que vous recherchez n'existe pas ou a changé d'adresse. Retrouvez tous nos outils d'image ci-dessous.",
      homeBtn: "Retour à l'accueil",
      toolsBtn: "Découvrir tous les outils",
      breadcrumb: "404"
    },
    es: {
      title: "Página no encontrada (404) | ZamTools",
      metaDescription: "La página solicitada no existe o ha sido movida. Explora nuestras 20 herramientas de imagen online en ZamTools.",
      h1: "404 — Página no encontrada",
      lead: "¡Vaya! No hemos podido encontrar la página que buscas. Es posible que la dirección haya cambiado o contenga un error.",
      homeBtn: "Volver al inicio",
      toolsBtn: "Explorar herramientas",
      breadcrumb: "404"
    },
    id: {
      title: "Halaman Tidak Ditemukan (404) | ZamTools",
      metaDescription: "Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan. Jelajahi 20 alat gambar online gratis di ZamTools.",
      h1: "404 — Halaman Tidak Ditemukan",
      lead: "Ups! Kami tidak dapat menemukan halaman yang Anda cari. Alamat mungkin telah berubah atau salah diketik.",
      homeBtn: "Kembali ke Beranda",
      toolsBtn: "Lihat Semua Alat",
      breadcrumb: "404"
    },
    de: {
      title: "Seite nicht gefunden (404) | ZamTools",
      metaDescription: "Die aufgerufene Seite existiert nicht oder wurde verschoben. Entdecken Sie 20 kostenlose Bildtools auf ZamTools.",
      h1: "404 — Seite nicht gefunden",
      lead: "Hoppla! Die von Ihnen gesuchte Seite konnte nicht gefunden werden. Eventuell wurde die Adresse geändert.",
      homeBtn: "Zur Startseite",
      toolsBtn: "Alle Tools ansehen",
      breadcrumb: "404"
    },
    pt: {
      title: "Página Não Encontrada (404) | ZamTools",
      metaDescription: "A página que você procura não existe ou foi transferida. Descubra nossas 20 ferramentas de imagem online no ZamTools.",
      h1: "404 — Página Não Encontrada",
      lead: "Ops! Não encontramos a página solicitada. O link pode ter mudado ou foi digitado incorretamente.",
      homeBtn: "Voltar para o Início",
      toolsBtn: "Ver Todas as Ferramentas",
      breadcrumb: "404"
    },
    it: {
      title: "Pagina non trovata (404) | ZamTools",
      metaDescription: "La pagina cercata non esiste o è stata spostata. Scopri i nostri 20 strumenti per immagini gratuiti su ZamTools.",
      h1: "404 — Pagina non trovata",
      lead: "Ops! La pagina che stai cercando non esiste o è stata trasferita. Trova subito lo strumento che ti occorre.",
      homeBtn: "Torna alla Home",
      toolsBtn: "Esplora tutti gli strumenti",
      breadcrumb: "404"
    }
  }
};

module.exports = {
  INFO_TRANSLATIONS
};
