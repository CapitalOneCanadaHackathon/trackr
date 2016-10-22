import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from './client.service';
import { Client } from './client';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'client-list',
  template: `
    <h1>Client list</h1>
    <ol>
      <li *ngFor='let client of clients | async'>
        <h2 (click)="onSelect(client)">{{client.name}}</h2>
      </li>
    </ol>
  `,
  providers: [ClientService],
  entryComponents: [ClientDetailsComponent]
})
export class ClientListComponent {
  clients: FirebaseListObservable<any>;

  constructor(private clientService: ClientService, private router: Router) {
    this.clients = clientService.getClients();
  }

  onSelect(client:any) {
    this.router.navigate(['/client', client.$key]);
  }
}
