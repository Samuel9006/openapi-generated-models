import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsOnlyOnePropertyPresentConstraint
  implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const object = args.object as any;
    const properties = args.constraints;

    const presentProperties = properties.filter(
      (property) => object[property] !== undefined
    );

    return presentProperties.length === 1;
  }

  defaultMessage(args: ValidationArguments) {
    return `only one property should be present: ${args.constraints.join(
      ' or '
    )}`;
  }
}

export function IsOnlyOnePropertyPresent(
  properties: string[],
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: properties,
      validator: IsOnlyOnePropertyPresentConstraint,
    });
  };
}
