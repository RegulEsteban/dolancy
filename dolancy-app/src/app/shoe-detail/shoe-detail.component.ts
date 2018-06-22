import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {
  @Input() shoe: Shoes;

  constructor(
    private route: ActivatedRoute,
    private shoesService: ShoesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getShoe();
  }
  
  getShoe(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.shoesService.getShoe(id).subscribe(shoe => this.shoe = shoe);
  }

}
