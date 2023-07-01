//functions
import { defaultCellValue } from '../constants/cell';
//types
import { Cell, GridCells } from '../types';

export const getGridCells = (rows: number, columns: number): GridCells => {
  const rowsCells = Array.from(new Array(columns));

  const grid = rowsCells.map(() => {
    return Array.from(new Array(rows).fill(defaultCellValue)).map(
      (row: Cell) => ({
        ...row,
        id: createUniqueCellId(),
      })
    );

    function createUniqueCellId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
  });
  console.log('file: grid.ts:6  grid:', grid);

  return grid;
};
