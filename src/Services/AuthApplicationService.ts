import Email from '../valueObjects/Email';
import Password from '../valueObjects/Password';

export default class AuthApplicationService {
  // signUp
  async signUp({ email, password }: { email: Email; password: Password }) {
    if (!email.validator()) {
      throw new Error('이메일이 유효하지 않습니다.');
    }

    if (!password.validator()) {
      throw new Error('password가 유효하지 않습니다.');
    }

    const response = await window.fetch('/api/signUp', {
      method: 'POST',
      body: JSON.stringify({ email: email.getEmail, password: password.getPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    return response.json();
  }

  // login
  // logout
}

// auth 관련 서비스
// product 관련 서비스
