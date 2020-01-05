import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofileemployerPage } from './editprofileemployer.page';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


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
