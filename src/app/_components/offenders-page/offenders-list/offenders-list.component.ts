import { Component, OnInit } from '@angular/core';
import {OffenderService} from '../../../services/offender.service';
import {Observable, of} from 'rxjs';
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
  constructor(private offenderSerivce: OffenderService) {
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
    /*this.offenderSerivce.getAllOffenders()
      .subscribe(
        (offender: any[] => console.log(offender),
        (error) => console.log(error)
      ); */
    this.offenderSerivce.getAllOffenders()
      .subscribe(
        offenders => {
          this.objectArray = offenders;
          this.convertedOffenderArray = this.generateArray(this.objectArray);
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.errorLoading = true;
          console.log(error);
        });
   /* const useThis = Object.keys(this.offenders);
    for (const prop of useThis) {
      this.convertedOffenderArray.push(useThis[prop]);
    } */
  }

}
