import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

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
              (token: string) => {
                this.fireBaseToken = token;
                sessionStorage.setItem('currentUser', token);
              }
            );
          console.log(response);
          this.router.navigate(['/offenders']);
        }
      )
      .catch(
        error => {
          console.log(error);
          if (error.status === 400) {
            return throwError('Wrong credentials, try again');
          }
        }
      );
  }

  getAuthToken() {
    this.fireBaseToken = sessionStorage.getItem('currentUser');
    return this.fireBaseToken;
  }

  isTokenValid() {
    return this.fireBaseToken = sessionStorage.getItem('currentUser');
  }

  refreshToken() {
    firebase.auth().currentUser.getIdToken(true)
      .then(
        token => {
          sessionStorage.setItem('currentUser', token);
        })
      .catch(
        error => console.log(error));
  }

  signOut() {
    firebase.auth().signOut()
      .then(
        response => {
          console.log(response);
          sessionStorage.removeItem('currentUser');
        })
      .catch(
        error => console.log(error));
  }
}
