import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const ModalidadeEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Modalidade',

  properties: {
    nome: U.String({
      constraints: { minLength: 1 },
      description: 'Nome da modalidade.',
    }),

    slug: U.String({
      constraints: { minLength: 1 },
      description: 'Slug da modalidade.',
    }),
  },
});

export const ModalidadeView = U.View({
  name: Tokens.Modalidade.Entity,
  default: 'Visão completa de uma Modalidade',
  type: U.ObjectTransformer.From(ModalidadeEntity).Node(),
});

export const ModalidadeFindOneInputView = U.View({
  name: Tokens.Modalidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Modalidade por ID.',
  type: U.ObjectTransformer.From(ModalidadeView.type).Pick({ id: true }).Node(),
});

export const ModalidadeFindOneResultView = U.View({
  name: Tokens.Modalidade.Views.FindOneResult,

  partialOf: Tokens.Modalidade.Entity,
  description: 'Visão FindOne de uma Modalidade.',

  type: U.ObjectTransformer.From(ModalidadeView.type)
    .Pick({
      id: true,
      //
      nome: true,
      slug: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const ModalidadeInputCreateView = U.View({
  name: Tokens.Modalidade.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Modalidade.',
  type: U.ObjectTransformer.From(ModalidadeView.type)
    .Pick({
      nome: true,
      slug: true,
    })
    .Node(),
});

export const ModalidadeInputUpdateView = U.View({
  name: Tokens.Modalidade.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Modalidade.',
  type: U.ObjectPartial(ModalidadeInputCreateView.type),
});

export const ModalidadeFindAllResult = PaginatedResultView({
  name: Tokens.Modalidade.Views.FindAllResult,
  description: 'Realiza a busca a Modalidades.',
  targetsTo: Tokens.Modalidade.Views.FindOneResult,
});

export const ModalidadeDeclarator = U.Declarator({
  entity: Tokens.Modalidade.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Modalidade.Operations.FindById,
        input: Tokens.Modalidade.Views.FindOneInput,
        output: Tokens.Modalidade.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Modalidade.Operations.DeleteById,
      },

      create: {
        name: Tokens.Modalidade.Operations.Create,
        input: Tokens.Modalidade.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Modalidade.Operations.UpdateById,
        input: Tokens.Modalidade.Views.InputUpdate,
      },

      list: {
        name: Tokens.Modalidade.Operations.List,
        view: Tokens.Modalidade.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const ModalidadeProvider = U.Provider((ctx) => {
  ctx.Add(ModalidadeEntity);
  ctx.Add(ModalidadeView);
  ctx.Add(ModalidadeFindOneInputView);
  ctx.Add(ModalidadeFindOneResultView);
  ctx.Add(ModalidadeInputCreateView);
  ctx.Add(ModalidadeInputUpdateView);
  ctx.Add(ModalidadeFindAllResult);
  ctx.Add(ModalidadeDeclarator);
});
