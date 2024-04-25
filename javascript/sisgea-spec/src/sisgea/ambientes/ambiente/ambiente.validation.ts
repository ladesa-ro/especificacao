import * as SpecValidation from '@/core/validation';

export enum AmbienteValidationErrorCode {
  AMBIENTE_MODALIDADE_NOT_FOUND = 'ambiente.modalidade.not_found',
}

export class AmbienteValidationContract extends SpecValidation.BaseValidationContract {
  yupSchema(yup: SpecValidation.IExtendedYup) {
    return yup.object({
      //
      id: yup.custom.uuid(),
      //
      nome: yup.custom.string().required().nonNullable(),
      descricao: yup.custom.string().required().nonNullable(),
      codigo: yup.custom.string().required().nonNullable(),
      capcacidade: yup.custom.string().required().nonNullable(),
      tipo: yup.custom.string().required().nonNullable(),
      //
      bloco: yup.custom.objectUuid({
        strict: true,
        optional: false,
      }),
      //
    });
  }
}
