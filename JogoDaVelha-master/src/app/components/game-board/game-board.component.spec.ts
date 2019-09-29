/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameBoardComponent } from './game-board.component';
import { TicTacToeService } from 'src/app/services/tic-tac-toe.service';
import { BoardCellComponent } from './board-cell/board-cell.component';
import { of } from 'rxjs';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let debugElement: DebugElement;
  let ticTacToeService: TicTacToeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBoardComponent, BoardCellComponent ],
      providers: [ TicTacToeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement;

    ticTacToeService = debugElement.injector.get(TicTacToeService);
    ticTacToeService.initializeGameBoard();
    spyOn(ticTacToeService, 'getPlayerTurn').and.callThrough().and.returnValue(of(1));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message Sua Vez for player number 1', () => {
    const message = debugElement.query(By.css('h1:first-of-type')).nativeElement.innerText;
    expect(message).toBe('Sua vez!');
  });

  it('should not show message Sua Vez for player number 2', () => {
    const messageDiv = debugElement.query(By.css('.your-turn:last-of-type')).children.length;
    expect(messageDiv).toBe(0);
  });

  it('should call onSelectBoardCell method', () => {
    const onClickMock = spyOn(component, 'onSelectBoardCell');
    const boardCell = debugElement.query(By.css('app-board-cell:first-of-type'));
    boardCell.triggerEventHandler('click', '00');

    expect(onClickMock).toHaveBeenCalledWith('00');
  });

  it('should have cellPosition equals 2', () => {
    const boardCell = debugElement.query(By.css('app-board-cell:first-of-type')).attributes;
    expect(boardCell.cellPosition).toBe('00');
  });
});
