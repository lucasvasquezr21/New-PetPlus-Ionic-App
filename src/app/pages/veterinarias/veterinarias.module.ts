import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariasPageRoutingModule } from './veterinarias-routing.module';

import { VeterinariasPage } from './veterinarias.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariasPageRoutingModule,
    Ng2SearchPipeModule,

  ],
  declarations: [VeterinariasPage]
})
export class VeterinariasPageModule {}
