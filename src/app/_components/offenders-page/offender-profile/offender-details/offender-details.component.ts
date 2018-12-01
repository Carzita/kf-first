import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OffenderService} from '../../../../services/offender.service';
import {Offender} from '../../../../_models/offender';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html',
  styleUrls: ['./offender-details.component.css']
})
export class OffenderDetailsComponent implements OnInit {
  singleOffender: Offender;
  parentParams: string;
  constructor(private route: ActivatedRoute, private offenderSerivce: OffenderService) {  }

  ngOnInit() {
/*      this.route.params
        .subscribe(
          (params: Params) => {
            this.parentParams = params['cpr'];
          }
        );
      this.offenderSerivce.getSingleOffender(this.parentParams)
        .subscribe(
          offender => {
            this.singleOffender = offender;
            console.log(this.singleOffender);
          },
          error => {
            console.log(error);
          });*/
    }

}
