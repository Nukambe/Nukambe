import { Project } from "../models/Project.model";

const portfolio: Project = new Project(0);
portfolio.title = "This";
portfolio.type = "Website";
portfolio.subType = "Portfolio";
portfolio.liveUrl = "https://www.wesleychappell.com";
portfolio.sourceUrl = "https://www.github.com/Nukambe";
portfolio.description = "This is my portfolio, a single page application built with Angular. It is a showcase of my projects and skills.";
portfolio.image = "images/avatar-grass.jpg";
portfolio.technologies = ["Angular", "JavaScript", "TypeScript", "HTML", "CSS"];
portfolio.color = "green";

const workout: Project = new Project(1);
workout.title = "GymNav";
workout.type = "Full Stack Web Application";
workout.subType = "Fitness";
workout.liveUrl = "https://gym.chappelly.com";
workout.sourceUrl = "https://github.com/Nukambe/workout"
workout.description = "GymNav is a web app that allows users to create and track workouts. Users can add exercises to workouts and track their progress over time.";
workout.image = "/images/gymnav-ss.png";
workout.technologies = ["Java", "Spring Boot", "Angular", "PostgreSQL"];
workout.color = "gold";

const android: Project = new Project(2);
android.title = "Vacation Planner";
android.type = "Mobile Application";
android.subType = "Android";
android.liveUrl = "";
android.sourceUrl = "";
android.description = "Vacation Planner is an Android application that allows users to schedule vacations. Users can add excursions to their trips and set alerts .";
android.image = "/images/vacation-planner-ss.png";
android.technologies = ["Java", "Android", "SQLite"];
android.color = "purple";

const meal: Project = new Project(3);
meal.title = "MealNav";
meal.type = "Full Stack Web Application";
meal.subType = "Food";
meal.liveUrl = "https://meal.chappelly.com";
meal.sourceUrl = "https://github.com/Nukambe/mealnav";
meal.description = "MealNav is a meal planner that allows users to track meals. Users can add recipes to their calendar and track their nutrition.";
meal.image = "/images/mealnav-ss.png";
meal.technologies = ["Nodejs", "NestJS", "React", "PostgreSQL"];
meal.color = "lightgreen";

const forms: Project = new Project(4);
forms.title = "Forms";
forms.type = "Full Stack Web Application";
forms.subType = "Productivity";
forms.liveUrl = "https://forms.chappelly.com";
forms.sourceUrl = "https://github.com/Nukambe/marci-forms";
forms.description = "Forms is a form builder that allows users to create and share forms. Users can add fields to forms and track responses over time.";
forms.image = "/images/forms-ss.png";
forms.technologies = ["Nodejs", "React", "PostgreSQL"];
forms.color = "green";

const actress: Project = new Project(5);
actress.title = "moriahyoung";
actress.type = "Website";
actress.subType = "Actress Showcase";
actress.liveUrl = "https://www.moriahyoung.com";
actress.sourceUrl = "https://github.com/Nukambe/moriahyoung-react-app";
actress.description = "This is a website for actress, Moriah Young. It is a single page site built with React and a showcase of her audio and video reels.";
actress.image = "/images/moriah-ss.png";
actress.technologies = ["React", "JavaScript", "HTML", "CSS", "Tailwind"];
actress.color = "red";

const volleyball: Project = new Project(6);
volleyball.title = "Volleyball";
volleyball.type = "Website";
volleyball.subType = "Sports";
volleyball.liveUrl = "";
volleyball.sourceUrl = "https://github.com/Nukambe/samiyah";
volleyball.description = "This is a website for a highschool volleyball player. It is a single page website built with Next.js. ";
volleyball.image = "/images/volleyball-ss.jpg";
volleyball.technologies = ["Nextjs", "HTML", "CSS"];
volleyball.color = "darkblue"

export const projectData: Project[] = [portfolio, workout, android, meal, forms, actress, volleyball];
