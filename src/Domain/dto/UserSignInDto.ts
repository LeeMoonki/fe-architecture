export class UserSignInDto {
  private _email: string;

  private _password: string;

  constructor(email: string, password: string) {
    this._email = email;
    this._password = password;
  }
}
