import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  psychologistName: string = 'Dr. Jane Doe';
  qualifications: string = 'PhD in Psychology';
  experience: string = '10 years of experience in clinical psychology.';
  approach: string = 'I use a holistic approach to therapy, focusing on the individual needs of each patient.';

  constructor() {}
}