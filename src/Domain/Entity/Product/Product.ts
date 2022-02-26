/**
 * 쇼핑몰에 등록될 수 있는 상품
 */
class Product {
  _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
export default Product;
