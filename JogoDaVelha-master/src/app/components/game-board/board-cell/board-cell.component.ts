import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent implements OnInit {

  @Input() cellMark: string;
  @Input() cellPosition: string;

  constructor() { }

  ngOnInit() {

  }
}
