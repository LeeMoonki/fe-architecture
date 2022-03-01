import AuthApplicationService from './AuthApplicationService';
import Email from '../../valueObject/Email';
import Password from '../../valueObject/Password';

import { login, signup } from '../../../api/auth';

jest.mock('../../../api/auth');

describe('AuthApplicationService', () => {
  describe('login', () => {
    it('유효하지 않은 이메일 또는 비밀번호 객체를 전달하면 에러를 발생시킵니다.', () => {
      const email = new Email('');
      const password = new Password('');
      const authApplicationService = new AuthApplicationService();

      expect(() => authApplicationService.login({ email, password })).rejects.toThrow();
    });

    it('유효한 이메일 또는 비밀번호 객체를 전달하면 로그인을 합니다.', async () => {
      (login as jest.Mock).mockImplementation(() => true);
      const email = new Email('asd@asd.com');
      const password = new Password('asdasd123');
      const authApplicationService = new AuthApplicationService();

      await authApplicationService.login({ email, password });

      expect(login).toBeCalled();
    });
  });

  describe('signup', () => {
    it('유효하지 않은 이메일 또는 비밀번호 객체를 전달하면 에러를 발생시킵니다.', () => {
      const email = new Email('');
      const password = new Password('');
      const authApplicationService = new AuthApplicationService();

      expect(() => authApplicationService.signup({ email, password })).rejects.toThrow();
    });

    it('유효한 이메일 또는 비밀번호 객체를 전달하면 회원가입을 합니다.', async () => {
      (signup as jest.Mock).mockImplementation(() => true);
      const email = new Email('asd@asd.com');
      const password = new Password('asdasd123');
      const authApplicationService = new AuthApplicationService();

      await authApplicationService.signup({ email, password });

      expect(signup).toBeCalled();
    });
  });
});
