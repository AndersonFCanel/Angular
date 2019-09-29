/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardCellComponent } from './board-cell.component';

describe('BoardCellComponent', () => {
  let component: BoardCellComponent;
  let fixture: ComponentFixture<BoardCellComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCellComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.cellPosition = '00';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show X', () => {
    component.cellMark = 'X';
    fixture.detectChanges();
    const marker = debugElement.query(By.css('span')).nativeElement.innerText;
    expect(marker).toBe('X');
  });

  it('should show O', () => {
    component.cellMark = 'O';
    fixture.detectChanges();
    const marker = debugElement.query(By.css('span')).nativeElement.innerText;
    expect(marker).toBe('O');
  });

  it('should have border-top-0 and border-left-0 class', () => {
      const marker = debugElement.query(By.css('div.border-top-0.border-left-0')).nativeElement;
      expect(marker).toBeDefined();
  });

  it('should not have border-bottom-0 and border-right-0 class', () => {
    const marker = debugElement.query(By.css('div.border-bottom-0.border-right-0'));
    expect(marker).toBeNull();
  });

});
