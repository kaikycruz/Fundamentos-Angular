import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-com-diretiva',
  templateUrl: './com-diretiva.component.html',
  styleUrl: './com-diretiva.component.scss',
})
export class ComDiretivaComponent {
  @ViewChild('meuTexto') myPEl!: ElementRef<HTMLParagraphElement>;

  onMouseOver() {
    this.myPEl.nativeElement.style.backgroundColor = 'orange';
  }

  onMouseOut() {
    this.myPEl.nativeElement.style.backgroundColor = '';
  }
}
