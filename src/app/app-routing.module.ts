import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  //{ path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'coyoacan', loadChildren: './vistas/coyoacan/coyoacan.module#CoyoacanPageModule' },
  { path: 'coyoacandetails/:id', loadChildren: './vistas/coyoacan-details/coyoacan-details.module#CoyoacanDetailsPageModule' },
  //{ path: 'coyoacandetails', loadChildren: './vistas/coyoacan-details/coyoacan-details.module#CoyoacanDetailsPageModule' },
  { path: 'migueldetails/:id', loadChildren: './vistas/miguel-details/miguel-details.module#MiguelDetailsPageModule' },
  //{ path: 'migueldetails', loadChildren: './vistas/miguel-details/miguel-details.module#MiguelDetailsPageModule' },
  { path: 'miguel', loadChildren: './vistas/miguel/miguel.module#MiguelPageModule' },
  { path: 'temoc', loadChildren: './vistas/temoc/temoc.module#TemocPageModule' },
  { path: 'temocdetails/:id', loadChildren: './vistas/temoc-details/temoc-details.module#TemocDetailsPageModule' },
  //{ path: 'temocdetails', loadChildren: './vistas/temoc-details/temoc-details.module#TemocDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
