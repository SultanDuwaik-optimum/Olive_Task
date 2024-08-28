import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-wrapper.component.html',
  styleUrl: './label-wrapper.component.scss',
})
export class LabelWrapperComponent {
  @Input() label!: string;
  @Input() labelAlignment: 'row' | 'column' = 'column';
  @Input() isBold: boolean = false;
}
