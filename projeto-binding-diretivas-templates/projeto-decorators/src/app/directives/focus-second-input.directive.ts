import { AfterViewInit, Directive, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
})
export class FocusSecondInputDirective implements AfterViewInit {
  constructor(private readonly _elRef: ElementRef) {}

  ngAfterViewInit() {
    const inputList = this._elRef.nativeElement.querySelectorAll(
      'input'
    ) as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].focus();
    }
  }
}
