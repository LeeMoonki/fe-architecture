class Product {
  private _id: number;

  private _name: string;

  private _price: number;

  private _discountAmount: number;

  private _registerDate: string;

  constructor({
    id,
    name,
    price,
    discountAmount,
    registerDate,
  }: {
    id: number;
    name: string;
    price: number;
    discountAmount: number;
    registerDate: string;
  }) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._discountAmount = discountAmount;
    this._registerDate = registerDate;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get discountAmount() {
    return this._discountAmount;
  }

  get registerDate() {
    return this._registerDate;
  }

  get discountPrice() {
    return this._price - this._discountAmount;
  }
}

export default Product;
