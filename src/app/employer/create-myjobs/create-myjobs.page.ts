import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-myjobs',
  templateUrl: './create-myjobs.page.html',
  styleUrls: ['./create-myjobs.page.scss'],
})
export class CreateMyjobsPage implements OnInit {
  currentNumber = 0;
  constructor() { }

  ngOnInit() {
  }
  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);
    
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }



 increment () {
  this.currentNumber++;
}

 decrement () {
  this.currentNumber--;
}
 

}
