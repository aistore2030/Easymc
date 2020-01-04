import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeemPageRoutingModule } from './homeem-routing.module';

import { HomeemPage } from './homeem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeemPageRoutingModule
  ],
  declarations: [HomeemPage]
})
export class HomeemPageModule {}
