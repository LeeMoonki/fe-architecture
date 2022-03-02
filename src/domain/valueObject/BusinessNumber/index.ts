class BusinessNumber {
  private _businessNumber: string;

  constructor(businessNumber: string | number) {
    this._businessNumber = `${businessNumber}`;
  }

  public getValue() {
    return this._businessNumber;
  }

  public isValid() {
    return /^\d{10}$/.test(this._businessNumber);
  }

  public equals(other: BusinessNumber) {
    return this._businessNumber === other.getValue();
  }
}

export default BusinessNumber;
