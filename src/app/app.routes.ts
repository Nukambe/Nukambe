import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: "", component: ProfileComponent, pathMatch: "full" },
    { path: "projects", component: ProjectsComponent }
];