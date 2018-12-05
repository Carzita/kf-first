import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../_models/event';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
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
