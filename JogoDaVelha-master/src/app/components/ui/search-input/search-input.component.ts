import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { MarvelHeroService } from '../../../services/marvel-hero.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() selectedHero = new EventEmitter<Hero>();
  @Input() placeholder: string;

  heroName = new FormControl('');
  heroes: Array<Hero>;
  selectedHeroName: string;
  placeholderText: string;
  isLoading = false;

  constructor(private marvelHeroService: MarvelHeroService) { }

  ngOnInit() {
    this.onChanges();
    this.placeholderText = this.placeholder;
  }

  onChanges(): void {
    this.heroName.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((text) => {
      if (text !== this.selectedHeroName && text !== '') {
        this.onHeroChange(text);
      } else if (text === '') {
        this.heroes = undefined;
        this.selectedHero.emit(undefined);
      }
    });
  }

  onHeroChange(heroName: string): void {
    this.isLoading = true;
    this.marvelHeroService.getHero(heroName, 'name').subscribe((heroes: Array<Hero>) => {
      if (!heroes || heroes.length <= 0) {
        this.marvelHeroService.getHero(heroName, 'nameStartsWith').subscribe((heroList: Array<Hero>) => {
          this.heroes = heroList;
          this.isLoading = false;
          this.selectedHero.emit(undefined);
        });
      } else {
        this.onSelectHero(heroes[0]);
        this.isLoading = false;
      }
    });
  }

  onSelectHero(hero: Hero) {
    this.heroName.setValue((this.selectedHeroName = hero.name));
    this.selectedHero.emit(hero);
    this.heroes = undefined;
  }

  onFocusOut() {
    this.heroes = undefined;
    if (!this.heroName.value || this.heroName.value === '') {
      this.placeholder = this.placeholderText;
    }
  }

  onFocus() {
    if (this.heroName.value && this.heroName.value !== '') {
      this.onHeroChange(this.heroName.value);
    } else {
      this.placeholder = '';
    }
  }
}
