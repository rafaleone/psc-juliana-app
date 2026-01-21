import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: { name: string; feedback: string; image: string }[] = [
    {
      name: 'John Doe',
      feedback: 'The sessions have been life-changing for me. Highly recommend!',
      image: 'assets/images/john_doe.jpg'
    },
    {
      name: 'Jane Smith',
      feedback: 'A very supportive and understanding environment. I feel heard.',
      image: 'assets/images/jane_smith.jpg'
    },
    {
      name: 'Emily Johnson',
      feedback: 'Professional and compassionate. I have made great progress.',
      image: 'assets/images/emily_johnson.jpg'
    }
  ];
}