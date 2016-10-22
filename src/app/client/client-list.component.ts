import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'client-list',
  template: `
    <h1>Client list</h1>
    <ol>
      <li *ngFor='let client of clients | async'>
        <h2>{{client.name}}</h2>
      </li>
    </ol>
  `,
  providers: [ClientService]
})
export class ClientListComponent {
  clients: FirebaseListObservable<any>;
  constructor(private clientService: ClientService) {
    this.clients = clientService.getClients();
  }
}
