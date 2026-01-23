// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_DESCRIPTION =
  'Bitcraft — web experiences and tools for Bitcraft and beyond.';

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];
