# Regal Engineering & Design Solutions — Website

The official website for **Regal Engineering & Design Solutions**, a land surveying and architectural design firm based in Freetown, Sierra Leone. A subsidiary of Regal Affluent Holding LLC.

**Tagline:** _Precision. Design. Vision._

---

## Tech Stack

| Layer     | Technology            |
| --------- | --------------------- |
| Framework | Astro 6               |
| Styling   | Tailwind CSS v4       |
| CMS       | Decap CMS (Git-based) |
| Hosting   | Netlify               |
| Forms     | Netlify Forms         |

---

## Project Structure

```
regal-site/
├── public/
│   ├── admin/
│   │   ├── index.html          # Decap CMS entry point
│   │   └── config.yml          # CMS collections config
│   └── images/
│       ├── uploads/            # CMS-managed uploads
│       └── placeholders/       # Dev placeholder images
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Layout, SEO
│   │   ├── ui/                 # Button, GoldRule, SectionLabel, ProjectCard
│   │   ├── home/               # Hero, ServicesSnapshot, WhyUs, Stats, etc.
│   │   └── forms/              # ContactForm
│   ├── content/
│   │   ├── projects/           # Markdown files — one per project
│   │   ├── people/             # Markdown files — one per team member
│   │   ├── testimonials/       # Markdown files — testimonials
│   │   └── settings/
│   │       └── general.json    # Contact info and social links
│   ├── pages/
│   │   ├── index.astro         # Home
│   │   ├── services.astro
│   │   ├── projects/
│   │   │   ├── index.astro     # Projects listing
│   │   │   └── [slug].astro    # Individual project pages
│   │   ├── people.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css          # CSS variables, base resets, font imports
├── netlify.toml
├── astro.config.mjs
└── package.json
```

---

## Getting Started

```sh
# Install dependencies
npm install

# Start local dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Pages

| Route            | Page            |
| ---------------- | --------------- |
| `/`              | Home            |
| `/services`      | Services        |
| `/projects`      | Projects        |
| `/projects/[slug]` | Project Detail |
| `/people`        | Our People      |
| `/about`         | About           |
| `/contact`       | Contact         |
| `/admin`         | Decap CMS       |

---

## CMS (Decap CMS)

The site uses [Decap CMS](https://decapcms.org/) for client-managed content. Collections:

- **Projects** — portfolio entries with images, descriptions, and categories
- **Our People** — team member bios and photos
- **Testimonials** — client quotes
- **Site Settings** — contact info, social media links

To access the CMS: navigate to `/admin`. Requires Netlify Identity to be configured (see Deployment).

---

## Deployment

The site is hosted on **Netlify** with automatic deploys from GitHub.

### Pre-launch checklist

- [ ] Connect GitHub repo to Netlify
- [ ] Enable Netlify Identity
- [ ] Enable Git Gateway in Netlify Identity settings
- [ ] Add client as Netlify Identity user with `Editor` role
- [ ] Test contact form submission
- [ ] Point custom domain to Netlify
- [ ] Replace all placeholder content with real client content
- [ ] Final Lighthouse audit (target: Performance 90+, Accessibility 95+, SEO 100)

---

## Design System

**Dark luxury** aesthetic — black canvas, gold accents, warm off-white text.

```css
--black: #0a0a0a;
--gold: #c9a84c;
--white: #f5f0e8;
```

Typography: **Cormorant Garamond** (headings) + **DM Sans** (body)

---

## Business Info

- **Company:** Regal Engineering & Design Solutions
- **Parent:** Regal Affluent Holding LLC
- **Location:** Freetown, Sierra Leone
- **Services:** Land Surveying · Architectural Design · Integrated Packages
