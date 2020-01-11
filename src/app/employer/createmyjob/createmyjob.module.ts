import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatemyjobPageRoutingModule } from './createmyjob-routing.module';

import { CreatemyjobPage } from './createmyjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatemyjobPageRoutingModule
  ],
  declarations: [CreatemyjobPage]
})
export class CreatemyjobPageModule {}
