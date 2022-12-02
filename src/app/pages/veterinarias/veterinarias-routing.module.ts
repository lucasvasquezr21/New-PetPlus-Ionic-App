import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinariasPage } from './veterinarias.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinariasPage
  },
  {
    path: ':veterinariasID',
    loadChildren: () => import('./detalle-veterinarias/detalle-veterinarias.module').then( m => m.DetalleVeterinariasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinariasPageRoutingModule {}
