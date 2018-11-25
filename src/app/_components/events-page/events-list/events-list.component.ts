import { Component, OnInit } from '@angular/core';
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
    this.eventService.getAllEvents()
      .subscribe(
        events => {
          this.objectArray = events;
          this.convertedEventArray = this.generateArray(this.objectArray);
        });
  }
}
