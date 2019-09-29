/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MarvelHeroService } from '../../../services/marvel-hero.service';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let debugElement: DebugElement;
  let marvelHeroService: MarvelHeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ SearchInputComponent ],
      providers: [MarvelHeroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    marvelHeroService = debugElement.injector.get(MarvelHeroService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHero method', () => {
    const getHero = spyOn(marvelHeroService, 'getHero').and.returnValue(of([{name: 'Hulk', thumbnail: ''}]));
    component.onHeroChange('Hulk');
    expect(getHero).toHaveBeenCalledTimes(1);
  });

  it('should call getHero method 2 times', () => {
    const getHero = spyOn(marvelHeroService, 'getHero').and.returnValue(of([]));
    component.onHeroChange('Hulk');
    expect(getHero).toHaveBeenCalledTimes(2);
  });

  it('should not call getHero method', fakeAsync(() => {
    const getHero = spyOn(marvelHeroService, 'getHero').and.returnValue(of([]));
    component.heroName.setValue('');
    tick(6000);
    expect(getHero).not.toHaveBeenCalled();
  }));

  it('should call getHero method after heroName change', fakeAsync(() => {
    const getHero = spyOn(marvelHeroService, 'getHero').and.returnValue(of([]));
    component.heroName.setValue('HULK');
    tick(6000);
    expect(getHero).toHaveBeenCalled();
  }));

});
