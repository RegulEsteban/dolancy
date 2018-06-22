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
    
  constructor(private shoesService: ShoesService) { 
  }

  ngOnInit() {
    this.getShoes();
  }
  
  getShoes(): void{
    this.shoesService.getShoes().subscribe(shoes => this.shoes = shoes);
  }
}
