// import 'reflect-metadata';
import { plainToInstance, Transform } from 'class-transformer';
import Email from 'valueObject/Email';
import Password from 'valueObject/Password';

export default class LoginDTO {
  @Transform(({ value }) => plainToInstance(Email, { email: value }))
  public email: Email = new Email();

  public name = '';

  @Transform(({ value }) => plainToInstance(Password, { password: value }))
  public password: Password = new Password();
}
