import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'kf-carzita';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWNyT0Sn_3z_UdG_JGFeG0Llx1sdGvlhk',
      authDomain: 'iokrf-3d980.firebaseapp.com',
      databaseURL: 'https://iokrf-3d980.firebaseio.com',
      projectId: 'iokrf-3d980',
      storageBucket: 'iokrf-3d980.appspot.com',
      messagingSenderId: '136951069661'
    });
  }
}
