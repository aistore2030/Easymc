import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  actionSheet:any;

  constructor(public actionSheetController: ActionSheetController,private router: Router,private storage: Storage, public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Freaky Jolly',
      buttons: [{
        text: 'edit',
        role: 'destructive',
        handler: () => {
          this.router.navigate(['tabs/mc/home']);
        }
      }, {
        text: 'Logout',
        icon: 'logout',
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
 
}
