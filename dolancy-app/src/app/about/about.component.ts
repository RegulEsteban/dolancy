import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bgGallery: string;
  dolancyLogo: string;
  pathImages: string;
  
  constructor() {
    this.bgGallery = '/assets/images/portada.jpg';
    this.dolancyLogo = '/assets/images/dolancy.png';
    this.pathImages = '/assets/images';
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
