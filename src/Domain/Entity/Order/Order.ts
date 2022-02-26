import { uuid } from 'uuidv4';
import User from '../User/User';
import Product from '../Product/Product';
import Payment from '../Payment/Payment';

/**
 * 유저가 결제를 진행할 때, 사용되는 주문서
 */
class Order {
  _id: number | null = null;

  _user: User;

  _products: Map<
    number,
    {
      count: number;
      product: Product;
    }
  >;

  constructor(user: User, id?: number) {
    this._user = user;
    this._products = new Map();
    if (id) {
      this._id = id;
    }
  }

  get id(): number | null {
    return this._id || null;
  }

  set id(id: number | null) {
    this._id = id;
  }

  get products() {
    return [...this._products.entries()].reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as { [key: string]: { count: number; product: Product } });
  }

  /**
   * 주문서에 상품을 추가합니다.
   * @param product
   */
  addProduct(product: Product) {
    const currentProduct = this._products.get(product.id);
    if (currentProduct) {
      this._products.set(product.id, {
        ...currentProduct,
        count: currentProduct.count + 1,
      });
    } else {
      this._products.set(product.id, {
        count: 1,
        product,
      });
    }
  }

  /**
   * 주문서에서  상품을 삭제합니다.
   * @param product
   */
  removeProduct(product: Product) {
    const currentProduct = this._products.get(product.id);
    if (!currentProduct) return;

    if (currentProduct.count === 1) {
      this._products.delete(product.id);
    } else {
      this._products.set(product.id, {
        ...currentProduct,
        count: currentProduct.count - 1,
      });
    }
  }

  /**
   * 주문서를 발행합니다.
   * 주문서를 기반으로 유저는 결제를 진행합니다.
   */
  pay() {
    // 결제정보를 남기는 코드
    const id = uuid();
    const payment = new Payment(this._user, this.products, id);
    return payment;
  }
}

export default Order;
