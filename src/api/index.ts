import Email from 'valueObject/Email';
import Password from 'valueObject/Password';

async function getResponse() {
  try {
    const response = await Promise.resolve({ data: 'hi' });
    return response;
  } catch (error) {
    // 최외곽 api 통신에 실패한 경우만 찍힘
    console.error(error);
    throw new Error();
  }
}

export async function loginApi({ email, password }: { email: Email; password: Password }) {
  const response = await getResponse();

  return response;
}

export async function logoutApi() {
  const response = await getResponse();

  return response;
}

export async function signupApi({
  email,
  password,
  name,
}: {
  email: Email;
  password: Password;
  name: string;
}) {
  const response = await getResponse();

  return response;
}
