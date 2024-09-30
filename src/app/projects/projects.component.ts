import { AfterViewInit, Component, ComponentRef, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { Project } from '../../models/Project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild('projectList', { read: ViewContainerRef }) projectList!: ViewContainerRef;
  projectItems: ComponentRef<ProjectComponent>[] = [];
  focusedProject: number = 0;

  projects: Project[] = [
    new Project(0),
    new Project(1),
    new Project(2),
    new Project(3)
  ];

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.initProjects();
  }

  initProjects() {
    [
      { idx: 0, class: 'center' },
      { idx: this.projects.length - 1, class: 'left' },
      { idx: 1, class: 'right' },
    ].forEach(project => {
      const projectComponent = this.createProject(this.projects[project.idx]);
      this.renderer.addClass(projectComponent.location.nativeElement, `project-${project.class}`);
    });
  }

  createProject(project: Project) {
    const projectComponent = this.projectList.createComponent(ProjectComponent);
    projectComponent.setInput('project', project);
    this.renderer.setAttribute(projectComponent.location.nativeElement, 'id', "" + project.id);
    this.projectItems.push(projectComponent);
    projectComponent.onDestroy(() => {
      // const index = this.projectItems.indexOf(projectComponent);
      // this.projectItems.splice(index, 1);
      this.projectItems = this.projectItems.filter(pi => pi !== projectComponent);
    });
    return projectComponent;
  }

  scrollLeft() {
    const rightProject = this.createProject(this.projects[(this.focusedProject + 2) % this.projects.length]);
    this.renderer.addClass(rightProject.location.nativeElement, 'created-right');
    this.focusedProject = (this.focusedProject + 1) % this.projects.length;

    this.projectItems.forEach((project) => {
      const element = project.location.nativeElement as HTMLElement;
      const { classList } = element;

      if (classList.contains('project-left')) {
        this.renderer.addClass(element, 'created-left');
        this.renderer.removeClass(element, 'project-left');
        setTimeout(() => project.destroy(), 200);
      } else if (classList.contains('project-center')) {
        this.renderer.addClass(element, 'project-left');
        this.renderer.removeClass(element, 'project-center');
      } else if (classList.contains('project-right')) {
        this.renderer.addClass(element, 'project-center');
        this.renderer.removeClass(element, 'project-right');
      } else if (classList.contains('created-right')) {
        setTimeout(() => {
          this.renderer.addClass(element, 'project-right')
          this.renderer.removeClass(element, 'created-right');
        }, 0);
      }
    });
  }

  scrollRight() {
    const leftProject = this.createProject(this.projects[Math.abs(this.focusedProject - 2) % this.projects.length]);
    this.renderer.addClass(leftProject.location.nativeElement, 'created-left');
    this.focusedProject = (this.focusedProject - 1) % this.projects.length;

    this.projectItems.forEach((project) => {
      const element = project.location.nativeElement as HTMLElement;
      const { classList } = element;

      if (classList.contains('project-left')) {
        this.renderer.addClass(element, 'project-center');
        this.renderer.removeClass(element, 'project-left');
      } else if (classList.contains('project-center')) {
        this.renderer.addClass(element, 'project-right');
        this.renderer.removeClass(element, 'project-center');
      } else if (classList.contains('project-right')) {
        this.renderer.addClass(element, 'created-right');
        this.renderer.removeClass(element, 'project-right');
        setTimeout(() => project.destroy(), 200);
      } else if (classList.contains('created-left')) {
        setTimeout(() => {
          this.renderer.addClass(element, 'project-left');
          this.renderer.removeClass(element, 'created-left');
        }, 0);
      }
    });
  }
}
