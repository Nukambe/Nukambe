import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from "../intro/intro.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, IntroComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showIntro: boolean = false;

  constructor() { }

  showIntroModal() {
    this.showIntro = true;
  }

  closeIntroModal() {
    this.showIntro = false;
  }
}
