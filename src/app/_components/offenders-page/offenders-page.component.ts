import { Component, OnInit } from '@angular/core';
import {Offender} from '../../_models/offender';
import {OffenderService} from '../../services/offender.service';

@Component({
  selector: 'app-offenders-page',
  templateUrl: './offenders-page.component.html',
  styleUrls: ['./offenders-page.component.css'],
  providers: [OffenderService]
})
export class OffendersPageComponent implements OnInit {

    constructor() { }

  ngOnInit() {
  }

}
