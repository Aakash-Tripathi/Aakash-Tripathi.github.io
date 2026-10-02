# Aakash Tripathi, PhD: research website

Personal research site built with [Astro](https://astro.build) and deployed to GitHub Pages
(`.github/workflows/astro.yml`, Node 22). The visual design follows [alexsoupir.com](https://www.alexsoupir.com/):
black canvas, Archivo headings, Poppins Light body text, white pill buttons, and split page intros. Blog posts use the layout of the Hugging Face
[research article template](https://huggingface.co/spaces/tfrere/research-article-template): meta bar, sticky
table of contents, sidenotes, numbered figures, KaTeX math, footnote references, and a BibTeX citation block.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Pages

| URL | Source | Content |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Hero, image carousel, news, latest posts |
| `/research/` | `src/pages/research.astro` | Manuscripts, talks, preprints, abstracts |
| `/software/` | `src/pages/software.astro` | Packages, weights and datasets (built from blog post `links`) |
| `/talks/` | `src/pages/talks.astro` | Talks, posters and workshops |
| `/blog/` | `src/pages/blog/index.astro` | Featured posts, then HomeLab and Research columns |
| `/blog/<category>/` | `src/pages/blog/<category>/*.mdx` | Posts per category (`research`, `homelab`); set `featured: true` to feature one |
| `/cv/`, `/contact/` | `src/pages/cv.astro`, `contact.astro` | Full CV and contact details |

## Where things live

- `src/data/cv.js`: all CV content (profile, experience, publications, talks, teaching, skills, news, home gallery).
- `src/assets/blog/<category>/<slug>/`: figures for each post; `cover.(png|jpg)` is the post's hero and card image.
- `src/assets/gallery/`: talk and poster images used on the home carousel and Talks page.
- `src/components/article/`: MDX components (`Figure`, `Sidenote`, `Note`, `BarChart`, `Pipeline`, `Stats`).

## Updating

- **CV changes:** edit `src/data/cv.js`. Add `image: 'gallery/<file>'` to a talk to show a photo on the Talks page
  and home carousel.
- **New post:** copy a file in `src/pages/blog/`, keep the frontmatter keys, add figures under
  `src/assets/blog/<category>/<slug>/` (with a `cover` image), and credit every reused figure in its caption.
- The Google Scholar citation count is fetched at build time; the weekly scheduled deploy keeps it fresh.
