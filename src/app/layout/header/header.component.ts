import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeColorDirective } from 'src/app/directives/theme-color.directive';
import { Router, RouterOutlet } from '@angular/router';
import { NotificationSvgComponent } from 'src/app/shared/notification-svg/notification-svg.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButton,
    ThemeColorDirective,
    RouterOutlet,
    NotificationSvgComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchValue: string = '';
  constructor(private router: Router) {}

  navigateToProfile() {
    console.log('ddddd');
    this.router.navigate(['/profile']);
  }
}
