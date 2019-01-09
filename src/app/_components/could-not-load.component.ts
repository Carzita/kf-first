import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-could-not-load',
  template: `
    <h1>Error loading data</h1>
  `,
  styles: []
})

export class CouldNotLoadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
