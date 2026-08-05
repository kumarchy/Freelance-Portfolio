<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Project Knowledge

## Tech Stack
- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Icons** (react-icons/fa, react-icons/si) for brand icons
- **clsx + tailwind-merge** for class merging (`cn()` utility)
- **@fontsource/space-grotesk** and **@fontsource/inter** for fonts

## Project Commands
- `npm run dev` — start dev server
- `npm run build` — production build (static)
- `npm run lint` — ESLint check

## Key Architecture Decisions
- All sections are in `src/components/sections/`
- Reusable UI primitives in `src/components/ui/` (Button, Card, Badge, Counter)
- Layout components in `src/components/layout/` (Navbar, Footer, LoadingScreen, BackToTop, BackgroundEffects)
- `BackgroundEffects` provides scroll progress bar + mouse-follow glow
- Fonts imported via CSS (`@import`) in `globals.css`, not as JS modules
- Remote images require `next.config.ts` `images.remotePatterns` config
- lucide-react icon names differ from common names (e.g., `GitBranch` not `Github`, `Link` not `Linkedin`)

## Color Palette
- Primary BG: #050806
- Secondary BG: #0B120D
- Surface: #101A13
- Elevated: #16231A
- Emerald primary: #37D67A
- Emerald secondary: #22C55E
- Text primary: #F8FAFC
- Text secondary: #A1A8B3

## Design System
- Glass cards: `glass-card` class (rgba bg, backdrop blur, emerald border, 20px radius)
- Primary buttons: emerald gradient bg + shadow-button
- Secondary buttons: transparent with emerald border
- Headings: Space Grotesk, Body: Inter
- Dark-only design (no light mode)
