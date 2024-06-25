import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  text = 'kaiky'
  pessoa = {
    name: 'kaiky',
    status: 1
  }
  pessoa2 = {
    name: 'teste 1',
    status: 2
  }
  pessoa3 = {
    name: 'teste 2',
    status: 3
  }

  


  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja';

  increaseFontSize() {
    this.fontSize += 5;
  }

  toggleFontColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    }else {
      this.textColor = 'white'
      this.buttonText = 'Laranja'
    }
  }
}
