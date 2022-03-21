import Vo from '../vo';

export default class Password implements Vo {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }

  isValid(password: string) {
    return /(?=.*\d{1,})(?=.*[a-zA-z]{1,}).{8,20}$/gi.test(password);
  }

  isEqual(value: unknown) {
    return this._password === value;
  }
}
