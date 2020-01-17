import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Createprofile2Page } from './createprofile2.page';

const routes: Routes = [
  {
    path: '',
    component: Createprofile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Createprofile2PageRoutingModule {}
