import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Method to handle form submission
  onSubmit(form: any) {
    // Logic to handle contact form submission
    console.log('Form submitted:', form);
  }
}