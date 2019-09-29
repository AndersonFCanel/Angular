import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { TicTacToeResultService } from './tic-tac-toe-result.service';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private gameBoard: Map<string, string>;
  private gameBoardSubject: Subject<Map<string, string>>;
  private turn: string;
  private playerTurnSubject: BehaviorSubject<number>;
  private firstToPlay: number;
  private ticTacToeResult: Subject<any>;
  private score: Array<number>;
  private scoreSubject: BehaviorSubject<Array<number>>;

  constructor(private ticTacToeResultService: TicTacToeResultService) {
    this.score = new Array<number>(0, 0);
    this.ticTacToeResult = new Subject<any>();
    this.gameBoardSubject = new BehaviorSubject<Map<string, string>>(this.gameBoard);
    this.scoreSubject = new BehaviorSubject<Array<number>>(this.score);
    this.initializeGame();
  }

  initializeGame() {
    this.initializeGameBoard();
    this.firstToPlay = this.whoIsGoingToStart();
    this.turn = 'X';

    if (!this.playerTurnSubject) {
      this.playerTurnSubject = new BehaviorSubject<number>(this.firstToPlay);
    } else {
      this.playerTurnSubject.next(this.firstToPlay);
    }
  }

  initializeGameBoard() {
    this.gameBoard = new Map<string, string>();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.gameBoard.set((i.toString().concat(j.toString())), '');
      }
    }
    this.gameBoardSubject.next(this.gameBoard);
  }

  whoIsGoingToStart() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber % 2 === 0 ? 1 : 2;
  }

  getGameBoard() {
    return this.gameBoardSubject.asObservable();
  }

  getTicTacToeResult() {
    return this.ticTacToeResult.asObservable();
  }

  getPlayerTurn() {
    return this.playerTurnSubject.asObservable();
  }

  getFirstToPlay() {
    return this.firstToPlay;
  }

  getScore() {
    return this.scoreSubject.asObservable();
  }

  setValueToGameBoard(key: string) {

    if (this.gameBoard.get(key) === '') {
      this.gameBoard.set(key, this.turn);
      this.gameBoardSubject.next(this.gameBoard);
      this.checkBoard();
      this.playerTurnSubject.next(this.getCurrentPlayer());
    }
  }

  checkBoard() {

    if (this.ticTacToeResultService.isWinner(this.turn, this.gameBoard)) {
      const winnerPlayer = this.getCurrentPlayer();
      this.score[winnerPlayer - 1] = this.score[winnerPlayer - 1] + 1;
      this.ticTacToeResult.next({winner: winnerPlayer});
      this.scoreSubject.next(this.score);
    } else if (this.ticTacToeResultService.isDraw(this.gameBoard)) {
      this.ticTacToeResult.next({gameOver: true});
    } else {
      this.turn = this.turn === 'X' ? 'O' : 'X';
    }
  }

  getCurrentPlayer() {
    const secondToPlay = this.firstToPlay === 1 ? 2 : 1;
    return this.turn === 'X' ? this.firstToPlay : secondToPlay;
  }
}
