import { Project } from "../models/Project.model";

const portfolio: Project = new Project(0);
portfolio.title = "This";
portfolio.type = "Website";
portfolio.subType = "Portfolio";
portfolio.liveUrl = "https://www.wesleychappell.com";
portfolio.sourceUrl = "https://www.github.com/Nukambe";
portfolio.description = "This is my portfolio. It is a single page application built with Angular and TypeScript. It is a showcase of my projects and skills.";
portfolio.image = "images/avatar-grass.jpg";
portfolio.technologies = ["Angular", "JavaScript", "TypeScript", "HTML", "CSS"];
portfolio.color = "green";

const workout: Project = new Project(1);
workout.title = "GymNav";
workout.type = "Full Stack Web Application";
workout.subType = "Fitness";
workout.liveUrl = "https://gym.chappelly.com";
workout.sourceUrl = "https://github.com/Nukambe/workout"
workout.description = "GymNav is a workout tracker that allows users to create and track workouts. Users can add exercises to workouts and track their progress over time.";
workout.image = "/images/gymnav-ss.png";
workout.technologies = ["Java", "Spring Boot", "Angular", "PostgreSQL"];
workout.color = "gold";

const android: Project = new Project(2);
android.title = "Vacation Planner";
android.type = "Mobile Application";
android.subType = "Android";
android.liveUrl = "";
android.sourceUrl = "";
android.description = "Vacation Planner is an Android application that allows users to plan vacations. Users can add destinations, activities, and notes to their trips.";
android.image = "/images/vacation-planner-ss.png";
android.technologies = ["Java", "Android", "SQLite"];
android.color = "blue";

const meal: Project = new Project(3);
meal.title = "MealNav";
meal.type = "Full Stack Web Application";
meal.subType = "Food";
meal.liveUrl = "https://meal.chappelly.com";
meal.sourceUrl = "";
meal.description = "MealNav is a meal planner that allows users to create and track meals. Users can add recipes to meals and track their nutrition over time.";
meal.image = "/images/mealnav-ss.png";
meal.technologies = ["Nodejs", "NestJS", "React", "PostgreSQL"];
meal.color = "green";

const forms: Project = new Project(4);
forms.title = "Forms";
forms.type = "Full Stack Web Application";
forms.subType = "Productivity";
forms.liveUrl = "https://forms.chappelly.com";
forms.sourceUrl = "";
forms.description = "Forms is a form builder that allows users to create and share forms. Users can add fields to forms and track responses over time.";
forms.image = "/images/forms-ss.png";
forms.technologies = ["Nodejs", "React", "PostgreSQL"];
forms.color = "green";

const actress: Project = new Project(5);
actress.title = "moriahyoung.com";
actress.type = "Website";
actress.subType = "Actress Showcase";
actress.liveUrl = "https://www.moriahyoung.com";
actress.sourceUrl = "";
actress.description = "This is a website for actress Moriah Young. It is a single page application built with Angular and TypeScript. It is a showcase of her work and skills.";
actress.image = "/images/moriah-ss.png";
actress.technologies = ["React", "JavaScript", "HTML", "CSS", "Tailwind"];
actress.color = "red";

const volleyball: Project = new Project(6);
volleyball.title = "Volleyball";
volleyball.type = "Website";
volleyball.subType = "Sports";
volleyball.liveUrl = "";
volleyball.sourceUrl = "";
volleyball.description = "This is a website for volleyball. It is a single page application built with Angular and TypeScript. It is a showcase of volleyball news and information.";
volleyball.image = "/images/volleyball-ss.png";
volleyball.technologies = ["Nextjs", "HTML", "CSS"];

export const projectData: Project[] = [portfolio, workout, android, meal, forms, actress, volleyball];
