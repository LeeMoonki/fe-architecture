import { createProduct, editProduct, findProductsBy } from '../../api/product';
import EditProductPayloadDTO from './dto/EditProductPayloadDTO';
import RegisterProductPayloadDTO from './dto/RegisterProductPayloadDTO';
import FindProductsPayloadDTO from './dto/FindProductsPayloadDTO';

export default class ProductApplicationService {
  public registerProduct(payload: RegisterProductPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return createProduct(payload);
  }

  public editProduct(payload: EditProductPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return editProduct(payload);
  }

  public findProductsBy(payload: FindProductsPayloadDTO) {
    if (!payload.isValid()) {
      throw new Error('Invalid payload');
    }
    return findProductsBy(payload);
  }
}
