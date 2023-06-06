import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  roles: string[] = ['Гость', 'Модератор', 'Администратор'];
  user = {id: 1, name: '', age: '', role: ''};

  formErrors: any = {
    name: '',
    age: ''
  };
  validationMessages: any = {
    name: {
      required: 'Имя обязательно.',
      minLength: 'Имя должно содержать минимум 4 символа.'
    },
    age: {
      required: 'Возраст обязателен.'
    }
  };

  @ViewChild('userForm') userForm!: NgForm;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.userForm.valueChanges?.subscribe(() => this.onValueChanged());
  }

  onSubmit(d: any): void {
    console.log(d);
  }

  private onValueChanged() {
    const form = this.userForm.form;

    Object.keys(this.formErrors).forEach(fieldName => {
      const control = form.get(fieldName);
      this.formErrors[fieldName] = '';

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[fieldName];

        Object.keys(control.errors as ValidationErrors).forEach(key => {
          console.log(messages[key]);
          this.formErrors[fieldName] += messages[key] + '';
        });
      }
    });
  }
}
