import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(element : ElementRef) {
    element.nativeElement.style.color="red";
   }

}
