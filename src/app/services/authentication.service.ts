import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable()
export class AuthenticationService {
  fireBaseToken: string;
  private logInErrorMessage = new Subject<string>();

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getLoginErrorMessage(): Subject<string> {
    return this.logInErrorMessage;
  }

  signUserIn(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.fireBaseToken = token;
                // expiry time is set to 59 minutes
                const expires = new Date().getTime() + 3540000;
                const sessionStorageObject = {
                  expires: expires,
                  token: {
                    token: token
                  }
                };
                sessionStorage.setItem('currentUser', JSON.stringify(sessionStorageObject));
              }
            );
          console.log(response);
          this.router.navigate(['/offenders']);
        }
      )
      .catch(
        error => {
          // Error message is emitted through Subject to sign in component
          this.logInErrorMessage.next(error.message);
        }
      );
  }

  getAuthToken() {
    const sessionObject = JSON.parse(sessionStorage.getItem('currentUser'));
    return sessionObject.token.token;
  }

  isTokenValid() {
    const currentTime = new Date().getTime();
    const sessionObject = JSON.parse(sessionStorage.getItem('currentUser'));
    if (sessionObject === null) {
      return false;
    }
    if (currentTime < sessionObject.expires) {
      return true;
    } else {
      console.log('Token not valid, removing from session storage and sending to log in');
      sessionStorage.removeItem('currentUser');
      return false;
    }
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
