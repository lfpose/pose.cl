import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://lfpose.github.io',
  base: '/pose.cl',
  integrations: [mdx(), svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  },
});
