import { Component, HostListener } from '@angular/core';
//functions
import { getGridCells, getNewGridWithActiveCell } from './core/functions';
//types
import { CELL_PICKED_STATE, Cell, GridCells, ScoreValue } from './core/types';
//constants
import {
  defaultColumns,
  defaultRows,
  defaultTime,
  scoreInitialValue,
} from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  score: ScoreValue = scoreInitialValue;
  timeToPick: number = defaultTime;
  activeCellId: string | null = null;
  isGameStarted: boolean = false;
  grid: GridCells = [];

  constructor() {}

  createGameHandler = (time: number) => {
    this.grid = getGridCells(defaultRows, defaultColumns);
    this.timeToPick = time;
    this.isGameStarted = true;
    this.generateRandomActiveCell();
  };

  generateRandomActiveCell() {
    const { newGrid, activeCellId } = getNewGridWithActiveCell(this.grid);
    this.grid = newGrid;
    this.activeCellId = activeCellId;
  }

  @HostListener('onCellChangeHandler', ['$event'])
  onCellChangeHandler(event: CustomEvent<Cell>) {
    const cell = event.detail;

    cell.isPicked = CELL_PICKED_STATE.BY_PLAYER;
    cell.isActive = false;
    this.activeCellId = null;

    this.score.player++;

    this.generateRandomActiveCell();
  }
}
