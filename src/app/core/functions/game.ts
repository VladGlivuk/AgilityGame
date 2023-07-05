//types
import { ScoreValue } from '../types';
//constants
import { failedGame, successfullyCompletedGame } from '../constants';

export const getEndGameAlertText = (
  isComputerWon: boolean,
  score: ScoreValue
): string =>
  isComputerWon
    ? `${failedGame} ${score.player}:${score.computer}`
    : `${successfullyCompletedGame} ${score.player}:${score.computer}`;
