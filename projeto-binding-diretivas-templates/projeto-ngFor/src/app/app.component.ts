import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  listPeople = [
    { name: 'Kaiky Cruz', age: 21 },
    { name: 'Fulano da Silva', age: 34 },
    { name: 'Jorginho Carvalho', age: 55 },
    { name: 'Joãozinho da Silva', age: 18 },
  ];
  personSelectedIndex: number | undefined;

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
}
