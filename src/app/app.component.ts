import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { ClientService } from './client/client.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Trackr</h1>
    <h1>{{ (client | async)?.name}}</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Login</a>
      <a routerLink="/search" routerLinkActive="active">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [ClientService]
})
export class AppComponent {
  client: FirebaseObjectObservable<any>;
  constructor(private clientService: ClientService) {
    this.client = clientService.getClient();
    console.log(this.client)
  }
}
