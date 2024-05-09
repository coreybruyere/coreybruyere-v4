import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import htmx from "astro-htmx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), htmx()],
  output: "hybrid",
  // adapter: netlify(),
  adapter: node({
    mode: "standalone",
  }),
});
