import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmcPage } from './detailmc.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmcPageRoutingModule {}
