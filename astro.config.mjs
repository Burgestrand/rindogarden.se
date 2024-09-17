import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rindögården.se',
  integrations: [tailwind({
    applyBaseStyles: false /* Disable base styles, we use custom tailwind.css */
  }), sitemap({
    filter: (page) =>
      page.match('/links') === null
  }), mdx()],
  redirects: {
    '/kontakta-oss': '/engagera-dig#kontakta-oss',
  }
});