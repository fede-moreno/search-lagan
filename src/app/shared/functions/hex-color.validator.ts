import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Checks that the input from the form control is a correct hex color (#FFFFFF, #FFF)
 * @returns null if it's OK and if error/s were found then it would return an object with the error.
 */
export function hexColorValidator(): ValidatorFn {
  const hexRegex: RegExp = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isHexColor = hexRegex.test(control.value);
    return isHexColor ? null : {notHexColor: control.value};
  };
}
