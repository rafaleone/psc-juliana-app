import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  title: string;
  subtitle: string;
  backgroundImage: string;

  constructor() {
    this.title = 'Welcome to Your Path of Healing';
    this.subtitle = 'Professional Psychological Support for a Better You';
    this.backgroundImage = 'assets/images/hero-background.jpg'; // Path to the background image
  }
}