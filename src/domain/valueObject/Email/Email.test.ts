import Email from './index';

describe('Email', () => {
  it.each(['', '!@gmail.com', 'abc1@.com', 'abc1@!.com', 'abc1@abc1.', 'abc1@abc1.!'])(
    '이메일 형식에 맞지 않으면 isValid는 false를 반환합니다. (%s)',
    (email) => {
      expect(new Email(email).isValid()).toBe(false);
    }
  );

  it('200자 이하가 아니라면 false를 반화합니다.', () => {
    expect(new Email(`${'a'.repeat(200)}@gmail.com`).isValid()).toBe(false);
  });
});
