import { Component, OnInit } from '@angular/core';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  shoes: Shoes[];
  bgGallery: string;
  
  constructor(private shoesService: ShoesService) {
    this.bgGallery = '/assets/images/carousel1.jpg';
  }

  ngOnInit() {
    this.getShoes();
  }
  
  getShoes(): void{
    this.shoesService.getShoes().subscribe(shoes => this.shoes = shoes);
  }
}
