import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.css'],
})

export class EquipmentPageComponent implements OnInit {
  constructor() {
  }
  time = new Date().getTime();
  time2 = new Date().getTime() + 3540000;

  ngOnInit() {
  }

}
