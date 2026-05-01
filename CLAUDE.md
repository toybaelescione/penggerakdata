# CLAUDE.md — Penggerak Data

Master navigation guide for this codebase. Read this first before touching any file.

## Project Overview

**Penggerak Data** is a free, Bahasa Indonesia data engineering learning platform for students and entry-level engineers targeting Indonesian tech companies (Tokopedia, Gojek, Tiket.com, etc.).

- **Live URL:** `https://toybaelescione.github.io/penggerakdata`
- **Stack:** Astro 4 + Tailwind CSS v3 + MDX content collections
- **Deploy:** GitHub Pages via `.github/workflows/deploy.yml` (push to `main` auto-deploys)
- **Language:** All user-facing content in Bahasa Indonesia

---

## Directory Map

```
penggerakdata/
├── CLAUDE.md                        ← you are here
├── .github/workflows/deploy.yml     ← GitHub Pages auto-deploy on push to main
├── public/
│   ├── favicon.svg                  ← PeDa logo mark (SVG, 3-bar histogram motif)
│   └── logo.svg                     ← Full PeDa wordmark with bar mark
├── src/
│   ├── pages/
│   │   ├── index.astro              ← Homepage (/) — 9 sections
│   │   └── belajar/
│   │       ├── index.astro          ← Learning hub (/belajar) — lesson grid + filter
│   │       └── [slug].astro         ← Individual lesson (/belajar/[slug])
│   ├── content/
│   │   ├── config.ts                ← Zod schema for 'belajar' collection
│   │   ├── _BRAND.md                ← Tone of voice, copy rules, color meanings
│   │   └── belajar/                 ← MDX lesson files (one file = one lesson)
│   ├── components/
│   │   ├── _COMPONENTS.md           ← What each component does and when to use it
│   │   ├── Nav.astro                ← Sticky top nav with logo
│   │   ├── Footer.astro             ← Site footer
│   │   ├── Hero.astro               ← Homepage hero section
│   │   ├── CodeWindow.astro         ← Fake VS Code SQL window (decorative)
│   │   ├── DomainCard.astro         ← Homepage domain card (SQL/Python/etc)
│   │   ├── ProblemCard.astro        ← Homepage "masalah" empathy card
│   │   ├── FAQItem.astro            ← Accordion FAQ item
│   │   ├── CTABanner.astro          ← Bottom CTA section
│   │   ├── LessonCard.astro         ← Learning hub lesson card
│   │   ├── DomainFilter.astro       ← Filter buttons with JS for learning hub
│   │   └── Tag.astro                ← Domain/difficulty/company pill tag
│   ├── layouts/
│   │   ├── Base.astro               ← HTML shell: fonts, nav, footer, meta
│   │   └── LessonLayout.astro       ← Lesson page: breadcrumb, meta, prose body
│   └── styles/
│       └── global.css               ← Tailwind directives + custom utilities
├── astro.config.mjs                 ← site + base URL, integrations
├── tailwind.config.mjs              ← VS Code color tokens, font families, animations
├── tsconfig.json                    ← Strict TypeScript, path aliases
└── package.json                     ← astro, @astrojs/tailwind, @astrojs/mdx
```

---

## How to Add a New Lesson

1. Create a new `.mdx` file in `src/content/belajar/`
2. Use the frontmatter schema defined in `src/content/config.ts`:

```mdx
---
title: "Judul Pelajaran"
description: "Deskripsi satu kalimat."
domain: sql          # sql | python | data-modeling | pipeline
difficulty: pemula   # pemula | menengah | mahir
companies: ["Tokopedia"]
readingTime: 10      # in minutes
publishDate: 2026-06-01
order: 5             # controls sort order in /belajar
---
```

3. Write content in Bahasa Indonesia. Code blocks are auto-syntax-highlighted via Shiki.
4. The lesson automatically appears in `/belajar` and gets its own page at `/belajar/[filename-without-extension]`.

---

## Design System Quick Reference

**Colors (Tailwind class → hex):**
- `bg-bg-base` `#1e1e1e` — page background
- `bg-bg-surface` `#252526` — cards, panels
- `text-tx-primary` `#d4d4d4` — body text
- `text-tx-muted` `#858585` — secondary text
- `text-ac-blue` `#007acc` — CTAs, links
- `text-ac-teal` `#4ec9b0` — success, SQL/Python accents
- `text-ac-orange` `#ce9178` — inline code, Pipeline domain
- `text-ac-yellow` `#dcdcaa` — headings, function names
- `text-ac-purple` `#c586c0` — Data Modeling domain

**Fonts:**
- `font-sans` → Sora (body, headings)
- `font-mono` → JetBrains Mono (code, labels, tags)

**Animations (Tailwind class):**
- `animate-fade-up` + `opacity-0` + `delay-{1-5}` → staggered entrance on page load
- `animate-blink` → cursor blink (used in CodeWindow)

---

## Key Decisions

- `base: '/penggerakdata'` in `astro.config.mjs` — all internal hrefs must use `import.meta.env.BASE_URL` as prefix
- Domain filter in `/belajar` uses vanilla JS (no React island) — keeps bundle zero-JS
- Lesson content uses Astro Content Collections — type-safe frontmatter, auto-routing
- No user auth in V1 — all content is publicly readable static HTML
