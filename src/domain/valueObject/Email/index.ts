class Email {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  public getValue() {
    return this._email;
  }

  public isValid() {
    return this._email.length <= 200 && /^[\w\d]+@[\w\d]+\.[\w\d]+$/.test(this._email);
  }
}

export default Email;
