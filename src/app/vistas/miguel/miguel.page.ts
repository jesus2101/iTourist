import { Component, OnInit, OnDestroy  } from '@angular/core';
import {TaskI} from '../../modelos/task.interface';
import {MiguelService} from '../../modelos/miguel.service';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';
import {filter,startWith,takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-miguel',
  templateUrl: './miguel.page.html',
  styleUrls: ['./miguel.page.scss'],
})
export class MiguelPage implements OnInit,OnDestroy {
  private subsServicio=new Subject();
  private subscription:Subscription;
  textoBuscar='';
  todos: TaskI[];
  constructor(private migueService:MiguelService) { 


  }

  ngOnInit() {
    
    this.subscription =this.migueService.getTodos().pipe(startWith([]),filter(res=>res.length>0),takeUntil(this.subsServicio)).subscribe(res=>{
      
      this.todos=res;
      console.log(this.todos);
    });
      }
  
     
      ngOnDestroy() {
        this.subsServicio.unsubscribe();
       this.subscription.unsubscribe();
       this.todos=null;
  
      }
      buscarSitio(event){
        const texto=event.target.value;
       this.textoBuscar=texto;
      }
}
