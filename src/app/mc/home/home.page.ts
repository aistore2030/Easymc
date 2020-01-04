import { Component, OnInit } from '@angular/core';
import { Platform, IonSlides } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Provider } from '../../providers/provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pet: string = "puppies";
  isAndroid: boolean = false;
  slider: any;
  email: string;
  anggota: any;
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;

  constructor(platform: Platform,	private router: Router,
  	private Provider: Provider,
    private storage: Storage,
    public toastCtrl: ToastController) {
   }
   ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.email = this.anggota.email;
      console.log(res);
    });

  }

  loadCustomer() {
    throw new Error("Method not implemented.");
  }
  ngOnInit() {
  }
  slidercard = {
    slidesPerView: 1.2,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween:0.1,
      loop: true
  };

  sliderConfig = {
    slidesPerView: 3,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween:0.1,
      loop: true
};

  // slidesDidLoad(slides: IonSlides) {
  //   slides.startAutoplay();
  // }


  move(slides :IonSlides){
    console.log(slides)
    slides.slideNext(600,true)
  }




  

}
