import { createValidationContract } from '../../createValidationContract';

export const ValidationContractUuid = createValidationContract((yup) => yup.string().uuid());
