import { Component, Input, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

function handlePlanType(value: string) {
  console.log('handlePlanType', value); 
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // encapsulation: ViewEncapsulation.None, NAO VALE A PENA UTILIZAR
})
export class CardComponent {
  @Input({ required: true }) planPrice: number = 0;
  @Input({ transform: (value: string) => handlePlanType(value) })
  planType: string = '';

  // private _planType: string = '';

  // @Input() set planType(value: string) {
  //   this._planType = value.toUpperCase()
  // }

  // get planType() : string {
  //   return this._planType;
  // }

  buttonClicked(valueEmitterd: boolean) {
    console.log('button clicked', valueEmitterd);
    console.log('planType', this.planType);
  }

  // tipo = 'Teste';
  // preco = 100;

  // getFullPrice() {
  //   return 'R$' + this.preco + ',00/MÊS';
  // }

  //@ts-ignore
  //   plano: IPlano = {
  //     infos: {
  //       tipo: 'Simples',
  //       preco: 100
  //     }
  //   };
}
