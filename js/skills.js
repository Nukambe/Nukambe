window.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills-list');

  ["Android", "Angular", "AWS", "CSS", "Git", "HTML", "Java", "JavaScript", "Kafka", "NestJS", "Nextjs", "Nodejs", "PostgreSQL", "Pygame", "Python", "React", "Spring Boot", "SQLite", "Tailwind", "TypeScript", "Unreal Engine"]
    .forEach(skill => {
    const skillElement = document.createElement("li");
    skillElement.id = skill;
    skillElement.classList.add("skill");
    skillElement.style.animationDelay = Math.random() * 1.5 + 's';

    const label = document.createElement("label");
    label.id = skill + "-label";
    label.classList.add("skill-label");
    label.innerHTML = skill;
    label.style.fontSize = "24pt";

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
