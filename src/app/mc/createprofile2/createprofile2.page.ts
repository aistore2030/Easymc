import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from '../../providers/provider'
import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-createprofile2',
  templateUrl: './createprofile2.page.html',
  styleUrls: ['./createprofile2.page.scss'],
})
export class Createprofile2Page implements OnInit {
  getdata: any;
 
  currentNumber = 0;

  fname: string ="";
  lname: string ="";
  mcs_id: string ="";
  phone: string ="";
  lowest_wage: string ="";
  highest_wage: string ="";
  gender: string ="";
  age: string ="";
  weight: string ="";
  shape: string ="";
  skin: string ="";
  blood_type:string ="" ;
  currentstring  = 0;
  distinctive: string ="";
  recessive: string ="";
  experience: string ="";
  dual_work: string ="";
  award: string ="";
  type_work: string ="";
  ability: string ="";
  height:string ="";
  location: string ="";
 

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private Provider: Provider,
    private storage: Storage,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
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

  async createdProses(){
    
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
        aksi : 'postdata',
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
        distinctive: this.distinctive,
        recessive: this.recessive,
        experience: this.experience,
        dual_work: this.dual_work,
        award: this.award,
        type_work: this.type_work,
        ability: this.ability,
      };
  		this.Provider.postData(body, 'profile_mc.php').subscribe(data => {
        this.router.navigate(['/tabbar/employer/homeem']);
  			console.log('OK');
  			console.log('data');
      });
    });
  	});

  }

}
