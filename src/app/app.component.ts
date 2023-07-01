import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}

  createGameHandler = (time: number) => {
    console.log('time: ', time);
  };
}
