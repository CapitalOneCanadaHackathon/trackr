import { Component } from '@angular/core';
import { TherapistService } from './therapist.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'therapist-list',
  template: `
    <h1>Therapist list</h1>
    <ol>
      <li *ngFor='let therapist of therapists | async'>
        <h2>{{therapist.name}}</h2>
      </li>
    </ol>
  `,
  providers: [TherapistService]
})
export class TherapistListComponent {
  therapists: FirebaseListObservable<any>;
  constructor(private therapistService: TherapistService) {
    this.therapists = therapistService.getTherapists();
  }
}
