import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  tipo = 'Teste';
  preco = 100;

  getFullPrice() {
    return 'R$' + this.preco + ',00/MÊS';
  }

  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
