//types
import { GridCells, NewGridValues } from '../types';
//constants
import { ACTIVE, DEFAULT } from '../constants';

export const getNewGridWithActiveCell = (grid: GridCells): NewGridValues => {
  const allInactiveCells = grid.flat().filter(({ state }) => state === DEFAULT);

  const randomCellIndex = Math.floor(Math.random() * allInactiveCells.length);

  allInactiveCells[randomCellIndex].state = ACTIVE;

  const activeCell = allInactiveCells[randomCellIndex];

  const gridCell = grid.flat().find((cell) => cell.id === activeCell.id);

  if (gridCell) gridCell.state = ACTIVE;
  return {
    newGrid: grid,
    cell: activeCell,
  };
};
