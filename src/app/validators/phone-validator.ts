import { AbstractControl, ValidatorFn } from '@angular/forms';


export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {

    const phoneNumberPattern = /^07\d{7,8}$/;
    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { 'invalidPhoneNumber': true };
    }
    return null;
  };
}