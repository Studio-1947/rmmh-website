# Radhamadhav Medical Hall

The website for **Radhamadhav Medical Hall**, a neighbourhood pharmacy built with
[Astro](https://astro.build) as a fully static site. Includes services, a visiting-doctors
directory, and a Nepali health-awareness wiki with tap-to-listen audio (via the browser's
`speechSynthesis` API).

All business details (address, phone, doctor names, hours) are **sample placeholders**. Edit
`src/data/site.ts`, `src/data/doctors.ts`, and `src/data/wiki.ts` before deploying to production
see [Content you need to edit](#content-you-need-to-edit) below.

## Stack

- [Astro](https://astro.build) 7 static site generator, zero client-side JS framework
- TypeScript (strict) for data and component props
- Plain CSS with design tokens (`src/styles/global.css`) light pharmacy theme built from the brand
  colours (`#00807A` teal, `#FFA300` amber): white paper ground with soft mint section bands, white
  cards with hairline borders and soft shadows, circular photo medallions, and reveal-on-scroll
  motion (respects `prefers-reduced-motion`). Amber is used for fills; `--accent-warm-text`
  (`#a35c00`) is its readable-on-white counterpart for text and icons.
- Google Fonts: [Outfit](https://fonts.google.com/specimen/Outfit) for Latin text, Hind for Nepali
- ESLint (flat config) + Prettier for linting/formatting
- Husky + lint-staged for pre-commit checks
- Playwright for smoke tests
- GitHub Actions for CI; **Vercel** (git integration) for deployment

## Maps

The footer backdrop (`public/images/mirik-lake-panorama.jpg`) is currently a Wikimedia Commons photo
by Shubh.ch1994 under CC BY-SA 4.0. The on-page credit was removed at the owner's request, so replace
it with the shop's own photo of Mirik Lake (or restore a visible credit) before going live.

The footer and contact maps use **Mapbox GL** (light style, pulsing pin, 3D tilt) when
`PUBLIC_MAPBOX_TOKEN` is set in `.env` (copy `.env.example`; free tier is 50k loads/month). The
Mapbox bundle is only downloaded when the map scrolls into view. Without a token the site falls back
to a Google Maps embed, so nothing breaks.

## Languages

The site is built in three languages with Astro's i18n routing: English at `/`, Nepali at `/ne/`,
and Bengali at `/bn/` (same for `/doctors/`). UI copy lives in `src/i18n/ui.ts`; data files
(`services.ts`, `doctors.ts`, `gallery.ts`, `videos.ts`) carry `{ en, ne, bn }` fields. The EN / ने /
বাং switch in the header keeps you on the same page and section.

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev       # http://localhost:4321
```

| Command                | Action                                          |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the local dev server with hot reload      |
| `npm run build`        | Typecheck (`astro check`) then build to `dist/` |
| `npm run preview`      | Preview the production build locally            |
| `npm run typecheck`    | Run `astro check` only                          |
| `npm run lint`         | Lint with ESLint (`--max-warnings=0`)           |
| `npm run lint:fix`     | Lint and auto-fix                               |
| `npm run format`       | Format all files with Prettier                  |
| `npm run format:check` | Check formatting without writing                |
| `npm test`             | Run the Playwright smoke tests against `dist/`  |

Run `npm test` after `npm run build` the test suite serves the built `dist/` folder rather than
starting a dev server. If port 4321 is already in use on your machine, run `PORT=4399 npm test`.

## Project structure

```
src/
  components/     One .astro component per section (Hero, Services, Doctors, HealthWiki, ...)
  data/           Content as typed data  site.ts, doctors.ts, services.ts, wiki.ts
  layouts/        BaseLayout.astro  <head>, fonts, header/footer shell
  pages/          index.astro  assembles the components into the homepage
  styles/         global.css  design tokens (colors, type) + component styles
tests/
  smoke.spec.ts   Playwright checks: page renders, nav works, links point somewhere real
public/           Static files served as-is (favicon.svg, robots.txt)
  images/         logo.svg (used site-wide), logo-light.svg (for dark backgrounds), placeholder photos, hero poster
  videos/         hero.mp4 / hero.webm, the muted looping hero background (7s, ~500 KB each)
  videos/cta/     clip-1..7.mp4, the cross-fading montage behind the "Here when you need us" band
```

Content lives in `src/data/*.ts`, separate from markup edit those files rather than hunting
through components for text to change.

## Content you need to edit

Everything below currently holds a sample/placeholder value. Search each file for `[Sample`,
`[Town]`, or similar bracketed text:

- **`src/data/site.ts`** email, registration number, working hours (phone/WhatsApp are set). Address,
  map link/embed, plus code and the Google rating are already filled from the Google Business
  listing (<https://maps.app.goo.gl/DUPGb1Na16tpNsoB7>) bump `google.reviewCount` / `rating`
  when they change.
- **`src/data/videos.ts`** the doctor video reels. Paste each reel URL into `src`, set `platform`
  (`youtube` embeds inline; `instagram` opens on Instagram; `mp4` plays a file from `public/videos`)
  and set `isPlaceholder: false`.
- **`src/data/reviews.ts`** the written Google reviews shown in the Reviews section. Google has
  no free live feed for a static site, so paste new reviews here by hand (or wire up the Places
  API later).
- **`src/data/doctors.ts`** the visiting-doctors directory. Names, specialties and the cabin
  are real; skills, timings and languages are placeholders (`timingsConfirmed: false` shows a
  "timings to be confirmed" badge) and the portraits are stock photos (`photoIsPlaceholder: true`
  shows a "sample photo" badge). Replace `public/images/doctor-N.jpg` with real portraits.
- **`src/data/services.ts`** the six service cards, each with an `image` path. Placeholder
  photos live in `public/images/` (royalty-free Unsplash shots) replace them with your own.
- **`src/data/wiki.ts`** the Nepali health-awareness entries. Written in the plain register
  used on public-health posters; each entry includes an English gloss.
- **`src/data/gallery.ts`** the gallery cards shown on `/about/`. Swap the `src` paths for real
  shots of your storefront, counter, and team.
- **`src/data/legacy.ts`** the founders' story (Dr. Swapan Kumar Kundu and Pushpalata Gurung),
  Dr. Subhendu Kundu's section, the six-person `team` (replace `[Name]` and `public/images/staff-N.jpg`)
  and the history timeline. Years marked
  `c.` are approximate and the events are written from the brief: confirm every date, name and
  claim with the family.
- **`public/images/logo.svg`** the brand logo, used in the header and footer (`logo-light.svg` is
  the same mark recoloured for dark backgrounds, kept for future use). `logo-mark.svg` is the peacock mark alone,
  animated as the opening splash in `src/components/Loader.astro`.

## Analytics

Page views are tracked with [Vercel Analytics](https://vercel.com/docs/analytics) via
`@vercel/analytics/astro`, mounted once in `BaseLayout.astro`. It only sends data from the deployed
Vercel domain (local `npm run dev` / `preview` is a no-op). Enable **Analytics** in the Vercel
project dashboard to see the numbers.

## Deployment (Vercel)

This repo is set up for Vercel's git integration CI does **not** deploy, Vercel does, whenever
you push.

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository. Vercel auto-detects
   Astro; `vercel.json` pins the build command (`npm run build`), output directory (`dist`), and
   install command (`npm ci`) explicitly so the config isn't implicit.
3. Every push to `main` deploys to production; every pull request gets a preview deployment.
4. If you add environment variables later (see `.env.example`), set them in the Vercel project's
   **Settings → Environment Variables** `.env` files are never committed.

No server/adapter is needed the site is fully static (`output: "static"` in
`astro.config.mjs`).

## CI/CD

**`.github/workflows/ci.yml`** runs on every push and pull request against `main`:

1. **Lint & format** ESLint (zero warnings allowed) and `prettier --check`.
2. **Typecheck & build** `astro check` then `astro build`; the `dist/` output is uploaded as a
   build artifact for 7 days.
3. **Smoke test** builds the site, installs Playwright's Chromium, and runs `tests/smoke.spec.ts`
   against the built output. The HTML report is uploaded as an artifact on every run (including
   failures) for 7 days.

Deployment itself is handled by Vercel's own GitHub integration, not by this workflow see
[Deployment](#deployment-vercel).

**`.github/dependabot.yml`** opens weekly PRs for npm dependency and GitHub Actions updates,
grouped into a single "dev dependencies" and a single "production dependencies" PR per week to
keep the noise down.

## Pre-commit hooks

Husky runs `lint-staged` before every commit, which lints and formats only the files you've
staged:

- `*.astro`, `*.ts`, `*.tsx`, `*.js`, `*.mjs`, `*.cjs` → `eslint --fix` then `prettier --write`
- `*.css`, `*.md`, `*.json` → `prettier --write`

Hooks install automatically via the `prepare` script the first time you run `npm install` inside a
git repository. If hooks aren't firing, run `npx husky` once manually.

## Testing

`tests/smoke.spec.ts` covers:

- the homepage renders (title, hero heading, all six section anchors present)
- the doctors directory and health-wiki both render their full card counts
- the "Call the counter" and "Get directions" buttons point at real `tel:` / Google Maps links
- the mobile nav menu opens and closes

Run locally with `npm run build && npm test`. In a fresh environment, install Chromium first:
`npx playwright install --with-deps chromium` (CI does this automatically).

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables smooth scrolling and transitions).
- Skip-to-content link, visible focus states, `aria-label`s on icon-only controls.
- The Nepali health-wiki "Listen" buttons use the browser's built-in `speechSynthesis` no
  external API, no audio files to host. Falls back to a default voice (or a visible message) if a
  Nepali voice isn't installed on the visitor's device.
- Fonts (Fraunces, Hind) load from Google Fonts with `display=swap`; system fonts are the fallback
  stack so text is never invisible while fonts load.

## License

Private/unpublished (`"license": "UNLICENSED"` in `package.json`) this is a bespoke site for
Radhamadhav Medical Hall, not an open-source package.
