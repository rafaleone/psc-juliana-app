import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Psychologist Landing Page';
  logo: string = 'assets/images/logo.png';

  navigateTo(section: string) {
    // Logic for navigation to different sections of the landing page
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}