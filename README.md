# PayIn.com

Public Astro website for PayIn: product landing pages, blog, concepts, and docs hub.

This repository is the public content center for the PayIn product family.

## Product Lines

- **PayIn Cloud** — hosted stablecoin payment cloud service for online businesses.
- **PayIn Open** — self-hosted open-source payment gateway for online businesses.
- **PayIn Go** — face-to-face payment product for in-person merchants.

## Documentation Role

Use this repository for public-facing content:

- Product positioning and marketing pages
- Shared terminology and concepts
- Public Cloud integration guidance
- Public Open overview and AI-assisted deployment entry points
- Public PayIn Go overview
- Blog and educational content

Do not put private Cloud operations, production credentials, customer-specific runbooks, or temporary debugging notes here.

Repo-local operational docs remain in their product repositories:

- `payin-open`: self-hosting docs and `skills/payin-open/SKILL.md`
- `payin-cloud`: private Cloud operations docs and `skills/payin-cloud/SKILL.md`
- `payin-go`: in-person payment product implementation and operations docs

## Development

```bash
npm install
npm run dev
npm run build
```

## Content Structure

- `src/pages/` — website routes.
- `src/content/blog/` — blog posts.
- `src/content/docs/product-lines.md` — product family overview.
- `src/content/docs/concepts/` — shared terminology and stablecoin payment concepts.
- `src/content/docs/cloud/` — public PayIn Cloud integration and commercial-use docs.
- `src/content/docs/open/` — public PayIn Open overview and AI-assisted deployment docs.
- `src/content/docs/go/` — public PayIn Go overview docs.
- `src/layouts/` — shared page layouts.
