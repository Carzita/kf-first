import { Component, OnInit } from '@angular/core';
import {Offender} from '../../../../_models/offender';
import {Event} from '../../../../_models/event';
import {faAddressCard, faCheckCircle, faExclamationCircle, faHdd, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Data} from '@angular/router';
import {OffenderService} from '../../../../services/offender.service';

@Component({
  selector: 'app-offender-handled-events',
  templateUrl: './offender-handled-events.component.html',
  styleUrls: ['./offender-handled-events.component.css']
})
export class OffenderHandledEventsComponent implements OnInit {
  singleOffender: Offender;
  objectArray: Event[];
  eventArray: Event[];
  eventIDArray: any[];
  errorLoading = false;
  noEvents = false;

  // icons for sub navigation bar
  faAddressCard = faAddressCard;
  faUserPlus = faUserPlus;
  faHdd = faHdd;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  constructor(private route: ActivatedRoute, private offenderService: OffenderService) {
    this.objectArray = [];
    this.eventArray = [];
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
          if (this.singleOffender.handledEvents != null) {
            this.eventIDArray = Object.keys(this.singleOffender.handledEvents);
            this.eventArray = this.convertResponseToArray(this.singleOffender.handledEvents);
            console.log(this.eventArray);
          } else {
            this.noEvents = true;
          }
        },
        error => {
          console.log(error);
          this.errorLoading = true;
        }
      );
  }

  convertResponseToArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  // to be used when web sockets are implemented in a back-end
/*  updateOffenderHandledEvents() {
    this.offenderService.getOffenderHandledEvents(this.singleOffender.cpr)
      .subscribe(
        events => {
          if (events != null) {
            this.objectArray = events;
            this.eventArray = this.convertResponseToArray(this.objectArray);
          } else {
            this.noEvents = true;
          }
        });
  }*/

}
