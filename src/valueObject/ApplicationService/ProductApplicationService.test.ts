import User from 'Entities/User';
import Product from 'Entities/Product';
import ProductApplicationService from 'Service/ApplicationService/ProductApplicationService';
import RegisterProductPayloadDTO from '../../Service/ApplicationService/dto/RegisterProductPayloadDTO';

describe('ProductApplicationService', () => {
  it('할인금액이 상품의 금액보다 더 크면 에러를 반환합니다.', () => {
    const service = new ProductApplicationService();
    const productStub = new Product('제품명', 1000, 1100);
    const userStub = new User(1);
    const payload = new RegisterProductPayloadDTO(productStub, userStub);

    expect(async () => await service.registerProduct(payload)).rejects.toThrow();
  });
});
