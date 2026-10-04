# Bootstrap Fullstack Webapp

An opinionated Next.js starter. Clone it, delete what you don't need, start building.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** — configured in `globals.css`, no `tailwind.config.js`
- **shadcn/ui** (Base UI) — components live in `src/components/ui/`; add more with `npx shadcn add <component>`
- **Typography components** — `src/components/typography/` replaces raw `<h1>`, `<p>`, etc.
- **next-themes** — light / dark / system
- **react-hook-form + zod**, **recharts**, **sonner**, **lucide-react**

## Project Structure

```
src/
  app/          # Layout, globals.css (theme tokens), fonts
  components/
    sidebar/    # App sidebar (edit routes.ts for nav links)
    navbar/     # Optional top navbar
    typography/ # Text components
    ui/         # shadcn components
  lib/
    registry.ts # Every component: path, exports, usage
.github/        # Copilot instructions and UI skill
```

## Conventions

- Use typography components, not raw HTML text tags.
- Use semantic color tokens (`bg-primary`, `text-muted-foreground`), not fixed colors.
- Apply fonts via CSS variables (`var(--font-geist-sans)`, `--font-geist-mono`, `--font-jetbrains-mono`), not Tailwind classes.
- Check `registry.ts` before building a new component.

## Scripts

```bash
npm run dev    # Start the development server
npm run build  # Build for production
npm run start  # Serve the production build
npm run lint   # Run ESLint
```
