import { Injectable , Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private renderer: Renderer2;

  private isLight: boolean = true;
  private selectedThemeNumber: number = 1;

  private oldThemeClass = "light1";
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  switchTheme(): void{
    const body = document.body;
    const selectedTheme = document.querySelector(".colors-list:nth-child("+this.selectedTheme+")");
    console.log(selectedTheme);
    selectedTheme?.classList.add("selected");
    
    const newThemeClass =  this.isLight ? "light" + this.selectedThemeNumber : "dark" + this.selectedThemeNumber;
    this.renderer.removeClass(body, this.oldThemeClass);
    this.renderer.addClass(body, newThemeClass);
    this.oldThemeClass = newThemeClass;
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
