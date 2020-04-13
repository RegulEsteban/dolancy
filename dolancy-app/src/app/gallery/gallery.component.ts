import { Component, OnInit } from '@angular/core';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FilterGallery} from './filter.gallery';
import {Globals} from '../globals';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('GalleryItemEnterLeave', [
      state('flyIn', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ])
  ]
})

export class GalleryComponent implements OnInit {
  shoes: Shoes[];
  bgGallery: string;
  filtros: FilterGallery;

  constructor(private shoesService: ShoesService, public globals: Globals) {
    this.bgGallery = '/assets/images/carousel2.jpg';
    this.filtros = {
      colores: [
        {id: 'negro', name: 'Negro' , selected : false},
        {id: 'miel', name: 'Miel'  , selected : false},
        {id: 'gris', name: 'Gris'  , selected : false},
        {id: 'azul', name: 'Azul'  , selected : false},
        {id: 'cafe', name: 'Café'  , selected : false},
        {id: 'charol', name: 'Charol'  , selected : false}
      ],
      estilos: [
        {id: 'botas', name: 'Botas' , selected : false},
        {id: 'casual', name: 'Casual' , selected : false},
        {id: 'formal', name: 'Formal' , selected : false}
      ],
      materiales: [
        {id: 'piel', name: 'Piel' , selected : false},
        {id: 'textil', name: 'Textil' , selected : false},
        {id: 'cuero', name: 'Suela de Cuero' , selected : false},
        {id: 'antiderrapante', name: 'Antiderrapante' , selected : false}
      ]
    };
  }

  checked() {
    return this.filtros.colores.filter(item => item.selected);
  }

  ngOnInit() {
    this.getShoes();
    window.scrollTo(0, 0);
  }

  getShoes(): void {
    this.shoesService.getShoes().subscribe(shoes => this.shoes = shoes);
  }
}
