import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMyjobsPageRoutingModule } from './create-myjobs-routing.module';

import { CreateMyjobsPage } from './create-myjobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMyjobsPageRoutingModule
  ],
  declarations: [CreateMyjobsPage]
})
export class CreateMyjobsPageModule {}
