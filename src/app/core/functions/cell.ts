//types
import { GridCells, NewGridValues } from '../types';

export const getNewGridWithActiveCell = (grid: GridCells): NewGridValues => {
  const allInactiveCells = grid
    .flat()
    .filter(({ isActive, isPicked }) => !isPicked && !isActive);

  const randomCellIndex = Math.floor(Math.random() * allInactiveCells.length);

  allInactiveCells[randomCellIndex].isActive = true;

  const activeCell = allInactiveCells[randomCellIndex];

  const gridCell = grid.flat().find((cell) => cell.id === activeCell.id);

  if (gridCell) gridCell.isActive = true;

  return {
    newGrid: grid,
    cell: activeCell,
  };
};
