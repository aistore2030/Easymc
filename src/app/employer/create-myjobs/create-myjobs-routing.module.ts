import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMyjobsPage } from './create-myjobs.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMyjobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMyjobsPageRoutingModule {}
