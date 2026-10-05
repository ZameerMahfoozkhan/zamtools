# ZamTools ⚡

> **Fast, Free & 100% Private Client-Side Multilingual Image Tools**  
> https://zamtools.online

ZamTools is a modern, high-performance web platform offering 20 browser-based image utility tools. Built with zero frontend frameworks, zero runtime dependencies, and a privacy-first architecture where image bytes are processed locally in your browser's RAM via HTML5 Canvas—never uploaded to an external server.

---

## 🌟 Key Features

- **20 Functional Client-Side Tools:**
  - **Compression:** Image Compressor, Compress to Target Size (50KB, 100KB, 200KB).
  - **Resizing:** Image Resizer, Social Media Image Resizer, Passport Photo Resizer.
  - **Conversion:** WebP Converter, JPG to PNG, PNG to JPG, Universal Image Format Converter, Image to Base64, Base64 to Image, Favicon Generator.
  - **Editing & Effects:** Image Cropper, Rotate & Flip, Grayscale Image, Brightness & Contrast, Blur & Sharpen, Color Picker, Palette Generator, Meme Generator.
- **100% In-Browser Privacy:** Zero remote uploads. Photos never leave your machine.
- **Global Multilingual Architecture (7 Languages):**
  - 🇺🇸 **English** (`/`)
  - 🇫🇷 **Français** (`/fr/`)
  - 🇪🇸 **Español** (`/es/`)
  - 🇮🇩 **Bahasa Indonesia** (`/id/`)
  - 🇩🇪 **Deutsch** (`/de/`)
  - 🇵🇹 **Português** (`/pt/`)
  - 🇮🇹 **Italiano** (`/it/`)
- **Enterprise Multilingual SEO (280 Localized Pages):**
  - 100% bidirectional 8-way reciprocal `hreflang` alternates (7 languages + `x-default`).
  - Self-referencing canonical URLs on every document.
  - Structured Data: Schema.org `SoftwareApplication` and `BreadcrumbList` JSON-LD.
  - 9 XML Sitemaps (1 master, 7 language sitemaps, and `sitemap-index.xml`).
  - Human-readable hyphenated ASCII URL routing tailored for each language.
- **Pure Web Stack:** Vanilla HTML5, CSS3, and JavaScript without heavy frameworks or bloated bundles.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

Clone the repository:

```bash
git clone https://github.com/ZameerMahfoozkhan/zamtools.git
cd zamtools
```

### Run Locally

Start the local development server:

```bash
npm start
```

Visit [http://localhost:8080/](http://localhost:8080/) in your browser. All localized language paths are fully accessible locally (e.g. `/fr/`, `/es/`, `/de/`, etc.).

---

## 🛠️ Build & Validation Scripts

ZamTools includes a comprehensive automated build and SEO verification suite:

- **Build all pages and sitemaps:**
  ```bash
  npm run build
  ```
  Generates all 280 localized HTML documents, XML sitemaps, robots.txt, and updates `dist/`.

- **Audit & SEO validation:**
  ```bash
  npm run validate
  ```
  Audits all 280 HTML files, checks 1,680 reciprocal hreflang link pairs, validates XML sitemaps, and verifies 13,000+ internal links for zero broken references.

- **Run both build & audit:**
  ```bash
  npm test
  ```

---

## 📁 Project Structure

```text
zamtools/
├── about/                    # English informational pages
├── assets/                   # Static images, icons, and SVGs
├── blog/                     # Guides and educational articles
├── contact/                  # Contact page
├── cookie-policy/            # Cookie policy
├── css/                      # Modular stylesheets (main, components, responsive, tools)
├── data/                     # Route definitions, languages, translations (7 languages)
├── de/                       # German localized site tree
├── disclaimer/               # Legal disclaimer
├── es/                       # Spanish localized site tree
├── faq/                      # FAQ page
├── fr/                       # French localized site tree
├── id/                       # Indonesian localized site tree
├── it/                       # Italian localized site tree
├── js/                       # Client-side logic, tools, search, language switcher
├── privacy-policy/           # Privacy policy
├── pt/                       # Portuguese localized site tree
├── scripts/                  # Master build, local server, search generator, SEO audit
├── templates/                # Reusable page components & templates
├── terms/                    # Terms of service
├── tools/                    # Tool landing pages and workspaces
├── index.html                # English homepage
├── robots.txt                # Search engine crawler instructions
├── sitemap.xml               # Master XML sitemap
└── sitemap-index.xml         # XML sitemap index referencing all language sitemaps
```

---

## 📄 License

ISC License. Built with ❤️ for the global web.
