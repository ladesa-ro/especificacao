import { createValidationContract } from '../../createValidationContract';

export const ValidationContractString = createValidationContract((yup) => yup.string().trim());
