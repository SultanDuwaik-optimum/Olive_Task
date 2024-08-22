import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSvgFill]',
  standalone: true
})
export class SvgFillDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const children = this.el.nativeElement.querySelectorAll('*');

    children.forEach((child: HTMLElement) => {
      this.renderer.addClass(child, 'svg-fill');
    });
  }

}
