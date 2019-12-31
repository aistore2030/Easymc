import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyjobPageRoutingModule } from './myjob-routing.module';

import { MyjobPage } from './myjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyjobPageRoutingModule
  ],
  declarations: [MyjobPage]
})
export class MyjobPageModule {}
