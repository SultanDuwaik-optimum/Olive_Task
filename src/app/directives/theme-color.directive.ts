import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appThemeColor]',
  standalone: true
})

export class ThemeColorDirective implements OnInit {
  @Input('appThemeColor') color!: "primary" | "secondary" | "tertiary" | "error" | "neutral" | "lightTertiary" | "darkTertiary" | "lightNeutral" | "darkNeutral";
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.color) return; 
    
    const classMap: { [key: string]: string } = {
      primary: 'primary-color',
      secondary: 'secondary-color',
      tertiary: 'tertiary-color',
      error: 'error-color',
      neutral: 'neutral-color',
      lightTertiary: 'light-tertiary-color',
      darkTertiary: 'dark-tertiary-color',  
      lightNeutral: 'light-neutral-color',
      darkNeutral: 'dark-neutral-color'
    };
    
    const className = classMap[this.color];
    if (className) {
      this.el.nativeElement.classList.add(className);
    }
  }
}
