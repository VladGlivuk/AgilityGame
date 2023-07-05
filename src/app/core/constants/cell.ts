//types
import { Cell } from '../types';

export const DEFAULT = 'default'
export const ACTIVE = 'active';
export const SUCCEEDED = 'succeeded';
export const FAILED = 'failed';

export const defaultCellValue: Cell = {
  state: DEFAULT,
  id: '',
};
