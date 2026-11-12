## Creator

Jayson L. Martinez

## Copyright

Copyright 2016

## Development

React + Vite + Tailwind CSS v4. Theme tokens live in `src/styles.css`; static assets in `public/`.

```sh
pnpm install
pnpm dev       # local dev server
pnpm build     # production build into dist/
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to https://jheysoon.github.io/.
Requires **Settings → Pages → Source: GitHub Actions** on the repository.
