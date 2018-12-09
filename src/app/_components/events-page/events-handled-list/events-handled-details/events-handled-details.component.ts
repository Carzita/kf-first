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
  showSpinner = true;
  errorLoading = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleEvent = data['event'];
          this.showSpinner = false;
        },
        error => {
          console.log(error);
          this.showSpinner = false;
          this.errorLoading = true;
        }
      );

  }

}
