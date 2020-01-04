import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofileemployerPageRoutingModule } from './editprofileemployer-routing.module';

import { EditprofileemployerPage } from './editprofileemployer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofileemployerPageRoutingModule
  ],
  declarations: [EditprofileemployerPage]
})
export class EditprofileemployerPageModule {}
