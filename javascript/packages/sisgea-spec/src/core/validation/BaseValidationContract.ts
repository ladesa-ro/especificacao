import type Yup from 'yup';

export type YupNs = typeof Yup;

export abstract class BaseValidationContract {
  abstract constructYupSchema(yup: YupNs): Yup.ObjectSchema<any, Yup.AnyObject, any, ''>;
}
