import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {faSignInAlt, faSignOutAlt, faUsers, faListUl, faHdd} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  // icons from FontAwesome declaration
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUsers = faUsers;
  faListUl = faListUl;
  faHdd = faHdd;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.isTokenValid();
  }
  signOut() {
    this.authenticationService.signOut();
  }

}
