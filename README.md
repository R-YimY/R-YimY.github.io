# Ranyu (YIMY) · Portfolio

Personal homepage and resume-style portfolio of **Ranyu (YIMY)** — a computer vision engineer focused on 3D reconstruction, point cloud processing, and visual localization.

**Live site:** https://r-yimy.github.io/

## Highlights

- Resume-oriented structure: summary, experience, featured projects, open-source impact, achievements, and contact.
- Fully bilingual (Chinese / English) with persisted language preference.
- Light / dark theme with system preference detection.
- Data-driven content: update `data/*.js` without touching layout code.
- Project cards with role, timeline, technical highlights, tags, and external links.
- Image lightbox, lazy loading, and a graceful missing-image fallback.
- One-click **Print Resume** action with dedicated print styles for A4 / PDF export.
- SEO metadata (Open Graph, Twitter Card, JSON-LD), accessible navigation, skip link, and reduced-motion support.
- Deployed as a static site on GitHub Pages — no build step required.

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive layout, print media queries)
- Vanilla JavaScript (no framework, no bundler)
- GitHub Pages

## Project Structure

```text
.
├── index.html              # Page shell, navigation, SEO metadata
├── css/
│   └── style.css           # Theme, layout, responsive and print styles
├── js/
│   ├── render.js           # Renders sections from data/ configuration
│   └── main.js             # Language, theme, navigation, lightbox, print
├── data/
│   ├── site.js             # Site title, brand, footer
│   ├── hero.js             # Hero summary, highlights, socials
│   ├── about.js            # Bio, quick facts, skills
│   ├── experience.js       # Work / research experience and education
│   ├── projects.js         # Featured projects and additional repositories
│   ├── contributions.js    # Horizontal open-source contribution timeline
│   ├── achievements.js     # Patents, publications, competitions, research focus
│   └── contact.js          # Contact channels
└── assets/                 # Avatar, favicon, project images
```

## Local Development

The site is fully static. Start any local HTTP server from the project root:

```bash
# Python 3
python -m http.server 8000

# or Node.js
npx serve .
```

Then open `http://localhost:8000`.

> Opening `index.html` directly also works in most browsers, but a local server is recommended to avoid file:// restrictions.

## Editing Content

All page content lives in `data/`. Each file exposes a `SITE.<section>` object:

```js
SITE.projects = {
  kicker: "03",
  title: { zh: "重点项目", en: "Featured Projects" },
  items: [
    {
      name: "MVS-Polyfit",
      role: { zh: "核心开发", en: "Core Developer" },
      period: "2023",
      desc: { zh: "…", en: "…" },
      highlights: [{ zh: "…", en: "…" }],
      tags: ["C++", "MVS"],
      links: [{ label: "GitHub ↗", href: "https://github.com/R-YimY/MVS-POLYFIT" }]
    }
  ]
};
```

- Bilingual text uses `{ zh: "中文", en: "English" }`.
- Simple HTML is supported in descriptive fields.
- Add or remove sections by editing `index.html` and the renderer in `js/render.js`.

## Resume / PDF Export

Click **打印简历 / Print Resume** in the top navigation bar, or press `Ctrl/Cmd + P`:

- Navigation, avatars, buttons, and project images are hidden automatically.
- The contribution timeline is flattened into a full-width stacked list.
- Sections are compacted into a clean, A4-friendly resume layout.
- Choose **Save as PDF** in the browser print dialog.

## Deployment

The repository is configured for GitHub Pages:

1. Push changes to the `main` branch.
2. In **Settings → Pages**, use **Deploy from a branch** with `main` / root.
3. The site is published at `https://r-yimy.github.io/`.

The `.nojekyll` file disables Jekyll processing so static assets are served as-is.

## Contact

- GitHub: [@R-YimY](https://github.com/R-YimY)
- Email: [1547823315@qq.com](mailto:1547823315@qq.com)
- Website: https://r-yimy.github.io/
