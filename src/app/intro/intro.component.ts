import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements AfterViewInit {

  @Output() close: EventEmitter<void> = new EventEmitter();
  @ViewChild('frame') frame!: ElementRef<HTMLIFrameElement>;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const host = this.elementRef.nativeElement;
    const iFrame = this.frame.nativeElement;

    host.addEventListener('click', (event: Event) => {
      if (event.target !== iFrame) {
        this.closeIntro();
      }
    });
  }

  closeIntro() {
    this.close.emit();
  }
}
