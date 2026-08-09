/**
 * Renders the projects grid. Runs at `defer` time, so the list element
 * already exists and the reveal observer in main.js picks the cards up.
 */
(() => {
  const projectsList = document.getElementById('projects-list');
  if (!projectsList) return;

  const projects = [
    {
      title: 'GymNav',
      description:
        'A web app for creating and tracking workouts. Users add exercises to workouts and follow their progress over time.',
      url: 'https://gym.chappelly.com/',
      repo: 'https://github.com/Nukambe/workout',
      thumbnail: 'images/thumbnails/gymnav-ss.png',
    },
    {
      title: 'Vacation Planner',
      description:
        'An Android application for scheduling vacations. Users add excursions to their trips and set alerts so nothing gets missed.',
      url: '',
      repo: '',
      thumbnail: 'images/thumbnails/vacation-planner-ss.png',
    },
    {
      title: 'MealNav',
      description:
        'A meal planner for tracking what you eat. Users add recipes to their calendar and keep an eye on their nutrition.',
      url: '',
      repo: 'https://github.com/Nukambe/mealnav',
      thumbnail: 'images/thumbnails/mealnav-ss.png',
    },
    {
      title: 'Forms',
      description:
        'A form builder for creating and sharing forms. Users add fields to a form and track the responses that come back.',
      url: '',
      repo: 'https://github.com/Nukambe/marci-forms',
      thumbnail: 'images/thumbnails/forms-ss.png',
    },
    {
      title: 'Moriah Young',
      description:
        'A single page site for actress Moriah Young, built with React to showcase her audio and video reels.',
      url: 'https://www.moriahyoung.com/',
      repo: 'https://github.com/Nukambe/moriahyoung-react-app',
      thumbnail: 'images/thumbnails/moriah-ss.png',
    },
    {
      title: 'Volleyball',
      description:
        'A single page recruiting site for a high school volleyball player, built with Next.js.',
      url: '',
      repo: 'https://github.com/Nukambe/samiyah',
      thumbnail: 'images/thumbnails/volleyball-ss.jpg',
    },
  ];

  const icon = (id) => `<svg aria-hidden="true" focusable="false"><use href="#${id}"></use></svg>`;

  const linkRow = (project) => {
    const links = [];

    if (project.url) {
      links.push(
        `<a class="btn btn--sm btn--primary" href="${project.url}" target="_blank" rel="noopener noreferrer">Live site ${icon('i-external')}</a>`
      );
    }

    if (project.repo) {
      links.push(
        `<a class="btn btn--sm btn--ghost" href="${project.repo}" target="_blank" rel="noopener noreferrer">${icon('i-code')} Source</a>`
      );
    }

    return links.length
      ? `<div class="card__links">${links.join('')}</div>`
      : '<p class="card__note">Private repository</p>';
  };

  const markup = projects
    .map(
      (project) => `
      <li class="reveal">
        <article class="card">
          <div class="card__media">
            <img src="${project.thumbnail}" alt="Screenshot of ${project.title}" loading="lazy" decoding="async">
          </div>
          <div class="card__body">
            <h3 class="card__title">${project.title}</h3>
            <p class="card__text">${project.description}</p>
            ${linkRow(project)}
          </div>
        </article>
      </li>`
    )
    .join('');

  projectsList.insertAdjacentHTML('beforeend', markup);
  document.dispatchEvent(new CustomEvent('content:rendered'));
})();
