import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, stop observing for performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const selectors = [
      '.animate-on-scroll',
      '.reveal-up',
      '.reveal-left',
      '.reveal-right',
      '.reveal-scale',
      '.reveal-fade',
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
