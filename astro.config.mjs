import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rasult22.github.io',
  base: '/covey-landing',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
});
