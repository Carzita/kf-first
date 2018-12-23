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
