import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import compress from "astro-compress";
import react from "@astrojs/react";
import prefetch from '@astrojs/prefetch';
import purgecss from 'astro-purgecss';



// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind({}), react(), prefetch(), purgecss()]
});