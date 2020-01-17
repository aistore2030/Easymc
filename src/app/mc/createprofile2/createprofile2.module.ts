import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Createprofile2PageRoutingModule } from './createprofile2-routing.module';

import { Createprofile2Page } from './createprofile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Createprofile2PageRoutingModule
  ],
  declarations: [Createprofile2Page]
})
export class Createprofile2PageModule {}
