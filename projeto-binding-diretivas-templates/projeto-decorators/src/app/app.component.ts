import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('meuButton') buttonsEl!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  buttonList = ['Botao 1', 'Botao 2', 'Botao 3'];

  ngAfterViewInit() {
    console.log(this.buttonsEl);

    this.buttonsEl.changes.subscribe((response) => {
      console.log(response);
    });
    // const primeiro = this.buttonsEl.toArray()[0];
    // primeiro.nativeElement.style.backgroundColor = 'purple';
    // primeiro.nativeElement.style.color = 'white';
  }

  first() {
    // const primeiro = this.buttonsEl.get(0);
    const primeiro = this.buttonsEl.find(
      (btnEl) => btnEl.nativeElement.className === 'btn-0'
    );
    console.log(primeiro);
  }

  remove() {
    this.buttonList.shift();
  }

  changeColor(e: Event) {
    const btnElement = e.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEl.forEach((btn) => {
      btn.nativeElement.style.backgroundColor = '';
      btn.nativeElement.style.color = 'black';
    });
  }
}
