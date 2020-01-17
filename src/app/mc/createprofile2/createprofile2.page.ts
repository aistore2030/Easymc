import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from '../../providers/provider'
import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createprofile2',
  templateUrl: './createprofile2.page.html',
  styleUrls: ['./createprofile2.page.scss'],
})
export class Createprofile2Page implements OnInit {
  getdata: any;
  fname: string;
  lname: string;
  mcs_id: number;
  phone: any;
  lowest_wage: any;
  highest_wage: any;
  gender: any;
  age: any;
  weight: any;
  shape: any;
  skin: any;
  blood_type: any;
  currentNumber = 0;
  distinctive: any;
  recessive: any;
  experience: any;
  dual_work: any;
  award: any;
  type_work: any;
  ability: any;
  height:any;
  location: any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private Provider: Provider,
    private storage: Storage,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
      this.storage.get('data_storage').then((data) => {
        this.getdata = data;
        this.mcs_id = this.getdata.mcs_id;
        this.fname = this.getdata.fname;
        this.lname = this.getdata.lname;
        this.phone = this.getdata.phone;
        this.location = this.getdata.location;
        this.lowest_wage = this.getdata.lowest_wage;
        this.highest_wage = this.getdata.highest_wage;
        this.gender = this.getdata.gender;
        this.age = this.getdata.age;
        this.weight = this.getdata.weight;
        this.height = this.getdata.height;
        this.shape = this.getdata.shape;
        this.skin = this.getdata.skin;
        this.blood_type = this.getdata.blood_type;
        console.log(data);
      });
  
  }
  increment() {
    this.currentNumber++;
  }

  decrement() {
    if (this.currentNumber < 1) {
      this.currentNumber = 1;
    }
    this.currentNumber--;
  }

  createdProses(){
    
  	return new Promise(resolve => {
  
      this.storage.get('data_storage').then((data) => {
        this.getdata = data;
        this.mcs_id = this.getdata.mcs_id;
        this.fname = this.getdata.fname;
        this.lname = this.getdata.lname;
        this.phone = this.getdata.phone;
        this.location = this.getdata.location;
        this.lowest_wage = this.getdata.lowest_wage;
        this.highest_wage = this.getdata.highest_wage;
        this.gender = this.getdata.gender;
        this.age = this.getdata.age;
        this.weight = this.getdata.weight;
        this.height = this.getdata.height;
        this.shape = this.getdata.shape;
        this.skin = this.getdata.skin;
        this.blood_type = this.getdata.blood_type;
        console.log(data);

  		let body = {
        aksi : 'profile_mc',
        mcs_id : this.mcs_id,
        fname : this.fname,
        lname : this.lname,
        phone : this.phone,
        location : this.location,
       lowest_wage : this.lowest_wage,
        highest_wage : this.highest_wage,
       gender : this.gender,
        age : this.age,
        weight : this.weight,
        height : this.height,
        shape : this.shape,
        skin : this.skin,
        blood_type : this.blood_type,
        distinctive: this.distinctive.map( val => (val? this.distinctive : "")).join(","),
        recessive: this.recessive,
        experience: this.experience,
        dual_work: this.dual_work,
        award: this.award,
        type_work: this.type_work,
        ability: this.ability,
      };
  		this.Provider.postData(body, 'test.php').subscribe(data => {
        this.storage.set('data_storage', data);
  			console.log('OK');
      });
    });
  	});

  }

}
