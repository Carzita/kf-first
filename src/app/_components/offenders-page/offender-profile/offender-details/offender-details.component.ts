import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Offender} from '../../../../_models/offender';
import {OffenderService} from '../../../../services/offender.service';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html',
  styleUrls: ['./offender-details.component.css']
})
export class OffenderDetailsComponent implements OnInit {
  singleOffender: Offender;
  showSpinner = true;
  errorLoading = false;

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
