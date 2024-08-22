import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSvgStroke]',
  standalone: true
})
export class SvgStrokeDirective implements OnInit{


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const children = this.el.nativeElement.querySelectorAll('*');

    children.forEach((child: HTMLElement) => {
      this.renderer.addClass(child, 'svg-stroke');
    });
  }

  

}
