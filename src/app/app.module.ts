import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'search', component: SearchComponent }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }