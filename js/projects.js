window.addEventListener("DOMContentLoaded", function() {
  const projectsList = document.getElementById("projects-list");
  const projects = [
    {
      title: "GymNav",
      description: "GymNav is a web app that allows users to create and track workouts. Users can add exercises to workouts and track their progress over time.",
      url: "https://gym.chappelly.com/",
      repo: "https://github.com/Nukambe/workout",
      thumbnail: "images/thumbnails/gymnav-ss.png",
    },
    {
      title: "Vacation Planner",
      description: "Vacation Planner is an Android application that allows users to schedule vacations. Users can add excursions to their trips and set alerts.",
      url: "",
      repo: "",
      thumbnail: "images/thumbnails/vacation-planner-ss.png",
    },
    {
      title: "MealNav",
      description: "MealNav is a meal planner that allows users to track meals. Users can add recipes to their calendar and track their nutrition.",
      url: "",
      repo: "https://github.com/Nukambe/mealnav",
      thumbnail: "images/thumbnails/mealnav-ss.png",
    },
    {
      title: "Forms",
      description: "Forms is a form builder that allows users to create and share forms. Users can add fields to forms and track responses over time.",
      url: "",
      repo: "https://github.com/Nukambe/marci-forms",
      thumbnail: "images/thumbnails/forms-ss.png",
    },
    {
      title: "moriahyoung",
      description: "This is a website for actress, Moriah Young. It is a single page site built with React and a showcase of her audio and video reels.",
      url: "https://www.moriahyoung.com/",
      repo: "https://github.com/Nukambe/moriahyoung-react-app",
      thumbnail: "images/thumbnails/moriah-ss.png",
    },
    {
      title: "Volleyball",
      description: "This is a website for a high school volleyball player. It is a single page website built with Next.js.",
      url: "",
      repo: "https://github.com/Nukambe/samiyah",
      thumbnail: "images/thumbnails/volleyball-ss.jpg",
    },
  ];

  projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.id = "project-" + index;
    article.innerHTML = `
    <style>
        #project-${index}::before {
        background-image: url(${project.thumbnail}), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
        }
        #project-${index}:hover::before {
        background-image: url(${project.thumbnail}), linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        }
    </style>
    <h4>${project.title}</h4>
    <p>${project.description}</p>
    ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">View the live project.</a>` : ""}
    ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer">View the source code.</a>` : ""}
    `;

    projectsList.appendChild(article);
  });
});
