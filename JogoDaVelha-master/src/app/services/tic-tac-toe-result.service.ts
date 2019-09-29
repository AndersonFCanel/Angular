import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeResultService {

  constructor() { }

  isWinner(player: string, gameBoard: Map<string, string>) {
    for (const pattern of this.getWinnerCombination()) {
      if (gameBoard.get(pattern[0]) === player && gameBoard.get(pattern[1]) === player && gameBoard.get(pattern[2]) === player) {
        return true;
      }
    }
  }

  isDraw(gameBoard: Map<string, string>) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gameBoard.get(i.toString().concat(j.toString())) === '') {
          return false;
        }
      }
    }
    return true;
  }

  private getWinnerCombination() {
    return [
      ['00', '01', '02'],
      ['10', '11', '12'],
      ['20', '21', '22'],
      ['00', '10', '20'],
      ['01', '11', '21'],
      ['02', '12', '22'],
      ['00', '11', '22'],
      ['20', '11', '02']
    ];
  }
}
