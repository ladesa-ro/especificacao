import type Yup from 'yup';
import { IExtendedYup } from './yup/YupExtended';

export type YupNs = typeof Yup;

export interface IValidationContract {
  yupSchema(ctx: IExtendedYup): Yup.ObjectSchema<any, Yup.AnyObject, any, ''>;
}

export interface IValidationContractConstructor {
  new (): IValidationContract;
}

export abstract class BaseValidationContract implements IValidationContract {
  abstract yupSchema(ctx: IExtendedYup): Yup.ObjectSchema<any, Yup.AnyObject, any, ''>;
}
