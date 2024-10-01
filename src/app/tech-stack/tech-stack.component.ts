import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

  @Input() techStack: string[] = [];

  constructor() { }

  imageSource(tech: string): string {
    return `/images/mana/${tech}.png`;
  }
}
