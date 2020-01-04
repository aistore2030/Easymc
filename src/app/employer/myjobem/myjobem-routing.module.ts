import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyjobemPage } from './myjobem.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobemPageRoutingModule {}
