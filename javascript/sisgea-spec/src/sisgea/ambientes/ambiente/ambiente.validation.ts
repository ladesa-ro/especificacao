import * as SpecValidation from '@/core/validation';

export enum AmbienteValidationErrorCode {
  AMBIENTE_MODALIDADE_NOT_FOUND = 'ambiente.modalidade.not_found',
}

export class AmbienteValidationContract extends SpecValidation.BaseValidationContract {
  yupSchema(ctx: SpecValidation.IExtendedYup) {
    return ctx.base.object({
      //
      id: ctx.custom.uuid(),
      //
      nome: ctx.custom.string().required().nonNullable(),
      descricao: ctx.custom.string().required().nonNullable(),
      codigo: ctx.custom.string().required().nonNullable(),
      capcacidade: ctx.custom.string().required().nonNullable(),
      tipo: ctx.custom.string().required().nonNullable(),
      //
      bloco: ctx.custom.objectUuid({
        strict: true,
        optional: false,
      }),
      //
    });
  }
}
