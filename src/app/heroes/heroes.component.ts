import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*hero:string= 'Volkan Tolkan';*/
  myHero:Hero;
  heroList:Hero[];
  selectedHero:Hero;
  _heroService:HeroService;
  constructor(private heroService:HeroService) { 
  
    this._heroService=heroService;
    this.myHero={
      id:1,
      name:'Volkan'
    } 
  }

  private getHeroes():void{
    this.heroList= this._heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

}
