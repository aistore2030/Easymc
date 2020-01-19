import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import{ Provider } from '../../providers/provider'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: string = "Personal";
  anggota: any;
  id: any;
  customers: any= [];
 
  constructor(
    private router: Router,
    private storage: Storage,
    public toastCtrl: ToastController,
    private Provider:Provider,
    public actionSheetController: ActionSheetController, ) { }

  ngOnInit() {
  
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
  		this.Provider.postData(body, 'test.php').subscribe(data => {
  			for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
        console.log(data);
      });
     });

    });

  }  

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  editprofile(){
    this.router.navigate(['mc/createprofile']);
  }
  upprofile(){
    this.router.navigate(['mc/upload-profile']);
  }

}
