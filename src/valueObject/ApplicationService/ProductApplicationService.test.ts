import User from 'Entities/User';
import Product from 'Entities/Product';
import ProductApplicationService from 'Service/ApplicationService/ProductApplicationService';
import RegisterProductPayloadDTO from '../../Service/ApplicationService/dto/RegisterProductPayloadDTO';
import EditProductPayloadDTO from '../../Service/ApplicationService/dto/EditProductPayloadDTO';
import FindProductsPayloadDTO from '../../Service/ApplicationService/dto/FindProductsPayloadDTO';
import OrderByVo from '../Product/OrderByEnum';

describe('ProductApplicationService', () => {
  describe('registerProduct', () => {
    it('할인금액이 상품의 금액보다 더 크면 에러를 반환합니다.', () => {
      const service = new ProductApplicationService();
      const productStub = new Product('제품명', 1000, 1100);
      const userStub = new User(1);
      const payload = new RegisterProductPayloadDTO(productStub, userStub);

      expect(async () => await service.registerProduct(payload)).rejects.toThrow();
    });
  });

  describe('editProduct', () => {
    it('할인금액이 상품의 금액보다 더 크면 에러를 반환합니다.', () => {
      const service = new ProductApplicationService();
      const productStub = new Product('제품명', 1000, 1100);
      const userStub = new User(1);
      const payload = new EditProductPayloadDTO(productStub, userStub);

      expect(async () => await service.editProduct(payload)).rejects.toThrow();
    });

    it('수정하려는 상품의 id가 없으면 에러를 반환합니다.', () => {
      const service = new ProductApplicationService();
      const productStub = new Product('제품명', 1000, 1100);
      const userStub = new User(1);
      const payload = new EditProductPayloadDTO(productStub, userStub);

      expect(async () => await service.editProduct(payload)).rejects.toThrow();
    });
  });

  describe('findProducts', () => {
    it('잘못된 정렬 enum값을 전달하면 에러를 반환합니다.', () => {
      const service = new ProductApplicationService();
      const orderByStub = new OrderByVo({ value: '', label: '' });
      const payload = new FindProductsPayloadDTO({ orderBy: orderByStub });

      expect(async () => await service.findProductsBy(payload)).rejects.toThrow();
    });
  });
});
