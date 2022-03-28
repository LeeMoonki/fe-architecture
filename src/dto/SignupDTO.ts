export default class LoginDTO {
  public email: string;

  public name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
