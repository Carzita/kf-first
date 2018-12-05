import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Offender} from '../../../../_models/offender';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html',
  styleUrls: ['./offender-details.component.css']
})
export class OffenderDetailsComponent implements OnInit {
  singleOffender: Offender;
  showSpinner = true;
  errorLoading = false;

  constructor(private route: ActivatedRoute) {
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

}
