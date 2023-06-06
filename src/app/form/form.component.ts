import {Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  roles: string[] = ['Гость', 'Модератор', 'Администратор'];
  user = {id: 1, name: '', age: '', role: ''};

  onSubmit(d: any): void {
    console.log(d);
  }
}
