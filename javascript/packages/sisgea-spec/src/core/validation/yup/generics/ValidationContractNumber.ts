import { createValidationContract } from '../../createValidationContract';

export const ValidationContractNumber = createValidationContract((yup) =>
  yup.number().transform((value) => {
    const valueAsNumber = +value;

    if (!Number.isNaN(valueAsNumber)) {
      return valueAsNumber;
    }

    return null;
  }),
);
