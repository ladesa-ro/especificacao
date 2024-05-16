import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
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

export const EnderecoView = UniView({
  name: Tokens.Endereco.Entity,
  description: 'Visão completa de um Endereco.',
  properties: {
    ...EnderecoEntity.properties,
    cidade: UniTypeReferenceExtends(EnderecoEntity.properties.cidade, {
      targetsTo: Tokens.Cidade.Views.FindOneResult,
    }),
  },
});

export const EnderecoFindOneInputView = UniView({
  name: Tokens.Endereco.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Endereco por ID.',
  properties: { ...UniTypePick(EnderecoView, { id: true }) },
});

export const EnderecoFindOneResultView = UniView({
  name: Tokens.Endereco.Views.FindOneResult,

  partialOf: Tokens.Endereco.Entity,
  description: 'Visão FindOne de um Endereco.',

  properties: {
    ...UniTypePick(EnderecoView, {
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

export const EnderecoInputView = UniView({
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

    cidade: UniTypeReferenceExtends(EnderecoEntity.properties.cidade, {
      targetsTo: Tokens.Cidade.Views.FindOneInput,
    }),
  },
});

// =======================================

export const EnderecoDeclarator = UniDeclarator({
  entity: Tokens.Endereco.Entity,
});

export const EnderecoProvider = UniProvider((ctx) => {
  ctx.Add(EnderecoEntity);
  ctx.Add(EnderecoView);
  ctx.Add(EnderecoFindOneInputView);
  ctx.Add(EnderecoFindOneResultView);
  ctx.Add(EnderecoInputView);
  ctx.Add(EnderecoDeclarator);
});
