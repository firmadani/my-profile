# AGENTS.md

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint    # Lint (runs eslint)
```

## Important Notes
- **Tailwind v4** - Uses `@tailwindcss/vite` plugin, not the classic CLI
- **Framer Motion** - Installed with `--legacy-peer-deps` due to vite peer dep conflict in this repo
- **Unused vars** - Lint will fail on unused variables. Before committing, either remove unused code or prefix with `_` (e.g., `_unusedVar`)
- **Single component** - All content is in `src/App.jsx` (single-file personal website)

## Structure
- `src/App.jsx` - Main component with all content, themes, and animations
- `src/index.css` - Custom font (Boldonse)
- `src/main.jsx` - Entry point

## Gotchas
1. When adding new dependencies, always use `npm install --legacy-peer-deps`
2. ESLint is strict about unused variables - some data variables (experience, projects, etc.) may show as unused in lint but this is a known issue
3. The `AnimatedSection` and `AnimatedCard` components use Framer Motion's `useInView` for scroll-triggered animations