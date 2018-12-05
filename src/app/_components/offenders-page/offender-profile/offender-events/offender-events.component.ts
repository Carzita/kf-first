import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Offender} from '../../../../_models/offender';
import {OffenderService} from '../../../../services/offender.service';
import {Event} from '../../../../_models/event';

@Component({
  selector: 'app-offender-events',
  templateUrl: './offender-events.component.html',
  styleUrls: ['./offender-events.component.css']
})
export class OffenderEventsComponent implements OnInit {
  singleOffender: Offender;
  objectArray: Event[];
  convertedEventArray: Event[];
  showSpinner = true;
  errorLoading = false;

  constructor(private route: ActivatedRoute, private offenderService: OffenderService) {
    this.objectArray = [];
    this.convertedEventArray = [];
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.errorLoading = true;
          console.log(error);
        }
      );
    this.getAllOffenderEvents();
  }

  generateArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  getAllOffenderEvents() {
    this.offenderService.getOffenderEvents(this.singleOffender.cpr)
      .subscribe(
        events => {
          this.objectArray = events;
          this.convertedEventArray = this.generateArray(this.objectArray);
        });
  }

}
