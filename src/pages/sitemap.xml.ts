import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const staticRoutes = [
  '/',
  '/cloud/',
  '/open/',
  '/stablecoin-payments/',
  '/order-mode/',
  '/deposit-mode/',
  '/go/',
  '/contact/',
  '/docs/',
  '/blog/',
];

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || 'https://payin.com';
  const docs = await getCollection('docs');
  const blog = await getCollection('blog');
  const routes = new Set([
    ...staticRoutes,
    ...docs.map((entry) => `/docs/${entry.slug}/`),
    ...blog.map((entry) => `/blog/${entry.slug}/`),
  ]);
  const updated = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...routes]
    .sort()
    .map((path) => `  <url><loc>${origin}${path}</loc><lastmod>${updated}</lastmod></url>`)
    .join('\n')}\n</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
