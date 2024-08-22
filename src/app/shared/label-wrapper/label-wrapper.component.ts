import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BodyFontColorsDirective } from 'src/app/directives/body-font-color.directive';
import { SvgFillDirective } from 'src/app/directives/svg-fill.directive';

@Component({
  selector: 'app-label-wrapper',
  standalone: true,
  imports: [CommonModule ,SvgFillDirective, BodyFontColorsDirective],
  templateUrl: './label-wrapper.component.html',
  styleUrl: './label-wrapper.component.css'
})
export class LabelWrapperComponent {
  @Input() label! : string;
  @Input() labelAlignment: "row" | "column" = "column";
  @Input() isBold: boolean = false;
}
