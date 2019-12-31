import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
   }
  
  ngOnInit() {
  }
  


  

}
