import * as SpecValidation from '@/core/validation';

export enum CalendarioLetivoValidationErrorCode {
  CALENDARIO_LETIVO_MODALIDADE_NOT_FOUND = 'calendarioLetivo.modalidade.not_found',
}

export class CalendarioLetivoValidationContract extends SpecValidation.BaseValidationContract {
  yupSchema(yup: SpecValidation.IExtendedYup) {
    return yup.object({
      //
      id: yup.custom.uuid(),
      //
      nome: yup.custom.string().required().nonNullable(),
      ano: yup.custom.string().required().nonNullable(),
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
