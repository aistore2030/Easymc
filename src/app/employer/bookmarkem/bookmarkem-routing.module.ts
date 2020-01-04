import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkemPage } from './bookmarkem.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarkemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkemPageRoutingModule {}
