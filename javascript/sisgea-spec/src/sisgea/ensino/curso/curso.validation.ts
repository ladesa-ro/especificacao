import * as SpecValidation from '@/core/validation';

export enum CursoValidationErrorCode {
  CURSO_MODALIDADE_NOT_FOUND = 'curso.modalidade.not_found',
}

export class CursoValidationContract extends SpecValidation.BaseValidationContract {
  yupSchema(ctx: SpecValidation.IExtendedYup) {
    return ctx.base.object({
      //
      id: ctx.custom.uuid(),
      //
      nome: ctx.custom.string().required().nonNullable(),
      nomeAbreviado: ctx.custom.string().required().nonNullable(),
      //
      campus: ctx.custom.objectUuid({
        strict: true,
        optional: false,
      }),
      modalidade: ctx.custom.objectUuid({
        strict: true,
        optional: false,
      }),
      //
    });
  }
}
