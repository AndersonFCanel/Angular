import { Component, OnInit, Input } from '@angular/core';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  score: Array<number>;

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit() {
    this.ticTacToeService.getScore().subscribe((result) => {
      this.score = [...result];
    });
  }

}
