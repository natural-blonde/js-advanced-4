import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from '../main-component/main-component.component';

@Pipe({
  name: 'sortPipe2'
})
export class Sort2Pipe implements PipeTransform {

  transform(phoneBook: phoneBook[], sort: string): any {
    if(!phoneBook) return [];
    if(!sort) return phoneBook; 
    if(sort === 'asc') {
      return phoneBook.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1: 0))
    }
    if (sort === 'desc') {
      return phoneBook.sort((a, b) => (a.lastName < b.lastName) ? 1 : ((a.lastName > b.lastName) ? -1: 0))
    }
  }

}
