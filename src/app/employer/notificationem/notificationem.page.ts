import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-notificationem',
  templateUrl: './notificationem.page.html',
  styleUrls: ['./notificationem.page.scss'],
})
export class NotificationemPage implements OnInit {
  searchQuery: any;

  constructor(private storage: Storage,) { }

  ngOnInit() {
    
  }

  // ionViewDidEnter(){
  //   this.storage.get('input1').then((val) => {
  //     this.searchQuery = val;
  //     console.log('Your age is', val);
  //   });
  // }

  onClick(searchQuery){
    //เก็บค่าใน storage ที่ชื่อ input1 ก่อน โดยเอาค่า txtNumber ที่ทำการแมพ ngModel ไว้มาเก็บ
    this.storage.set('input1', searchQuery);
    //ไปหน้า p2 (หรืออาจจะไม่มีหน้านี้ก็ได้สามารถแสดงผลในหน้าไหนก็ได้)
     console.log('Your age is', searchQuery);
  }

}
