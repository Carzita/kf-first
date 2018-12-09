import { Component, OnInit } from '@angular/core';
import {OffenderService} from '../../../services/offender.service';
import {Offender} from '../../../_models/offender';

@Component({
  selector: 'app-offenders-list',
  templateUrl: './offenders-list.component.html',
  styleUrls: ['./offenders-list.component.css']
})
export class OffendersListComponent implements OnInit {
  showSpinner = true;
  errorLoading = false;
  objectArray: Offender[];
  convertedOffenderArray: Offender[];
  constructor(private offenderService: OffenderService) {
    this.objectArray = [];
    this.convertedOffenderArray = [];
  }

  ngOnInit() {
      this.getAllOffenders();
  }
  generateArray(offenders) {
      return Object.keys(offenders).map((key) => offenders[key]);
}
  getAllOffenders() {
    /*this.offenderService.getAllOffenders()
      .subscribe(
        (offender: any[] => console.log(offender),
        (error) => console.log(error)
      ); */
    this.offenderService.getAllOffenders()
      .subscribe(
        offenders => {
          this.objectArray = offenders;
          this.convertedOffenderArray = this.generateArray(this.objectArray);
          console.log(this.convertedOffenderArray);
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.errorLoading = true;
          console.log(error);
        });
  }
}
