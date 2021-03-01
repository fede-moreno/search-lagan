import { AbstractControl, ValidatorFn } from '@angular/forms';

export function hexColorValidator(): ValidatorFn {
  const hexRegex: RegExp = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isHexColor = hexRegex.test(control.value);
    return isHexColor ? null : {notHexColor: control.value};
  };
}
