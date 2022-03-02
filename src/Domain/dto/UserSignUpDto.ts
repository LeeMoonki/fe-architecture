export class UserSignUpDto {
  private _email: string;

  private _password: string;

  private _phone: string;

  private _address: string;

  constructor(email: string, password: string, phone: string, address: string) {
    this._email = email;
    this._password = password;
    this._phone = phone;
    this._address = address;
  }
}
