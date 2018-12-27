import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Data, NavigationStart, Params, Router} from '@angular/router';
import {Offender} from '../../../_models/offender';

@Component({
  selector: 'app-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.css']
})
export class OffenderProfileComponent implements OnInit {
  singleOffender: Offender;
  constructor(private route: ActivatedRoute ) {
  }

  ngOnInit() {
/*        this.route.data
          .subscribe(
            (data: Data) => {
              this.singleOffender = data['offender'];
            },
            (error: Error) => {
              console.log (error);
            } );*/
  }
}
