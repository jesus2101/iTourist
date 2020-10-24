import { Component, OnInit, OnDestroy } from '@angular/core';
import {TaskI} from '../../modelos/task.interface';
import {CoyoacanService} from '../../modelos/coyoacan.service';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';
import {filter,startWith,takeUntil} from 'rxjs/operators';




@Component({
  selector: 'app-coyoacan',
  templateUrl: './coyoacan.page.html',
  styleUrls: ['./coyoacan.page.scss'],
  
})

export class CoyoacanPage implements OnInit,OnDestroy {
  private subsServicio=new Subject();
  private subscription:Subscription;
 textoBuscar='';
  todos: TaskI[];
  
  constructor(private coyoService:CoyoacanService) { 
         
  }
  

  ngOnInit() {
    
    this.subscription =this.coyoService.getTodos().pipe(startWith([]),filter(res=>res.length>0),takeUntil(this.subsServicio)).subscribe(res=>{
      
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
