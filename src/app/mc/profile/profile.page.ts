import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: string = "Personal";
  anggota: any;
  id: any;
  constructor(private router: Router,private storage: Storage ) { }

  ngOnInit() {
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.id = this.anggota.id;
      console.log(res);
    });
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
