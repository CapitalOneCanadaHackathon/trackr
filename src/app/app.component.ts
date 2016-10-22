import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { ClientService } from './client/client.service';
import { TherapistService } from './therapist/therapist.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Trackr</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Login</a>
      <a routerLink="/search" routerLinkActive="active">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [
    ClientService,
    TherapistService
  ]
})
export class AppComponent {
}
