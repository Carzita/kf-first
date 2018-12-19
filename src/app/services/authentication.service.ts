import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Injectable()
export class AuthenticationService {
  fireBaseToken: string;

  // private signInError = new Subject<string>();

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
          this.router.navigate(['/events/new']);
        }
      )
      .catch(
        error => {
          console.log(error);
          if (error.status === 400) {
            return throwError('Wrong credentials');
          }
        }
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
     //  return this.fireBaseToken != null;
    // return firebase.auth().currentUser != null;
     return true;
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
