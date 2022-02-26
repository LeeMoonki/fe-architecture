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
}

export default BusinessNumber;
