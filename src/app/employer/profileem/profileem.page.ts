import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profileem',
  templateUrl: './profileem.page.html',
  styleUrls: ['./profileem.page.scss'],
})
export class ProfileemPage implements OnInit {
  actionSheet:any;
  profile: string = "Personal";
  rating = '50%';

  constructor(public actionSheetController: ActionSheetController,
    private router: Router,
    private storage: Storage, 
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Freaky Jolly',
      buttons: [{
        text: 'edit',
        role: 'destructive',
        icon:'create',
        handler: () => {
          this.router.navigate(['tabbar/employer/profileem/editprofileemployer']);
        }
      }, {
        text: 'Logout',
        icon: 'log-out',
        handler: () => {
          
          this.storage.clear();
          this.router.navigate(['/login']);
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
  }

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }
  onRateChange(event) {
    
    console.log('Your rate:', event);
  }

}
