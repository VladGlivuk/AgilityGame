//functions
import { defaultCellValue } from '../constants';
//types
import { Cell, GridCells } from '../types';

export const getGridCells = (rows: number, columns: number): GridCells => {
  const rowsCells: Array<undefined> = Array.from(new Array(columns));

  const grid = rowsCells.map(() =>
    Array.from(new Array(rows).fill(defaultCellValue)).map((row: Cell) => {
      return {
        ...row,
        id: createUniqueCellId(),
      };

      function createUniqueCellId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      }
    })
  );

  return grid;
};
