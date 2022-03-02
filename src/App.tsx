import { css } from '@emotion/react';
import { UserService } from './Service/UserService';
import { UserSignUpDto } from './Domain/dto/UserSignUpDto';
import { UserSignInDto } from './Domain/dto/UserSignInDto';

function App() {
  const signUpDto = new UserSignUpDto('email', 'password', 'phone', 'address');
  UserService.signUp(signUpDto);

  const signInDto = new UserSignInDto('email', 'password');
  UserService.signIn(signInDto);

  UserService.signOut();
  return (
    <div>
      <h1 css={header}>Hello &lsquo;peTher&lsquo; create react template!</h1>
    </div>
  );
}

const header = css({
  color: '#6867ac',
});

export default App;
