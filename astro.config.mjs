import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '65f3zct8',
    dataset: 'production',
    apiVersion: "v2022-03-07",
    useCdn: true,
  }), 
  react()]
});