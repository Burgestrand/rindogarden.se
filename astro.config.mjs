import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rindögården.se',
  integrations: [
    tailwind({
      applyBaseStyles: false /* Disable base styles, we use custom tailwind.css */,
    })
  ]
});