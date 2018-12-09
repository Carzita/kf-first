import {Component, OnInit} from '@angular/core';
import {Event} from '../../../_models/event';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-events-handled-list',
  templateUrl: './events-handled-list.component.html',
  styleUrls: ['./events-handled-list.component.css']
})
export class EventsHandledListComponent implements OnInit {
  objectArray: Event[];
  convertedEventArray: Event[];
  eventIDArray: any[];
  showSpinner = true;
  errorLoading = false;

  constructor(private eventService: EventService) {
    this.objectArray = [];
    this.convertedEventArray = [];
  }

  ngOnInit() {
    this.getAllHandledEvents();
  }

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
