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

  generateArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  getAllNewEvents() {
    this.eventService.getAllNewEvents()
      .subscribe(
        events => {
          this.objectArray = events;
          // this is needed for routing to identify the ID of chosen event
          this.eventIDArray = Object.keys(this.objectArray);
          // converting the array
          this.convertedEventArray = this.generateArray(this.objectArray);
        },
        error => {
          this.errorLoading = true;
          console.log(error);
        }
      );
  }

  /*  getEventID(index: number) {
      this.eventIDArray = Object.keys(this.objectArray);
      console.log(this.eventIDArray[index]);
  }*/
}
