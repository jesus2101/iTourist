import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import { PopinfoComponent } from './popinfo/popinfo.component';



@NgModule({
  declarations: [
    MenuComponent,
   
  ],
  exports:[
    MenuComponent,
    
  ],
  imports: [
    CommonModule,
   
  ]
})
export class ComponentsModule { }
