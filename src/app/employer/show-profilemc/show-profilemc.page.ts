import { Component, OnInit } from '@angular/core';
import { Provider } from '../../providers/provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-profilemc',
  templateUrl: './show-profilemc.page.html',
  styleUrls: ['./show-profilemc.page.scss'],
})
export class ShowProfilemcPage implements OnInit {
  profile: string = "Personal";
  employ_id: number;
  fname: string = "";
  lname: string = "";
	location: string = "";
  info: string = "";
  img_profile : string ="";
  employer_id: number;
  create_at: string;

  
  constructor(
  	private router: Router,
  	private postPvdr: Provider,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) =>{
      this.employer_id = data.employer_id;
      this.employ_id = data.employ_id;
      this.fname = data.fname;
      this.lname = data.lname;
      this.location = data.location;
      this.info = data.info;
    
      this.create_at = data.create_at;
  		console.log(data);
  	});
  }

  backhome(){
  this.router.navigate(['/tabbar/employer/homeem'])
  }
}
