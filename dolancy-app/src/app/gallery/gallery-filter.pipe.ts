import { Pipe, PipeTransform } from '@angular/core';
import {FilterGallery} from './filter.gallery';
import {Shoes} from '../shoes';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {
  transform(list: Shoes[], filterText: FilterGallery): any {
    const filterList: Shoes[] = [];
    if (filterText.colores.filter(item => item.selected).length > 0) {
      filterText.colores.filter(item => item.selected).forEach(function (value) {
        const tmp: Shoes[] = list.filter(item => item.color.toUpperCase() === value.id.toUpperCase());
        tmp.forEach(valueTmp => filterList.push(valueTmp));
      });
    }

    if (filterText.estilos.filter(item => item.selected).length > 0) {
      const listTmp: Shoes[] = [];
      if (filterList.length > 0) {
        filterList.forEach(value => listTmp.push(value));
      } else {
        list.forEach(value => listTmp.push(value));
      }
      filterList.splice(0);
      filterText.estilos.filter(item => item.selected).forEach(function (estilo) {
        listTmp.forEach(function (shoe) {
          const tmp: any[] = shoe.estilo.filter(item => item.toUpperCase() === estilo.id.toUpperCase());
          if (tmp.length > 0 && !filterList.includes(shoe)) {
            filterList.push(shoe);
          }
        });
      });
    }
    if (filterText.materiales.filter(item => item.selected).length > 0) {
      const listTmp: Shoes[] = [];
      if (filterList.length > 0) {
        filterList.forEach(value => listTmp.push(value));
      } else {
        list.forEach(value => listTmp.push(value));
      }
      filterList.splice(0);
      filterText.materiales.filter(item => item.selected).forEach(function (material) {
        listTmp.forEach(function (shoe) {
          const tmp: any[] = shoe.properties.materiales.filter(item => item.toUpperCase() === material.id.toUpperCase());
          if (tmp.length > 0 && !filterList.includes(shoe)) {
            filterList.push(shoe);
          }
        });
      });
    }
    if (filterText.colores.filter(item => item.selected).length === 0 &&
      filterText.estilos.filter(item => item.selected).length === 0 &&
      filterText.materiales.filter(item => item.selected).length === 0) {
      list.forEach(value => filterList.push(value));
    }
    return filterList;
  }

  shuffleInPlace(array: any[]): any[] {
    if (array.length <= 1) { return array; }

    for (let i: number = array.length - 1; i >= 0; i--){
      const randomItem: number = Math.floor(Math.random() * (i + 1));
      const itemAtIndex: any = array[randomItem];

      array[randomItem] = array[i];
      array[i] = itemAtIndex;
    }
    return array;
  }
}
