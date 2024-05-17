import { PaginatedResultView } from '../../-shared';
import { UniDeclarator, UniProvider, UniTypeEntity, UniTypePartial, UniTypePick, UniTypeString, UniView } from '../../../common';
import { Tokens } from '../../tokens';

export const ModalidadeEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Modalidade',

  properties: {
    nome: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Nome da modalidade.',
    }),

    slug: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Slug da modalidade.',
    }),
  },
});

export const ModalidadeView = UniView({
  name: Tokens.Modalidade.Entity,
  default: 'Visão completa de uma Modalidade',
  properties: { ...ModalidadeEntity.properties },
});

export const ModalidadeFindOneInputView = UniView({
  name: Tokens.Modalidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Modalidade por ID.',
  properties: { ...UniTypePick(ModalidadeView, { id: true }) },
});

export const ModalidadeFindOneResultView = UniView({
  name: Tokens.Modalidade.Views.FindOneResult,

  partialOf: Tokens.Modalidade.Entity,
  description: 'Visão FindOne de uma Modalidade.',

  properties: {
    ...UniTypePick(ModalidadeView, {
      id: true,
      //
      nome: true,
      slug: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ModalidadeInputCreateView = UniView({
  name: Tokens.Modalidade.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Modalidade.',
  properties: {
    ...UniTypePick(ModalidadeView, {
      nome: true,
      slug: true,
    }),
  },
});

export const ModalidadeInputUpdateView = UniView({
  name: Tokens.Modalidade.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Modalidade.',
  properties: {
    ...UniTypePartial(ModalidadeInputCreateView),
  },
});

export const ModalidadeFindAllResult = PaginatedResultView({
  name: Tokens.Modalidade.Views.FindAllResult,
  description: 'Realiza a busca a Modalidades.',
  targetsTo: Tokens.Modalidade.Views.FindOneResult,
});

export const ModalidadeDeclarator = UniDeclarator({
  entity: Tokens.Modalidade.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Modalidade.Views.FindOneInput,
        output: Tokens.Modalidade.Views.FindOneResult,
      },

      deleteById: Tokens.Modalidade.Views.FindOneInput,

      create: Tokens.Modalidade.Views.InputCreate,
      updateById: Tokens.Modalidade.Views.InputUpdate,

      list: {
        view: Tokens.Modalidade.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const ModalidadeProvider = UniProvider((ctx) => {
  ctx.Add(ModalidadeEntity);
  ctx.Add(ModalidadeView);
  ctx.Add(ModalidadeFindOneInputView);
  ctx.Add(ModalidadeFindOneResultView);
  ctx.Add(ModalidadeInputCreateView);
  ctx.Add(ModalidadeInputUpdateView);
  ctx.Add(ModalidadeFindAllResult);
  ctx.Add(ModalidadeDeclarator);
});
