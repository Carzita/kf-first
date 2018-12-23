import { Component, OnInit } from '@angular/core';
import {Offender} from '../../../../../_models/offender';
import {Event} from '../../../../../_models/event';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-offender-handled-event-detail',
  templateUrl: './offender-handled-event-detail.component.html',
  styleUrls: ['./offender-handled-event-detail.component.css']
})
export class OffenderHandledEventDetailComponent implements OnInit {
  singleOffender: Offender;
  errorLoading = false;
  convertedEventArray: Event[];
  singleEvent: Event;

  constructor(private route: ActivatedRoute) {
    this.convertedEventArray = [];
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
          this.convertedEventArray = this.convertResponseToArray(this.singleOffender.newEvents);
          console.log(this.convertedEventArray);
          this.singleEvent = this.convertedEventArray[0];
        },
        error => {
          console.log(error);
          this.errorLoading = true;
        }
      );

  }

  convertResponseToArray(comments) {
    return Object.keys(comments).map((key) => comments[key]);
  }

}
