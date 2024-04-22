import * as SpecValidation from '@/core/validation';

export enum CursoValidationErrorCode {
  CURSO_MODALIDADE_NOT_FOUND = 'curso.modalidade.not_found',
}

export class CursoValidationContract extends SpecValidation.BaseValidationContract {
  constructYupSchema(yup: SpecValidation.YupNs) {
    return yup.object({
      //
      id: SpecValidation.ValidationContractUuid(yup),
      //
      nome: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      nomeAbreviado: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      //
      campus: SpecValidation.ValidationContractObjectUuidBase(yup, {
        required: true,
        optional: false,
      }),
      modalidade: SpecValidation.ValidationContractObjectUuidBase(yup, {
        required: true,
        optional: false,
      }),
      //
    });
  }
}
