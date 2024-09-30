import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements AfterViewInit {
  @ViewChild("parallaxWrapper") parallaxWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild("parallaxFg") parallaxFg!: ElementRef<HTMLImageElement>;
  high: number = 5;
  low: number = this.high * -1;
  position: number = 1;
  rect: DOMRect | null = null;
  midX: number = 0;
  midY: number = 0;
  hovering: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.rect = this.parallaxWrapper.nativeElement.getBoundingClientRect();
    this.midX = (this.rect.right - this.rect.left) / 2 + this.rect.left;
    this.midY = (this.rect.bottom - this.rect.top) / 2 + this.rect.top;

    this.parallaxWrapper.nativeElement.addEventListener("mouseenter", () => this.hovering = true);
    this.parallaxWrapper.nativeElement.addEventListener("mouseleave", () => this.hovering = false);
    document.addEventListener("mousemove", this.parallax.bind(this));
  }

  parallax(event: MouseEvent) {
    if (this.hovering) {
      const x = (event.pageX / window.innerWidth) * (this.high * 2) + this.low;
      const y = (event.pageY / window.innerHeight) * (this.high * 2) + this.low;
      // const scaleX = ((event.pageX - this.midX) / this.midX) * 10;
      // const scaleY = ((event.pageY - this.midY) / this.midY) * 10;
      this.parallaxFg.nativeElement.style.transform = `translateX(${x * 2}%) translateY(${y}%)`;
      this.parallaxFg.nativeElement.style.transition = "none";
    } else {
      this.parallaxFg.nativeElement.style.transform = `translateX(0%) translateY(0%) skew(0deg, 0deg)`;
      this.parallaxFg.nativeElement.style.transition = "all 0.5s ease-out";
    }
  }
}
