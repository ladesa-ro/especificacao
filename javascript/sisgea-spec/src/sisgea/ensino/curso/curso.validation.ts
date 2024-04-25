import * as SpecValidation from '@/core/validation';

export enum CursoValidationErrorCode {
  CURSO_MODALIDADE_NOT_FOUND = 'curso.modalidade.not_found',
}

export class CursoValidationContract extends SpecValidation.BaseValidationContract {
  yupSchema(yup: SpecValidation.IExtendedYup) {
    return yup.object({
      //
      id: yup.custom.uuid(),
      //
      nome: yup.custom.string().required().nonNullable(),
      nomeAbreviado: yup.custom.string().required().nonNullable(),
      //
      campus: yup.custom.objectUuid({
        strict: true,
        optional: false,
      }),
      modalidade: yup.custom.objectUuid({
        strict: true,
        optional: false,
      }),
      //
    });
  }
}
