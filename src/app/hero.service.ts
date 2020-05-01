import {Injectable} from '@angular/core';
import {Hero} from './hero'
import {HeroList} from './mock-heroes';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
    providedIn:"root"
})
export class HeroService{

    constructor(private messageService:MessageService) {

    }

    getHeroes():Observable<Hero[]> {
        this.messageService.add("HeroService Eklendi Bebişim");
        return of(HeroList);
    }
    getHero(id:number):Observable<Hero>{
          // TODO: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of (HeroList.find(hero=>hero.id===id));}
    
    }