import {Component, OnInit} from '@angular/core';
import {Event} from '../../../_models/event';
import {EventService} from '../../../services/event.service';
import {faExclamationCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events-handled-list',
  templateUrl: './events-handled-list.component.html',
  styleUrls: ['./events-handled-list.component.css']
})
export class EventsHandledListComponent implements OnInit {
  showSpinner = true;
  objectArray: Event[];
  convertedEventArray: Event[];
  eventIDArray: any[];
  errorLoading = false;

  // declaration of FontAwesome icons
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;

  constructor(private eventService: EventService) {
    this.objectArray = [];
    this.convertedEventArray = [];
  }

  ngOnInit() {
    this.getAllHandledEvents();
  }

  // converts the response object into an array
  generateArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  getAllHandledEvents() {
    this.eventService.getAllHandledEvents()
      .subscribe(
        events => {
          this.objectArray = events;
          this.eventIDArray = Object.keys(this.objectArray);
          this.convertedEventArray = this.generateArray(this.objectArray);
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.errorLoading = true;
          console.log(error);
        }
      );
  }

}
