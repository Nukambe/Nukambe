/**
 * Renders the skills section, grouped by discipline.
 */
(() => {
  const skillsSection = document.getElementById('skills-list');
  if (!skillsSection) return;

  const groups = [
    { title: 'Frontend', skills: ['Angular', 'React', 'Nextjs', 'Svelte', 'Tailwind', 'HTML', 'CSS'] },
    { title: 'Backend', skills: ['Nodejs', 'NestJS', 'Spring Boot'] },
    { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Go'] },
    { title: 'Data', skills: ['PostgreSQL', 'SQLite', 'SQL'] },
    { title: 'Cloud & infrastructure', skills: ['AWS', 'Docker', 'CICD', 'Kafka', 'RabbitMQ'] },
    { title: 'Game development', skills: ['Unreal Engine', 'Pygame'] },
    { title: 'Tooling', skills: ['Git', 'Shells'] },
  ];

  // Display names that differ from their icon filename.
  const labels = {
    Nextjs: 'Next.js',
    Nodejs: 'Node.js',
    CICD: 'CI/CD',
  };

  // Everything else ships as a .png.
  const extensions = { Java: 'webp' };

  const iconSrc = (skill) =>
    `images/skills/${encodeURIComponent(skill)}.${extensions[skill] || 'png'}`;

  const markup = groups
    .map(
      (group) => `
      <div class="skills__group reveal">
        <h3 class="skills__group-title">${group.title}</h3>
        <ul class="skills__list">
          ${group.skills
            .map((skill) => {
              const label = labels[skill] || skill;
              return `
            <li class="skill">
              <span class="skill__icon">
                <img src="${iconSrc(skill)}" alt="" loading="lazy" decoding="async" width="20" height="20">
              </span>
              <span class="skill__name">${label}</span>
            </li>`;
            })
            .join('')}
        </ul>
      </div>`
    )
    .join('');

  skillsSection.insertAdjacentHTML('beforeend', markup);
  document.dispatchEvent(new CustomEvent('content:rendered'));
})();
