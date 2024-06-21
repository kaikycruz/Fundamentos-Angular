import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  // template: ` <div class="card-button">Adquirir</div> `,
  styleUrl: './card-button.component.scss',
})

export class CardButtonComponent {
  @Output() buttonClickEmitter = new EventEmitter<boolean>()

  onButtonClick() {
    console.log("clicou");
    this.buttonClickEmitter.emit(true);
  }

}
