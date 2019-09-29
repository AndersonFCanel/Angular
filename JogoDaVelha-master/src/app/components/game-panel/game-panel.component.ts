import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { TicTacToeService } from '../../services/tic-tac-toe.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  @Input() heroes: Array<Hero>;
  @Input() firstToPlay: number;
  playerTurn: number;

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit() {
    this.ticTacToeService.getPlayerTurn().subscribe(player => {
      this.playerTurn = player;
    });
  }

}
