// Project write-ups live in src/pages/blog/*.mdx. Lazy glob avoids an import
// cycle with ArticleLayout, which is itself the layout of those pages.
const files = import.meta.glob('../pages/blog/*.mdx', { import: 'frontmatter' });

export async function getProjects() {
  const list = await Promise.all(
    Object.entries(files).map(async ([path, load]) => {
      const slug = path.split('/').pop().replace(/\.mdx$/, '');
      return { ...(await load()), slug, url: `/blog/${slug}/` };
    }),
  );
  return list.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
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
