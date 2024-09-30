import { Component, ElementRef, Input } from '@angular/core';
import { Project } from '../../../models/Project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {

  @Input() project: Project = new Project(0);

  constructor(public elementRef: ElementRef) { }
}
