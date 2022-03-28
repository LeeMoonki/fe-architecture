import { Expose } from 'class-transformer';
import { IsEmail, MaxLength } from 'class-validator';
import Validator from './Validator';

export default class Email {
  @IsEmail({}, { message: '이메일 형식에 맞지 않습니다.' })
  @MaxLength(200, { message: '200자 이하로 작성해야 합니다' })
  @Expose({ name: 'email' })
  private _email?: string;

  public getValue() {
    return this._email;
  }

  public isValid() {
    return Validator.validate(Email, 'email', this._email);
  }

  public errorMessage() {
    return Validator.errorMessage(Email, 'email', this._email);
  }
}
