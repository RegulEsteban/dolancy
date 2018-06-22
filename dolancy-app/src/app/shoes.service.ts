import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Shoes } from './shoes';
import { SHOES } from './mock-shoes';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor() { }
  
  getShoes(): Observable<Shoes[]> {
    return of(SHOES);
  }
 
  getShoe(id: number): Observable<Shoes> {
    return of(SHOES.find(shoes => shoes.id === id));
  }
}
