import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }
  signUserIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response)
          this.router.navigate(['/events']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }
}
