import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';
import{ Provider } from '../../providers/provider'

@Component({
  selector: 'app-profileem',
  templateUrl: './profileem.page.html',
  styleUrls: ['./profileem.page.scss'],
})
export class ProfileemPage implements OnInit {
  actionSheet:any;
  profile: string = "Personal";
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;

  anggota: any;
  id: number;
  employ_id: number;

  constructor(public actionSheetController: ActionSheetController,
    private router: Router,
    private storage: Storage, 
    public toastCtrl: ToastController,
    private Provider:Provider) { }

  ngOnInit() {
   
  }
  

  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Profile employer',
      buttons: [{
        text: 'edit profile',
        role: 'destructive',
        icon:'create',
        handler: () => {
          this.router.navigate(['/employer/profileem/editprofileemployer']);
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

  updateCustomer(employer_id,employ_id,fname,lname,location,info){
  	this.router.navigate(['/employer/profileem/editprofileemployer/' + employer_id + '/' + employ_id + '/'  + fname  + '/' + lname + '/' + location + '/' + info]);
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

  ionViewWillEnter(){

    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.id = this.anggota.id;
      console.log(res);

    });
  	this.customers = [];
    this.loadCustomer();
   
  }


  loadCustomer(){
  	return new Promise(resolve => {
      this.storage.get('session_storage').then((res)=>{
        this.anggota = res;
        this.id = this.anggota.id;
        console.log(res);
     
  		let body = { 
        aksi : 'getdata',
        id: this.id  
        
  		};
  		this.Provider.postData(body, 'profile_employer.php').subscribe(data => {
  			for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
        console.log(data);
      });
     });

    });

  }  

  delCustomer(id){

  	let body = {
  			aksi : 'delete',
  			employer_id : id
  		};

  		this.Provider.postData(body, 'profile_employer.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  upprofile(employer_id,img_profile){
    this.router.navigate(['employer/profileem/uploadprofile/' + employer_id + '/' + img_profile ]);
  }





  

}
