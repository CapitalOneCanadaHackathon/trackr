import { Injectable } from '@angular/core';
import { Client } from './client';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

const initClientData = [
  {name: 'abc'},
  {name: 'efg'}
];

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.clients = af.database.list('/clients');
  }

  getClients(): FirebaseListObservable<any> {
    return this.clients;
  }

  addClient(client: Client) {
    this.clients.push(client);
  }

  updateClient(id: any, client: Client) {
    this.clients.update(id, client);
  }

  removeClient(id: any) {
    this.clients.remove(id);
  }

  populateClients() {
    initClientData.forEach(this.addClient);
  }
}
