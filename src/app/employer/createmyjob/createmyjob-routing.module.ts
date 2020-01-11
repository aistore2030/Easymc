import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatemyjobPage } from './createmyjob.page';

const routes: Routes = [
  {
    path: '',
    component: CreatemyjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatemyjobPageRoutingModule {}
