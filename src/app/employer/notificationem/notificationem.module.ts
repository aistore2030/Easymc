import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificationemPageRoutingModule } from './notificationem-routing.module';
import { NotificationemPage } from './notificationem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationemPageRoutingModule,
  ],
  declarations: [NotificationemPage]
})
export class NotificationemPageModule {}
