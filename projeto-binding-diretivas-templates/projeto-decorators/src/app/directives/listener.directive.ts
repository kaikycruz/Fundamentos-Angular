import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  @HostListener('click')
  onCLick() {
    console.log('clicou');
  }

  @HostListener('keyup', ['$event', '"Meu Argumento"'])
  onKeyUp(e: KeyboardEvent, param: string) {
    console.log(param);
    const fullText = (e.target as HTMLInputElement).value;

    console.log(fullText);
  }
}
