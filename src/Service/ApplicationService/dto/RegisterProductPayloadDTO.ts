import Product from 'Entities/Product';
import User from 'Entities/User';
import ProductDiscountPrice from 'valueObject/Product/ProductDiscountPrice';

/**
 * 값과 벨리데이션을 같이 들고 있다.
 */
export default class RegisterProductPayloadDTO {
  private _title: string;

  private _price: number;

  private _discount: ProductDiscountPrice;

  private _userId: number;

  constructor(product: Product, user: User) {
    this._title = product.title;
    this._price = product.price;
    this._discount = new ProductDiscountPrice(product.discount || 0);
    this._userId = user.id;
  }

  get discount(): number {
    return this._discount.price;
  }

  set discount(value: number) {
    this._discount.price = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  toJSON() {
    return {
      title: this._title,
      price: this._price,
      discount: this._discount,
      userId: this._userId,
    };
  }

  isValid() {
    return this._title && this._price && this._discount.isValid(this._price) && this._userId;
  }
}
