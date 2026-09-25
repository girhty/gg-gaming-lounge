import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/gg-gaming-lounge/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://gg-gaming-lounge.example',
});