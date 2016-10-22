import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyB1YoqFwLH8yHfbrBvDPp6EIS9G9IYJVJs",
    authDomain: "trackr-23a42.firebaseapp.com",
    databaseURL: "https://trackr-23a42.firebaseio.com",
    storageBucket: "trackr-23a42.appspot.com",
    messagingSenderId: "767208206365"
  };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'search', component: SearchComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
