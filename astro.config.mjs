// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages at https://janithpm.dev. Set SITE_URL to
// override (e.g. a custom domain); on Vercel the production URL is used.
const site =
	process.env.SITE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'https://janithpm.dev');

// https://astro.build/config
export default defineConfig({
	site,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap()],
});
