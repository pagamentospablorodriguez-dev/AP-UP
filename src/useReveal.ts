import { useEffect } from 'react';

/**
 * Reveal-on-scroll hook. Observes every `.reveal` element within the document
 * and adds `.is-visible` when it enters the viewport. Re-runs whenever `key`
 * changes (so newly mounted screens get observed too).
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (typeof IntersectionObserver === 'undefined' || els.length === 0) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [key]);
}
