export const SITE_TITLE = 'Bitcraft';
export const SITE_DESCRIPTION = 'Bitcraft — web experiences and tools for Bitcraft and beyond.';

/** Brand color used for PWA manifest. */
export const BRAND_COLOR = '#556B2F';

/** Background color for PWA splash screen. */
export const BACKGROUND_COLOR = '#FFFFFF';

/**
 * Theme colors for browser chrome (theme-color meta tag).
 * Used by BaseHead.astro via define:vars for the inline theme init script.
 */
export const THEME_COLORS = {
  light: '#f5f5f5',
  dark: '#1a1a1a',
} as const;

/**
 * Default Open Graph image configuration.
 * Used for social sharing previews when no specific image is provided.
 * Dimensions follow Facebook/LinkedIn recommendations (1200x630px).
 * NOTE: If replacing the image, update width/height to match the actual dimensions.
 */
export const DEFAULT_OG_IMAGE = {
  path: '/brand/bitcraft-og.png',
  width: 1200,
  height: 630,
} as const;

/**
 * Get the site URL with fallback for local development.
 * Uses Astro's SITE env variable from astro.config.mjs.
 * Fails fast in production to prevent broken SEO.
 */
let siteUrlDevWarnShown = false;
export const getSiteUrl = (): string => {
  const site = import.meta.env.SITE;
  if (!site) {
    if (import.meta.env.PROD) {
      throw new Error(
        '[SEO] SITE URL must be configured in astro.config.mjs for production builds',
      );
    }
    if (!siteUrlDevWarnShown) {
      console.warn('[SEO] SITE URL not configured, using localhost fallback for development');
      siteUrlDevWarnShown = true;
    }
    return 'http://localhost:4321';
  }
  return site;
};

/**
 * Logo image for JSON-LD structured data (relative to site root).
 * Google recommends a logo with width ≥112px and aspect ratio close to 1:1.
 * Uses the 512x512 Android Chrome icon as a suitable square logo.
 */
export const LOGO_IMAGE = '/android-chrome-512x512.png';

/** Tag used to mark projects as featured on the homepage */
export const FEATURED_TAG = 'featured' as const;

/** Tags used for internal filtering, not for display */
const SYSTEM_TAGS: readonly string[] = [FEATURED_TAG];

/** Filter out system tags (like 'featured') that are used for filtering, not display */
export const getDisplayTags = (tags?: string[]): string[] =>
  tags?.filter((tag) => !SYSTEM_TAGS.includes(tag)) ?? [];

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
