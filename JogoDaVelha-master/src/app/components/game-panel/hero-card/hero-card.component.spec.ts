/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;
  let debugElement: DebugElement;
  const heroThumbnail = 'https://fermi.gsfc.nasa.gov/science/constellations/pages/inc/img/hulk/Hulk_Artwork.jpg';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.hero = { name: 'Hulk', thumbnail: heroThumbnail};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show hero name = Hulk', () => {
    const heroName = debugElement.query(By.css('h2')).nativeElement.innerText;
    expect(heroName).toBe('Hulk');
  });

  it('should show marker X', () => {
    component.firstToPlay = true;
    fixture.detectChanges();
    const marker = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(marker).toBe('X');
  });

  it('should show marker O', () => {
    component.firstToPlay = false;
    fixture.detectChanges();
    const marker = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(marker).toBe('O');
  });

  it('should have animation class', () => {
    component.myTurn = true;
    fixture.detectChanges();
    const image = debugElement.query(By.css('img.player-turn-animation')).nativeElement;
    expect(image).toBeDefined();
  });

  it('should not have animation class', () => {
    component.myTurn = false;
    fixture.detectChanges();
    const image = debugElement.query(By.css('img.player-turn-animation'));
    expect(image).toBeNull();
  });

  it('should load default image', () => {
    component.hero = undefined;
    fixture.detectChanges();
    const image = debugElement.query(By.css('img')).nativeElement;
    expect(image.src).toContain('default_hero_thumbnail.png');
  });

  it('should load hero image', () => {
    fixture.detectChanges();
    const image = debugElement.query(By.css('img')).nativeElement;
    expect(image.src).toContain('Hulk_Artwork.jpg');
  });
});
