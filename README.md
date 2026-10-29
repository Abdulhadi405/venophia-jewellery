# Venophia

Static React/Vite jewellery storefront preview for Pakistan.

## Local development

```bash
corepack pnpm install --frozen-lockfile --allow-build=esbuild
corepack pnpm dev
```

The catalogue in `src/data/products.js` is intentionally preview-only. Replace
those entries with verified products, PKR prices, local image paths, availability,
and optional variants before enabling enquiries for live items.

## GitHub Pages

The build uses `VITE_BASE_PATH`:

```bash
# Project site: https://OWNER.github.io/REPOSITORY/
VITE_BASE_PATH=/REPOSITORY/ corepack pnpm build

# Custom domain root: https://venophia.com/
VITE_BASE_PATH=/ corepack pnpm build
```

The repository owner and name are not yet known, so no remote or workflow target
has been configured. Before publishing, add a GitHub Actions Pages workflow for
the chosen repository, set the project-site base path if needed, and configure
the custom domain only after ownership and DNS access are verified.

## Ordering model

The storefront does not process payments, record orders, track customers, or use
a backend. Genuine products can generate a URL-encoded WhatsApp enquiry to
Venophia at `+92 308 0044471`; opening WhatsApp is not an order confirmation.
