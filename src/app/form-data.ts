export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  age: 'Возраст',
  site: 'Сайт',
  role: 'Роль'
};

export const FORM_PLACEHOLDERS = {
  name: 'Введите логин...',
  password: 'Введите пароль...',
  email: 'Email...',
  age: 'Возраст...',
  site: 'Сайт...',
  role: 'Выберите роль из списка...'
};

export const FORM_SUCCESS = {
  name: 'Принято!',
  password: 'Принято!',
  email: 'Принято!',
  age: 'Принято!',
  site: 'Принято!',
  role: 'Принято!'
};

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
};

export const FORM_VALIDATION_MESSAGES = {
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
  site: {
    required: 'Сайт обязателен.',
    urlNotAllowed: 'Неправильный формат адреса сайта',
    pending: 'Выполняется проверка.',
  },
  role: {
    required: 'Роль обязательна.'
  }
};

export const FORM_ROLES = ['Гость', 'Модератор', 'Администратор'];
