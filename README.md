# Studio Reverii

Photography portfolio website for Studio Reverii — a creative studio that combines narrative worldbuilding with photography.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding a New Project

1. Add your project images to `/public/images/[your-slug]/`
2. Open `/src/data/projects.ts` and add a new entry to the `projects` array following the existing `Project` interface:

```ts
{
  slug: 'your-slug',
  title: 'Project Title',
  year: 2026,
  client: 'Client Name',
  description: 'One line description for the index page.',
  narrative: [
    'First paragraph of story text shown above images.',
    'Second paragraph continues the narrative.',
  ],
  images: [
    '/images/your-slug/image-01.jpg',
    '/images/your-slug/image-02.jpg',
  ],
  coverImage: '/images/your-slug/cover.jpg',
  credits: {
    brand: 'Brand Name',
    creativeDirection: 'Ki',
    photography: 'Olivia',
    model: 'Model Name',
    location: 'Location, Year',
    date: 'Month Year',
  },
}
```

The new project will automatically appear on `/projects` and be accessible at `/projects/your-slug`.

## Fonts

### Azonix (display/wordmark font)

Azonix is a free font used for the wordmark "STUDIO REVERII." and page headings.

1. Download **Azonix.otf** from [dafont.com/azonix.font](https://www.dafont.com/azonix.font)
2. Place the file at `/public/fonts/Azonix.otf`

The `@font-face` declaration in `src/app/globals.css` already points to this path. Without the font file, headings will fall back to `sans-serif`.

### Oxanium (body/UI font)

Oxanium loads from Google Fonts automatically in the browser. No manual setup needed.

## Deployment (Vercel)

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push this repository to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

Make sure `Azonix.otf` is committed to `/public/fonts/` before deploying so the font renders correctly in production.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (sidebar + footer on every page)
│   ├── globals.css         # CSS variables, resets, @font-face
│   ├── page.tsx            # Home
│   ├── projects/
│   │   ├── page.tsx        # Projects index
│   │   └── [slug]/
│   │       └── page.tsx    # Project detail
│   ├── info/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Sidebar/            # Fixed left nav + mobile hamburger
│   ├── Footer/             # Dark footer bar
│   └── ProjectCard/        # Row card used on /projects
└── data/
    └── projects.ts         # All project content — edit here
```
