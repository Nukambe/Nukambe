import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: "", component: ProfileComponent, pathMatch: "full" },
    { path: "projects", component: ProjectsComponent },
    { path: "skills", component: SkillsComponent },
    { path: "contact", component: ContactComponent }
];
