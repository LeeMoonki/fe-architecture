export default class Password {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get getPassword() {
    return this._password;
  }

  validator() {
    return !!this._password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  }
}
