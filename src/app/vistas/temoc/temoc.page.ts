import { Component, OnInit, OnDestroy } from '@angular/core';
import {TaskI} from '../../modelos/task.interface';
import {TemocService} from '../../modelos/temoc.service';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';
import {filter,startWith,takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-temoc',
  templateUrl: './temoc.page.html',
  styleUrls: ['./temoc.page.scss'],
})
export class TemocPage implements OnInit,OnDestroy {
  private subsServicio=new Subject();
  private subscription:Subscription;
  textoBuscar='';
  todos: TaskI[];
  constructor(private temocService:TemocService) { 


  }

  ngOnInit() {
     
    this.subscription =this.temocService.getTodos().pipe(startWith([]),filter(res=>res.length>0),takeUntil(this.subsServicio)).subscribe(res=>{
      
        this.todos=res;
        console.log(this.todos);
      });

   /*   this.subscription = this.temocService.getTodos().subscribe(res => {
        this.todos = res;
        console.log(this.todos);
        });*/
        
      }
     
     
      ngOnDestroy() {
       /* this.subsServicio.next();
        this.subsServicio.complete();
        this.subsServicio.unsubscribe();
        */
       this.subsServicio.unsubscribe();
       this.subscription.unsubscribe();
       this.todos=null;
      }
      buscarSitio(event){
        const texto=event.target.value;
       this.textoBuscar=texto;
      }


}
