import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: { img: string; title: string; link: string; description: string }[] = [
    { img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png", title: "LinkedIn", link: "https://www.linkedin.com/in/weschap/", description: "Connect with me on LinkedIn!" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg", title: "GitHub", link: "https://github.com/Nukambe", description: "Check out my GitHub!" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope-letter-icon.png", title: "Email", link: "mailto:chappellwesley@gmail.com", description: "Shoot me an email!" }
  ];
}
