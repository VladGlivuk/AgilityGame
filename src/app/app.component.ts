import { Component } from '@angular/core';
//functions
import { getGridCells } from './core/functions/grid';
//types
import { GridCells } from './core/types';
//constants
import { defaultColumns, defaultRows } from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  grid: GridCells = [];
  timeToPick: number = 5000;

  constructor() {}

  createGameHandler = (time: number) => {
    this.grid = getGridCells(defaultRows, defaultColumns);
    this.timeToPick = time;
  };
}
