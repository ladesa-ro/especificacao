import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const CampusEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Campus',

  properties: {
    nomeFantasia: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Nome fantasia do Campus.',
    }),

    razaoSocial: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Razão social do Campus.',
    }),

    apelido: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Apelido do Campus.',
    }),

    cnpj: UniTypeString({
      constraints: { minLength: 1 },
      description: 'CNPJ do Campus.',
    }),

    //

    endereco: UniTypeReference({
      targetsTo: Tokens.Endereco.Entity,
      description: 'Endereço do Campus',
    }),
  },
});

export const CampusView = UniView({
  name: Tokens.Campus.Entity,
  description: 'Visão completa de um Campus.',
  properties: {
    ...CampusEntity.properties,

    endereco: UniTypeReferenceExtends(CampusEntity.properties.endereco, {
      targetsTo: Tokens.Endereco.Views.FindOneResult,
    }),
  },
});

export const CampusFindOneInputView = UniView({
  name: Tokens.Campus.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Campus por ID.',
  properties: { ...UniTypePick(CampusView, { id: true }) },
});

export const CampusFindOneResultView = UniView({
  name: Tokens.Campus.Views.FindOneResult,

  partialOf: Tokens.Campus.Entity,
  description: 'Visão FindOne de um Campus.',

  properties: {
    ...UniTypePick(CampusView, {
      id: true,
      //
      nomeFantasia: true,
      razaoSocial: true,
      apelido: true,
      cnpj: true,
      //
      endereco: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const CampusInputCreateView = UniView({
  name: Tokens.Campus.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Campus.',
  properties: {
    ...UniTypePick(CampusView, {
      nomeFantasia: true,
      razaoSocial: true,
      apelido: true,
      cnpj: true,
    }),

    endereco: UniTypeReferenceExtends(CampusEntity.properties.endereco, {
      targetsTo: Tokens.Endereco.Views.Input,
    }),
  },
});

export const CampusInputUpdateView = UniView({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Campus.',
  properties: {
    ...UniTypePartial(CampusInputCreateView),
  },
});

export const CampusFindAllResult = PaginatedResultView({
  name: Tokens.Campus.Views.FindAllResult,
  description: 'Realiza a busca a Campi.',
  targetsTo: Tokens.Campus.Views.FindOneResult,
});

// =======================================

export const CampusDeclarator = UniDeclarator({
  entity: Tokens.Campus.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Campus.Views.FindOneInput,
        output: Tokens.Campus.Views.FindOneResult,
      },

      deleteById: Tokens.Campus.Views.FindOneInput,

      create: Tokens.Campus.Views.InputCreate,
      updateById: Tokens.Campus.Views.InputUpdate,

      list: {
        view: Tokens.Campus.Views.FindOneResult,
        filters: [
          ['endereco.cidade.id', ['$eq']],
          ['endereco.cidade.estado.id', ['$eq']],
        ],
      },
    },
  },
});

export const CampusProvider = UniProvider((ctx) => {
  ctx.Add(CampusEntity);
  ctx.Add(CampusView);
  ctx.Add(CampusFindOneInputView);
  ctx.Add(CampusFindOneResultView);
  ctx.Add(CampusInputCreateView);
  ctx.Add(CampusInputUpdateView);
  ctx.Add(CampusFindAllResult);
  ctx.Add(CampusDeclarator);
});
