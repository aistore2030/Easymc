import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.page.html',
  styleUrls: ['./myjob.page.scss'],
})
export class MyjobPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliderConfig = {
    slidesPerView: 1.14,
    spaceBetween: -10,
    centeredSlides: true
  };

}
