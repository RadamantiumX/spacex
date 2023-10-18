import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Podemos establecer que sea 100% SERVER SIDE con "server"
// Tambien, podemos establecer que sea hibrido ("hybrid"), que matenga el STATIC page y optar por SERVER page en algunos casos 

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'hybrid',
  experimental: {
    viewTransitions: true
  }
});