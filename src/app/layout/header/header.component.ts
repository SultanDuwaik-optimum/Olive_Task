import { Component } from '@angular/core';
import { SvgStrokeDirective } from 'src/app/directives/svg-stroke.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeColorDirective } from 'src/app/directives/theme-color.directive';
import { ToolBarFontColorsDirective } from 'src/app/directives/tool-bar-font-colors.directive';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ SvgStrokeDirective,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatToolbarModule,
     MatButton, ThemeColorDirective,ToolBarFontColorsDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  searchValue: string = '';
}
