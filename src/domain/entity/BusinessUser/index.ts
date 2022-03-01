import Password from '../../valueObject/Password';
import Email from '../../valueObject/Email';
import Name from '../../valueObject/Name';
import BusinessNumber from '../../valueObject/BusinessNumber';

class BusinessUser {
  private _id: number;

  private _email: Email;

  private _password: Password;

  private _name: Name;

  private _businessNumber: BusinessNumber;

  constructor({
    id,
    email,
    password,
    name,
    businessNumber,
  }: {
    id: number;
    email: Email;
    password: Password;
    name: Name;
    businessNumber: BusinessNumber;
  }) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._name = name;
    this._businessNumber = businessNumber;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get name() {
    return this._name;
  }

  get businessNumber() {
    return this._businessNumber;
  }
}

export default BusinessUser;
