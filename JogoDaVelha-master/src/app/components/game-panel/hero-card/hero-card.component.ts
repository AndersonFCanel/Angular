import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Hero;
  @Input() myTurn: boolean;
  @Input() firstToPlay: boolean;
  @Input() player: number;

  defaultThumbnail = 'assets/images/default_hero_thumbnail.png';

  constructor() { }

  ngOnInit() {
  }

}
