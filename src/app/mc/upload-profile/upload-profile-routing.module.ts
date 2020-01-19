import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadProfilePage } from './upload-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UploadProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadProfilePageRoutingModule {}
