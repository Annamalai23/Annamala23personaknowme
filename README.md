# Annamalai Raghupathy — Personal Portfolio

Personal portfolio + writing site for [Annamalai Raghupathy](https://github.com/Annamalai23), open-sourced as a reference / starting point for anyone who wants to build a similar site.

Built with **TanStack Start**, **Vite**, **React 19**, **Tailwind v4**, **shadcn/ui**, and **content-collections** for MDX-powered writing.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (router + SSR) on [Vite](https://vitejs.dev)
- [Nitro](https://nitro.build) server runtime (deployable to Vercel, Node, etc.)
- [content-collections](https://www.content-collections.dev) — typed MDX content
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) primitives
- [Zustand](https://zustand-demo.pmnd.rs) for UI state, [TanStack Query](https://tanstack.com/query) for data
- [Resend](https://resend.com) for the contact form (optional)

## Getting started

```bash
git clone <this-repo>
cd persona
npm install
npm run dev
```

The dev server runs on `http://localhost:8080`.

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Clean previous output and build for production |
| `npm run build:dev` | Build with development mode (sourcemaps, no minify) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```
content/
  writing/                # MDX articles (frontmatter-driven)
public/
  favicon.ico
  images/
    journey/              # Images used by the /journey page
    writing/<slug>/       # Per-article images, referenced from MDX
src/
  routes/                 # File-based routes (TanStack Router)
    __root.tsx            # Root layout, head, error boundaries
    index.tsx             # Home page
    journey.tsx           # Personal-story page
    writing.index.tsx     # Article listing
    writing.$slug.tsx     # Article detail page
    contact.tsx           # Contact form
    api/contact.ts        # Server handler for the contact form
  components/             # cards, layout, design system, shadcn/ui
  lib/
    content.ts            # Static content: deployments, socials, journey, config
    api.ts, email.ts      # Server helpers
    store.ts              # Zustand store
  mdx/                    # MDX component overrides
  styles.css              # Tailwind + theme tokens
content-collections.ts    # Schema + transform for MDX articles
vite.config.ts            # Vite + TanStack Start + Nitro setup
```

## Customizing it for yourself

This was originally Naveen RK's personal site, so most of the content is hard-wired into source files. Here's what to change for your own fork:

1. **Profile + nav** — search for `Annamalai` across `src/` and replace text, links, and meta tags. Start with:
   - `src/routes/__root.tsx` (title, description, author meta)
   - `src/routes/index.tsx` (hero, headings, copy)
   - `src/components/layout/` (header/footer)
2. **Job history, socials, system config, journey phases** — `src/lib/content.ts`. All four exported arrays drive the home and `/journey` pages.
3. **Journey page narrative + images** — `src/routes/journey.tsx` and `public/images/journey/`.
4. **Contact form recipient** — `src/routes/api/contact.ts` has the destination email hardcoded. Change it, and set `RESEND_API_KEY` in your env (see below).
5. **Favicon / OG image** — `public/favicon.ico` and any open-graph assets you add.
6. **Package name** — update `name` in `package.json`.

### Adding a writing entry

Create a new file under `content/writing/<your-slug>.mdx`:

```mdx
---
title: Your Article Title
excerpt: One- or two-sentence summary used in cards and meta tags.
date: "2026-05-19"
readTime: 5
tags: [Tag1, Tag2]
category: Engineering   # one of: Engineering | AI | Systems Design | Growth
---

Body content in MDX. You can use the `<Image>` component for images:

<Image src="/images/writing/your-slug/01.png" alt="..." />
```

Drop any referenced images into `public/images/writing/<your-slug>/`. The slug is derived from the filename — see `content-collections.ts` for the full schema.

## Environment variables

Create a `.env.local` at the repo root:

```bash
# Only required if you want the /contact form to actually send mail via Resend
RESEND_API_KEY=re_xxx
```

Without `RESEND_API_KEY`, the contact form route returns a 500. Everything else (home, writing, journey) works fine.

## Deployment

The repo is preconfigured to deploy to **Vercel** out of the box — TanStack Start + Nitro will build a serverless-compatible output. Just import the repo into Vercel, set `RESEND_API_KEY` if you want the contact form, and deploy.

For other targets, Nitro supports Node, Cloudflare, Netlify, and more — see the [Nitro deploy docs](https://nitro.build/deploy).

## License

MIT. Use, fork, remix freely. Attribution appreciated but not required.
