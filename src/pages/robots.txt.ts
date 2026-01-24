import type { APIRoute } from 'astro';
import { getSiteUrl } from '../consts';

export const GET: APIRoute = () => {
  const siteUrl = getSiteUrl();
  // Note: sitemap-index.xml is the default output from @astrojs/sitemap integration
  const sitemapUrl = new URL('/sitemap-index.xml', siteUrl).href;

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  });
};
