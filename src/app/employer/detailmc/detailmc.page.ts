import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailmc',
  templateUrl: './detailmc.page.html',
  styleUrls: ['./detailmc.page.scss'],
})
export class DetailmcPage implements OnInit {

  mc_id: number;
  fname: string ="";
  lname: string ="";
  mcs_id: number ;
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
  genders: any;
  constructor(
    private actRoute: ActivatedRoute,
    private router :Router,
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.mc_id = data.mc_id;
      this.mcs_id = data.mcs_id;
      this.fname = data.fname;
      this.lname = data.lname;
      this.phone = data.phone;
      this.location = data.location;
      this.lowest_wage = data.lowest_wage;
      this.highest_wage = data.highest_wage;
      this.gender = data.gender;
      this.genders =data.genders;
      this.age = data.age;
      this.weight = data.weight;
      this.height = data.height;
      this.shape = data.shape;
      this.skin = data.skin;
      this.blood_type = data.blood_type;
  		console.log(data);
  	});
  }

  back(){
    this.router.navigate(['tabbar/employer/bookmarkem'])
  }
}
