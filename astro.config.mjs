import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    tailwind({}),

    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
        question: 'storyblok/question',

      },
      apiOptions: {
        // Choose your Storyblok space region
      },
    })

  ]
});