import type { ISchema } from 'yup';
import type { YupNs } from './BaseValidationContract';

export type IValidationContract<Opts = void, Schema extends ISchema<any, any> = ISchema<any, any>> = (yup: YupNs, options?: Opts) => Schema;

export const createValidationContract = <Opts = void, Schema extends ISchema<any, any> = ISchema<any, any>>(
  factory: IValidationContract<Opts, Schema>,
) => factory;
