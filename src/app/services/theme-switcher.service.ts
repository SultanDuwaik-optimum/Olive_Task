import { Theme, Themes } from '../types';
import { ColorService } from './color.service';
import { Injectable , Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private renderer: Renderer2;

  private isLight: boolean = true;
  private selectedThemeNumber: number = 1;

  private themes: Theme[] | undefined;

  private oldThemeClass = "light";

  constructor(rendererFactory: RendererFactory2, private colorService: ColorService) {
    this.renderer = rendererFactory.createRenderer(null, null);


    colorService.getColors().subscribe(
      (themes: Themes) => {
        const root = document.documentElement;
        root.style.setProperty("--theme1-primary-color", themes.themes![0].primary);
        root.style.setProperty("--theme2-primary-color", themes.themes![1].primary);
        root.style.setProperty("--theme3-primary-color", themes.themes![2].primary);
        root.style.setProperty("--theme4-primary-color", themes.themes![3].primary);
        root.style.setProperty("--theme5-primary-color", themes.themes![4].primary);
        root.style.setProperty("--theme6-primary-color", themes.themes![5].primary);
        this.themes = themes.themes;

      },
      error => {
        console.error('Error fetching themes:', error);
      }
    );
  }

  switchTheme(): void{
    const body = document.body;
    const selectedTheme = document.querySelector(".colors-list:nth-child("+this.selectedTheme+")");
    console.log(this.selectedTheme);
    selectedTheme?.classList.add("selected");
    
    const newThemeClass = this.isLight ? "light" : "dark";
    this.renderer.removeClass(body, this.oldThemeClass);
    this.renderer.addClass(body, newThemeClass);
    this.oldThemeClass = newThemeClass;

    this.updateRootVariables(this.themes![this.selectedTheme-1]);
  }

  updateRootVariables(theme: Theme){
    const root = document.documentElement;

    console.log(theme)
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--tertiary", theme.tertiary);
    root.style.setProperty("--error", theme.error);
    root.style.setProperty("--neutral", theme.neutral);

    root.style.setProperty("--dark-tertiary", theme.darkTertiary);
    root.style.setProperty("--dark-neutral", theme.darkNeutral);
    root.style.setProperty("--dark-body-font-color", theme.darkBodyFontColor);
    root.style.setProperty("--light-body-font-color", theme.lightBodyFontColor);
    root.style.setProperty("--dark-tool-bar-font-color", theme.darkToolbarFontColor);
    root.style.setProperty("--light-tool-bar-font-color", theme.lightToolbarFontColor);


  }

  set theme(isLight: boolean){
    this.isLight = isLight;
    this.switchTheme();
  }

  get theme(): boolean{
    return  this.isLight;
  }

  set selectedTheme(selectedTheme: number){
    this.selectedThemeNumber = selectedTheme;
    this.switchTheme();
  }

  get selectedTheme(){
    return this.selectedThemeNumber;
  }
}
