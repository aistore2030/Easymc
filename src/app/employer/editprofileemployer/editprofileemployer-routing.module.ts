import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofileemployerPage } from './editprofileemployer.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofileemployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofileemployerPageRoutingModule {}
