import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {Offender} from '../../../_models/offender';
import {OffenderService} from '../../../services/offender.service';
import {OffenderResolverService} from '../../../services/offenderResolver.service';

@Component({
  selector: 'app-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.css']
})
export class OffenderProfileComponent implements OnInit {
  someShit: string
  singleOffender: Offender;
  constructor(private route: ActivatedRoute, private offenderSerivce: OffenderService,
              private offenderResolverService: OffenderResolverService) { }
  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
        }
      );
/*    this.route.params
      .subscribe(
        (params: Params) => {
          this.someShit = params['cpr'];
        }
      );
    this.offenderSerivce.getSingleOffender(this.someShit)
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
