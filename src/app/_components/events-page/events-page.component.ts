import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  events: Event[] = [
    new Event('Rem brudt', 'Test Testesen', '25/09/2018: 16:47')
  ];
  constructor() { }

  ngOnInit() {
  }

}
