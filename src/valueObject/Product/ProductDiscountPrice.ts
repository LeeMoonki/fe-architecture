import Vo from '../vo';

export default class ProductDiscountPrice implements Vo {
  private _price: number;

  constructor(price: number) {
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  isEqual(price: number) {
    return this._price === price;
  }

  isValid(originPrice: number) {
    return !(this._price > originPrice);
  }
}
