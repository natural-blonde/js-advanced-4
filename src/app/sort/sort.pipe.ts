import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from '../main-component/main-component.component';

@Pipe({
  name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

  transform(phoneBook: phoneBook[], sort: string): any {
    if(!phoneBook) return [];
    if(!sort) return phoneBook;
    if(sort === 'asc') {
      return phoneBook.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1: 0))
    }
    if (sort === 'desc') {
      return phoneBook.sort((a, b) => (a.name < b.name) ? 1 : ((a.name > b.name) ? -1: 0))
    }
  }

}
