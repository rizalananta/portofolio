# Afrizal Widya Ananta — Portfolio

A premium, editorial portfolio inspired by the layout philosophy of perryw-2023.webflow.io — split into a minimal work list, a dedicated About/Info page, and full case-study pages per project.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis · Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. First run needs internet so Next.js can fetch the Geist, Geist Mono, and Inter fonts.

```bash
npm run build
npm run start
```

## Site structure

- **`/`** — minimal hero + "Selected Work" list (large rows, not cards)
- **`/about`** — your story, experience timeline, education, skills, certifications (the "Info" page equivalent)
- **`/work/[slug]`** — a dedicated case-study page per project: Overview → My Role → Process → Gallery → Results → Reflection, with a sticky Contents nav and prev/next project links at the bottom

## Editing content

Everything — bio, story blocks, experience, education, skills, and every project's full case-study copy — lives in **`src/data/content.ts`**. Edit that file; no components need to change.

To add a new project, add an entry to the `projects` array in `content.ts` with a unique `slug` — a new `/work/[slug]` page is generated automatically.

## Adding real images

Gallery slots, project covers, and About-page photos currently render as labeled placeholder blocks (`src/components/ui/image-placeholder.tsx`) since no real photography or dashboard screenshots were provided. To swap in real images:

1. Add image files to `public/images/`
2. Replace the relevant `ImagePlaceholder` usage with `next/image`, e.g.:
   ```tsx
   import Image from "next/image";
   <Image src="/images/dashboard-1.png" alt="..." width={1200} height={750} className="rounded-2xl" />
   ```
3. For the case-study gallery, each entry in a project's `gallery` array in `content.ts` has a `caption` and `kind` you can keep as `alt` text once you add a real `src`.

## Design tokens

Colors and fonts live at the top of `src/app/globals.css` under `:root` and `@theme inline` — `--accent` (violet) / `--accent-2` (cyan), `--bg` / `--surface` / `--card` layers, `--text` hierarchy.

## Deploying

Push to GitHub, import into Vercel — zero config needed, it auto-detects Next.js.

## Notes

- The custom cursor, magnetic buttons, and gallery lightbox only activate on fine-pointer (mouse) devices where relevant; touch/mobile gets clean equivalents.
- Reduced-motion preferences are respected throughout.
- All three sample projects (`merchant-tier-shift-dashboard`, `smartfleet-iot-solution`, `dashboard-prd`) are pulled from your original portfolio content, reorganized into the case-study format — no achievements were invented.
