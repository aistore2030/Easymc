import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkemPageRoutingModule } from './bookmarkem-routing.module';

import { BookmarkemPage } from './bookmarkem.page';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarkemPageRoutingModule
  ],
  declarations: [BookmarkemPage]
})
export class BookmarkemPageModule {}
