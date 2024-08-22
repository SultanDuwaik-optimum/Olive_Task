import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBodyFontColors]',
  standalone: true
})
export class BodyFontColorsDirective {

  constructor(private el: ElementRef) {}

  ngOnInit(){
    this.el.nativeElement.classList.add("body-font-color"); 
  }
}
