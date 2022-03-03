export default class Email {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  get getEmail() {
    return this._email;
  }

  validator() {
    return !!this._email.match(/^\S+@\S+\.\S+$/);
  }
}
