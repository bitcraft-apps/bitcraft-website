/**
 * Shared hero animation logic.
 * Handles IntersectionObserver setup to pause animations when heroes scroll off-screen.
 * Supports multiple hero sections on the same page.
 *
 * @remarks Idempotent - safe to call multiple times; already-initialized heroes are skipped.
 */

/** Shared observer instance to avoid creating one per hero */
let sharedObserver: IntersectionObserver | null = null;

/** Track if page-load listener has been registered */
let listenerRegistered = false;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).setAttribute(
            'data-animate-active',
            entry.isIntersecting ? 'true' : 'false',
          );
        });
      },
      { threshold: 0.2 },
    );
  }
  return sharedObserver;
}

export function initHeroAnimations(): void {
  // Find all heroes that haven't been initialized yet
  const heroes = document.querySelectorAll<HTMLElement>(
    '[data-hero]:not([data-animation-observer="true"])',
  );

  if (!('IntersectionObserver' in window)) {
    heroes.forEach((hero) => {
      hero.setAttribute('data-animation-observer', 'true');
      hero.setAttribute('data-animate-active', 'true');
    });
    return;
  }

  const observer = getSharedObserver();

  heroes.forEach((hero) => {
    hero.setAttribute('data-animation-observer', 'true');
    observer.observe(hero);
  });
}

export function setupHeroAnimations(): void {
  initHeroAnimations();

  if (!listenerRegistered) {
    document.addEventListener('astro:page-load', initHeroAnimations);
    listenerRegistered = true;
  }
}
