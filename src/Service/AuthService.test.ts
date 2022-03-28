import { plainToInstance } from 'class-transformer';
import LoginDTO from 'dto/LoginDTO';
import AuthService from './AuthService';

describe('AuthService', () => {
  it('적합하지 않은 이메일 형식은 에러를 반환한다', async () => {
    const data = { email: 'sdf', password: '' };
    const instance = plainToInstance(LoginDTO, data);

    try {
      const response = await AuthService.login({
        email: instance.email,
        password: instance.password,
      });
      return response;
    } catch (error) {
      expect(error).toEqual(new Error('이메일 형식에 맞지 않습니다.'));
      return null;
    }
  });
});
