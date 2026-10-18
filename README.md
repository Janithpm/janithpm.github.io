# Janith Madarasinghe: portfolio

Personal portfolio site built with [Astro](https://astro.build) and Tailwind CSS. It builds to static HTML and ships almost no JavaScript.

## Editing content

All copy lives in `src/data/profile.ts`. Add your email, GitHub, LinkedIn and Code Dock links under `links` to show the contact buttons.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`  |
| `npm run preview` | Preview the build locally               |

## Deploying to Vercel

Import the repository at [vercel.com/new](https://vercel.com/new). Vercel detects Astro automatically, so no settings need changing. Once you add a custom domain, set the `SITE_URL` environment variable (e.g. `https://example.com`) so canonical URLs and the sitemap use it.
