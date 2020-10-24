import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoyoacanDetailsPage } from './coyoacan-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoyoacanDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoyoacanDetailsPage]
})
export class CoyoacanDetailsPageModule {}
