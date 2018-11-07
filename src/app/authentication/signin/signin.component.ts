import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthGuard} from '../../auth-guard';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authGuard: AuthGuard) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authGuard.signUserIn(email, password);
  }
}
