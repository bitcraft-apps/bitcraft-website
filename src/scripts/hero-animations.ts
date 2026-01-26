/**
 * Shared hero animation logic.
 * Handles IntersectionObserver setup to pause animations when heroes scroll off-screen.
 * Supports multiple hero sections on the same page.
 *
 * @remarks Idempotent - safe to call multiple times; already-initialized heroes are skipped.
 */

/** Shared observer instance to avoid creating one per hero */
let sharedObserver: IntersectionObserver | null = null;

/** Track if event listeners have been registered */
let listenersRegistered = false;

/** Debounce multiple setupHeroAnimations calls within the same tick */
let initScheduled = false;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            entry.target.setAttribute(
              'data-animate-active',
              entry.isIntersecting ? 'true' : 'false',
            );
          }
        });
      },
      { threshold: 0.2 },
    );
  }
  return sharedObserver;
}

/** Clean up observer before page swap to prevent memory leaks */
function cleanupObserver(): void {
  if (sharedObserver) {
    sharedObserver.disconnect();
    sharedObserver = null;
  }
}

export function initHeroAnimations(): void {
  // Find all heroes that haven't been initialized yet
  const heroes = document.querySelectorAll<HTMLElement>(
    '[data-hero]:not([data-animation-observer="true"])',
  );

  if (heroes.length === 0) return;

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
  // Debounce multiple calls within the same tick (e.g., when multiple hero components load)
  if (!initScheduled) {
    initScheduled = true;
    queueMicrotask(() => {
      initScheduled = false;
      initHeroAnimations();
    });
  }

  if (!listenersRegistered) {
    document.addEventListener('astro:page-load', initHeroAnimations);
    document.addEventListener('astro:before-swap', cleanupObserver);
    listenersRegistered = true;
  }
}
