import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { getMaxListeners } from 'process';
import { $ } from 'protractor';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //admin : Boolean = false;
  constructor(public afAuth: AngularFireAuth) { }

  async login(email : string, pass: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        pass
        );
      return result;
    }catch (error){console.log(error);}
    
  }
  async register(email: string, pass: string ){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        pass,
        );
      return result;
    }catch (error){console.log(error);}
   
  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch (error){console.log(error);}
  
  }

    getCurrentUser(){
      return this.afAuth.authState.pipe(first()).toPromise();
    }

 
}
