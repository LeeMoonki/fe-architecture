import Name from './index';

describe('Name', () => {
  it.each(['!', '1'])('이름이 형식에 맞지 않다면 isValid는 false를 반환합니다. (%s)', (name) => {
    expect(new Name(name).isValid()).toBe(false);
  });

  it('이름이 0자보다 길지 않거나 50자 이하가 아니라면 isValid는 false를 반환합니다.', () => {
    expect(new Name('').isValid()).toBe(false);
    expect(new Name('a'.repeat(51)).isValid()).toBe(false);
  });
});
