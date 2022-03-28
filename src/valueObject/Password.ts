import { Expose } from 'class-transformer';
import { Matches } from 'class-validator';
import Validator from './Validator';

const ERROR_MESSAGE = '비밀번호는 영문과 숫자를 포함한 8자 이상 20자 이하의 문자열이어야 합니다.';

export default class Password {
  @Matches(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,20}$/, { message: ERROR_MESSAGE })
  @Expose({ name: 'password' })
  private _password?: string;

  public getValue() {
    return this._password;
  }

  public isValid() {
    return Validator.validate(Password, 'password', this._password);
  }
}
