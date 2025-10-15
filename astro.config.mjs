// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cris-01000011.github.io/n64-games',
  vite: {
    plugins: [tailwindcss()]
  }
});
