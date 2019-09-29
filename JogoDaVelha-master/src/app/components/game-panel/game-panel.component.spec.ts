/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { TicTacToeService } from 'src/app/services/tic-tac-toe.service';
import { GamePanelComponent } from './game-panel.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

describe('GamePanelComponent', () => {
  let component: GamePanelComponent;
  let fixture: ComponentFixture<GamePanelComponent>;
  let debugElement: DebugElement;
  let ticTacToeService: TicTacToeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePanelComponent, HeroCardComponent, ScoreboardComponent ],
      providers: [ TicTacToeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePanelComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    ticTacToeService = debugElement.injector.get(TicTacToeService);
    spyOn(ticTacToeService, 'getPlayerTurn').and.callThrough().and.returnValue(of(1));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should player turn be equal to 1', () => {
    expect(component.playerTurn).toBe(1);
  });

  it('should first hero card be Player number 1', () => {
    const heroCard = debugElement.query(By.css('app-hero-card:first-of-type')).attributes;
    expect(heroCard.player).toBe('1');
  });
});
