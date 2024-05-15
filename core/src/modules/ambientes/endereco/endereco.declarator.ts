import {
  UniDeclarator,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePick,
  UniTypeReference,
  UniTypeString,
  UniTypeView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const EnderecoEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Endereco',

  properties: {
    cep: UniTypeString({
      escription: 'CEP',
      constraints: { ['x-cep']: true },
    }),

    logradouro: UniTypeString({
      description: 'Logradouro',
    }),

    numero: UniTypeInteger({
      description: 'Número',
      constraints: { min: 0, integer: true, positive: true },
    }),

    bairro: UniTypeString({
      description: 'Bairro',
    }),

    complemento: UniTypeString({
      default: null,
      required: true,
      nullable: true,
      description: 'Complemento',
    }),

    pontoReferencia: UniTypeString({
      default: null,
      required: true,
      nullable: true,
      description: 'Ponto de referência',
    }),

    cidade: UniTypeReference({
      targetsTo: Tokens.Cidade.Entity,
      description: 'Cidade',
    }),
  },
});

export const EnderecoView = UniTypeView({
  name: Tokens.Endereco.Entity,
  description: 'Visão completa de um Endereco.',
  properties: EnderecoEntity.properties,
});

export const EnderecoFindOneInputView = UniTypeView({
  name: Tokens.Endereco.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Endereco por ID.',
  properties: { ...UniTypePick(EnderecoEntity, { id: true }) },
});

export const EnderecoFindOneResultView = UniTypeView({
  name: Tokens.Endereco.Views.FindOneResult,

  partialOf: Tokens.Endereco.Entity,
  description: 'Visão FindOne de um Endereco.',

  properties: {
    ...UniTypePick(EnderecoEntity, {
      id: true,
      //
      cep: true,
      logradouro: true,
      numero: true,
      bairro: true,
      complemento: true,
      pontoReferencia: true,
      //
      cidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const EnderecoInputView = UniTypeView({
  name: Tokens.Endereco.Views.Input,
  description: 'Dados de entrada para um Endereco.',
  properties: {
    ...UniTypePick(EnderecoView, {
      cep: true,
      logradouro: true,
      numero: true,
      bairro: true,
      complemento: true,
      pontoReferencia: true,
    }),

    cidade: UniTypeReference({
      targetsTo: Tokens.Cidade.Views.FindOneInput,
      description: 'Cidade do Endereço.',
    }),
  },
});

// =======================================

export const EnderecoDeclarator = UniDeclarator({
  entity: Tokens.Endereco.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Endereco.Views.FindOneInput,
        output: Tokens.Endereco.Views.FindOneResult,
      },

      deleteById: Tokens.Endereco.Views.FindOneInput,

      create: Tokens.Endereco.Views.Input,
      updateById: Tokens.Endereco.Views.Input,

      list: {
        view: Tokens.Endereco.Views.FindOneResult,
        filters: [
          ['cidade.id', ['$eq']],
          ['cidade.estado.id', ['$eq']],
        ],
      },
    },
  },
});
