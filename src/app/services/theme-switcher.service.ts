import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { Mode, Theme, Themes } from '../types';
import { ColorService } from './color.service';
import {
  Injectable,
  OnDestroy,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService implements OnDestroy {
  private renderer: Renderer2;
  private currentMode: Mode = 'light';
  private previousMode: Mode = 'light';

  private selectedThemeNumber: number = 1;

  private themeList!: Theme[];
  private themesLoaded$ = new BehaviorSubject<boolean>(false);
  private colorServiceSubscription: Subscription = new Subscription();

  constructor(
    private colorService: ColorService,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    this.colorServiceSubscription = colorService.getColors().subscribe({
      next: (response) => {
        this.themeList = response.themes;
      },
      error: (error) => {
        console.error('Error fetching themes:', error);
      },
      complete: () => {
        this.themesLoaded$.next(true);
      },
    });
  }

  getThemesLoadedStatus(): Observable<boolean> {
    return this.themesLoaded$.asObservable();
  }

  get allThemes(): Theme[] {
    return this.themeList;
  }

  renderPrimaryColors() {
    for (let i = 0; i < this.themeList.length; i++) {
      const theme = document.querySelector(`.theme${i + 1}-primary-color`);
      this.renderer.setStyle(
        theme,
        'background-color',
        this.themeList[i].primary
      );
    }
  }

  switchTheme(): void {
    const body = document.body;

    this.renderer.removeClass(body, this.previousMode);
    this.renderer.addClass(body, this.currentMode);
    this.previousMode = this.currentMode;

    this.updateCSSVariables(this.themeList![this.selectedTheme - 1]);
  }

  private updateCSSVariables(theme: Theme) {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--tertiary', theme.tertiary);
    root.style.setProperty('--error', theme.error);
    root.style.setProperty('--neutral', theme.neutral);
    root.style.setProperty('--dark-tertiary', theme.darkTertiary);
    root.style.setProperty('--dark-neutral', theme.darkNeutral);
    root.style.setProperty('--dark-body-font-color', theme.darkBodyFontColor);
    root.style.setProperty('--light-body-font-color', theme.lightBodyFontColor);
    root.style.setProperty(
      '--dark-tool-bar-font-color',
      theme.darkToolbarFontColor
    );
    root.style.setProperty(
      '--light-tool-bar-font-color',
      theme.lightToolbarFontColor
    );


    if (this.currentMode == 'light') {
      // primary color
      root.style.setProperty('--sys-on-primary', theme.neutral);

      root.style.setProperty('--sys-on-surface-variant',theme.lightBodyFontColor);
      // root.style.setProperty('--sys-on-surface-variant',"yellow");
      root.style.setProperty('--sys-on-surface',theme.lightBodyFontColor);
      root.style.setProperty('--sys-on-tertiary',theme.lightToolbarFontColor);
      
    } else {
      root.style.setProperty('--sys-on-primary', theme.darkNeutral);
      root.style.setProperty('--sys-on-surface-variant',theme.darkBodyFontColor);
      root.style.setProperty('--sys-on-surface',theme.darkBodyFontColor);
      root.style.setProperty('--sys-on-tertiary',theme.darkToolbarFontColor);
    }
  }

  set theme(isLight: boolean) {
    this.currentMode = isLight ? 'light' : 'dark';
    this.switchTheme();
  }

  get theme(): boolean {
    return this.currentMode == 'light' ? true : false;
  }

  set selectedTheme(selectedTheme: number) {
    this.selectedThemeNumber = selectedTheme;
    this.switchTheme();
  }

  get selectedTheme() {
    return this.selectedThemeNumber;
  }

  ngOnDestroy(): void {
    this.colorServiceSubscription.unsubscribe();
  }
}
