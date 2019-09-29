/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicTacToeService } from './tic-tac-toe.service';

describe('Service: TicTacToe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicTacToeService]
    });
  });

  it('should ...', inject([TicTacToeService], (service: TicTacToeService) => {
    expect(service).toBeTruthy();
  }));
});
