import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Offender} from '../../../../_models/offender';
import {OffenderService} from '../../../../services/offender.service';
import {Event} from '../../../../_models/event';
import {faListUl, faAddressCard, faUserPlus, faHdd} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offender-events',
  templateUrl: './offender-events.component.html',
  styleUrls: ['./offender-events.component.css']
})
export class OffenderEventsComponent implements OnInit {
  singleOffender: Offender;
  objectArray: Event[];
  convertedEventArray: Event[];
  errorLoading = false;

  // icons for sub navigation bar
  faListUl = faListUl;
  faAddressCard = faAddressCard;
  faUserPlus = faUserPlus;
  faHdd = faHdd;

  constructor(private route: ActivatedRoute, private offenderService: OffenderService) {
    this.objectArray = [];
    this.convertedEventArray = [];
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
        },
        error => {
          this.errorLoading = true;
          console.log(error);
        }
      );
    this.getOffenderNewEvents();
  }

  generateArray(events) {
    return Object.keys(events).map((key) => events[key]);
  }

  getOffenderNewEvents() {
    this.offenderService.getOffenderNewEvents(this.singleOffender.cpr)
      .subscribe(
        events => {
          this.objectArray = events;
          this.convertedEventArray = this.generateArray(this.objectArray);
        });
  }

}
