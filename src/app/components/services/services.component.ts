import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Individual Therapy',
      description: 'Personalized therapy sessions to address individual mental health needs.',
      icon: 'assets/icons/individual-therapy.png'
    },
    {
      title: 'Couples Therapy',
      description: 'Guided sessions for couples to improve communication and resolve conflicts.',
      icon: 'assets/icons/couples-therapy.png'
    },
    {
      title: 'Group Therapy',
      description: 'Supportive group sessions for shared experiences and healing.',
      icon: 'assets/icons/group-therapy.png'
    },
    {
      title: 'Cognitive Behavioral Therapy',
      description: 'Evidence-based therapy focusing on changing negative thought patterns.',
      icon: 'assets/icons/cbt.png'
    }
  ];
}