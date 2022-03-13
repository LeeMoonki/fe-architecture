import Product from 'Entities/Product';
import User from 'Entities/User';
import ProductDiscountPrice from 'valueObject/Product/ProductDiscountPrice';
import RegisterProductPayloadDTO from './RegisterProductPayloadDTO';
import OrderByVo from '../../../valueObject/Product/OrderByEnum';

/**
 * 값과 벨리데이션을 같이 들고 있다.
 */
export default class FindProductsPayloadDTO {
  private _orderBy?: OrderByVo;

  private _keyword = '';

  constructor({ keyword, orderBy }: { keyword?: string; orderBy?: OrderByVo }) {
    if (keyword) {
      this._keyword = keyword;
    }

    if (orderBy) {
      this._orderBy = orderBy;
    }
  }

  toJSON() {
    return {
      keyword: this._keyword,
      orderBy: this._orderBy?.toJSON(),
    };
  }

  // 사용하는 enum값에 대한 유효성검사는 enum 클래스에서 한다.
  isValid() {
    return this._keyword.length < 50 && this._orderBy?.isValid();
  }
}
