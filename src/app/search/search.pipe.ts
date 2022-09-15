import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from '../main-component/main-component.component';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(phoneBook: phoneBook[], search: string): any {
    if (!phoneBook) return [];
    if (!search) return phoneBook;
    console.log(phoneBook.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())));
    for (let i = 0; i < phoneBook.length; i++) {
      if (phoneBook[i].name.toLowerCase().includes(search.toLowerCase()) === true) {
        console.log('firstName');
        return phoneBook.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
      }
      else if (Number.isInteger(parseInt(search))) {
        console.log('phoneNumber');
        return phoneBook.filter((person) => person.phoneNumber.toLowerCase().includes(search.toLowerCase()))
      }
    
      else if (phoneBook[i].lastName.toLowerCase().includes(search.toLowerCase()) === true) {
        console.log('lastName');
        return phoneBook.filter((person) => person.lastName.toLowerCase().includes(search.toLowerCase()))
      }

    }
  }

}
