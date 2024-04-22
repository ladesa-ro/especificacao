import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { CidadeDeclarationFactory } from '../cidade';

export type IEnderecoModel = SpecHelpers.InferFactoryEntityType<typeof EnderecoDeclarationFactory>;

export const EnderecoDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Endereco',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(SpecCore.ObjectUuidDeclarationFactory),
      //

      id: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Identificador do Endereço.',
        nullable: false,
      },

      cep: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'CEP do Endereço.',
        nullable: false,
      },

      logradouro: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Logradouro do Endereço.',
        nullable: false,
      },

      numero: {
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'Número do Endereço.',
        nullable: false,
      },

      bairro: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Bairro do Endereço.',
        nullable: false,
      },

      complemento: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Complemento do Endereço.',
        nullable: true,
      },

      pontoReferencia: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Ponto de referência do Endereço.',
        nullable: true,
      },

      cidade: {
        nullable: false,
        type: CidadeDeclarationFactory,
        description: 'Cidade do Endereço.',
      },

      //
      ...SpecHelpers.GetDeclarationProperties(SpecCore.DatedObjectDeclarationFactory),
      //
    },
  };
});
