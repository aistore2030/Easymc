import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProfilemcPage } from './show-profilemc.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProfilemcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProfilemcPageRoutingModule {}
