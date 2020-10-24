import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection}  from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map,shareReplay} from 'rxjs/operators';
import {TaskI} from '../modelos/task.interface';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoyoacanService {
 
  private todosCollection:AngularFirestoreCollection<TaskI>;
private todos:Observable<TaskI[]>;

  constructor(db: AngularFirestore) { 
    this.todosCollection=db.collection<TaskI>('coyoacan');
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
    console.log("Si se estan traynedo todos");

   }
   getTodo(id:string){
   return this.todosCollection.doc<TaskI>(id).valueChanges();
   }
}
