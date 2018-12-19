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
  invalidCrediantials = false;
  faSignInAlt = faSignInAlt;

  signInForm = this.fb.group({
    email: [Validators.email, Validators.required],
    password: [Validators.required],
  });

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
  }

  signIn() {
    console.log(this.signInForm.value);
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signUserIn(email, password);
    if (!this.authService.isTokenValid()) {
      this.invalidCrediantials = true;
    }
  }
}
