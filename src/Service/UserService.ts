import { UserSignUpDto } from '../Domain/dto/UserSignUpDto';
import { UserSignInDto } from '../Domain/dto/UserSignInDto';
import { User } from '../Domain/User';

export class UserService {
  public static signUp(dto: UserSignUpDto) {
    // 서버에 회원가입 API를 찔러 계정을 생성한다.
    console.log(dto);
  }

  public static signIn(dto: UserSignInDto) {
    // 서버에 비동기 통신하여 로그인성공 응답을 받는다.
    console.log(dto);
  }

  public static signOut() {
    // 로그아웃한다.
  }
}
