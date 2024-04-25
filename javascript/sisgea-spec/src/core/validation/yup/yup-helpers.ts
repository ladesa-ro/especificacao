import type Yup from 'yup';
import type { CastOptions, ISchema, ObjectSchema, ValidateOptions } from 'yup';

export type BaseYup = typeof Yup;

export const tryParseJSON = (value: any) => {
  try {
    if (typeof value === 'string') {
      return JSON.parse(value);
    }
  } catch (e) {}

  return value;
};

export const tryCast = (schema: ISchema<any>, value: any, options?: CastOptions) => {
  try {
    return schema.cast(tryParseJSON(value), {
      ...options,
    });
  } catch (e) {}

  return value;
};

export const parsePayloadYup = async <Schema extends ObjectSchema<any, any, any>, Output extends Schema['__outputType']>(
  schema: Schema,
  raw: any,
): Promise<Output> => {
  const validateOptions: ValidateOptions = { strict: false };

  const isValid = await schema.isValid(raw, validateOptions);

  if (isValid) {
    const dto = await schema.validate(raw, validateOptions);
    return dto;
  } else {
    const err = await schema.validate(raw, validateOptions).catch((err) => err);

    console.debug('[error] parsePayloadYup', { err, raw, schema });

    throw new TypeError('Invalid input data.');
  }
};
