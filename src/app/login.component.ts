import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  styleUrls: [
      './login.component.css'
      ]
})
export class LoginComponent {
  constructor(public af: AngularFire) {}

   login() {
      this.af.auth.login();
    }

    logout() {
      this.af.auth.logout();
    }
 }
