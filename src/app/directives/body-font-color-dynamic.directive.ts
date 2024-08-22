import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBodyFontColorDynamic]',
  standalone: true
})
export class BodyFontColorDynamicDirective implements OnInit{

  @Input('theme') theme!: "light" | "dark";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.theme+"sss");
    if (this.theme === "light") {
      this.renderer.addClass(this.el.nativeElement, "body-font-color-light-bg");
      this.renderer.removeClass(this.el.nativeElement, "body-font-color-dark-bg");
    } else if (this.theme === "dark") {
      this.renderer.addClass(this.el.nativeElement, "body-font-color-dark-bg");
      this.renderer.removeClass(this.el.nativeElement, "body-font-color-light-bg");
    }
  }
}
