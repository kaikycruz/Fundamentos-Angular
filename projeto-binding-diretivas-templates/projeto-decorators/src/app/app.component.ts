import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChildren('meuButton') buttonsEl!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly _elRef: ElementRef) {}

  ngOnInit() {
    console.log(this._elRef);
    const divEl = this._elRef.nativeElement.querySelector(
      '#minha-outra-div'
    ) as HTMLDivElement;

    divEl.textContent = 'Sou a outra div';
    divEl.style.backgroundColor = 'blue';
    divEl.style.color = 'white';

    divEl.addEventListener('click', () => {
      console.log('cliquei na div');
    });
  }

  createNewElement() {
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div';
    novaDiv.classList.add('bg-red');
    this._elRef.nativeElement.appendChild(novaDiv);
  }

  addBgColor: boolean = false;

  onMouseOver() {
    this.addBgColor = true;
  }

  onMouseOut() {
    this.addBgColor = false;
  }

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
