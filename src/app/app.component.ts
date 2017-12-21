import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Reddit for CirclePix';

  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAO1ADgm5Yz9f6GqlQrbWnO_-ZU7SzEL2M',
      authDomain: 'myredditforcirclepix.firebaseapp.com',
    });
  }
}
