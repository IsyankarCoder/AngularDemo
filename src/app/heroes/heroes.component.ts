import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*hero:string= 'Volkan Tolkan';*/
  myHero:Hero;
  constructor() { 
  
    this.myHero={
      id:1,
      name:'Volkan'
    }
  }

  ngOnInit(): void {
  }

}
