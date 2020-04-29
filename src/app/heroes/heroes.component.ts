import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service'
import {MessageService} from '../message.service';

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
  _messageService : MessageService;

  constructor(private heroService:HeroService,private messageService:MessageService) { 
  
    this._heroService=heroService;
    this._messageService=messageService;

    this.myHero={
      id:1,
      name:'Volkan'
    } 
  }

  private getHeroes():void{
    //Observable RxJs
     this._heroService.getHeroes().subscribe(heroes=>this.heroList=heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero:Hero):void{
    this._messageService.add('HeroService: Selected hero id='+hero.id);
    this.selectedHero=hero;
  }

}
