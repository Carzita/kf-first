import { Component } from '@angular/core';

@Component({
  selector: 'app-servercomponent',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  someText = 'You have not clicked me';

  someMethod() {
    this.someText = 'You clicked me';
    console.log('someMethod was executed');
  }
}

