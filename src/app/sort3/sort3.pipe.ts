import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from '../main-component/main-component.component';

@Pipe({
  name: 'sortPipe3'
})
export class Sort3Pipe implements PipeTransform {

  transform(phoneBook: phoneBook[], sort: string): any {
    if (!phoneBook) return [];
    if (!sort) return phoneBook;
    if(sort === 'asc') {
      return phoneBook.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : ((a.phoneNumber < b.phoneNumber) ? -1: 0))
    }
    if (sort === 'desc') {
      return phoneBook.sort((a, b) => (a.phoneNumber < b.phoneNumber) ? 1 : ((a.phoneNumber > b.phoneNumber) ? -1: 0))
    }
  }

}
