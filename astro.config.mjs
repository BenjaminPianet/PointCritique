// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pointcritique.com',
  integrations: [mdx(), sitemap()],
  // Préchargement des liens au survol : la navigation paraît instantanée.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
