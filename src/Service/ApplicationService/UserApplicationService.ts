import { createB2BUser, createUser } from 'api/user';
import SignupB2BUserPayloadDTO from './dto/SignupB2BUserPayloadDTO';
import SignupUserPayloadDTO from './dto/SignupUserPayloadDTO';

export default class UserApplicationService {
  public signupUser(payload: SignupUserPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return createUser(payload);
  }

  public signupB2BUser(payload: SignupB2BUserPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return createB2BUser(payload);
  }
}
