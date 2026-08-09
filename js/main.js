/**
 * Site chrome: sticky-header state, nav scroll-spy, and scroll reveals.
 */
(() => {
  const header = document.getElementById('site-header');
  const navLinks = Array.from(document.querySelectorAll('.nav__link'));
  // The hero is observed too, so scrolling back to it clears the highlight
  // instead of leaving the previous section marked active.
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  /* Header background once the page has scrolled past the hero edge. */
  if (header) {
    const setHeaderState = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  /* Highlight the nav link for the section currently in view. */
  if (sections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };

    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => spy.observe(section));
  }

  /* Fade sections in as they enter the viewport. */
  const revealAll = () =>
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));

  if (!('IntersectionObserver' in window)) {
    revealAll();
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Sections render their own content, so watch for nodes added later too.
    const observeReveals = () =>
      document
        .querySelectorAll('.reveal:not(.is-visible)')
        .forEach((el) => revealObserver.observe(el));

    observeReveals();
    document.addEventListener('content:rendered', observeReveals);
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
