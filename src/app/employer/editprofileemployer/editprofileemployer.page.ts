import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Router, ActivatedRoute } from '@angular/router';
 import{ Provider } from '../../providers/provider'


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

 
@Component({
  selector: 'app-editprofileemployer',
  templateUrl: './editprofileemployer.page.html',
  styleUrls: ['./editprofileemployer.page.scss'],
})
export class EditprofileemployerPage implements OnInit {

  fname: string = "";
  lname: string = "";
	location: string = "";
  info: string = "";
  employ_id: number;
  id: number;

  image:any=''
  imageData:any=''

  img_profile = [];
  platform: any;
  anggota: any;
  email: any;

  
  constructor(private camera: Camera,private transfer: FileTransfer, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,private actRoute: ActivatedRoute,private router: Router,
    private Provider:Provider) { }
 
  ngOnInit() {

    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.email = this.anggota.email;
      this.id = this.anggota.id;
      console.log(res);
    });
    
    this.actRoute.params.subscribe((data: any) => {
      
      this.id = data.id;
      this.employ_id = data.employ_id;
      this.fname = data.fname;
      this.lname = data.lname;
			this.location = data.loca;
      this.info = data.info;
      // this.img_profile = data.img_profile;

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
        // img_profile: this.img_profile,

			};

			this.Provider.postData(body, 'profile_employer.php').subscribe(data => {
				this.router.navigate(['tabbar/employer/profileem']);
				console.log('OK');
			});
		});

  }

 

  

  openCam(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.imageData=imageData
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });

  }


  async upload()
  {
    const loading = await this.loadingController.create({
      message: 'Uploading...',
      });
    await loading.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options1: FileUploadOptions = {
       fileKey: 'file',
       fileName: 'name.jpg',
       headers: {}
    
    }
  

fileTransfer.upload(this.imageData, 'http://192.168.64.2/server_easymc/profile_employer.php', options1)
 .then((data) => {
   // success
   loading.dismiss()
   alert("success");
 }, (err) => {
   // error
   alert("error"+JSON.stringify(err));
 });
  }
 
 
}
