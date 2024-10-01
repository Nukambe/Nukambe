import { Component, Input } from '@angular/core';
import { Skill } from '../../../models/Skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  @Input() skill: Skill = new Skill(0);

  constructor() { }
}
