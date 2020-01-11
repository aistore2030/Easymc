import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Provider } from '../../providers/provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-homeem',
  templateUrl: './homeem.page.html',
  styleUrls: ['./homeem.page.scss'],
})
export class HomeemPage implements OnInit {

  anggota: any;
  email: string;
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  id: any;
  search: any;

  constructor(
  	private router: Router,
  	private Provider: Provider,
    private storage: Storage,
    public toastCtrl: ToastController,
    private actRoute: ActivatedRoute
  ) { }
  ngOnInit() {
 
  }
  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.email = this.anggota.email;
      console.log(res);
    });

  	this.customers = [];
  	this.start = 0;
  	this.loadCustomer();
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
  }

  loadCustomer(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
  		};

  		this.Provider.postData(body, 'showprofile_employer.php').subscribe(data => {
  			for(let customer of data.result){
  				this.customers.push(customer);
  			}
  			resolve(true);
  		});
  	});
  }

  showCustomer(employer_id,employ_id,fname,lname,location,info){
  	this.router.navigate(['/employer/homeem/show-profilemc/' + employer_id + '/' + employ_id + '/'  + fname  + '/' + lname + '/' + location + '/' + info ]);
  }


  Macching(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'matching',
        id: this.id  ,
        search: this.search
  		};

  		this.Provider.postData(body, 'matching.php').subscribe(data => {
  			for(let customer of data.result){
  				this.customers.push(customer);
  			}
  			resolve(true);
  		});
  	});
  }

  test(){
    this.router.navigate(['employer/profileem/editprofileemployer']);
  }

}
