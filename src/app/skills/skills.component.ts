import { Component, OnInit } from '@angular/core';
import { Certification } from '../../models/Certification.model';
import { certificationData } from '../../data/certifications';
import { CertificationComponent } from "./certification/certification.component";
import { SkillComponent } from "./skill/skill.component";
import { Skill } from '../../models/Skill.model';
import { skillsData } from '../../data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CertificationComponent, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  certifications: Certification[] = certificationData;
  skills: Skill[] = skillsData;

  constructor() { }
}
