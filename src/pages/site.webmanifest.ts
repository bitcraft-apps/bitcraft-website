import type { APIRoute } from 'astro';
import { SITE_TITLE, BRAND_COLOR, BACKGROUND_COLOR } from '../consts';

export const GET: APIRoute = () => {
  const manifest = {
    name: SITE_TITLE,
    short_name: SITE_TITLE,
    start_url: '/',
    scope: '/',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: BRAND_COLOR,
    background_color: BACKGROUND_COLOR,
    display: 'standalone',
  };

  // Format JSON for readability in dev, minify in production
  const jsonOutput = import.meta.env.DEV
    ? JSON.stringify(manifest, null, 2)
    : JSON.stringify(manifest);

  return new Response(jsonOutput, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  });
};
