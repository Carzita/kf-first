import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Event} from '../../../../../_models/event';
import {Offender} from '../../../../../_models/offender';

@Component({
  selector: 'app-offender-event-details',
  templateUrl: './offender-event-details.component.html',
  styleUrls: ['./offender-event-details.component.css']
})
export class OffenderEventDetailsComponent implements OnInit {
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
