import Password from '../../valueObject/Password';
import Email from '../../valueObject/Email';
import Name from '../../valueObject/Name';

class User {
  private _id: number;

  private _email: Email;

  private _password: Password;

  private _name: Name;

  constructor({
    id,
    email,
    password,
    name,
  }: {
    id: number;
    email: Email;
    password: Password;
    name: Name;
  }) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._name = name;
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
}

export default User;
