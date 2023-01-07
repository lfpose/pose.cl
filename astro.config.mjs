import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://pose-cl.vercel.app/',
  integrations: [mdx(), svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  },
  output: "server",
  adapter: vercel()
});
