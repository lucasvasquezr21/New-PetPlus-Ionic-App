import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'animales',
        loadChildren: () => import('../animales/animales.module').then( m => m.AnimalesPageModule)
      },
      {
        path: 'veterinarias',
        loadChildren: () => import('../veterinarias/veterinarias.module').then( m => m.VeterinariasPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
