import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Adds `minutesRead` to every Markdown/MDX page's frontmatter.
function remarkReadingTime() {
  return (tree, file) => {
    let words = 0;
    const walk = (node) => {
      if (node.type === 'text') words += node.value.split(/\s+/).filter(Boolean).length;
      node.children?.forEach(walk);
    };
    walk(tree);
    file.data.astro.frontmatter.minutesRead = Math.max(1, Math.round(words / 230));
  };
}

// GFM footnotes are the article reference list; label them as such.
function rehypeReferencesLabel() {
  return (tree) => {
    const walk = (node) => {
      if (node.properties?.id === 'footnote-label') node.children = [{ type: 'text', value: 'References' }];
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://aakash-tripathi.github.io',
  base: '/',
  output: 'static',
  redirects: {
    '/publications': '/research/',
    '/selected-work': '/research/',
    '/competencies': '/cv/',
    '/blog/honeybee': '/blog/research/honeybee/',
    '/blog/clever': '/blog/research/clever/',
    '/blog/eagle': '/blog/research/eagle/',
    '/blog/minds': '/blog/research/minds/',
    '/blog/senmo': '/blog/research/senmo/',
    '/blog/hetmoe': '/blog/research/hetmoe/',
    '/projects': '/blog/',
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkReadingTime],
      rehypePlugins: [rehypeKatex, rehypeReferencesLabel],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  integrations: [
    mdx(),
    sitemap(),
  ],
});
