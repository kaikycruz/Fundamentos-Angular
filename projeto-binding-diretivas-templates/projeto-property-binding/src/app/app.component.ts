import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText = 'Texto Inicial alterado';
  inputType = 'text';
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  changeValueInput() {
    this.inputText = `Texto alterado`;
  }

  changeTypeInputToPassword() {
    this.inputType = 'password';
  }

  changeTypeInputToText() {
    this.inputType = 'text';
  }

  logInputText(){
    console.log(this.inputText);

  }
}
