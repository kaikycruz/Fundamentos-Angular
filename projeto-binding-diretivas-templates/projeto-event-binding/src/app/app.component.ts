import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputDisabled = false;
  widthButton = 220;

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }
}
