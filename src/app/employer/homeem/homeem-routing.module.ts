import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeemPage } from './homeem.page';

const routes: Routes = [
  {
    path: '',
    component: HomeemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeemPageRoutingModule {}
