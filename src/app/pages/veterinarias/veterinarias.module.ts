import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariasPageRoutingModule } from './veterinarias-routing.module';

import { VeterinariasPage } from './veterinarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariasPageRoutingModule
  ],
  declarations: [VeterinariasPage]
})
export class VeterinariasPageModule {}
