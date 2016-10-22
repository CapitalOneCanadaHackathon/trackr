import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'client-list',
  template: `
    <h1>Client list</h1>
    <ol>
      <li *ngFor='let client of clients | async'>
        <h2 (click)="selectedClient(client)">{{client.name}}</h2>
      </li>
    </ol>
    <client-details></client-details>
  `,
  providers: [ClientService],
  entryComponents: [ClientDetailsComponent]
})
export class ClientListComponent {
  clients: FirebaseListObservable<any>;
  constructor(private clientService: ClientService) {
    this.clients = clientService.getClients();
  }
  selectedClient(client:any) {
    console.log(client);
  }
}
