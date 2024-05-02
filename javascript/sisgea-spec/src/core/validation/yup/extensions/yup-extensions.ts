import { BaseYup } from '../yup-helpers';

export const string = (yup: BaseYup) => () => {
  return yup.string().trim();
};

export const number = (yup: BaseYup) => () => {
  return yup.number().transform((value) => {
    const valueAsNumber = +value;

    if (!Number.isNaN(valueAsNumber)) {
      return valueAsNumber;
    }

    return null;
  });
};

export const id = (yup: BaseYup) => () => {
  return number(yup)().integer().positive();
};

export interface IValidationContractObjectIdOptions {
  required?: boolean;
  message?: string;
}

export const objectId = (yup: BaseYup) => {
  return (options: IValidationContractObjectIdOptions = {}) => {
    const { required = true, message } = options;

    if (required) {
      return yup.object().shape({
        id: id(yup)().required(message),
      });
    }

    return yup
      .object()
      .shape({
        id: id(yup)().required(message),
      })
      .transform((value) => {
        const id = value?.id ?? null;

        if (id !== null && id(yup)().isValidSync(id)) {
          return value;
        }

        return null;
      })
      .nullable()
      .optional()
      .default(() => null);
  };
};

export const uuid = (yup: BaseYup) => () => {
  return yup.string().uuid();
};

export interface IValidationContractObjectUuidOptions {
  optional?: boolean;
  nonNullable?: boolean;
  message?: string;
}
export const objectUuid =
  (yup: BaseYup) =>
  (options: IValidationContractObjectUuidOptions = {}) => {
    const { nonNullable: nonNullable = true, optional = false, message } = options;

    const idSchema = uuid(yup)().required(message);

    const objectSchema = yup
      .object()
      .shape({ id: idSchema })
      .transform((value) => {
        const id = value?.id ?? null;

        if (id !== null && idSchema.isValidSync(id)) {
          return value;
        }

        return null;
      });

    const objectSchemaWithRequiredOption = nonNullable ? objectSchema.nonNullable().required() : objectSchema.nullable();

    const objectSchemaWithOptionallity = optional
      ? objectSchemaWithRequiredOption.optional().default(() => undefined)
      : objectSchemaWithRequiredOption.defined();

    return objectSchemaWithOptionallity;
  };

export type IValidationContractLocalizacaoCepOptions = {
  required?: boolean | string;
  output?: 'clean' | 'formatted' | 'passthrough';
};

export const cep =
  (yup: BaseYup) =>
  (options: IValidationContractLocalizacaoCepOptions = {}) => {
    const { required = false, output = 'formatted' } = options;

    let base = string(yup)()
      .transform((value) => {
        if (typeof value === 'string') {
          if (value.length === 0) {
            return null;
          }

          if (output === 'passthrough') {
            return value;
          }

          if (output === 'clean' || output === 'formatted') {
            const clean = value.replace(/\D/g, '');

            if (output === 'formatted' && clean.length > 5) {
              return `${clean.slice(0, 5)}-${clean.slice(5)}`;
            }

            return clean;
          }
        }

        return null;
      })
      .test('is-valid-cep', 'Informe um CEP válido!', (value) => {
        if (typeof value === 'string' && value.length > 0) {
          const CEP_PATTERN = /^((\d{5}-\d{3})|(\d{8}))$/;
          const isValid = value.match(CEP_PATTERN) !== null;
          return isValid;
        }

        if (required !== false) {
          return false;
        }

        return true;
      });

    if (required !== false) {
      if (required === true) {
        base = base.required();
      } else {
        base = base.required(required);
      }
    }

    return base;
  };
