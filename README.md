# Rudra Enterprise

Official website for **Rudra Enterprise** — IT sales, services, repair, and surveillance solutions in Ahmedabad. The site showcases services (computer/laptop repair, data recovery, CCTV installation, networking, biometrics, AMC) and is optimized for local SEO.

**Live site**: https://rudracomputers.com

## Tech stack

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

Requires [Node.js](https://nodejs.org/) (LTS recommended) and a package manager (npm or [bun](https://bun.sh/)).

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Enter the project directory
cd rudraenterprise

# 3. Install dependencies
npm install

# 4. Start the dev server (http://localhost:8080)
npm run dev
```

## Available scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the local development server           |
| `npm run build`    | Build the production bundle                   |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run ESLint                                    |

## Project structure

```
public/        Static assets, sitemap.xml, robots.txt
src/
  components/  Reusable UI components (incl. SEO helper)
  pages/       Route-level pages (Index, About, Services, Contact)
index.html     HTML entry point with base SEO meta tags
```

## Deployment

Build with `npm run build` and serve the generated `dist/` directory on any static host. Ensure the production domain matches the canonical URLs used across the site (`https://rudracomputers.com`).
