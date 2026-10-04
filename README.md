# Bootstrap Fullstack Webapp

An opinionated Next.js boilerplate. Clone it, delete what you don't need, start building.

## Stack

**Next.js 16** with App Router and React 19. Server Components by default, `"use client"` only when you need state or browser APIs.

**Tailwind CSS v4** — configured entirely in `globals.css` via `@theme inline`. No `tailwind.config.js`. All theme tokens are CSS variables bridged into Tailwind's utility system.

**shadcn/ui** (new-york style) — components are copied into `src/components/ui/` so you own the code. Install new ones with `npx shadcn add <component>`. Backed by Radix UI primitives.

**Custom typography system** — `src/components/typography/` wraps every HTML text element (`H1`–`H6`, `Paragraph`, `Bold`, `Italic`, `Link`, `InlineCode`, etc.) into composable, overridable components. Never write raw `<h1>` or `<p>` tags.

**next-themes** for light / dark / system mode. Switches via `.dark` class on `<html>` so all CSS variable overrides fire automatically.

**oklch color space** for all theme tokens. Perceptually uniform, P3-gamut capable, human-readable values.

## Dependencies

- `radix-ui` — headless primitives underlying all shadcn components
- `lucide-react` — icons
- `react-hook-form` + `@hookform/resolvers` + `zod` — forms and validation
- `recharts` — charts (via shadcn chart wrapper)
- `sonner` — toast notifications
- `next-themes` — dark mode
- `cmdk` — command menu primitive
- `vaul` — drawer primitive
- `embla-carousel-react` — carousel
- `input-otp` — OTP input
- `react-day-picker` + `date-fns` — date picker
- `react-resizable-panels` — resizable split layouts
- `class-variance-authority` + `clsx` + `tailwind-merge` — class utilities (`cn()`)
- `tw-animate-css` — animation utilities for shadcn transitions

## Fonts

Four fonts loaded via `next/font/google`, exposed as CSS variables on `<body>`. Apply with `style={{ fontFamily: "var(--font-name)" }}` — not Tailwind classes.

- `--font-geist-sans` — default body font
- `--font-geist-mono` — monospace alternative
- `--font-jetbrains-mono` — code and technical text, has italic variant

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    fonts.ts            # Font definitions
    globals.css         # Tailwind config, theme tokens, base styles
    layout.tsx          # Root layout — ThemeProvider, sidebar shell, fonts
  components/
    sidebar/            # App sidebar (edit routes.ts to change nav links)
    navbar/             # Optional top navbar with dropdown menu
    typography/         # H1–H6, Paragraph, Bold, Italic, Link, InlineCode, etc.
    ui/                 # shadcn components
    mode-toggle.tsx     # Light / dark / system switcher
  lib/
    registry.ts         # Every component: import path, exports, description
    utils.ts            # cn() utility
  hooks/
    use-mobile.ts
.github/
  copilot-instructions.md   # Copilot rules and stack context
  skills/build-ui/SKILL.md  # Copilot skill for building UI
```

## Key Decisions

**Typography components over raw HTML.** `<H1>`, `<Paragraph>`, `<Bold>` etc. accept `className` and `style`, nest freely inside each other, and enforce consistent defaults. Overriding is always additive.

**Fonts via CSS variables, not Tailwind classes.** CSS variables work inside any component, can be inherited through the tree, and can be swapped at runtime. Tailwind font utilities can't do any of that.

**Semantic color tokens everywhere.** `text-foreground`, `bg-primary`, `text-muted-foreground` — not `text-gray-900` or `text-blue-500`. Dark mode flips automatically, no per-component `dark:` prefixes needed.

**`registry.ts` as source of truth.** Documents every component in the project so Copilot (and you) always know what's available, where it lives, and when to use it.

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```
