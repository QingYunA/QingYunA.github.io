# Cyan's Portfolio

Personal site and project showcase: https://qingyuna.github.io

Built from the [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) template.

- **Framework:** Next.js 16, React 19, TypeScript
- **UI:** Tailwind CSS v4, shadcn/ui, Magic UI
- **Hosting:** static export served by GitHub Pages from the `main` branch root

## Local development

```bash
pnpm install
pnpm dev
```

Edit the site content in [`src/data/resume.tsx`](./src/data/resume.tsx).

## Build and publish

`next.config.mjs` sets `output: "export"`. Run `pnpm build`, then copy the contents of `out/` into the repository root and commit.
