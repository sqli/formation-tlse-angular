import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style['text-transform'] = 'uppercase';
   }

}
