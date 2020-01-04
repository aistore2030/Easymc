import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileemPage } from './profileem.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileemPageRoutingModule {}
