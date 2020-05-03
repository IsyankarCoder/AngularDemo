import {Injectable} from '@angular/core';
import {Hero} from './hero'
import {HeroList} from './mock-heroes';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
    providedIn:"root"
})
export class HeroService{

    private heroesUrl:string="api/heroes";
    httpOptions={
        headers:new HttpHeaders({
'Content-Type':'application/json'
        })
    };
    constructor(private messageService:MessageService,private http:HttpClient) {

    }

    getHeroes():Observable<Hero[]> {
        this.messageService.add("HeroService Eklendi Bebişim");
        return of(HeroList);
    }

    getHero(id:number):Observable<Hero>{
        // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of (HeroList.find(hero=>hero.id===id));
    }
  
    getHeroFromHttp(id:number):Observable<Hero>{
        const url=`${this.heroesUrl}/${id}`;
        return  this.http.get<Hero>(url).pipe(
            tap(_=>this.log(`fetched hero from Http id=${id}`)),            
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }
    getHeroesFromHttp():Observable<Hero[]>{
        this.messageService.add("HttpClienttan eklendi");
        return this.http.get<Hero[]>(this.heroesUrl).
        pipe(
            tap(_ => this.log('fetched heroes from Http')),
            catchError(this.handleError<Hero[]>('GetHeroes',[])));
    }

    updateHero(hero:Hero):Observable<any>{
     return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
      )
     }
   
     addHero(hero:Hero):Observable<Hero>{
         return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
             tap((newHero:Hero)=>this.log(`added hero w/ id=${newHero.id}`)),
             catchError(this.handleError<Hero>('add Hero'))
         );
     }
     /** DELETE: delete the hero from the server */
     deleteHero(hero:Hero|number):Observable<Hero>
     {
        const id = typeof hero==='number' ?hero:hero.id;
        const url=`${this.heroesUrl}/${id}`;

        return this.http.delete<Hero>(url,this.httpOptions).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))   
        )


     }
    

     private log(message:string){
        this.messageService.add(`HeroService: ${message}`);
     }

    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
     private handleError<T>(operation='operation',result?:T)
     {
         return(error:any):Observable<T>=>
         {
            // TODO: send the error to remote logging infrastructure
           console.error(error);
            // TODO: better job of transforming error for user consumption
           this.log(`${operation} failed: ${error.message}`); 
           // Let the app keep running by returning an empty result.
           return of(result as T);
         }
        }   
    }
