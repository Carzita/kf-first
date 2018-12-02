import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Data, NavigationStart, Params, Router} from '@angular/router';
import {Offender} from '../../../_models/offender';

@Component({
  selector: 'app-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.css']
})
export class OffenderProfileComponent implements OnInit {
  someOffender: Offender;
  constructor(private route: ActivatedRoute, private justRouter: Router ) {
  }

  ngOnInit() {
/*        this.route.data
          .subscribe(
            (data: Data) => {
              this.someOffender = data['offender'];
            }
          );*/
    /*    this.route.params
          .subscribe(
            (params: Params) => {
              this.someShit = params['cpr'];
            }
          ); */

  }
}
