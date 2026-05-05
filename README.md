# Keri Tech

Marketing site for Keri Tech, built with Next.js 16, React 19, and Tailwind CSS v4.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import Git Repository**.
3. Framework preset is auto-detected as **Next.js**. Default build settings work.
4. Click **Deploy**.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19**
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **Geist** font (Sans + Mono) via `geist` package
- **TypeScript**

## Structure

```
app/
  layout.tsx     — root layout, fonts, metadata
  page.tsx       — composes the home page
  globals.css    — Tailwind + theme tokens
components/
  Nav.tsx
  Hero.tsx
  Products.tsx
  Clients.tsx
  Approach.tsx
  CTA.tsx
  Footer.tsx
  FadeIn.tsx     — client-side scroll reveal
  BrandMark.tsx
```

## Editing content

- Product list: `components/Products.tsx` (`products` array)
- Client list: `components/Clients.tsx` (`clients` array)
- Approach principles: `components/Approach.tsx` (`principles` array)
- Footer links: `components/Footer.tsx`
- Hero copy + stats: `components/Hero.tsx`
