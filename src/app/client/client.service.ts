import { Injectable } from '@angular/core';
import { Client, MOCK_CLIENTS } from './client';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.clients = af.database.list('/clients');
  }

  getClient(key: string): FirebaseObjectObservable<any> {
      return this.af.database.object('/clients/' + key);
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
    MOCK_CLIENTS.forEach(this.addClient);
  }
}
