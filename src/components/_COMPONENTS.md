# Components Reference

## Layout Components
Used in `src/layouts/` — wrap page content, never used directly inside other components.

| Component | Used on | Props |
|---|---|---|
| `Base.astro` | All pages | `title`, `description?` |
| `LessonLayout.astro` | Individual lesson pages | `lesson: CollectionEntry<'belajar'>` |

## Page Components

| Component | Used on | Purpose |
|---|---|---|
| `Nav.astro` | All (via Base) | Sticky top nav. Logo + /belajar link + "coming soon" pill |
| `Footer.astro` | All (via Base) | Logo, tagline, copyright |
| `Hero.astro` | Homepage | Full hero: headline, CTA, CodeWindow on desktop |
| `CodeWindow.astro` | Hero | Decorative fake VS Code SQL window. Static, no props |
| `CTABanner.astro` | Homepage | Bottom CTA with grid background. No props |

## Reusable UI Components

| Component | Props | Notes |
|---|---|---|
| `Tag.astro` | `domain: 'sql' \| 'python' \| 'data-modeling' \| 'pipeline'` | Colored domain pill badge |
| `DomainCard.astro` | `domain, title, desc, frequency, href` | Homepage + used for domain navigation |
| `ProblemCard.astro` | `quote, highlight` | Homepage empathy cards (the "masalah" section) |
| `FAQItem.astro` | `question, answer` | `<details>` accordion, no JS needed |
| `LessonCard.astro` | `lesson: CollectionEntry<'belajar'>, base: string` | Learning hub card. Has `data-domain` for JS filter |
| `DomainFilter.astro` | none | Filter buttons + inline `<script>` for client-side filtering |

## Adding a New Component
1. Create `src/components/ComponentName.astro`
2. Add a row to this table
3. Define Props interface at the top of the component file
4. Use Tailwind utility classes only — no inline styles
