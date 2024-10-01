import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  navLinks = [
    { img: "/", link: "home" },
    { img: "/", link: "projects" },
    // { img: "/", link: "experience" },
    { img: "/", link: "skills" },
    { img: "/", link: "testimonials" },
    { img: "/", link: "contact" },
  ]
}
