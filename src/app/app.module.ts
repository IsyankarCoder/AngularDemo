import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms';
import {MessageComponent} from './messages/message.component';

import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroDetailComponentNew} from './hero-detail-new/hero-detail-new.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InMemoryDataService } from './inmemorydataservice';


@NgModule({
  declarations: [
    AppComponent, 
    MessageComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroDetailComponentNew

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
