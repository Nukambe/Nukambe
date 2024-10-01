import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { Project } from '../../models/Project.model';
import { projectData } from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('projectList', { read: ViewContainerRef }) projectList!: ViewContainerRef;
  projectItems: ComponentRef<ProjectComponent>[] = [];
  focusedProject: number = 0;

  projects: Project[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.projects = projectData;
  }

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
    this.renderer.setStyle(projectComponent.location.nativeElement, 'background-image', `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgb(255, 255, 255, 0.8), rgb(255, 255, 255)), url(${project.image})`);
    const elements = projectComponent.location.nativeElement.querySelectorAll('*');
    elements.forEach((element: HTMLElement) => {
      this.renderer.setStyle(element, 'border-color', project.color);
    });
    this.projectItems.push(projectComponent);
    projectComponent.onDestroy(() => {
      // const index = this.projectItems.indexOf(projectComponent);
      // this.projectItems.splice(index, 1);
      this.projectItems = this.projectItems.filter(pi => pi !== projectComponent);
    });
    return projectComponent;
  }

  scrollRight() {
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

  scrollLeft() {
    let target = this.focusedProject - 2;
    if (target < 0) {
      target = this.projects.length + target;
    }

    const leftProject = this.createProject(this.projects[target]);
    this.renderer.addClass(leftProject.location.nativeElement, 'created-left');

    this.focusedProject = this.focusedProject - 1;
    if (this.focusedProject < 0) {
      this.focusedProject = this.projects.length - 1;
    }

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
