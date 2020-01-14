import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadprofilePage } from './uploadprofile.page';

const routes: Routes = [
  {
    path: '',
    component: UploadprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadprofilePageRoutingModule {}
