import { Component, OnInit } from '@angular/core';
import {OffenderService} from '../../services/offender.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private os: OffenderService) { }

  ngOnInit() {
  }

  updateOffender() {
    this.os.insertOffenderID('-LSskWabv7bGBO9q-Qcy');
    console.log('update offender called');
}

}
