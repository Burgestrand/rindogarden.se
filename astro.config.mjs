import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rindögården.se",

  integrations: [
    sitemap({
      filter: (page) => !/(\/links|\/statistik)/.test(page),
    }),
    mdx(),
  ],

  redirects: {
    "/kontakta-oss": "/engagera-dig#kontakta-oss",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
