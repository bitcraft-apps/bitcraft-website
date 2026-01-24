import type { APIRoute } from 'astro';
import { SITE_TITLE, BRAND_COLOR, BACKGROUND_COLOR } from '../consts';

export const GET: APIRoute = () => {
  const manifest = {
    name: SITE_TITLE,
    short_name: SITE_TITLE,
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

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  });
};
