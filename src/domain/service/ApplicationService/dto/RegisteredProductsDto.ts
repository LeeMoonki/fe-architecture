import Product from '../../../entity/Product';

class RegisteredProductDto {
  private _product: Product;

  private _totalSalesAmount: number;

  private _updatedAt: string;

  constructor({
    id,
    name,
    price,
    discountAmount,
    totalSalesAmount,
    createdAt,
    updatedAt,
  }: {
    id: number;
    name: string;
    price: number;
    discountAmount: number;
    totalSalesAmount: number;
    createdAt: string;
    updatedAt: string;
  }) {
    // 이렇게 함으로써 Dto에서 도메인 로직을 사용하여 서비스할 수 있게됩니다.
    // 클라이언트에서 도메인 로직에 바로 접근하는 것이 아니라 계층을 하나 둠으로써 도메인 로직을 캡슐화를 할 수 있습니다.

    // 이렇게 Dto를 활용하는 것이 필수는 아니지만 도메인 로직과 사용하기에 좋은 방법 중 하나입니다.
    // 이렇게 하지 않는다면 Dto에 직접 도메인 로직을 매번 심거나 다양한 엔티티를 만들어야 합니다.

    this._product = new Product({
      id,
      name,
      price,
      discountAmount,
      registerDate: createdAt,
    });
    this._totalSalesAmount = totalSalesAmount;
    this._updatedAt = updatedAt;
  }

  get id() {
    return this._product.id;
  }

  get name() {
    return this._product.name;
  }

  get price() {
    return this._product.price;
  }

  get discountAmount() {
    return this._product.discountAmount;
  }

  get totalSalesAmount() {
    return this._totalSalesAmount;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get createdAt() {
    return this._product.registerDate;
  }
}

export default RegisteredProductDto;
