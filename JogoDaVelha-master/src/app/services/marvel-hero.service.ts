import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroService {

  private baseUrl = 'https://gateway.marvel.com:443/v1/public/';

  constructor(private http: HttpClient) { }

  getHero(name: string, by: string) {

    const url =  this.baseUrl + 'characters?' + by + '=' + name;
    return this.http.get(url).pipe(
      map((response: any) => {
        const heroes = new Array<Hero>();
        response.data.results.forEach(element => {
          const hero: Hero = { name: element.name, thumbnail: element.thumbnail.path + '.' + element.thumbnail.extension };
          heroes.push(hero);
        });
        return heroes;
      })
    );
  }
}
