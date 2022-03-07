import { IsNumber, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export default class Product {
  @IsNumber()
  @Expose({ name: 'id' })
  private _id!: number;

  @IsString()
  @Expose({ name: 'name' })
  private _name?: string;

  @IsNumber()
  @Expose({ name: 'cost' })
  private _cost?: number; // 원가

  @IsNumber()
  @Expose({ name: 'price' })
  private _price?: number; // 판매가

  @IsNumber()
  @Expose({ name: 'discountAmount' })
  private _discountAmount?: number; // 할인율

  @IsNumber()
  @Expose({ name: 'amount' })
  private _amount?: number; // 재고 수

  @IsNumber()
  @Expose({ name: 'salesQuantity' })
  private _salesQuantity?: number; // 총 판매 수

  @IsString()
  @Expose({ name: 'saleDate' })
  private _saleDate?: string;

  @IsString()
  @Expose({ name: 'buyerEmail' })
  private _buyerEmail?: string;

  @IsString()
  @Expose({ name: 'createdAt' })
  private _createdAt?: string;

  @IsString()
  @Expose({ name: 'updatedAt' })
  private _updatedAt?: string;

  // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-empty-function
  constructor() {}

  get id(): number {
    return this._id;
  }

  get name(): string | undefined {
    return this._name;
  }

  get cost(): number | undefined {
    return this._cost;
  }

  get price(): number | undefined {
    return this._price;
  }

  get discountAmount(): number | undefined {
    return this._discountAmount;
  }

  get amount(): number | undefined {
    return this._amount;
  }

  get salesQuantity(): number | undefined {
    return this._salesQuantity;
  }

  get saleDate(): string | undefined {
    return this._saleDate;
  }

  get buyerEmail(): string | undefined {
    return this._buyerEmail;
  }

  // 상품 등록일이 최초 등록일인지 수정일자인지 모르므로 일단 둘 다 getter로 접근 가능하게
  get createdAt(): string | undefined {
    return this._createdAt;
  }

  get updatedAt(): string | undefined {
    return this._updatedAt;
  }
}
