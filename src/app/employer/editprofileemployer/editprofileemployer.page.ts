import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 import{ Provider } from '../../providers/provider'
 import { Storage } from '@ionic/Storage';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
 
import { finalize } from 'rxjs/operators';
 
const STORAGE_KEY = 'my_images';
 
@Component({
  selector: 'app-editprofileemployer',
  templateUrl: './editprofileemployer.page.html',
  styleUrls: ['./editprofileemployer.page.scss'],
})
export class EditprofileemployerPage implements OnInit {

  images = [];
 
  employ_id: number;
  fname: string = "";
  lname: string = "";
	location: string = "";
  info: string = "";

  anggota: any;
  email: any;
  id: number;
  employer_id: any;
  name: any;
  img_profile: any;

  constructor( 
		private router: Router,
		private actRoute: ActivatedRoute,
    private Provider:Provider,
    private storage: Storage,
    public toastCtrl: ToastController,
    private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private platform: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath) { }
 
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
        console.log(data);
      });

      this.platform.ready().then(() => {
        this.loadStoredImages();
       
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

    loadStoredImages() {
      this.storage.get(STORAGE_KEY).then(images => {
        if (images) {
          let arr = JSON.parse(images);
          this.images = [];
          for (let img of arr) {
            let filePath = this.file.dataDirectory + img;
            let resPath = this.pathForImage(filePath);
            this.name = this.images;
            this.images.push({ name: img, path: resPath, filePath: filePath });
            
            console.log(images);
          }
        }
      
      });
    }
   
    pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        let converted = this.webview.convertFileSrc(img);
        return converted;
      }
    }
   
    async presentToast(text) {
      const toast = await this.toastController.create({
          message: text,
          position: 'bottom',
          duration: 3000
      });
      toast.present();
    }
   
    // Next functions follow here...
  
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
          header: "Select Image source",
          buttons: [{
                  text: 'Load from Library',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                  }
              },
              {
                  text: 'Use Camera',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.CAMERA);
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel'
              }
          ]
      });
      await actionSheet.present();
  }
   
  takePicture(sourceType: PictureSourceType) {
      var options: CameraOptions = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };
   
      this.camera.getPicture(options).then(imagePath => {
          if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
              this.filePath.resolveNativePath(imagePath)
                  .then(filePath => {
                      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                      let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  });
          } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }
      });
   
  }
  
  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }
  
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
  }
  
  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        if (!arr) {
            let newImages = [name];
            this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
            arr.push(name);
            this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }
  
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
  
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };
  
        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // trigger change detection cycle
    });
  }
  
  deleteImage(imgEntry, position) {
      this.images.splice(position, 1);
   
      this.storage.get(STORAGE_KEY).then(images => {
          let arr = JSON.parse(images);
          let filtered = arr.filter(name => name != imgEntry.name);
          this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
   
          var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
   
          this.file.removeFile(correctPath, imgEntry.name).then(res => {
              this.presentToast('File removed.');
          });
      });
  }
  

  
  readFile(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
        const formData = new FormData();
        const imgBlob = new Blob([reader.result], {
            type: file.type
        });
        formData.append('file', imgBlob, file.name);
        this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }
  
  async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
        message: 'Uploading image...',
    });
    await loading.present();
    this.http.post("http://192.168.64.2/server_easymc/upload.php", formData)
        .pipe(
            finalize(() => {
                loading.dismiss();
            })
        )
        .subscribe(res => {
            if (res['success']) {
                this.presentToast('File upload complete.')
            } else {
                this.presentToast('File upload failed.')
            }
        });
  }

  startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file))
        })
        .catch(err => {
            this.presentToast('Error while reading file.');
        });
  }


  createdProses(){
    
  	return new Promise(resolve => {
  
        this.storage.get('STORAGE_KEY').then((images)=>{
          this.anggota = images;
          this.name = this.anggota.name;
          console.log(images);

  		let body = {
        aksi : 'add',
        employ_id: this.employ_id,
        fname: this.fname,
        lname: this.lname,
        location: this.location,
        info: this.info,
        img_profile: this.name,
      };
  		this.Provider.postData(body, 'profile_employer.php').subscribe(data => {
  			this.router.navigate(['/tabbar/employer/homeem']);
  			console.log('OK');
      });
    });
  	});

  }

    


    
    
  
}
