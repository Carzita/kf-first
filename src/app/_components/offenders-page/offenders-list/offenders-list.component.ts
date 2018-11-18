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
  offendersarray: Offender[];
  offendersarray2: Offender[];
  constructor(private offenderSerivce: OffenderService) {
    this.offendersarray = [];
    this.offendersarray2 = [];
  }

  ngOnInit() {
      this.getAll();
  }
  generateArray(offenders) {
  return Object.keys(offenders).map((key) => offenders[key]);
}
  getAll() {
    /*this.offenderSerivce.getOffenders()
      .subscribe(
        (offender: any[] => console.log(offender),
        (error) => console.log(error)
      ); */
    this.offenderSerivce.getOffenders()
      .subscribe(
        offenders => {
          this.offendersarray = offenders;
          this.offendersarray2 = this.generateArray(this.offendersarray);
        });
   /* const useThis = Object.keys(this.offenders);
    for (const prop of useThis) {
      this.offendersarray2.push(useThis[prop]);
    } */
  }

}
