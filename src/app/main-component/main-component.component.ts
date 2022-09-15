import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  public tpye: string = 'asc';
  public type: string = 'asc';
  public type2: string = 'asc';
  public index!: number;
  public search!: any;
  public phoneBook: phoneBook[] = [
    {
      name: 'Petya',
      lastName: 'Zhuk',
      phoneNumber: '0631111111'
    },
    {
      name: 'Petro',
      lastName: 'Petriv',
      phoneNumber: '0632222222'
    },
    {
      name: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      phoneNumber: '0633333333'
    },
    {
      name: 'Vasylyna',
      lastName: 'Vrublveska',
      phoneNumber: '0635555555'
    },
    {
      name: 'Ira',
      lastName: 'Tytar',
      phoneNumber: '0636666666'
    },
    {
      name: 'Sofia',
      lastName: 'Zhuk',
      phoneNumber: '0977777777'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getArray(data: any) {
    this.phoneBook = data;
  }

  delete(index: number) {
    console.log('this.phoneBook[index]', this.phoneBook[index]);
    this.phoneBook.splice(index, 1);
    console.log(this.search);
  }

  edit(index: number) {
    this.index = index;
    document.querySelector<HTMLInputElement>('.edit-input-name')!.value = this.phoneBook[this.index].name;


    document.querySelector<HTMLElement>('.edit-info')!.animate([
      { opacity: 0 },
      { top: '50px' }
    ], {
      duration: 200
    });
    setTimeout(() => {
      document.querySelector<HTMLElement>('.edit-info')!.style.top = '50px'
      document.querySelector<HTMLElement>('.edit-info')!.style.opacity = '1';
    }, 195)
    document.querySelector<HTMLElement>('.black-background')!.style.display = 'block';

    document.querySelector<HTMLInputElement>('.edit-input-name')!.value = this.phoneBook[this.index].name;
    document.querySelector<HTMLInputElement>('.edit-input-lastName')!.value = this.phoneBook[this.index].lastName;
    document.querySelector<HTMLInputElement>('.edit-input-phoneNumber')!.value = this.phoneBook[this.index].phoneNumber;
  }

  save() {
    this.phoneBook[this.index].name = document.querySelector<HTMLInputElement>('.edit-input-name')!.value;
    this.phoneBook[this.index].lastName = document.querySelector<HTMLInputElement>('.edit-input-lastName')!.value;
    this.phoneBook[this.index].phoneNumber = document.querySelector<HTMLInputElement>('.edit-input-phoneNumber')!.value;
    document.querySelector<HTMLElement>('.edit-info')!.animate([
      { opacity: 1 },
      { top: '-270px' }
    ], {
      duration: 200
    });
    setTimeout(() => {
      document.querySelector<HTMLElement>('.edit-info')!.style.top = '-270px'
      document.querySelector<HTMLElement>('.edit-info')!.style.opacity = '1';
    }, 195)
    document.querySelector<HTMLElement>('.black-background')!.style.display = 'none';
  }

  clearInputs() {
    document.querySelector<HTMLInputElement>('.input-1-add')!.value = '';
    document.querySelector<HTMLInputElement>('.input-2-add')!.value = '';
    document.querySelector<HTMLInputElement>('.input-3-add')!.value = '';
  }

  showAddArea() {
    document.querySelector<HTMLElement>('.enter-info')!.animate([
      { opacity: 0 },
      { top: '50px' }
    ], {
      duration: 500
    });
    setTimeout(() => {
      document.querySelector<HTMLElement>('.enter-info')!.style.top = '50px'
      document.querySelector<HTMLElement>('.enter-info')!.style.opacity = '1';
    }, 497)
    document.querySelector<HTMLElement>('.black-background')!.style.display = 'block';
  }

  closeEnterInfo() {
    document.querySelector<HTMLElement>('.enter-info')!.animate([
      { opacity: 1 },
      { top: '-270px' }
    ], {
      duration: 200
    });
    setTimeout(() => {
      document.querySelector<HTMLElement>('.enter-info')!.style.top = '-270px'
      document.querySelector<HTMLElement>('.enter-info')!.style.opacity = '1';
    }, 195)
    document.querySelector<HTMLElement>('.black-background')!.style.display = 'none';
  }

  closeEditInfo() {
    document.querySelector<HTMLElement>('.edit-info')!.animate([
      { opacity: 1 },
      { top: '-270px' }
    ], {
      duration: 200
    });
    setTimeout(() => {
      document.querySelector<HTMLElement>('.edit-info')!.style.top = '-270px'
      document.querySelector<HTMLElement>('.edit-info')!.style.opacity = '1';
    }, 195)
    document.querySelector<HTMLElement>('.black-background')!.style.display = 'none';
  }

  addPerson() {
    if (document.querySelector<HTMLInputElement>('.input-1-add')!.value && document.querySelector<HTMLInputElement>('.input-2-add')!.value && document.querySelector<HTMLInputElement>('.input-3-add')!.value != '') {
      const newPerson = {
        name: document.querySelector<HTMLInputElement>('.input-1-add')!.value,
        lastName: document.querySelector<HTMLInputElement>('.input-2-add')!.value,
        phoneNumber: document.querySelector<HTMLInputElement>('.input-3-add')!.value
      }
      this.phoneBook.push(newPerson);
      console.log(this.phoneBook);
      this.clearInputs();
      document.querySelector<HTMLElement>('.enter-info')!.animate([
        { opacity: 1 },
        { top: '-270px' }
      ], {
        duration: 200
      });
      setTimeout(() => {
        document.querySelector<HTMLElement>('.enter-info')!.style.top = '-270px'
        document.querySelector<HTMLElement>('.enter-info')!.style.opacity = '1';
      }, 195)
      document.querySelector<HTMLElement>('.black-background')!.style.display = 'none';
    }
  }

  sortChangeFirstName() {
    if (this.tpye === 'asc') {
      this.tpye ='desc';
      document.querySelector<HTMLElement>('.asc')!.style.display = 'block';
      document.querySelector<HTMLElement>('.desc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc2')!.style.display = 'none';
    } else {
      this.tpye = 'asc';
      document.querySelector<HTMLElement>('.desc')!.style.display = 'block';
      document.querySelector<HTMLElement>('.asc')!.style.display = 'none'; 
      document.querySelector<HTMLElement>('.asc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc3')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc3')!.style.display = 'none';

    }
  }

  sortChangeLastName() {
    if (this.type === 'asc') {
      this.type ='desc';
      document.querySelector<HTMLElement>('.asc2')!.style.display = 'block';
      document.querySelector<HTMLElement>('.desc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc3')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc3')!.style.display = 'none';
    } else {
      this.type = 'asc';
      document.querySelector<HTMLElement>('.desc2')!.style.display = 'block';
      document.querySelector<HTMLElement>('.asc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc3')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc3')!.style.display = 'none';
    }
  }

  sortChangePhoneNumber() {
    if (this.type2 === 'asc') {
      this.type2 = 'desc';
      document.querySelector<HTMLElement>('.asc3')!.style.display = 'block';
      document.querySelector<HTMLElement>('.desc3')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc')!.style.display = 'none';

    } else {
      this.type2 = 'asc';
      document.querySelector<HTMLElement>('.desc3')!.style.display = 'block';
      document.querySelector<HTMLElement>('.asc3')!.style.display = 'none'; 
      document.querySelector<HTMLElement>('.desc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc2')!.style.display = 'none';
      document.querySelector<HTMLElement>('.desc')!.style.display = 'none';
      document.querySelector<HTMLElement>('.asc')!.style.display = 'none';

    }
  }
}

export interface phoneBook {
  name: string,
  lastName: string,
  phoneNumber: string
}