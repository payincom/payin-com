import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const withBase = (path: string) => `${base}/${path.replace(/^\//, '')}` || '/';
  const manifest = {
    name: 'PayIn',
    short_name: 'PayIn',
    description: 'Non-custodial stablecoin payment infrastructure for real merchants.',
    start_url: withBase('/'),
    scope: withBase('/'),
    display: 'standalone',
    background_color: '#faf8f3',
    theme_color: '#16161a',
    icons: [
      { src: withBase('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: withBase('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      { src: withBase('/favicon.svg'), sizes: '64x64', type: 'image/svg+xml' },
    ],
  };
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
