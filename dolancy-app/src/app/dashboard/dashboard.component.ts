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
  carousel4: string;
  carousel5: string;

  constructor() {
    this.carousel1 = '/assets/images/carousel1-cp.jpg';
    this.carousel2 = '/assets/images/carousel2-cp.jpg';
    this.carousel3 = '/assets/images/carousel3-cp.jpg';
    this.carousel4 = '/assets/images/Navidad-2019.jpg';
    this.carousel5 = '/assets/images/Navidad-regalo-2019.jpg';
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
