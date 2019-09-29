/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScoreboardComponent } from './scoreboard.component';
import { TicTacToeService } from 'src/app/services/tic-tac-toe.service';
import { of } from 'rxjs';

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;
  let debugElement: DebugElement;
  let ticTacToeService: TicTacToeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardComponent ],
      providers: [ TicTacToeService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    ticTacToeService = debugElement.injector.get(TicTacToeService);
    spyOn(ticTacToeService, 'getScore').and.callThrough().and.returnValue(of([2, 1]));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Player 1 message', () => {
    const message = debugElement.query(By.css('.player')).nativeElement.innerText;
    expect(message).toBe('Player 1');
  });

  it('should show user score 2 ', () => {
    const message = debugElement.query(By.css('h2')).nativeElement.innerText;
    expect(message).toBe('2');
  });
});
