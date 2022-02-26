/**
 * 제품을 검색하기 위한 서비스
 */
class AuthApplicationService {
  httpClient = fetch;

  baseUrl = 'http://localhost:3000/api/auth';

  /**
   * 로그인
   */
  login(userInfo: { email: string; password: string }) {
    return this.httpClient(`${this.baseUrl}/login`, {
      method: 'post',
      body: JSON.stringify(userInfo),
    });
  }

  /**
   * 로그아웃
   */
  logout() {
    return this.httpClient(`${this.baseUrl}/logout`, {
      method: 'post',
    });
  }
}

export default AuthApplicationService;
