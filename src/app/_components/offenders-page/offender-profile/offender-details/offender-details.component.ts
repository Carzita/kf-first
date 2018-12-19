import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Offender} from '../../../../_models/offender';
import {OffenderService} from '../../../../services/offender.service';
import {faAddressCard, faListUl, faUserPlus, faHdd} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html',
  styleUrls: ['./offender-details.component.css']
})
export class OffenderDetailsComponent implements OnInit {
  singleOffender: Offender;
  showSpinner = true;
  errorLoading = false;

  // icons for sub navigation bar
  faListUl = faListUl;
  faAddressCard = faAddressCard;
  faUserPlus = faUserPlus;
  faHdd = faHdd;

  constructor(private route: ActivatedRoute, private offenderService: OffenderService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
          this.showSpinner = false;
        },
        error => {
          console.log(error);
          this.showSpinner = false;
          this.errorLoading = true;
        }
      );

  }

  deleteOffender() {
    if (confirm('Er du sikker på at du vil slette: \n ' + this.singleOffender.firstName + ' ' +
      this.singleOffender.lastName + '\n DETTE KAN IKKE FORTYDES!')) {
    this.offenderService.deleteOffender(this.singleOffender.offenderID);
    }
  }

}
