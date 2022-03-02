class Name {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public getValue() {
    return this._name;
  }

  public isValid() {
    return this.isValidLength() && this.isValidCharacter();
  }

  private isValidCharacter() {
    return this._name.match(/[^a-zA-Z\s]/) === null;
  }

  private isValidLength() {
    return this._name.length > 0 && this._name.length <= 50;
  }

  public equals(name: Name) {
    return this._name === name.getValue();
  }
}

export default Name;
