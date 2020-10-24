import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiguelDetailsPage } from './miguel-details.page';

const routes: Routes = [
  {
    path: '',
    component: MiguelDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiguelDetailsPage]
})
export class MiguelDetailsPageModule {}
