import { createProduct } from '../../api/product';
import RegisterProductPayloadDTO from './dto/RegisterProductPayloadDTO';

export default class ProductApplicationService {
  public registerProduct(payload: RegisterProductPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return createProduct(payload);
  }
}
