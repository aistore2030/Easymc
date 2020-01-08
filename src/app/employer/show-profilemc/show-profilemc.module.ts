import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProfilemcPageRoutingModule } from './show-profilemc-routing.module';

import { ShowProfilemcPage } from './show-profilemc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProfilemcPageRoutingModule
  ],
  declarations: [ShowProfilemcPage]
})
export class ShowProfilemcPageModule {}
