import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToolBarFontColor]',
  standalone: true
})
export class ToolBarFontColorsDirective {

  constructor(private el: ElementRef) {}

  ngOnInit(){
    this.el.nativeElement.classList.add("toolbar-font-color"); 
  }
}
