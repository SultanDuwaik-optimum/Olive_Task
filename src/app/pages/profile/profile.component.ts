import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileImageComponent } from './profile-image/profile-image.component'

import { Address } from '../../types';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { MatButtonModule } from '@angular/material/button';

import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { phoneNumberValidator } from 'src/app/validators/phone-validator';
import { LabelWrapperComponent } from 'src/app/shared/label-wrapper/label-wrapper.component';
import { BodyFontColorsDirective } from 'src/app/directives/body-font-color.directive';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileImageComponent,
    CommonModule,
    FormsModule,
    ThemePickerComponent,
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    LabelWrapperComponent, 
    BodyFontColorsDirective

  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent{
  profileForm: FormGroup = new FormGroup({
    contactName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, phoneNumberValidator()]),
    description: new FormControl('', [Validators.required]),
  });

  clientFirstName: string = "John";
  clientLastName: string = "Doe";

  id: number = 102304;

  email: string = "john.doe@email.com";
  address: Address = {
    city: "Amman",
    neighborhood: "Abdoun",
    street: "Street 4" 
  };
   
  themeOptionsOpen: boolean = false;


  save(){
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    alert('Form Submitted');
  }


  toggleThemeOptions(){
    this.themeOptionsOpen = !this.themeOptionsOpen;
  }

  handleCloseThemeOptions(flag: boolean){
    this.themeOptionsOpen = flag;
  }
}
