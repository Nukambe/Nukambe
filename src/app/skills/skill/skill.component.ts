import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Skill } from '../../../models/Skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent implements OnInit, AfterViewInit {

  @Input() skill: Skill = new Skill(0);
  @ViewChild("skillHeader") skillHeader!: ElementRef<HTMLParagraphElement>;
  @ViewChild("skillBody") skillBody!: ElementRef<HTMLParagraphElement>;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const host = this.elementRef.nativeElement;
    this.renderer.setStyle(host, 'animation-delay', Math.random() * 1.2 + 's');
  }

  ngAfterViewInit(): void {
    const header = this.skillHeader.nativeElement;
    const body = this.skillBody.nativeElement;

    body.addEventListener('mouseenter', () => {
      this.renderer.removeClass(header, "hide");
    });
    body.addEventListener('mouseleave', () => {
      this.renderer.addClass(header, "hide");
    });
  }
}
