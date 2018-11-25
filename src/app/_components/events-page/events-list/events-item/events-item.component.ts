import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styles: []
})
export class EventsItemComponent implements OnInit {
  events: Event[] = [
    new Event('000', 'Rem brudt', 'Test Testesen', '25/09/2018: 16:47', 'ewat', 'test'),
    new Event('111', 'Rem brudt2', 'Test Testesen2', '26/09/2018: 15:07', 'test', 'test')
  ];

  constructor() { }

  ngOnInit() {
  }

}
