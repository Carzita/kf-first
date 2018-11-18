import * as firebase from 'firebase';

export class AuthGuard {
  token: string;

  signUserIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
  }
  getToken() {
     firebase.auth().currentUser.getIdToken()
       .then(
         (token: string) => this.token = token
       );
       return this.token;
  }
}
