/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicTacToeResultService } from './tic-tac-toe-result.service';

describe('Service: TicTacToeResult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicTacToeResultService]
    });
  });

  it('should ...', inject([TicTacToeResultService], (service: TicTacToeResultService) => {
    expect(service).toBeTruthy();
  }));

  it('should get winner result - row combination', inject([TicTacToeResultService], (service: TicTacToeResultService) => {
    const gameBoard = new Map<string, string>();
    gameBoard.set('00', 'X');
    gameBoard.set('01', 'X');
    gameBoard.set('02', 'X');
    gameBoard.set('11', 'O');
    gameBoard.set('21', 'O');
    expect(service.isWinner('X', gameBoard)).toBeTruthy();
  }));

  it('should get winner result - column combination', inject([TicTacToeResultService], (service: TicTacToeResultService) => {
    const gameBoard = new Map<string, string>();
    gameBoard.set('00', 'X');
    gameBoard.set('10', 'X');
    gameBoard.set('20', 'X');
    gameBoard.set('11', 'O');
    gameBoard.set('21', 'O');
    expect(service.isWinner('X', gameBoard)).toBeTruthy();
  }));

  it('should get winner result - diagonal combination', inject([TicTacToeResultService], (service: TicTacToeResultService) => {
    const gameBoard = new Map<string, string>();
    gameBoard.set('00', 'X');
    gameBoard.set('11', 'X');
    gameBoard.set('22', 'X');
    gameBoard.set('12', 'O');
    gameBoard.set('21', 'O');
    expect(service.isWinner('X', gameBoard)).toBeTruthy();
  }));

  it('should not get winner result and get draw result', inject([TicTacToeResultService], (service: TicTacToeResultService) => {
    const gameBoard = new Map<string, string>();
    gameBoard.set('00', 'X');
    gameBoard.set('01', '0');
    gameBoard.set('02', 'X');
    gameBoard.set('10', 'O');
    gameBoard.set('11', 'O');
    gameBoard.set('12', 'X');
    gameBoard.set('20', 'X');
    gameBoard.set('21', 'X');
    gameBoard.set('22', 'O');
    expect(service.isWinner('X', gameBoard)).toBeFalsy();
    expect(service.isDraw(gameBoard)).toBeTruthy();
  }));
});
