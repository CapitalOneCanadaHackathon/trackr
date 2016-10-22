import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from './client.service';
import { Client } from './client';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'client-list',
  template: `
  <div class="col-md-6 client-list-container">
    <ol>
      <li *ngFor='let client of clients | async' class="clients">
        <p (click)="onSelect(client)" (mouseover)="showDetails(client)"><strong>{{client.name}}</strong></p>
      </li>
    </ol>
  </div>
  <div class="col-md-6" *ngIf='client'>
      <h1> Mini Details </h1>
      <p><strong>Name:</strong> {{ client.name }} </p>
      <p><strong>Date of Birth:</strong> {{ client.dob }} </p>
      <p><strong>Address:</strong> {{ client.address }} </p>
      <p><strong>Gender:</strong> {{ client.gender }} </p>
      <p><strong>Phone:</strong> {{ client.phone }} </p>
  </div>
  `,
  styles: [`
    .clients {
      padding: 10px 0;
      cursor: pointer;
    }
    .clients:hover {
      text-transform: uppercase;

    }
  `],
  providers: [ClientService],
  entryComponents: [ClientDetailsComponent]
})
export class ClientListComponent {
  clients: FirebaseListObservable<any>;
  client:any;

  constructor(private clientService: ClientService, private router: Router) {
    this.clients = clientService.getClients();
  }

  onSelect(client:any) {
    this.router.navigate(['/client', client.$key]);
  }

  showDetails(client:any) {
    this.client = client;
    console.log(this.client);
  }
}
