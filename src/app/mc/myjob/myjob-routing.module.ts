import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyjobPage } from './myjob.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobPageRoutingModule {}
