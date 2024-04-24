import * as SpecValidation from '@/core/validation';

export enum AmbienteValidationErrorCode {
  AMBIENTE_MODALIDADE_NOT_FOUND = 'ambiente.modalidade.not_found',
}

export class AmbienteValidationContract extends SpecValidation.BaseValidationContract {
  constructYupSchema(yup: SpecValidation.YupNs) {
    return yup.object({
      //
      id: SpecValidation.ValidationContractUuid(yup),
      //
      nome: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      descricao: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      codigo: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      capcacidade: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      tipo: SpecValidation.ValidationContractString(yup).required().nonNullable(),
      //
      bloco: SpecValidation.ValidationContractObjectUuidBase(yup, {
        required: true,
        optional: false,
      }),
      //
    });
  }
}
