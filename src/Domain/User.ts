import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export abstract class User {
  @IsNumber()
  @Expose({ name: 'id' })
  private _id!: number;

  @IsString()
  @Expose({ name: 'name' })
  private _name?: string;

  @IsEmail()
  @Expose({ name: 'email' })
  private _email?: string;

  // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-empty-function
  constructor() {}

  get id(): number {
    return this._id;
  }

  get name(): string | undefined {
    return this._name;
  }

  get email(): string | undefined {
    return this._email;
  }
}
