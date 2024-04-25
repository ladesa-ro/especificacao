import * as SpecValidation from '@/core/validation';

export interface IValidationContractObjectIdOptions {
  required?: boolean;
  message?: string;
}

export interface IValidationContractObjectUuidOptions {
  strict?: boolean;
  optional?: boolean;
  message?: string;
}

const CEP_PATTERN = /^((\d{5}-\d{3})|(\d{8}))$/;

type IValidationContractLocalizacaoCepOptions = {
  required?: boolean | string;
  output?: 'clean' | 'formatted' | 'passthrough';
};

export type IExtendedYup = ReturnType<typeof extendYup>;

export const extendYup = (yup: SpecValidation.YupNs) => {
  const string = () => {
    return yup.string().trim();
  };

  const number = () => {
    return yup.number().transform((value) => {
      const valueAsNumber = +value;

      if (!Number.isNaN(valueAsNumber)) {
        return valueAsNumber;
      }

      return null;
    });
  };

  const id = () => {
    return number().integer().positive();
  };

  const objectId = () => {
    return (options: IValidationContractObjectIdOptions = {}) => {
      const { required = true, message } = options;

      if (required) {
        return yup.object().shape({
          id: id().required(message),
        });
      }

      return yup
        .object()
        .shape({
          id: id().required(message),
        })
        .transform((value) => {
          const id = value?.id ?? null;

          if (id !== null && id().isValidSync(id)) {
            return value;
          }

          return null;
        })
        .nullable()
        .optional()
        .default(() => null);
    };
  };

  const uuid = () => {
    return yup.string().uuid();
  };

  const objectUuid = (options: IValidationContractObjectUuidOptions = {}) => {
    const { strict: required = true, optional = false, message } = options;

    const idSchema = uuid().required(message);

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

    const objectSchemaWithRequiredOption = required ? objectSchema.nonNullable().required() : objectSchema.nullable();

    const objectSchemaWithOptionallity = optional
      ? objectSchemaWithRequiredOption.optional().default(() => undefined)
      : objectSchemaWithRequiredOption.defined();

    return objectSchemaWithOptionallity;
  };

  const cep = (options: IValidationContractLocalizacaoCepOptions = {}) => {
    const { required = false, output = 'formatted' } = options;

    let base = string()
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

  const custom = {
    //
    id,
    cep,
    uuid,
    string,
    number,
    objectId,
    objectUuid,
  };

  return {
    custom,
    base: yup,
  };
};
