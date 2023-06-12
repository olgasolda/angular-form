import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {delay, map, Observable, of} from "rxjs";

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

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const value = control.value;
  const urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const result = urlRegEx.test(value);

  return of(result)
    .pipe(map(bool => bool ? null : {urlNotAllowed: {value}}))
    .pipe(delay(3000));
}
