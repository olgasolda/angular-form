import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegExp = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
  const value = control.value;
  const result = emailRegExp.test(value);

  if (result) return null;
  return {emailValidator: {value}};
}

export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl) => {
    const value = +control.value;

    if (isNaN(value)) return {rangeMustBeNumber: {value}};
    if (value < minValue) return {rangeMinValue: {value}};
    if (value > maxValue) return {rangeMaxValue: {value}};

    return null;
  };
}
