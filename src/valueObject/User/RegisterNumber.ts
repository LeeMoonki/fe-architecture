import Vo from '../vo';

export default class RegisterNumber implements Vo {
  private _registerNumber: string;

  constructor(registerNumber: string) {
    this._registerNumber = registerNumber;
  }

  set registerNumber(registerNumber: string) {
    this._registerNumber = registerNumber;
  }

  get registerNumber(): string {
    return this._registerNumber;
  }

  isValid(registerNumber: string) {
    return /[0-9]{10}/.test(registerNumber);
  }

  isEqual(value: unknown) {
    return this._registerNumber === value;
  }
}
