import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carousel1: string;
  carousel2: string;
  carousel3: string;

  constructor() {
    this.carousel1 = '/assets/images/carousel1.jpg'
    this.carousel2 = '/assets/images/carousel2.jpg'
    this.carousel3 = '/assets/images/carousel3.jpg'
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
