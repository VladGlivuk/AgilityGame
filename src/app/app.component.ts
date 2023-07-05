import { Component, HostListener } from '@angular/core';
//functions
import {
  getEndGameAlertText,
  getGridCells,
  getNewGridWithActiveCell,
} from './core/functions';
//types
import { CELL_PICKED_STATE, Cell, GridCells, ScoreValue } from './core/types';
//constants
import {
  defaultColumns,
  defaultRows,
  defaultTime,
  scoreInitialValue,
  scoreToWin,
} from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  score: ScoreValue = { ...scoreInitialValue };
  timeToPick: number = defaultTime;
  activeCellId: string | null = null;
  isGameStarted: boolean = false;
  grid: GridCells = [];
  timer: NodeJS.Timer;

  constructor() {}

  createGameHandler = (time: number) => {
    if (this.isGameStarted) this.endGame();

    this.grid = getGridCells(defaultRows, defaultColumns);
    this.timeToPick = time;
    this.isGameStarted = true;
    this.generateRandomActiveCell();
  };

  private generateRandomActiveCell() {
    clearTimeout(this.timer);
    const { newGrid, cell } = getNewGridWithActiveCell(this.grid);
    this.grid = newGrid;
    this.activeCellId = cell.id;
    this.startTimer(cell);
  }

  @HostListener('onCellChangeHandler', ['$event'])
  onCellChangeHandler(event: CustomEvent<Cell>) {
    const cell = event.detail;

    //TODO refactor
    cell.isPicked = CELL_PICKED_STATE.BY_PLAYER;
    cell.isActive = false;
    this.activeCellId = null;
    this.score.player++;

    const isComputerWon = this.score.computer >= scoreToWin;
    const isPlayerWon = this.score.player >= scoreToWin;

    if (isComputerWon || isPlayerWon) this.endGame(isComputerWon);
    else this.generateRandomActiveCell();
  }

  private startTimer(cell: Cell) {
    this.timer = setTimeout(() => {
      cell.isPicked = CELL_PICKED_STATE.BY_COMPUTER;
      cell.isActive = false;
      this.activeCellId = null;
      this.score.computer++;

      const isComputerWon = this.score.computer >= scoreToWin;
      const isPlayerWon = this.score.player >= scoreToWin;

      if (isComputerWon || isPlayerWon) this.endGame(isComputerWon);
      else this.generateRandomActiveCell();
    }, this.timeToPick);
  }

  private endGame(isComputerWon?: boolean) {
    clearTimeout(this.timer);

    if (isComputerWon !== undefined) {
      const endGameAlertText = getEndGameAlertText(isComputerWon, this.score);
      setTimeout(() => {
        alert(endGameAlertText);
      }, 300);
    }
    this.activeCellId = null;
    this.score = { ...scoreInitialValue };
  }
}
