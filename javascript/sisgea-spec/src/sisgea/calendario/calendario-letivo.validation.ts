import { Validator } from '@/core/validation/Validator';

export enum CalendarioLetivoValidationErrorCode {
  CALENDARIO_LETIVO_MODALIDADE_NOT_FOUND = 'calendarioLetivo.modalidade.not_found',
}

export const CalendarioLetivoValidator = Validator(({ yup, custom }) => {
  return yup.object({
    //
    id: custom.uuid(),
    //
    nome: custom.string().required().nonNullable(),
    ano: custom.string().required().nonNullable(),
    //
    campus: custom.objectUuid({ nonNullable: true, optional: false }),
    modalidade: custom.objectUuid({ nonNullable: true, optional: false }),
    //
  });
});
