import { Skill, tag } from "../models/Skill.model";

const java: Skill = new Skill(0);
java.name = "Java";
java.description = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.";
java.image = "/images/java.png";
java.tags = [tag.backend, tag.OOP];

const javascript = new Skill(1);
javascript.name = "JavaScript";
javascript.description = "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.";
javascript.image = "/images/javascript.png";
javascript.tags = [tag.frontend, tag.backend];

const typescript = new Skill(2);
typescript.name = "TypeScript";
typescript.description = "TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language.";
typescript.image = "/images/typescript.png";
typescript.tags = [tag.frontend, tag.backend];

const angular = new Skill(3);
angular.name = "Angular";
angular.description = "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.";
angular.image = "/images/angular.png";
angular.tags = [tag.frontend];

const react = new Skill(4);
react.name = "React";
react.description = "React is a JavaScript library for building user interfaces.";
react.image = "/images/react.png";
react.tags = [tag.frontend];

const nodejs = new Skill(5);
nodejs.name = "Nodejs";
nodejs.description = "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.";
nodejs.image = "/images/nodejs.png";
nodejs.tags = [tag.backend];

const nestjs = new Skill(6);
nestjs.name = "NestJS";
nestjs.description = "NestJS is a framework for building efficient, scalable Node.js server-side applications.";
nestjs.image = "/images/nestjs.png";
nestjs.tags = [tag.backend];

const spring = new Skill(7);
spring.name = "Spring Boot";
spring.description = "Spring Boot is an open-source Java-based framework used to create micro-services.";
spring.image = "/images/spring.png";
spring.tags = [tag.backend];

const postgresql = new Skill(8);
postgresql.name = "PostgreSQL";
postgresql.description = "PostgreSQL";
postgresql.image = "/images/postgresql.png";
postgresql.tags = [tag.database];

const html = new Skill(9);
html.name = "HTML";
html.description = "HTML";
html.image = "/images/html.png";
html.tags = [tag.frontend];

const css = new Skill(10);
css.name = "CSS";
css.description = "CSS";
css.image = "/images/css.png";
css.tags = [tag.frontend];

const android = new Skill(11);
android.name = "Android";
android.description = "Android";
android.image = "/images/android.png";
android.tags = [tag.mobile];

const sqlite = new Skill(12);
sqlite.name = "SQLite";
sqlite.description = "SQLite";
sqlite.image = "/images/sqlite.png";
sqlite.tags = [tag.database];

const tailwind = new Skill(13);
tailwind.name = "Tailwind";
tailwind.description = "Tailwind";
tailwind.image = "/images/tailwind.png";
tailwind.tags = [tag.frontend];

const nextjs = new Skill(14);
nextjs.name = "Nextjs";
nextjs.description = "Next.js";
nextjs.image = "/images/nextjs.png";
nextjs.tags = [tag.frontend, tag.backend];

// const sequalize = new Skill(15);
// sequalize.name = "Sequalize";
// sequalize.description = "Sequalize";
// sequalize.image = "/images/sequalize.png";
// sequalize.tags = [tag.ORM];

// const hibernate = new Skill(16);
// hibernate.name = "Hibernate";
// hibernate.description = "Hibernate";
// hibernate.image = "/images/hibernate.png";
// hibernate.tags = [tag.ORM];

// const room = new Skill(17);
// room.name = "Room";
// room.description = "Room";
// room.image = "/images/room.png";
// room.tags = [tag.ORM, tag.mobile];

const kafka = new Skill(18);
kafka.name = "Kafka";
kafka.description = "Kafka";
kafka.image = " images/kafka.png";
kafka.tags = [];

export const skillsData: Skill[] = [
    java,
    javascript,
    typescript,
    angular,
    react,
    nodejs,
    nestjs,
    spring,
    postgresql,
    html,
    css,
    android,
    sqlite,
    tailwind,
    nextjs,
    // sequalize,
    // hibernate,
    // room,
    kafka
];
