import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom phone number validator
export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    // Regular expression for validating phone numbers
const phoneNumberPattern = /^07\d{7,8}$/;
    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { 'invalidPhoneNumber': true };
    }
    return null;
  };
}