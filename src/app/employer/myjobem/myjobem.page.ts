import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myjobem',
  templateUrl: './myjobem.page.html',
  styleUrls: ['./myjobem.page.scss'],
})
export class MyjobemPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  createJobs(){
  	this.router.navigate(['employer/createmyjob']);
  }

}
