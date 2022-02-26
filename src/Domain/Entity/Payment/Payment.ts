import User from '../User/User';
import Product from '../Product/Product';

type Status = 'payed' | 'pending' | 'canceled';

/**
 * 결제정보를 기반으로 결제하게되면 남는 결제기록
 */
class Payment {
  uuid?: string;

  private _userId: number;

  products: { [key: string]: { count: number; product: Product } };

  _status: Status = 'pending';

  constructor(
    user: User,
    products: { [key: string]: { count: number; product: Product } },
    uuid?: string
  ) {
    this._userId = user.id;
    this.products = products;
    this.uuid = uuid;
  }

  get status(): 'payed' | 'pending' | 'canceled' {
    return this._status;
  }

  set status(status: Status) {
    this._status = status;
  }

  /**
   * 결제내역을 환불한다.
   */
  refund() {
    this.status = 'canceled';
    // 환불 api를 호출한다.
  }
}

export default Payment;
