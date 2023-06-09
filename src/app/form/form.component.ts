import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {emailValidator, rangeValidator} from "../custom.validators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup;

  roles: string[] = ['Гость', 'Модератор', 'Администратор'];

  formErrors: any = {
    name: '',
    password: '',
    email: '',
    age: '',
    role: ''
  };

  formSuccess = {
    name: 'Принято!',
    password: 'Принято!',
    email: 'Принято!',
    age: 'Принято!',
    role: 'Принято!'
  };

  validationMessages: any = {
    name: {
      required: 'Имя обязательно.',
      minlength: 'Имя должно содержать не менее 4 символов.',
      maxlength: 'Имя должно содержать не более 15 символов.'
    },
    password: {
      required: 'Пароль обязателен.',
      minlength: 'Пароль должен содержать не менее 7 символов.',
      maxlength: 'Пароль должен содержать не более 25 символов.'
    },
    email: {
      required: 'Email обязателен.',
      emailValidator: 'Неправильный формат email адреса.',
    },
    age: {
      required: 'Возраст обязателен.',
      rangeMustBeNumber: 'Значение должно быть целым числом в диапазоне 1...122',
      rangeMinValue: 'Значение должно быть больше или равно 1.',
      rangeMaxValue: 'Значение должно быть меньше или равно 122.',
    },
    role: {
      required: 'Роль обязательна.'
    }
  };

  constructor(private fb: FormBuilder) {
  }

  get name(): AbstractControl {
    return this.userForm.controls['name']
  }

  get password(): AbstractControl {
    return this.userForm.controls['password']
  }

  get email(): AbstractControl {
    return this.userForm.controls['email']
  }

  get age(): AbstractControl {
    return this.userForm.controls['age']
  }

  get role(): AbstractControl {
    return this.userForm.controls['role']
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
          this.formErrors[fieldName] = messages[key]
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
      role: [null, [Validators.required]]
    });

    this.userForm.valueChanges?.subscribe(() => this.onValueChanged());
  }
}

