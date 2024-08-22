import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeColorDirective } from 'src/app/directives/theme-color.directive';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [CommonModule, ThemeColorDirective],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  profileImageUrl: string = ''; 

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageUrl = e.target.result; 
      };
      reader.readAsDataURL(file);
    }
  }



}
