// @ts-check

import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://soleils.leo29plns.fr',
	integrations: [sitemap(), svelte()],
});
