import {
  IDeclaration,
  IDeclarationProperty,
  IDeclarationPropertySimple,
  IsPropertyMixed,
  IsPropertySimple,
  PropertyTypes,
} from '@/helpers';
import { ISchema, ObjectSchema, Schema } from 'yup';
import { ObjectId, ObjectUuid } from '../object-identity';
import { BaseYup, IExtendedYup, extendYup } from './yup';

export type IValidatorContext = {
  custom: IExtendedYup;
  yup: BaseYup;
};

export type IValidator<ValidatorSchema extends ISchema<any> = ISchema<any>> = (context: IValidatorContext) => ValidatorSchema;

export const createValidatorContext = (yup: BaseYup): IValidatorContext => ({
  yup,
  custom: extendYup(yup),
});

export const Validator = <ValidatorSchema extends ISchema<any>, Validator extends IValidator<ValidatorSchema>>(factory: Validator) =>
  factory;

export const GetSchema = (validator: IValidator, yup: BaseYup) => validator(createValidatorContext(yup));

export const GetPropertyValidator = (property: IDeclarationProperty) => {
  let target: IDeclarationPropertySimple | null = null;

  if (IsPropertyMixed(property)) {
    target = property.input;
  } else if (IsPropertySimple(property)) {
    target = property;
  } else {
    throw new TypeError('Unsupported property type.');
  }

  if (target && target.validator) {
    return target.validator;
  }

  if (target.validator === null) {
    return Validator(({ yup }) => yup.mixed().optional().nullable().strip());
  }

  return Validator((context) => {
    const { yup, custom } = context;

    let schema: Schema<any> = yup.mixed();

    if (target.type === PropertyTypes.STRING) {
      schema = custom.string();
    } else if (target.type === PropertyTypes.INTEGER) {
      schema = custom.number().integer();
    } else if (target.type === PropertyTypes.UUID) {
      schema = custom.string().uuid();
    } else if (typeof target.type === 'function') {
      if (target.type === ObjectUuid) {
        schema = custom.objectUuid({ nullable: target.nullable, optional: target.required === false }) as Schema;
      } else if (target.type === ObjectId) {
        schema = custom.objectId({ nullable: target.nullable, optional: target.required === false }) as Schema;
      } else {
        const nestedValidator = GetDeclarationValidator(target.type());
        const nestedSchema = nestedValidator(context) as Schema;
        schema = nestedSchema;
      }
    } else {
      console.log({ property, target });
      throw new TypeError(`unsupported target.type: ${target}`);
    }

    if (target.arrayOf) {
      schema = yup.array().of(schema);
    }

    if (target.required === false) {
      schema.optional();
    } else {
      schema.required();
    }

    if (target.nullable === false) {
      schema.nonNullable();
    } else {
      schema.nullable();
    }

    return schema;
  });
};

export const GetDeclarationValidator = (declaration: IDeclaration) => {
  if (declaration.validator) {
    return declaration.validator;
  }

  if (declaration.validator === null) {
    return Validator(({ yup }) => yup.mixed().optional().nullable().strip());
  }

  return Validator((context) => {
    const { yup } = context;

    let schema: ObjectSchema<any> = yup.object().shape({});

    const declarationPropertiesEntries = Object.entries(declaration.properties);

    const propertyConstraintsEntries = declarationPropertiesEntries.map(([name, property]) => [
      name,
      GetPropertyValidator(property)(context),
    ]);

    schema = schema.shape({
      ...Object.fromEntries(propertyConstraintsEntries),
    });

    return schema;
  });
};
