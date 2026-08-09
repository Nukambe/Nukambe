# Changelog

Notable changes to the portfolio site. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/). The site is deployed
continuously rather than released, so entries are dated instead of versioned.
Changes before the first entry below are not covered.

## 2026-08-09

### Added

- A highlights band under the hero calling out the Master's in AI Engineering
  and the build-and-support practice, in place of a full education section. It
  is deliberately not in the nav.
- Six tools in the skills cloud: C++, React Native, Expo, Terraform, Jenkins,
  and Claude. Icons come from [Devicon](https://devicon.dev) (MIT) and
  [Simple Icons](https://simpleicons.org) (CC0), and are the first SVGs in
  `images/skills/`, so `js/skills.js` now maps per-skill file extensions.
- Design token system in `styles/styles.css`: custom properties for surfaces,
  lines, text, accent, a fluid type scale, spacing, radii, shadows, and easing.
- Inter as the body typeface, paired with Oswald for display headings.
- Skip link, visible focus rings, and `prefers-reduced-motion` handling.
- Scroll-reveal animations, gated on a `js` root class so content still shows
  if the script fails.
- Scroll-spy that highlights the nav link for the section in view.
- Inline SVG icon sprite for the GitHub, LinkedIn, email, and link icons.
- Populated footer with a copyright line and social links.
- `js/main.js`, holding the header state, scroll-spy, and reveal observer.

### Changed

- Reworked the palette to a dark theme with a single warm accent, replacing the
  gray-blue gradients and the `#999` body text.
- Rebuilt the hero as a two-column layout with a fluid name, outlined surname,
  bio, and call-to-action buttons.
- Replaced fixed pixel heights and per-breakpoint media queries with `clamp()`,
  auto-fitting grids, and intrinsic sizing.
- Project cards now use real `<img>` thumbnails and semantic markup.
- Skills render as a drifting cloud of tool orbs: each is scattered and floats
  on its own timing, lifts and names itself on hover, and shows its name
  underneath on devices without hover.
- Header is sticky and gains a blurred background on scroll; it collapses to a
  floating pill nav on small screens.
- Nav uses real anchors with `scroll-margin`, so it works without JavaScript.
- Section headings moved from `<h3>` to `<h2>`, with card titles at `<h3>`.

### Fixed

- Mobile nav pill anchored itself to the header instead of the viewport once
  scrolled, because the header's `backdrop-filter` made it the containing block
  for fixed descendants.
- Nav highlight no longer stays on the last section after scrolling back to the
  hero.

### Removed

- The global `* { font-family: Oswald; font-weight: 700; color: white }` rule.
- Per-card `<style>` blocks injected by `js/projects.js`, which painted
  thumbnails as blurred pseudo-element backgrounds.
- `js/header.js`, replaced by `js/main.js`.
- `<base href="/">`, so the site also works when served from a subdirectory.
