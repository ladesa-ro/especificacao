import { createValidationContract } from '../../createValidationContract';
import { ValidationContractNumber } from './ValidationContractNumber';

export const ValidationContractId = createValidationContract((yup) => ValidationContractNumber(yup).integer().positive());
