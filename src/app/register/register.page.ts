import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Provider } from '../providers/provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   
  email: string = "";
  password: string = "";
  status: string = "";
  confirm_password: string = "";
  anggota: any;


  constructor(
  	private router: Router,
  	private Provider: Provider,
  	private storage: Storage,
    public toastCtrl: ToastController,

  ) { }

  ngOnInit() {
  }

  async prosesRegister(){


    // validation done
    if(this.email==""){
        const toast = await this.toastCtrl.create({
          message: 'email is required',
          duration: 3000
        });
        toast.present();
    }else if(this.password==""){
        const toast = await this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
    }
    else if(this.password != this.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'Password not Match!"',
        duration: 3000
      });
      toast.present();
  }

    else if(this.status==""){
      const toast = await this.toastCtrl.create({
        message: 'status is required',
        duration: 3000
      });
      toast.present();
  }else{

      let body = {
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        status: this.status,
        aksi: 'register'
      };

     

      this.Provider.postData(body, 'login.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register succesful',
            duration: 3000
          });
          toast.present();
        }
        
        else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });

    }
  
  }
  formLogin(){
  	this.router.navigate(['/login']);
  }

  
  
}
