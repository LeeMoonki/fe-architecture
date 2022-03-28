import { plainToClass } from 'class-transformer';
import Email from './Email';

describe('Email', () => {
  it('isValid', async () => {
    const model = plainToClass(Email, { email: '234234' });

    expect(await model.isValid()).toBe(false);
  });

  it('이메일 형식 에러', async () => {
    const model = plainToClass(Email, { email: '234234' });

    expect(await model.errorMessage()).toStrictEqual(['이메일 형식에 맞지 않습니다.']);
  });

  it('200자 제한 에러', async () => {
    const model = plainToClass(Email, {
      email:
        '23423234234234234232342323423423423423234232342342342342323423234234234234232342323423423423423234232342342342342323423234234234234232342323423423423423234232342342342342323423234234234234232342323423423423423234232342342342342323423234234234234232342323423423423423234232342342342342323423234234234234232342323423423423423234232342342342342323423234234234234232342323423423423423@gmail.com',
    });

    expect(await model.errorMessage()).toStrictEqual([
      '200자 이하로 작성해야 합니다',
      '이메일 형식에 맞지 않습니다.',
    ]);
  });
});
