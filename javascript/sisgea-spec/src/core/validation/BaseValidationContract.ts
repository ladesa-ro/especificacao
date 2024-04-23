import type Yup from 'yup';

export type YupNs = typeof Yup;

export interface IValidationContract {
  constructYupSchema(yup: YupNs): Yup.ObjectSchema<any, Yup.AnyObject, any, ''>;
}

export interface IValidationContractConstructor {
  new (): IValidationContract;
}

export abstract class BaseValidationContract implements IValidationContract {
  abstract constructYupSchema(yup: YupNs): Yup.ObjectSchema<any, Yup.AnyObject, any, ''>;
}

export const getValidationContractYupSchema = (validationContractConstructor: IValidationContractConstructor, yup: YupNs) => {
  const validationContract = new validationContractConstructor();
  return validationContract.constructYupSchema(yup);
};
