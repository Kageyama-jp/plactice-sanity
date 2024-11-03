import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/plactice-sanity',
  integrations: [sanity({
    projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET,
    apiVersion: "v2022-03-07",
    useCdn: true,
  }), 
  react()]
});