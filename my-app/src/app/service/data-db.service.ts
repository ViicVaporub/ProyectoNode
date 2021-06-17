import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<UserI>;

  constructor(private afs:AngularFirestore) { 
    this.contactCollection = afs.collection<UserI>('usuarios')
  }
  
  saveUser(newUser : any): void { 
    this.contactCollection.add(newUser);
  }

}

