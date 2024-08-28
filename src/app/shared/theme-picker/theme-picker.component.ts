import { Theme } from './../../types';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';
import { ThemeColorDirective } from 'src/app/directives/theme-color.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { CloseSvgComponent } from 'src/app/shared/close-svg/close-svg.component';
import { CommonModule } from '@angular/common';
import { ThemeColor } from 'src/app/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [
    ThemeColorDirective,
    MatButtonModule,
    MatRadioModule,
    CloseSvgComponent,
    CommonModule,
  ],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  @Output() closeThemePicker = new EventEmitter<boolean>();
  private themesLoadedSubscription: Subscription = new Subscription();

  colors = [
    {
      theme: 'lightNeutral' as ThemeColor,
      type: 'primary' as ThemeColor,
      label: 'Primary',
      class: 'body-font-color-light-bg',
    },
    {
      theme: 'darkNeutral' as ThemeColor,
      type: 'primary' as ThemeColor,
      label: 'Primary',
      class: 'body-font-color-dark-bg',
    },
    {
      theme: 'lightNeutral' as ThemeColor,
      type: 'secondary' as ThemeColor,
      label: 'Secondary',
      class: 'body-font-color-light-bg',
    },
    {
      theme: 'darkNeutral' as ThemeColor,
      type: 'secondary' as ThemeColor,
      label: 'Secondary',
      class: 'body-font-color-dark-bg',
    },
    {
      theme: 'lightNeutral' as ThemeColor,
      type: 'lightTertiary' as ThemeColor,
      label: 'Tertiary',
      class: 'body-font-color-light-bg',
    },
    {
      theme: 'darkNeutral' as ThemeColor,
      type: 'darkTertiary' as ThemeColor,
      label: 'Tertiary',
      class: 'body-font-color-dark-bg',
    },
    {
      theme: 'lightNeutral' as ThemeColor,
      type: 'error' as ThemeColor,
      label: 'Error',
      class: 'body-font-color-light-bg',
    },
    {
      theme: 'darkNeutral' as ThemeColor,
      type: 'error' as ThemeColor,
      label: 'Error',
      class: 'body-font-color-dark-bg',
    },
    {
      theme: 'lightNeutral' as ThemeColor,
      type: 'lightNeutral' as ThemeColor,
      label: 'Neutral',
      class: 'body-font-color-light-bg',
    },
    {
      theme: 'darkNeutral' as ThemeColor,
      type: 'darkNeutral' as ThemeColor,
      label: 'Neutral',
      class: 'body-font-color-dark-bg',
    },
  ];

  constructor(
    private themeSwitcher: ThemeSwitcherService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.themesLoadedSubscription = this.themeSwitcher
      .getThemesLoadedStatus()
      .subscribe((isReady) => {
        if (isReady) {
          this.themeSwitcher.renderPrimaryColors();
          this.applyStyleOnSelected();
        }
      });
  }

  private applyStyleOnSelected(): void {
    const previousSelectedThemeElement = document.querySelector('.selected');
    const selectedThemeElement = document.querySelector(
      `.theme${this.selectedTheme}-primary-color`
    );

    previousSelectedThemeElement?.classList.remove('selected');
    selectedThemeElement?.classList.add('selected');
  }

  ngOnDestroy(): void {
    this.themesLoadedSubscription.unsubscribe();
  }

  applyTheme() {
    this.themeSwitcher.switchTheme();
  }

  selectTheme(themeNumber: number) {
    this.themeSwitcher.selectedTheme = themeNumber;
    this.applyStyleOnSelected();
  }

  get isLight(): boolean {
    return this.themeSwitcher.theme;
  }

  get selectedTheme(): number {
    return this.themeSwitcher.selectedTheme;
  }

  toggleLightDarkRadio(isLight: boolean): void {
    this.themeSwitcher.theme = isLight;
  }

  closeThemeOptions(): void {
    this.closeThemePicker.emit(false);
  }
}
