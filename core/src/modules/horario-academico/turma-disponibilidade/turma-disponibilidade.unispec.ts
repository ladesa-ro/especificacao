import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const TurmaDisponibilidadeEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'TurmaDisponibilidade',

  properties: {
    dataInicio: U.String({
      format: 'date',
      description: 'Data de início.',
    }),
    dataFim: U.String({
      format: 'date',
      nullable: true,
      description: 'Data de término.',
    }),
    //
    turma: U.Reference({
      nullable: true,
      description: 'Turma.',
      targetsTo: Tokens.Turma.Entity,
    }),
  },
});

export const TurmaDisponibilidadeView = U.View({
  name: Tokens.TurmaDisponibilidade.Entity,

  default: 'Visão completa de uma TurmaDisponibilidade',

  properties: {
    ...TurmaDisponibilidadeEntity.properties,

    turma: U.ReferenceExtends(TurmaDisponibilidadeEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneResult,
    }),
  },
});

export const TurmaDisponibilidadeFindOneInputView = U.View({
  name: Tokens.TurmaDisponibilidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma TurmaDisponibilidade por ID.',
  properties: { ...U.ObjectPick(TurmaDisponibilidadeView, { id: true }) },
});

export const TurmaDisponibilidadeFindOneResultView = U.View({
  name: Tokens.TurmaDisponibilidade.Views.FindOneResult,

  partialOf: Tokens.TurmaDisponibilidade.Entity,
  description: 'Visão FindOne de uma TurmaDisponibilidade.',

  properties: {
    ...U.ObjectPick(TurmaDisponibilidadeView, {
      id: true,
      //
      dataInicio: true,
      dataFim: true,
      //
      turma: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const TurmaDisponibilidadeInputCreateView = U.View({
  name: Tokens.TurmaDisponibilidade.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma TurmaDisponibilidade.',
  properties: {
    ...U.ObjectPick(TurmaDisponibilidadeView, {
      dataInicio: true,
      dataFim: true,
    }),

    turma: U.ReferenceExtends(TurmaDisponibilidadeEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneInput,
    }),
  },
});

export const TurmaDisponibilidadeInputUpdateView = U.View({
  name: Tokens.TurmaDisponibilidade.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma TurmaDisponibilidade.',
  properties: {
    ...U.ObjectPartial(TurmaDisponibilidadeInputCreateView),
  },
});

export const TurmaDisponibilidadeFindAllResult = PaginatedResultView({
  name: Tokens.TurmaDisponibilidade.Views.FindAllResult,
  description: 'Realiza a busca a TurmaDisponibilidades.',
  targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneResult,
});

export const TurmaDisponibilidadeDeclarator = U.Declarator({
  entity: Tokens.TurmaDisponibilidade.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.TurmaDisponibilidade.Views.FindOneInput,
        output: Tokens.TurmaDisponibilidade.Views.FindOneResult,
      },

      deleteById: Tokens.TurmaDisponibilidade.Views.FindOneInput,

      create: Tokens.TurmaDisponibilidade.Views.InputCreate,
      updateById: Tokens.TurmaDisponibilidade.Views.InputUpdate,

      list: {
        view: Tokens.TurmaDisponibilidade.Views.FindAllResult,
        filters: [['turma.id', ['$eq']]],
      },
    },
  },
});

export const TurmaDisponibilidadeProvider = U.Provider((ctx) => {
  ctx.Add(TurmaDisponibilidadeEntity);
  ctx.Add(TurmaDisponibilidadeView);
  ctx.Add(TurmaDisponibilidadeFindOneInputView);
  ctx.Add(TurmaDisponibilidadeFindOneResultView);
  ctx.Add(TurmaDisponibilidadeInputCreateView);
  ctx.Add(TurmaDisponibilidadeInputUpdateView);
  ctx.Add(TurmaDisponibilidadeFindAllResult);
  ctx.Add(TurmaDisponibilidadeDeclarator);
});
