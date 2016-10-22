import { Component, Input } from '@angular/core';
import { ClientListComponent } from '../client/client-list.component';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
      styleUrls: [
      './search.component.css'
    ],
    entryComponents: [ClientListComponent]
})
export class SearchComponent{

}