# Om Chauhan — Interactive Resume & Portfolio

An interactive, single-page portfolio built as a **static Vite + React 19 + TypeScript** application. No backend, no database — all content is managed in a single typed data module.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Vite 8 + React 19 + TypeScript 7 |
| Styling | Tailwind CSS v4 |
| 3D / Animation | Spline (`@splinetool/react-spline`) |
| Icons | Lucide React |
| UI Primitives | shadcn/ui (local copies in `src/components/ui/`) |

## Project Structure

```
src/
├── content/
│   └── data.ts          # All resume data (typed exports)
├── components/
│   └── ui/              # UI primitives: timeline, spline, badge, etc.
├── App.tsx              # Single-page layout — JSX only, no hardcoded data
├── index.css            # Design tokens + global styles
└── main.tsx             # React entry point
index.html               # Google Fonts + app shell
tailwind.config.js       # Tailwind theme extension
```

## Running Locally

```bash
npm install
npm run dev
# or
./start.sh
```

Open `http://localhost:5173`.

## Updating Content

All resume data lives in [`src/content/data.ts`](src/content/data.ts). Edit the exported `resumeData` object (name, education, skills, projects, achievements, contact) or the `timelineMilestones` array — the site rebuilds automatically.

## Assets

- `Om_Chauhan_Resume.pdf` — downloadable PDF resume (served as a static asset)
- `docs/` — screenshots and documentation images
