import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';



const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  entryComponents:[
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [InicioPage,PopinfoComponent]
})
export class InicioPageModule {}
