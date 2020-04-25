import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroList } from '../mock-heroes';

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
  constructor() { 
  
    this.myHero={
      id:1,
      name:'Volkan'
    }

    this.heroList= HeroList;
  }


  ngOnInit(): void {
  }


  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

}
