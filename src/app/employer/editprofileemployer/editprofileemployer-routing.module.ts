import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofileemployerPage } from './editprofileemployer.page';
import { IonicStorageModule } from '@ionic/storage';


const routes: Routes = [
  {
    path: '',
    component: EditprofileemployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),IonicStorageModule.forRoot(), ],
  exports: [RouterModule],
  
})
export class EditprofileemployerPageRoutingModule {}
