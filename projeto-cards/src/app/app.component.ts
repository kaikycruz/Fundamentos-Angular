import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  typeObject = {
    simples: {
      type: 'Simples',
      color: 'orange',
      price: 100,
    },
    completo: {
      type: 'Completo',
      color: 'purple',
      price: 250,
    },
  };

  onCardButtonClicked() {
    console.log('onCardButtonClicked');
    //chamda http
  }
}
