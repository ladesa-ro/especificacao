import { Validator } from '@/core';

export enum AmbienteValidationErrorCode {
  AMBIENTE_MODALIDADE_NOT_FOUND = 'ambiente.modalidade.not_found',
}

export const AmbienteValidation = Validator(({ yup, custom }) => {
  return yup.object({
    //
    id: custom.uuid(),
    //
    nome: custom.string().required().nonNullable(),
    descricao: custom.string().required().nonNullable(),
    codigo: custom.string().required().nonNullable(),
    capcacidade: custom.string().required().nonNullable(),
    tipo: custom.string().required().nonNullable(),
    //
    bloco: custom.objectUuid({ nonNullable: true, optional: false }),
    //
  });
});
