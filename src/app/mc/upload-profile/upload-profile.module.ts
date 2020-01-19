import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadProfilePageRoutingModule } from './upload-profile-routing.module';

import { UploadProfilePage } from './upload-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadProfilePageRoutingModule
  ],
  declarations: [UploadProfilePage]
})
export class UploadProfilePageModule {}
