import BusinessNumber from './index';

describe('BusinessNumber', () => {
  it.each(['123456789a', '123456789', '12345678901'])(
    '사업자등록번호가 10자의 숫자가 아니라면 isValid는 false를 반환합니다. (%s)',
    (businessNumber) => {
      expect(new BusinessNumber(businessNumber).isValid()).toBe(false);
    }
  );
});
