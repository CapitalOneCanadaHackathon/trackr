import { Component } from '@angular/core';

@Component({
    selector: 'client-details',
    template: `
        <p> Client Details </p>
        <p>{{client}}</p>
    `
})
export class ClientDetailsComponent {
}