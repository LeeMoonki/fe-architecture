import User from 'Domain/Entity/User/User';

/**
 * 유저의 생성, 삭제, 수정을 처리하는 서비스
 */
class UserDomainService {
  httpClient = fetch;

  baseUrl = 'http://localhost:3000/api/user';

  /**
   * 회원가입
   */
  signup(user: User) {
    return this.httpClient(`${this.baseUrl}/create`, {
      method: 'post',
      body: JSON.stringify(user),
    });
  }
}

export default UserDomainService;
