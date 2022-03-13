import Vo from '../vo';

export default class OrderByVo implements Vo {
  private _value: string;

  private _label: string;

  constructor({ value, label }: { value: string; label: string }) {
    this._value = value;
    this._label = label;
  }

  get value(): string {
    return this._value;
  }

  isEqual(other: OrderByVo): boolean {
    return this._value === other.value;
  }

  toJSON() {
    return this._value;
  }

  isValid(): boolean {
    return !!this._value && !!this._label;
  }
}
