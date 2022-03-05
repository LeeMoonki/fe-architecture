export default class Product {
  private _title: string;

  private _price: number;

  private _discount: number;

  constructor(title: string, price: number, discount?: number) {
    this._title = title;
    this._price = price;
    this._discount = discount || 0;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
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
}
