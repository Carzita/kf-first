import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Offender} from '../../../../_models/offender';
import {OffenderService} from '../../../../services/offender.service';
import {Event} from '../../../../_models/event';
import {faAddressCard, faUserPlus, faHdd, faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offender-events',
  templateUrl: './offender-events.component.html',
  styleUrls: ['./offender-events.component.css']
})
export class OffenderEventsComponent implements OnInit {
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
          if (this.singleOffender.newEvents != null) {
            this.eventIDArray = Object.keys(this.singleOffender.newEvents);
            this.eventArray = this.convertResponseToArray(this.singleOffender.newEvents);
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
/*  getOffenderNewEvents() {
    this.offenderService.getOffenderNewEvents(this.singleOffender.cpr)
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
