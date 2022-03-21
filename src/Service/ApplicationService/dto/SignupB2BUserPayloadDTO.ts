import SignupUserPayloadDTO from './SignupUserPayloadDTO';
import RegisterNumber from '../../../valueObject/User/RegisterNumber';

/**
 * 값과 벨리데이션을 같이 들고 있다.
 *
 */
export default class SignupB2BUserPayloadDTO extends SignupUserPayloadDTO {
  private _registerNumber: RegisterNumber;

  constructor(
    password: string,
    passwordConfirm: string,
    email: string,
    name: string,
    regiserNumber: string
  ) {
    super(password, passwordConfirm, email, name);
    this._registerNumber = new RegisterNumber(regiserNumber);
  }

  get registerNumber() {
    return this._registerNumber.registerNumber;
  }

  set registerNumber(value: string) {
    this._registerNumber = new RegisterNumber(value);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      registerNumber: this._registerNumber.registerNumber,
    };
  }

  isValid() {
    return super.isValid() && this._registerNumber.isValid(this._registerNumber.registerNumber);
  }
}
