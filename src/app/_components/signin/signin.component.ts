import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  private errorMessage: string;

  signInForm = this.fb.group({
    // email: [Validators.email, Validators.required],
    email: [],
    // password: [Validators.required],
    password: [],
  });

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) {
    this.authService.getLoginErrorMessage()
      .subscribe(
        error => {
          this.errorMessage = error;
        });
  }

  ngOnInit() {
  }

  signIn() {
    console.log(this.signInForm.value);
    // const email = this.signInForm.get('email').value;
     const email = 'test@test.com';
    // const password = this.signInForm.get('password').value;
    const password = 'A123456';
    this.authService.signUserIn(email, password);
  }
}
