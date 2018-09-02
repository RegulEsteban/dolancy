import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bgGallery: string;
  dolancyLogo: string;
  
  constructor() {
    this.bgGallery = '/assets/images/portada.jpg';
    this.dolancyLogo = '/assets/images/dolancy.png';
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
