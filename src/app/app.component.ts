import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Juliana Anita da Silva - Psicóloga';
  whatsappNumber = '5511948885878';
  whatsappMessage = 'Olá! Gostaria de agendar uma sessão de psicoterapia.';
  showImageModal = false;

  openImageModal() {
    this.showImageModal = true;
  }

  closeImageModal() {
    this.showImageModal = false;
  }
}
