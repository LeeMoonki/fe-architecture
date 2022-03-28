import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export default class Validator {
  public static async validate(classType, key, value) {
    const valueObject = plainToClass(classType, { [key]: value });
    const errors = await validate(valueObject);
    return errors.length === 0;
  }

  public static async errorMessage(classType, key, value) {
    const valueObject = plainToClass(classType, { [key]: value });

    const [errors] = await validate(valueObject);

    if (!errors.constraints) {
      return false;
    }

    return Object.values(errors.constraints);
  }
}
