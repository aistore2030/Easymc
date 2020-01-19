import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmcPageRoutingModule } from './detailmc-routing.module';

import { DetailmcPage } from './detailmc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmcPageRoutingModule
  ],
  declarations: [DetailmcPage]
})
export class DetailmcPageModule {}
