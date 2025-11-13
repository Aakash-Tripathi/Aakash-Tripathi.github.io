import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aakash-tripathi.github.io',
  base: '/',
  integrations: [
    sitemap({
      serialize(item) {
        // Set lastmod to current date for all pages
        item.lastmod = new Date();

        // Customize priority and changefreq based on URL
        if (item.url === 'https://aakash-tripathi.github.io/') {
          // Homepage
          item.priority = 1.0;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/publications/')) {
          // Publications page (updates weekly with new citations)
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/research/')) {
          // Research page
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/contact/')) {
          // Contact page
          item.priority = 0.5;
          item.changefreq = 'yearly';
        } else {
          // Default for any other pages
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }

        return item;
      },
    }),
  ],
  output: 'static',
});