import { createUser } from 'api/user';
import SignupUserPayloadDTO from './dto/SignupUserPayloadDTO';

export default class UserApplicationService {
  public signupUser(payload: SignupUserPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return createUser(payload);
  }

  // public signupB2BUser(payload: EditProductPayloadDTO) {
  //   if (!payload.isValid()) {
  //     throw new Error('Invalid payload');
  //   }
  //   return editProduct(payload);
  // }
}
