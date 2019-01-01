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
    const date = new Date();
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return day + '-' + month + '-' + year + ' ' + hour + ':' + minutes;
  }

}
