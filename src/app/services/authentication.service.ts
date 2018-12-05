import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  fireBaseToken: string;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  signUserIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.fireBaseToken = token
            );
          console.log(response);
          this.router.navigate(['/events']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getAuthToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.fireBaseToken = token
      );
    return this.fireBaseToken;
  }

  isTokenValid() {
    return this.fireBaseToken != null;
  }

  signOut() {
    firebase.auth().signOut()
      .then(
        response => {
          console.log(response);
          this.fireBaseToken = null;
        })
      .catch(
        error => console.log(error));
  }
}
