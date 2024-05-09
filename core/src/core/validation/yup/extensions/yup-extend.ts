import * as SpecValidation from '@/core/validation';
import { cep, id, number, objectId, objectUuid, string, uuid } from './yup-extensions';

export type IExtendedYup = ReturnType<typeof extendYup>;

export const extendYup = (yup: SpecValidation.BaseYup) => {
  return {
    id: id(yup),
    cep: cep(yup),
    uuid: uuid(yup),
    string: string(yup),
    number: number(yup),
    objectId: objectId(yup),
    objectUuid: objectUuid(yup),
  };
};
