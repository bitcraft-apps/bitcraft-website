/**
 * Shared hero animation logic.
 * Handles IntersectionObserver setup to pause animations when heroes scroll off-screen.
 * Supports multiple hero sections on the same page.
 */

export function initHeroAnimations(): void {
  // Find all heroes that haven't been initialized yet
  const heroes = document.querySelectorAll<HTMLElement>(
    '[data-hero]:not([data-animation-observer="true"])',
  );

  heroes.forEach((hero) => {
    hero.setAttribute('data-animation-observer', 'true');

    if (!('IntersectionObserver' in window)) {
      hero.setAttribute('data-animate-active', 'true');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute('data-animate-active', entry.isIntersecting ? 'true' : 'false');
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);
  });
}

export function setupHeroAnimations(): void {
  initHeroAnimations();
  document.addEventListener('astro:page-load', initHeroAnimations);
}
