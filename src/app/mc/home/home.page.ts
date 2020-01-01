import { Component, OnInit } from '@angular/core';
import { Platform, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pet: string = "puppies";
  isAndroid: boolean = false;
  slider: any;

  constructor(platform: Platform) {
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
