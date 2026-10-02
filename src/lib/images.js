// Resolve images under src/assets so pages can refer to them by path or blog slug.
const all = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' });

export const asset = (path) => (path ? all[`../assets/${path}`] : undefined);

export const cover = (slug) =>
  Object.entries(all).find(([key]) => key.startsWith(`../assets/blog/${slug}/cover.`))?.[1];
