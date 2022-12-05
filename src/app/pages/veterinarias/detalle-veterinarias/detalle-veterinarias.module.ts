import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleVeterinariasPageRoutingModule } from './detalle-veterinarias-routing.module';
import { DetalleVeterinariasPage } from './detalle-veterinarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVeterinariasPageRoutingModule
  ],
  declarations: [DetalleVeterinariasPage]
})
export class DetalleVeterinariasPageModule {}
