import { Component, OnInit } from '@angular/core';
import {faHdd, faAddressCard, faListUl, faUserPlus} from '@fortawesome/free-solid-svg-icons';
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
  faListUl = faListUl;
  faAddressCard = faAddressCard;
  faUserPlus = faUserPlus;

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
