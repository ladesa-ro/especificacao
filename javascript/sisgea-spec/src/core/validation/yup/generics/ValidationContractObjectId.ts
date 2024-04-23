import { createValidationContract } from '../../createValidationContract';
import { ValidationContractId } from './ValidationContractId';

interface IValidationContractObjectIdOptions {
  required?: boolean;
  message?: string;
}

export const ValidationContractObjectId = createValidationContract((yup, options: IValidationContractObjectIdOptions = {}) => {
  const { required = true, message } = options;

  if (required) {
    return yup.object().shape({
      id: ValidationContractId(yup).required(message),
    });
  }

  return yup
    .object()
    .shape({
      id: ValidationContractId(yup).required(message),
    })
    .transform((value) => {
      const id = value?.id ?? null;

      if (id !== null && ValidationContractId(yup).isValidSync(id)) {
        return value;
      }

      return null;
    })
    .nullable()
    .optional()
    .default(() => null);
});
