class Password {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  public getValue() {
    return this._password;
  }

  public isValid() {
    return this.isValidLength() && this.isValidCharacter();
  }

  private isValidCharacter() {
    return /^(?=.*\d)(?=.*[a-zA-Z])/.test(this._password);
  }

  private isValidLength() {
    return this._password.length >= 8 && this._password.length <= 20;
  }
}

export default Password;
