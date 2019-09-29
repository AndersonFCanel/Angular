/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertService } from 'src/app/services/alert.service';
import { TicTacToeService } from 'src/app/services/tic-tac-toe.service';
import { GameBoardComponent } from '../game-board/game-board.component';
import { GamePanelComponent } from '../game-panel/game-panel.component';
import { SelectHeroComponent } from '../select-hero/select-hero.component';
import { TicTacToeComponent } from './tic-tac-toe.component';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;
  let debugElement: DebugElement;
  let ticTacToeService: TicTacToeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacToeComponent, SelectHeroComponent, GamePanelComponent, GameBoardComponent ],
      providers: [ TicTacToeService, AlertService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    ticTacToeService = debugElement.injector.get(TicTacToeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should startGame and loadGame be false', () => {
    expect(component.startGame).toBeFalsy();
    expect(component.loadGame).toBeFalsy();
  });

  it('should loadGame be true', () => {
    component.onLoadGame();
    expect(component.loadGame).toBeTruthy();
  });

  it('should startGame be true', () => {
    component.selectedHeroes([{name: 'Hulk', thumbnail: ''}, {name: 'Groot', thumbnail: ''}]);
    expect(component.startGame).toBeTruthy();
  });

  it('should firstToPlay be 2 and initializeGame method to be called', () => {
    spyOn(ticTacToeService, 'getFirstToPlay').and.returnValue(2);
    const initializeGame = spyOn(ticTacToeService, 'initializeGame').and.returnValue(2);
    component.startNewGame();
    expect(component.firstToPlay).toBe(2);
    expect(initializeGame).toHaveBeenCalled();
  });

});
