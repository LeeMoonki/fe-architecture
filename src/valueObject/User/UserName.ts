import Vo from '../vo';

export default class UserName implements Vo {
  private _name: string;

  constructor(password: string) {
    this._name = password;
  }

  get name(): string {
    return this._name;
  }

  isValid(name: string) {
    return name.length < 51;
  }

  isEqual(value: unknown) {
    return this._name === value;
  }
}
