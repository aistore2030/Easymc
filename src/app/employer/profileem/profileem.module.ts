import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileemPageRoutingModule } from './profileem-routing.module';
import { ProfileemPage } from './profileem.page';
import { IonicRatingModule } from 'ionic4-rating';


 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule ,
    ProfileemPageRoutingModule,
    
  ],
  declarations: [ProfileemPage]
})
export class ProfileemPageModule {}
