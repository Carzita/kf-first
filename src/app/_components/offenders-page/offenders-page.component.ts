import { Component, OnInit } from '@angular/core';
import {Offender} from '../../_models/offender';

@Component({
  selector: 'app-offenders-page',
  templateUrl: './offenders-page.component.html',
  styleUrls: ['./offenders-page.component.css']
})
export class OffendersPageComponent implements OnInit {
  offenders: Offender[] = [
    new Offender('12345', '123456-1234', 'John', 'Hitler', 'adresse', 'by', '1234'),
    new Offender('54321', '111111-1111', 'John2', 'Hitler2', 'adresse2', 'by2', '4321')
  ];

    constructor() { }

  ngOnInit() {
  }

}
