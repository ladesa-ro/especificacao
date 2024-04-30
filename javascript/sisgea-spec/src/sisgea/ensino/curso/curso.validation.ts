import { Validator } from '@/core';

export enum CursoValidationErrorCode {
  CURSO_MODALIDADE_NOT_FOUND = 'curso.modalidade.not_found',
}

export const CursoValidator = Validator(({ yup, custom }) => {
  return yup.object({
    //
    id: custom.uuid(),
    //
    nome: custom.string().required().nonNullable(),
    nomeAbreviado: custom.string().required().nonNullable(),
    //
    campus: custom.objectUuid({ nonNullable: true, optional: false }),
    modalidade: custom.objectUuid({ nonNullable: true, optional: false }),
    //
  });
});
