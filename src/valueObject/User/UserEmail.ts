import Vo from '../vo';

export default class UserEmail implements Vo {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  set email(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  isValid(email: string) {
    if (email.length > 200) {
      return false;
    }
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    );
  }

  isEqual(value: unknown) {
    return this._email === value;
  }
}
