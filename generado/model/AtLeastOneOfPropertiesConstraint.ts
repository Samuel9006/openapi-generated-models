import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
class AtLeastOneOfPropertiesConstraint implements ValidatorConstraintInterface {
  validate(object: any, args: ValidationArguments) {
    const properties = args.constraints[0];
    return properties.some(property => object[property] !== undefined);
  }

  defaultMessage(args: ValidationArguments) {
    const properties = args.constraints[0];
    return `At least one of the properties (${properties.join(', ')}) must be present`;
  }
}

export function AtLeastOneOfProperties(properties: string[], validationOptions?: ValidationOptions) {
  return function (object: Object) {
    registerDecorator({
      name: 'atLeastOneOfProperties',
      target: object.constructor,
      propertyName: undefined,
      options: validationOptions,
      constraints: [properties],
      validator: AtLeastOneOfPropertiesConstraint,
    });
  };
}