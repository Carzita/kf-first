import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.css'],
})

export class EquipmentPageComponent implements OnInit {
  constructor() {
  }
  time2 = this.getRealTimeStamp();

  ngOnInit() {
  }

  getRealTimeStamp() {
    const d = new Date();
    const dato = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    return dato + '-' + month + '-' + year + ' ' + hour + '-' + minutes;
  }

}
