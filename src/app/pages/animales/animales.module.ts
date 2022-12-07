import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimalesPageRoutingModule } from './animales-routing.module';
import { AnimalesPage } from './animales.page';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalesPageRoutingModule,
    DataTablesModule
  ],
  declarations: [AnimalesPage]
})
export class AnimalesPageModule {}
