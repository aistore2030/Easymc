import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 import{ Provider } from '../../providers/provider'
 import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.page.html',
  styleUrls: ['./createprofile.page.scss'],
  
})
export class CreateprofilePage implements OnInit {
  email: any;
  id: any;
  anggota: any;
  currentNumber = 0;
  dataselects:any = [];
 
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  works: any= [];

  constructor(
    private router: Router,
		private actRoute: ActivatedRoute,
    private Provider:Provider,
    private storage: Storage,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.email = this.anggota.email;
      console.log(res);
    });

    this.dataselects = [];
    this.works = [];
  	this.start = 0;
    this.loadCustomer();
    this.loadwork();
  }

  moveToNext(slides){
    console.log(slides);
    slides.slideNext()
}
increment () {
  this.currentNumber++;
}

 decrement () {
  if(this.currentNumber < 1){
    this.currentNumber = 1;
  }
  this.currentNumber--;
}

doRefresh(event){
  setTimeout(() =>{
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
}

loadData(event:any){
  this.start += this.limit;
  setTimeout(() =>{
  this.loadCustomer().then(()=>{
    event.target.complete();
  });
  }, 500);
  setTimeout(() =>{
    this.loadwork().then(()=>{
      event.target.complete();
    });
    }, 500);
}


loadCustomer(){
  return new Promise(resolve => {
    let body = {
      aksi : 'getdata_select_blood',
      limit : this.limit,
      start : this.start,
    };

    this.Provider.postData(body, 'create_profile.php').subscribe(data => {
      for(let dataselect of data.result){
        this.dataselects.push(dataselect);
      }
      resolve(true);
    });
  });

  
}

loadwork(){
  return new Promise(resolve => {
    let body = {
      aksi : 'getdata_select_work',
      limit : this.limit,
      start : this.start,
    };

    this.Provider.postData(body, 'create_profile.php').subscribe(data => {
      for(let work of data.result){
        this.works.push(work);
      }
      resolve(true);
    });
  });

  
}


 

}
