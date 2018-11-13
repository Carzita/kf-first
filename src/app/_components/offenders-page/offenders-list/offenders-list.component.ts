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
  offenders: Offender[];
  constructor(private offenderSerivce: OffenderService) { }

  ngOnInit() {
      this.getAll();
  }
  getAll(): void {
    /*this.offenderSerivce.getOffenders()
      .subscribe(
        (offender: any[] => console.log(offender),
        (error) => console.log(error)
      ); */
    this.offenderSerivce.getOffenders()
      .subscribe(
        // offenders => console.log(offenders));
         offenders => this.offenders = offenders);

  }

}
