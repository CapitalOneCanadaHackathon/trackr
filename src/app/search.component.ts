import { Component, Input } from '@angular/core';
import { ProfileComponent } from './profile.component';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    entryComponents: [ProfileComponent]
})
export class SearchComponent{

}