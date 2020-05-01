import { Component,OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector:'app-dashboard',
    styleUrls:['./dashboard.component.css'],
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit{
heroList:Hero[]=[]
constructor(private heroService:HeroService){

}
ngOnInit(){
this.getHeroes();
}
getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroList = heroes.slice(1,5))
}
}

