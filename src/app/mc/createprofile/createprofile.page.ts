import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from '../../providers/provider'
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
  fname: string;
  lname: string;
  mcs_id: string;
  phone:any;
  lowest_wage:any;
  highest_wage:any;
  gender:any;
  age:any;
  weight:any;
  shape:any;
  skin:any;
  blood_type:any;
  height:any;
  location: string;



  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private Provider: Provider,
    private storage: Storage,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.email = this.anggota.email;
      this.id = this.anggota.id;
      console.log(res);
    });

  }



  onClick() {
    let data = {
      mcs_id: this.mcs_id,
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      location: this.location,
      lowest_wage: this.lowest_wage,
      highest_wage: this.highest_wage,
      gender: this.gender,
      age: this.age,
      weight: this.weight,
      height: this.height,
      shape: this.shape,
      skin: this.skin,
      blood_type: this.blood_type,

    };
    this.storage.set('data_storage', data);
      this.mcs_id = "";
      this.fname = "";
      this.lname = "";
      this.phone = "";
      this.location = "";
      this.lowest_wage = "";
      this.highest_wage = "";
      this.gender = "";
      this.age = "";
      this.weight = "";
      this.height = "";
      this.shape = "";
      this.skin = "";
      this.blood_type = "";
      this.router.navigateByUrl('/mc/createprofile2');
      console.log(data);
  }

  // moveToNext(slides) {
  //   console.log(slides);
  //   slides.slideNext()
  // }
  increment() {
    this.currentNumber++;
  }

  decrement() {
    if (this.currentNumber < 1) {
      this.currentNumber = 1;
    }
    this.currentNumber--;
  }



}
