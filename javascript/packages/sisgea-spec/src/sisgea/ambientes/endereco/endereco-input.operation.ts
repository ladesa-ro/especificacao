import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { EnderecoDeclarationFactory } from './endereco.declaration';

export type IEnderecoInputDto = SpecHelpers.InferFactoryEntityType<typeof EnderecoInputDeclaration>;

export const EnderecoInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(EnderecoDeclarationFactory);

  return {
    name: 'EnderecoInput',

    properties: {
      cep: properties.cep,
      logradouro: properties.logradouro,
      numero: properties.numero,
      bairro: properties.bairro,
      complemento: properties.complemento,
      pontoReferencia: properties.pontoReferencia,
      cidade: {
        ...properties.cidade,
        type: SpecCore.ObjectIdDeclarationFactory,
      },
    },
  };
});
