import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule  } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatToolbar, MatSidenavModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
   opened: boolean = false;

}
