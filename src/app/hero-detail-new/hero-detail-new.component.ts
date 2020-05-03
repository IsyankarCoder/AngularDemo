import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

 @Component({
  selector:'app-hero-detail-new',
  templateUrl:'./hero-detail-new.component.html',
  styleUrls:['./hero-detail-new.component.css']
  
 })
 export class HeroDetailComponentNew implements OnInit{

    hero:Hero;
    constructor(
       private route:ActivatedRoute,
       private heroService:HeroService,
       private location:Location
       ){}

    
    ngOnInit(){
            this.getHero();
    }

    getHero(){
        //The route.snapshot is a static image of the route information shortly after the component was created.
        //Route parameters are always strings. 
        //The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
        const id=+this.route.snapshot.paramMap.get('id');
        this.heroService.getHeroFromHttp(id).subscribe(hero=>this.hero=hero);
    }
    goBack(): void {
        this.location.back();
      }
    save():void{
        this.heroService.updateHero(this.hero).subscribe(_=>this.goBack()); 
    }
  
 }