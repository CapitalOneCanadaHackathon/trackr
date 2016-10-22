import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

import '../../public/css/styles.css';
import { ClientService } from './client/client.service';
import { TherapistService } from './therapist/therapist.service';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="col-md-12">
      <div *ngIf='(af.auth | async)'>
        <nav>
          <ul class="nav nav-pills">
            <li role="presentation" class="active">
              <button class="btn btn-lg btn-primary btn-block" (click)='logout()' routerLink="/" routerLinkActive="active">Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <router-outlet></router-outlet>
  `,
  styles:[ `
    nav {
      float: right;
    }
  `],
  providers: [
    ClientService,
    TherapistService
  ]
})
export class AppComponent {
  constructor(public af: AngularFire) {}

  logout() {
      this.af.auth.logout();
  }
}