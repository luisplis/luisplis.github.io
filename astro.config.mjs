import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://luisplis.github.io',
  base: '', // idea: reemplazar site.conf o "/portfolio" en recursos por // y redirecionado a /portfolio
/*outDir: './dist',*/
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const uri = page.split('/').slice(-2, -1)[0];
        const excludes = ['legal', 'privacidad', 'cookies'];
        return !(excludes.includes(uri));
        }
    }),
    robotsTxt()],
  experimental: {
    contentIntellisense: true,
    // svg: true,
  },
  redirects: {
    /*
    '/blog': '/portfolio/blog/1',
    '/proyectos': '/portfolio/proyectos/1',
    */
  },
});
