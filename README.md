# Afrizal Widya Ananta — Portfolio

A premium, editorial-style personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** — design tokens defined in `src/app/globals.css`
- **Framer Motion** — scroll reveals, hero animation, tab transitions
- **Lenis** — smooth scrolling
- **Lucide React** — icons
- Custom animated cursor, magnetic buttons, sticky nav with hide-on-scroll

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first run needs an internet connection so Next.js can fetch the Geist, Geist Mono, and Inter fonts from Google Fonts.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Editing content

Everything text-based — name, role, bio, experience, education, skills, certifications, and projects — lives in **`src/data/content.ts`**. Edit that one file and the whole site updates; you shouldn't need to touch any component to update copy.

## Editing design tokens

Colors and a few global rules live at the top of **`src/app/globals.css`** under `:root` and `@theme inline`:

- `--bg`, `--surface`, `--card` — background layers
- `--accent` (violet) / `--accent-2` (cyan) — the two accent colors
- `--text`, `--text-muted`, `--text-dim` — text hierarchy

## Structure

```
src/
  app/
    layout.tsx          fonts + SEO metadata
    page.tsx             assembles all sections
    globals.css           design tokens
  components/
    nav.tsx              sticky navigation
    cursor.tsx            custom cursor
    magnetic.tsx           magnetic button wrapper
    reveal.tsx              scroll-reveal wrapper
    smooth-scroll.tsx        Lenis provider
    footer.tsx
    ui/section.tsx            Container, Eyebrow, SectionHeading
    sections/
      hero.tsx
      marquee.tsx
      about.tsx
      education.tsx
      experience.tsx        tabbed timeline
      skills.tsx
      projects.tsx          grid + modal
      project-modal.tsx
      cta.tsx
  data/
    content.ts                all site content — edit this
  lib/
    utils.ts                   cn() class helper
```

## Deploying

Standard Next.js app — deploys to Vercel with zero config, or anywhere else that supports Next.js (Netlify, a Node server, Docker, etc.).

## Notes

- Project cards use CSS gradients as placeholder imagery instead of the old screenshots. Swap in real images by adding them to `public/` and updating `src/components/sections/projects.tsx`.
- The custom cursor and some hover effects only activate on devices with a fine pointer (mouse); touch/mobile is unaffected.
- Reduced-motion preferences are respected — Lenis smooth scroll and most animations shorten automatically.
