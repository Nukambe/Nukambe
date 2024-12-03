window.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills-list');

  [
    "Angular", "React", "Nextjs", "Svelte", "Tailwind", "CSS", "HTML", // Frontend
    "Nodejs", "NestJS", "Spring Boot",                                // Backend
    "JavaScript", "TypeScript", "Python", "Java", "C", "Go",          // Languages
    "Unreal Engine", "Pygame",                                        // Game Development
    "PostgreSQL", "SQLite", "SQL",                                    // Databases
    "AWS", "Docker", "CICD",                                          // Cloud and Infrastructure
    "Kafka", "RabbitMQ",                                              // Messaging
    "Git", "Shells"                                                   // Miscellaneous
  ].forEach(skill => {
    const skillElement = document.createElement("li");
    skillElement.id = skill;
    skillElement.classList.add("skill");
    skillElement.style.animationDelay = Math.random() * 5 + 's';

    const label = document.createElement("label");
    label.id = skill + "-label";
    label.classList.add("skill-label");
    label.innerHTML = skill;
    // label.style.fontSize = `${100 / skill.length}pt`;
    // label.style.fontSize = `${Math.max(10, 100 / Math.sqrt(skill.length))}pt`;
    label.style.fontSize = `${Math.max(10, 50 / Math.log2(skill.length + 1))}pt`;

    const icon = document.createElement("img");
    icon.id = skill + "-icon";
    icon.classList.add("skill-icon");
    icon.src = `images/skills/${skill}.${skill === "Java" ? "webp" : "png"}`;

    skillElement.onmouseenter = () => {
      label.classList.add("hovered");
    }
    skillElement.onmouseleave = () => {
      label.classList.remove("hovered");
    }

    skillElement.appendChild(label);
    skillElement.appendChild(icon);
    // skillElement.appendChild(overlay);
    skillsSection.append(skillElement);
  });
});
