// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_DESCRIPTION = 'Bitcraft — web experiences and tools for Bitcraft and beyond.';

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
