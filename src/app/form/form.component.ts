import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {emailValidator, observableUrlValidator, rangeValidator} from "../custom.validators";
import {
  FORM_ERRORS,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  FORM_ROLES,
  FORM_SUCCESS,
  FORM_VALIDATION_MESSAGES
} from "../form-data";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup;

  roles: string[] = FORM_ROLES;
  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDERS;
  formErrors: any = FORM_ERRORS;
  formSuccess = FORM_SUCCESS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;

  constructor(private fb: FormBuilder) {
  }

  get name(): AbstractControl {
    return this.userForm.controls['name'];
  }

  get password(): AbstractControl {
    return this.userForm.controls['password'];
  }

  get email(): AbstractControl {
    return this.userForm.controls['email'];
  }

  get age(): AbstractControl {
    return this.userForm.controls['age'];
  }

  get site(): AbstractControl {
    return this.userForm.controls['site'];
  }

  get role(): AbstractControl {
    return this.userForm.controls['role'];
  }


  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

  onValueChanged() {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach(fieldName => {
      const control = form.get(fieldName);
      this.formErrors[fieldName] = '';

      if (control?.invalid && (control.dirty || control.touched)) {
        const messages = this.validationMessages[fieldName];

        Object.keys(control.errors as ValidationErrors).every(key => {
          this.formErrors[fieldName] = messages[key];
        });
      }
    });
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [null, [Validators.required, emailValidator]],
      age: [null, [Validators.required, rangeValidator(1, 122)]],
      site: [null, [Validators.required], [observableUrlValidator]],
      role: [null, [Validators.required]]
    });

    this.userForm.valueChanges?.subscribe(() => this.onValueChanged());
  }
}

