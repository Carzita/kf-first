import {Component, OnInit} from '@angular/core';
import {Event} from '../../../_models/event';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})

export class EventsListComponent implements OnInit {
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
    this.getAllEvents();
  }

  generateArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  getAllEvents() {
    this.eventService.getAllNewEvents()
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

/*  getEventID(index: number) {
    this.eventIDArray = Object.keys(this.objectArray);
    console.log(this.eventIDArray[index]);
}*/
}
