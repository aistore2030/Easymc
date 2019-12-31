import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.page.html',
  styleUrls: ['./myjob.page.scss'],
})
export class MyjobPage implements OnInit {

  constructor(
    private router: Router ) { 
    
  }

  ngOnInit() {
  }

  sliderConfig = {
    slidesPerView: 1.14,
    spaceBetween: -10,
    centeredSlides: true
  };
  showDetail(){
  	this.router.navigate(['tabs/myjob/showdetail']);
  }


}
