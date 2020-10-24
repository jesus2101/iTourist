import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection}  from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map,shareReplay} from 'rxjs/operators';
import {EventosT} from '../modelos/eventos.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private todosCollection:AngularFirestoreCollection<EventosT>;
  private todos:Observable<EventosT[]>;
  
    constructor(db: AngularFirestore) { 
      this.todosCollection=db.collection<EventosT>('Eventos');
    this.todos=this.todosCollection.snapshotChanges().pipe(map(
     actions =>{
       return actions.map(a =>{
         const data =a.payload.doc.data();
         const id=a.payload.doc.id;
         return {id,...data};
       });
     }
  
    ),
    shareReplay()
    );
    }
    getTodos(){
      return this.todos;
  
     }
     
}
