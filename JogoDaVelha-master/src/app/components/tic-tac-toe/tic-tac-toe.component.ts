import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { TicTacToeService } from '../../services/tic-tac-toe.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  heroes: Array<Hero>;
  startGame = false;
  firstToPlay: number;
  winner: number;
  loadGame = false;

  constructor(private ticTacToeService: TicTacToeService, private alertService: AlertService) { }

  ngOnInit() {
    this.firstToPlay = this.ticTacToeService.getFirstToPlay();
    this.ticTacToeService.getTicTacToeResult().subscribe((result) => {
      if (result.winner) {
        this.alertService.onGameWinner(this.heroes[result.winner - 1], result.winner).subscribe(() => {
          this.startNewGame();
        });
      } else if (result.gameOver) {
        this.alertService.onGameDraw().subscribe(() => {
          this.startNewGame();
        });
      }
    });
  }

  startNewGame() {
    this.ticTacToeService.initializeGame();
    this.firstToPlay = this.ticTacToeService.getFirstToPlay();
  }

  onLoadGame() {
    this.loadGame = true;
  }

  selectedHeroes(heroes: Array<Hero>) {
    this.heroes = [...heroes];
    this.startGame = true;
  }
}
