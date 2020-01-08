import { Component, OnInit } from '@angular/core';
import { ToastController,Platform } from '@ionic/angular';
import { Provider } from '../providers/provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email: string = "em@hotmail.com";
  password: string = "123456";
  status : string = "n";
  id: number;
  
  constructor(
  	private router: Router,
  	private Provider: Provider,
    private storage: Storage,
    private platform: Platform,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async prosesLogin(){
    if(this.email != "" && this.password != ""){
      let body = {
        email: this.email,
        password: this.password,
        status: this.status,
        aksi: 'login'
      };

      this.Provider.postData(body, 'login.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          if(data.result ['status'] == 'y'){
            this.storage.set('session_storage', data.result);
            this.router.navigate(['/tabs/mc/home']);
            const toast = await this.toastCtrl.create({
              message: 'Login  user Succesfully.',
              duration: 2000
            });
            toast.present();
          }
          else if(data.result ['status'] == 'n'){
            this.storage.set('session_storage', data.result);
            this.router.navigate(['/tabbar/employer/homeem']);
            const toast = await this.toastCtrl.create({
              message: 'Login N user Succesfully.',
              duration: 2000
            });
            toast.present();
          }
          else if(data.result ['status'] == ''){
            this.storage.set('session_storage', data.result);
            const toast = await this.toastCtrl.create({
              message: 'error',
              duration: 3000
            });
            toast.present();
          }


          this.email = "";
          this.password = "";
          this.status = "";
          console.log(data);
        }
        else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Email or Password Invalid.',
		duration: 2000
	  });
	  toast.present();
    }
  }

  formRegister(){
  	this.router.navigate(['/register']);
  }



}
