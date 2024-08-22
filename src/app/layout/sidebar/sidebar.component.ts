import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { ToolBarFontColorsDirective } from 'src/app/directives/tool-bar-font-colors.directive';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatToolbar, MatSidenavModule, ToolBarFontColorsDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
   opened: boolean = false;

}
