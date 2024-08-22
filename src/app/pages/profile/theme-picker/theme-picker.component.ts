import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ThemeSwitcherService } from '../../../services/theme-switcher.service';
import { ThemeColorDirective } from 'src/app/directives/theme-color.directive';
import { SvgFillDirective } from 'src/app/directives/svg-fill.directive';
import { MatButtonModule } from '@angular/material/button';
import { BodyFontColorsDirective } from 'src/app/directives/body-font-color.directive';
import { BodyFontColorDynamicDirective } from 'src/app/directives/body-font-color-dynamic.directive';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-theme-picker',
  standalone: true, 
  imports: [
    ThemeColorDirective,
    SvgFillDirective,
    MatButtonModule,
    BodyFontColorsDirective, 
    MatRadioModule,
    BodyFontColorDynamicDirective
  ],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss'
})
export class ThemePickerComponent {
  

  @Output() closeTheme = new EventEmitter<boolean>();

  constructor(private themeSwitcher: ThemeSwitcherService, private renderer: Renderer2){}

  
  applyTheme(){
    this.themeSwitcher.switchTheme();
  }

  selectTheme(themeNumber: number){
    this.themeSwitcher.selectedTheme = themeNumber;
  }

  get isLight(): boolean{
    return this.themeSwitcher.theme;
  }

  get selectedTheme(): number{
    return this.themeSwitcher.selectedTheme;
  }

  toggleLightDarkRadio(isLight: boolean): void {
    this.themeSwitcher.theme = isLight;
  }

  closeThemeOptions(): void {
    this.closeTheme.emit(false);
  }
}
