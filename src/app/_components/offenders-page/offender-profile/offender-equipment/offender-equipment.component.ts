import { Component, OnInit } from '@angular/core';
import {faHdd, faAddressCard, faUserPlus, faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {Offender} from '../../../../_models/offender';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-offender-equipment',
  templateUrl: './offender-equipment.component.html',
  styleUrls: ['./offender-equipment.component.css']
})
export class OffenderEquipmentComponent implements OnInit {
  singleOffender: Offender;

  // icons for sub navigation bar
  faHdd = faHdd;
  faAddressCard = faAddressCard;
  faUserPlus = faUserPlus;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
        },
        error => {
          console.log(error);
        }
      );

  }

}
