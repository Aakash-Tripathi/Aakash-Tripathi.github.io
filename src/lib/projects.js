// Blog posts live in src/pages/blog/<category>/*.mdx. Lazy glob avoids an import
// cycle with ArticleLayout, which is itself the layout of those pages.
const files = import.meta.glob('../pages/blog/*/*.mdx', { import: 'frontmatter' });

export const categories = [
  {
    id: 'homelab',
    label: 'HomeLab',
    intro: 'Notes from the server in my closet: the hardware, the storage, and the self-hosted apps that run our household.',
  },
  {
    id: 'research',
    label: 'Research',
    intro: 'Long-form write-ups of my papers: the problem, the method, the evidence, and the caveats, with links to code and data.',
  },
];

// Every post, or the posts of one category, sorted by `order`.
export async function getProjects(category) {
  const list = await Promise.all(
    Object.entries(files).map(async ([path, load]) => {
      const [cat, file] = path.split('/').slice(-2);
      const slug = file.replace(/\.mdx$/, '');
      return { ...(await load()), slug, category: cat, key: `${cat}/${slug}`, url: `/blog/${cat}/${slug}/` };
    }),
  );
  return list.filter((p) => !category || p.category === category).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

// Accepts 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD'.
export function formatDate(value) {
  const parts = String(value).split('-').map(Number);
  const [y, m, d] = parts;
  if (!m) return String(y);
  const date = new Date(Date.UTC(y, m - 1, d || 1));
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    ...(d ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  });
}

export const isMe = (name) => /\bTripathi\b/.test(name);

// Short attribution for a post's cover image, e.g. "Reproduced from Tripathi et al. (2025), npj Digital Medicine, CC BY 4.0."
export function coverCredit(post) {
  const text = String(post.coverCaption ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
  return text.match(/Reproduced from .*$/s)?.[0].trim();
}
