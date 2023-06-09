import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import compress from "astro-compress";
import react from "@astrojs/react";
import prefetch from '@astrojs/prefetch';
// import purgecss from 'astro-purgecss';

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: import.meta.env.URL,
  site: `https://jeu1000euros.fr`,
  integrations: [alpinejs(), tailwind({}), react(), prefetch(), robotsTxt(), sitemap()]
});