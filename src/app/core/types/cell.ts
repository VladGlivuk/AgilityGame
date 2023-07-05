//types
import { GridCells } from './grid';
//constants
import { ACTIVE, DEFAULT, FAILED, SUCCEEDED } from '../constants';

export type Cell = {
  id: string;
  state: CellState;
};

export type CellState =
  | typeof DEFAULT
  | typeof ACTIVE
  | typeof SUCCEEDED
  | typeof FAILED;

export type NewGridValues = {
  newGrid: GridCells;
  cell: Cell;
};
