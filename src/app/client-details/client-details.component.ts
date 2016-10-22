import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { Client } from '../client/client';
import { ClientService } from '../client/client.service';

@Component({
    selector: 'client-details',
    templateUrl: './client-details.component.html',
      styleUrls: [
      './client-details.component.css'
    ]
})
export class ClientDetailsComponent {
    client: FirebaseObjectObservable<any>;

    constructor(private clientService: ClientService, private route: ActivatedRoute) {
        let key = this.route.snapshot.params['key'];
        this.client = clientService.getClient(key);
    }
}