import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClientService {
  client: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {

  }

  getClient(): FirebaseObjectObservable<any> {
    return this.af.database.object('/newClient')
  }
}
