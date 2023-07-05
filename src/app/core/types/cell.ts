//types
import { GridCells } from "./grid";

export type Cell = {
  id: string;
  isActive: boolean;
  isPicked: CELL_PICKED_STATE | null;
};

export enum CELL_PICKED_STATE {
  BY_COMPUTER = 1,
  BY_PLAYER,
}

export type NewGridValues = {
  newGrid: GridCells;
  cell: Cell;
};