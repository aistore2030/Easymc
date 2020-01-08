import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 import{ Provider } from '../../providers/provider'
 import { Storage } from '@ionic/Storage';
 import { ToastController } from '@ionic/angular';

 
@Component({
  selector: 'app-editprofileemployer',
  templateUrl: './editprofileemployer.page.html',
  styleUrls: ['./editprofileemployer.page.scss'],
})
export class EditprofileemployerPage implements OnInit {

 
  employ_id: number;
  fname: string = "";
  lname: string = "";
	location: string = "";
  info: string = "";
  img_profile : string ="";

  anggota: any;
  email: any;
  id: number;
  employer_id: any;

  constructor( 
		private router: Router,
		private actRoute: ActivatedRoute,
    private Provider:Provider,
    private storage: Storage,
    public toastCtrl: ToastController) { }
 
    ngOnInit() {

    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.email = this.anggota.email;
      this.id = this.anggota.id;
      console.log(res);
    });

      this.actRoute.params.subscribe((data: any) => {
        this.employer_id = data.employer_id;
        this.employ_id = data.employ_id;
        this.fname = data.fname;
        this.lname = data.lname;
        this.location = data.location;
        this.info = data.info;
        this.img_profile = data.img_profile;
      
      
    
        console.log(data);
      });
    }
  
  
    createdProses() {
      return new Promise(resolve => {
        let body = {
          aksi: 'add',
          employ_id: this.employ_id,
          fname: this.fname,
          lname: this.lname,
          location: this.location,
          info: this.info,
          img_profile: this.img_profile,
        };
  
        this.Provider.postData(body, 'profile_employer.php').subscribe(data => {
          this.router.navigate(['/tabbar/employer/homeem']);
          console.log('OK');
        });
      });
  
    }

    updateProses() {
      return new Promise(resolve => {
        let body = {
          aksi: 'update',
          employ_id: this.employ_id,
          fname: this.fname,
          lname: this.lname,
          location: this.location,
          info: this.info,

        };
  
        this.Provider.postData(body, 'profile_employer.php').subscribe(data => {
          this.router.navigate(['/employer/profileem']);
          console.log('OK');
        });
      });
  
    }

    
    
  
}
