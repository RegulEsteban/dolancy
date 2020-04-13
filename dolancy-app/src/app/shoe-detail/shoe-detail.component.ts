import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';
import {Globals} from '../globals';

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
    public globals: Globals
  ) { }

  ngOnInit() {
    this.getShoe();
    window.scrollTo(0, 0);
  }

  getShoe(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.shoesService.getShoe(id).subscribe(shoe => this.shoe = shoe);
  }

}
