import Email from '../../valueObject/Email';
import Password from '../../valueObject/Password';
import { login as loginApi, logout as logoutApi, signup as signupApi } from '../../../api/auth';

class AuthApplicationService {
  public async login({ email, password }: { email: Email; password: Password }) {
    if (!email.isValid() || !password.isValid()) {
      throw new Error('이메일 또는 비밀번호가 잘못됐습니다.');
    }

    return loginApi({ email: email.getValue(), password: password.getValue() });
  }

  public async logout() {
    return logoutApi();
  }

  public async signup({ email, password }: { email: Email; password: Password }) {
    if (!email.isValid() || !password.isValid()) {
      throw new Error('이메일 또는 비밀번호가 잘못됐습니다.');
    }

    return signupApi({ email: email.getValue(), password: password.getValue() });
  }
}

export default AuthApplicationService;
