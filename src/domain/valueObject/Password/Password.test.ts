import Password from './index';

describe('Password', () => {
  it.each(['', 'a'.repeat(8), '1'.repeat(8)])(
    '비밀번호가 숫자와 영문을 포함하지 않는다면 isValid는 false를 반환합니다. (%s)',
    (password) => {
      expect(new Password(password).isValid()).toBe(false);
    }
  );

  it('비밀번호가 8자 이상 20자 이하가 아니라면 isValid는 false를 반환합니다.', () => {
    expect(new Password('abcd123').isValid()).toBe(false);
    expect(new Password('abcdefghij12345678901').isValid()).toBe(false);
  });
});
