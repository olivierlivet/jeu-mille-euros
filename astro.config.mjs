import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import compress from "astro-compress";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind({}), compress(), react()]
});