// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL once you have a custom domain. On Vercel, the production
// *.vercel.app URL is used automatically until then.
const site =
	process.env.SITE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
	site,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap()],
});
