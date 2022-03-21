import UserEmail from 'valueObject/User/UserEmail';
import UserName from 'valueObject/User/UserName';
import UserPassword from 'valueObject/User/UserPassword';

/**
 * 값과 벨리데이션을 같이 들고 있다.
 *
 * 그런데 이렇게 VO하는게 맞나? 순수 도메인이 아니라 다른것과 섞이는 느낌
 */
export default class SignupUserPayloadDTO {
  private _password: UserPassword;

  private _passwordConfirm: UserPassword;

  private _email: UserEmail;

  private _name: UserName;

  constructor(password: string, passwordConfirm: string, email: string, name: string) {
    this._passwordConfirm = new UserPassword(passwordConfirm);
    this._password = new UserPassword(password);
    this._email = new UserEmail(email);
    this._name = new UserName(name);
  }

  get password() {
    return this.password;
  }

  set password(value: string) {
    this._password = new UserPassword(value);
  }

  get passwordConfirm() {
    return this._passwordConfirm.password;
  }

  set passwordConfirm(value: string) {
    this._passwordConfirm = new UserPassword(value);
  }

  get email() {
    return this._email.email;
  }

  set email(value: string) {
    this._email = new UserEmail(value);
  }

  get name() {
    return this._name.name;
  }

  set name(value: string) {
    this._name = new UserName(value);
  }

  toJSON() {
    return {
      password: this._password.password,
      passwordConfirm: this._passwordConfirm.password,
      email: this._email.email,
      name: this._name.name,
    };
  }

  isValid() {
    return (
      this._password.isEqual(this._passwordConfirm) &&
      this._passwordConfirm &&
      this._password &&
      this._email.isValid(this._email.email) &&
      this._name.isValid(this._name.name)
    );
  }
}
