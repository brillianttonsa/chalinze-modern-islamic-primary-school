# Chalinze Modern Islamic School Website

A responsive website for Chalinze Modern Islamic School, built with React, TypeScript, Vite, and Tailwind CSS. It includes school information, academics, admissions, student life, news and results, a gallery, contact information, and Islamic life content.

## Getting Started

Install [Node.js](https://nodejs.org/) and npm, then install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal when the server starts.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Run TypeScript project checks and create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. Run `npm run build` first. |
| `npm run lint` | Run ESLint across the project. |

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| About Us | `/about` |
| Academics | `/academics` |
| Student Life | `/student-life` |
| Admissions | `/admissions` |
| News & Results | `/results` |
| Gallery | `/gallery` |
| Contact | `/contact` |
| Islamic Life | `/islamic-life` |
| Careers | `/careers` |

## Project Structure

- `src/pages/` contains the page-level components.
- `src/components/` contains shared layout and page sections, organized by site area.
- `src/components/common/routes.ts` maps navigation labels to their URL paths.
- `src/assets/` contains imported site images and other assets.
- `public/` contains static files served directly by Vite.
- `src/index.css` contains global styles and Tailwind CSS setup.

## Technology

- React and TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Lucide React icons
