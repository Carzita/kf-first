import {Component, OnInit} from '@angular/core';
import {Event} from '../../../_models/event';
import {EventService} from '../../../services/event.service';
import {faExclamationCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})

export class EventsListComponent implements OnInit {
  showSpinner = true;
  objectArray: Event[];
  convertedEventArray: Event[];
  eventIDArray: any[];
  errorLoading = false;

  // FontAwesome icons
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;

  constructor(private eventService: EventService) {
    this.objectArray = [];
    this.convertedEventArray = [];
  }

  ngOnInit() {
    this.getAllNewEvents();
  }

  getAllNewEvents() {
    this.eventService.getAllNewEvents()
      .subscribe(
        events => {
          this.objectArray = events;
          // this is needed for routing to identify the ID of chosen event
          this.eventIDArray = Object.keys(this.objectArray);
          // converting the array
          this.convertedEventArray = this.convertResponseToArray(this.objectArray);
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.errorLoading = true;
          console.log(error);
        }
      );
  }

// converts the response object into an array
  convertResponseToArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  /*  getEventID(index: number) {
      this.eventIDArray = Object.keys(this.objectArray);
      console.log(this.eventIDArray[index]);
  }*/
}
