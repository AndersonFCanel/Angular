/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SelectHeroComponent } from './select-hero.component';
import { AlertService } from 'src/app/services/alert.service';

describe('SelectHeroComponent', () => {
  let component: SelectHeroComponent;
  let fixture: ComponentFixture<SelectHeroComponent>;
  let debugElement: DebugElement;
  let alertService: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHeroComponent ],
      providers: [ AlertService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeroComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    alertService = debugElement.injector.get(AlertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onStartGame()', () => {
    const startGame = spyOn(component, 'onStartGame');
    const startButton = debugElement.query(By.css('button'));
    startButton.triggerEventHandler('click', null);
    expect(startGame).toHaveBeenCalled();
  });

  it('should call error alert', () => {
    const heroError = spyOn(alertService, 'onHeroError');
    const startButton = debugElement.query(By.css('button'));
    startButton.triggerEventHandler('click', null);
    expect(heroError).toHaveBeenCalled();
  });

  it('should call success alert', () => {
    component.onSelectedHero({name: 'Hulk', thumbnail: ''}, 1);
    component.onSelectedHero({name: 'Groot', thumbnail: ''}, 2);
    const heroSuccess = spyOn(alertService, 'onHeroSuccess');
    const startButton = debugElement.query(By.css('button'));
    startButton.triggerEventHandler('click', null);
    expect(heroSuccess).toHaveBeenCalled();
  });
});
