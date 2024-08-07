import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // encapsulation: ViewEncapsulation.None, NAO VALE A PENA UTILIZAR
})
export class CardComponent {
  // tipo = 'Teste';
  // preco = 100;

  // getFullPrice() {
  //   return 'R$' + this.preco + ',00/MÊS';
  // }

  //@ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    }
  };
}
