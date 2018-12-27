import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  constructor(private router: Router) { }

  // FontAwesome icons
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;

  ngOnInit() {
   this.router.navigate(['/events/new']);
  }

}
