export class User {
  public _id: number;

  public _email: string;

  public _password: string;

  public _phone: string;

  public _address: string;

  constructor(id: number, email: string, password: string, phone: string, address: string) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._phone = phone;
    this._address = address;
  }

  public id(): number {
    return this._id;
  }

  public email(): string {
    return this._email;
  }

  public password(): string {
    return this._password;
  }

  public phone(): string {
    return this._phone;
  }

  public address(): string {
    return this._address;
  }
}
