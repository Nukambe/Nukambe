import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Project } from '../../../models/Project.model';
import { TechStackComponent } from "../../tech-stack/tech-stack.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TechStackComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {

  @Input() project: Project = new Project(0);

  constructor(public elementRef: ElementRef) { }
}
