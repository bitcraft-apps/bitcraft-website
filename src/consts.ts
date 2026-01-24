// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Bitcraft';
export const SITE_DESCRIPTION = 'Bitcraft — web experiences and tools for Bitcraft and beyond.';

/** Brand color used for theme-color meta tag and PWA manifest. */
export const BRAND_COLOR = '#556B2F';

/** Background color for PWA splash screen. */
export const BACKGROUND_COLOR = '#FFFFFF';

/**
 * Default Open Graph image configuration.
 * Used for social sharing previews when no specific image is provided.
 * Dimensions follow Facebook/LinkedIn recommendations (1200x630px).
 * NOTE: If replacing the image, update width/height to match the actual dimensions.
 */
export const DEFAULT_OG_IMAGE = {
  path: '/brand/og-default.png',
  width: 1200,
  height: 630,
} as const;

/**
 * Get the site URL with fallback for local development.
 * Uses Astro's SITE env variable from astro.config.mjs.
 */
export const getSiteUrl = (): string => {
  const site = import.meta.env.SITE;
  if (!site && import.meta.env.DEV) {
    console.warn('[SEO] SITE URL not configured in astro.config.mjs, using localhost fallback');
  }
  return site || 'http://localhost:4321';
};

/**
 * Logo image for JSON-LD structured data (relative to site root).
 * Google recommends a logo with width ≥112px and aspect ratio close to 1:1.
 * Uses the 512x512 Android Chrome icon as a suitable square logo.
 */
export const LOGO_IMAGE = '/android-chrome-512x512.png';

/** Tag used to mark projects as featured on the homepage */
export const FEATURED_TAG = 'featured' as const;

/** Maximum number of featured projects to display on homepage */
export const MAX_FEATURED_PROJECTS = 3;

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

// Founder / Owner information
const FOUNDER_NAME = 'Szymon Graczyk';

export const FOUNDER = {
  name: FOUNDER_NAME,
  // Handle hyphenated names (e.g., "Jean-Pierre" -> "JP") and spaces
  initials:
    FOUNDER_NAME.split(/[\s-]+/)
      .filter((n) => n.length > 0)
      .map((n) => n[0].toUpperCase())
      .join('') || '?',
  role: 'Founder & Lead Engineer',
  quote:
    'We treat every line of code as a piece of craftsmanship, because we believe the details matter.',
} as const;

// Contact information
export const CONTACT = {
  email: 'szymon@graczyk.dev',
  github: 'https://github.com/bitcraft-apps',
} as const;

// Business / Legal information
export const LEGAL = {
  taxId: 'PL6422997504',
  registryUrl: 'https://aplikacja.ceidg.gov.pl/CEIDG/CEIDG.Public.UI/Search.aspx',
} as const;
