import { Injectable } from "@angular/core";
import { PreloadingStrategy,Route } from "@angular/router";

import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";



@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {

    preload(route: Route, load: ()=> Observable<any>): Observable<any>{
        if(route.path === 'home'){
            return load();
        }else{
            return of(null)
        }
        

    }

}