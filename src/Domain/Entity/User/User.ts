/**
 * 유저 엔티티
 * - 일반회원, 기업회원이 존재한다.
 */
class User {
  private _id: number;

  private _name: string;

  private _email: string;

  private _password: string;

  private _userType: string;

  constructor(id: number, name: string, email: string, password: string, userType = 'B2C') {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._userType = userType;
  }

  isB2BUser() {
    return this._userType === 'B2B';
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}

export default User;
