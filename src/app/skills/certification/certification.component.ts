import { Component, Input } from '@angular/core';
import { Certification } from '../../../models/Certification.model';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {

  @Input() certification: Certification = new Certification(0);

  constructor() { }
}
