import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../_models/event';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-events-handled-details',
  templateUrl: './events-handled-details.component.html',
  styleUrls: ['./events-handled-details.component.css']
})
export class EventsHandledDetailsComponent implements OnInit {
  singleEvent: Event;
  errorLoading = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleEvent = data['event'];
        },
        error => {
          console.log(error);
          this.errorLoading = true;
        }
      );

  }

}
