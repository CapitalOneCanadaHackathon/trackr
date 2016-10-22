import { Injectable } from '@angular/core';
import { Therapist } from './therapist';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

const MOCK_THERAPISTS = [
  { name: 'Therapist 1' },
  { name: 'Therapist 2' },
  { name: 'Therapist 3' }
]

@Injectable()
export class TherapistService {
  therapists: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.therapists = af.database.list('/therapists');
  }

  getTherapists(): FirebaseListObservable<any> {
    return this.therapists;
  }

  addTherapist(therapist: Therapist) {
    this.therapists.push(therapist);
  }

  updateTherapist(id: any, therapist: Therapist) {
    this.therapists.update(id, therapist);
  }

  removeTherapist(id: any) {
    this.therapists.remove(id);
  }

  populateTherapists() {
    MOCK_THERAPISTS.forEach(this.addTherapist);
  }
}
