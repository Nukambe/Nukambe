import { Component, OnInit } from '@angular/core';
import { Certification } from '../../models/Certification.model';
import { certificationData } from '../../data/certifications';
import { CertificationComponent } from "./certification/certification.component";
import { SkillComponent } from "./skill/skill.component";
import { Skill, tag } from '../../models/Skill.model';
import { skillsData } from '../../data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CertificationComponent, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  certifications: Certification[] = certificationData;
  skills: Skill[] = skillsData;
  activeFilter: tag | null = null;
  tags: Set<tag> = new Set();

  constructor() { }

  ngOnInit(): void {
    this.skills.forEach(skill => {
      skill.tags.forEach(tag => this.tags.add(tag));
    });
  }

  filterSkills(tag: tag) {
    if (tag === this.activeFilter) {
      this.activeFilter = null;
    } else {
      this.activeFilter = tag;
    }
  }

  skillIsHidden(tags: tag[]) {
    return this.activeFilter !== null ? !tags.includes(this.activeFilter) : false;
  }
}
