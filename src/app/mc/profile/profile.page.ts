import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: string = "Personal";
  constructor(private router: Router ) { }

  ngOnInit() {
  }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  editprofile(){
    this.router.navigate(['mc/createprofile']);
  }

}
