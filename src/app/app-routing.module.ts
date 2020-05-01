import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';


const routes: Routes = [
  {path:'heroes',component:HeroesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//
// ng generate module app-routing --flat --module=app
//--flat puts the file in src/app instead of its own folder.
//--module=app tells the CLI to register it in the imports array of the AppModule.