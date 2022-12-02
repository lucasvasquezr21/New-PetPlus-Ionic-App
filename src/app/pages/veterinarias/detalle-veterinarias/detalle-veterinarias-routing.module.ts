import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleVeterinariasPage } from './detalle-veterinarias.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleVeterinariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVeterinariasPageRoutingModule {}
