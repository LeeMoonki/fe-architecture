import { loginApi, logoutApi, signupApi } from 'api';
import { plainToInstance } from 'class-transformer';

import LoginDTO from 'dto/LoginDTO';
import SignupDTO from 'dto/SignupDTO';

import Email from 'valueObject/Email';
import Password from 'valueObject/Password';

export default class AuthService {
  public static async login({ email, password }: { email: Email; password: Password }) {
    if (!(await email.isValid())) {
      const errorMessage = await email.errorMessage();
      throw new Error(errorMessage ? errorMessage[0] : '');
    }

    const { data } = await loginApi({ email, password });

    return plainToInstance(LoginDTO, data);
  }

  public static logout() {
    return logoutApi();
  }

  public static async signup({
    email,
    password,
    name,
  }: {
    email: Email;
    password: Password;
    name: string;
  }) {
    if (await email.isValid()) {
      throw new Error();
    }

    const { data } = await signupApi({ email, password, name });

    return plainToInstance(SignupDTO, data);
  }
}
