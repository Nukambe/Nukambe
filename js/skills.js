/**
 * Renders the skills cloud. Ordered by discipline so related tools drift
 * near each other, but presented as one cluster rather than a rigid grid.
 */
(() => {
  const cloud = document.getElementById('skills-list');
  if (!cloud) return;

  const skills = [
    'Angular', 'React', 'Nextjs', 'Svelte', 'Tailwind', 'HTML', 'CSS',
    'React Native', 'Expo',
    'Nodejs', 'NestJS', 'Spring Boot',
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Cpp', 'Go',
    'PostgreSQL', 'SQLite', 'SQL',
    'AWS', 'Docker', 'Terraform', 'Jenkins', 'CICD', 'Kafka', 'RabbitMQ',
    'Unreal Engine', 'Pygame',
    'Git', 'Shells', 'Claude',
  ];

  // Display names that differ from their icon filename.
  const labels = { Nextjs: 'Next.js', Nodejs: 'Node.js', CICD: 'CI/CD', Cpp: 'C++' };

  // Everything else ships as a .png.
  const extensions = {
    Java: 'webp',
    Claude: 'svg',
    Cpp: 'svg',
    Expo: 'svg',
    Jenkins: 'svg',
    'React Native': 'svg',
    Terraform: 'svg',
  };

  /* Deterministic variation — random values would reshuffle the cloud on every
     load and make the drift impossible to tune. Coprime cycle lengths keep the
     offsets and timings from lining up into a visible pattern. */
  const nudges = [0, 16, -10, 22, -6, 12, -18, 6];
  const durations = [6, 7.4, 6.6, 8, 7];

  const markup = skills
    .map((skill, i) => {
      const label = labels[skill] || skill;
      const src = `images/skills/${encodeURIComponent(skill)}.${extensions[skill] || 'png'}`;
      const style = [
        `--nudge:${nudges[i % nudges.length]}px`,
        `--dur:${durations[i % durations.length]}s`,
        `--delay:-${(i * 0.73).toFixed(2)}s`,
      ].join(';');

      return `
      <li class="orb" style="${style}">
        <span class="orb__float">
          <span class="orb__disc">
            <img class="orb__icon" src="${src}" alt="" loading="lazy" decoding="async">
          </span>
        </span>
        <span class="orb__label">${label}</span>
      </li>`;
    })
    .join('');

  cloud.insertAdjacentHTML('beforeend', markup);
  document.dispatchEvent(new CustomEvent('content:rendered'));
})();
