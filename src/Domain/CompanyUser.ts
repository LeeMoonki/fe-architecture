import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { User } from './User';

export class CompanyUser extends User {
  @IsString()
  @Expose({ name: 'companyRegistrationNumber' })
  private _companyRegistrationNumber?: string;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  get companyRegistrationNumber() {
    return this._companyRegistrationNumber;
  }
}
