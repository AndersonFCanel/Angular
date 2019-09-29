/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarvelHeroService } from './marvel-hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: MarvelHero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarvelHeroService]
    });
  });

  it('should ...', inject([MarvelHeroService], (service: MarvelHeroService) => {
    expect(service).toBeTruthy();
  }));
});
