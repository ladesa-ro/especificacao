import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const TurmaDisponibilidadeDiaEntity = U.ObjectEntity({
  id: 'uuid',

  description: 'TurmaDisponibilidadeDia',

  properties: {
    diaSemanaIso: U.Integer({
      description: 'Dia da semana.',
    }),
    //
    intervaloDeTempo: U.Reference({
      nullable: true,
      description: 'Intervalo de tempo.',
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    turmaDisponibilidade: U.Reference({
      nullable: true,
      description: 'Disponibilidade da turma.',
      targetsTo: Tokens.TurmaDisponibilidade.Entity,
    }),
  },
});

export const TurmaDisponibilidadeDiaView = U.View({
  name: Tokens.TurmaDisponibilidadeDia.Entity,

  default: 'Visão completa de uma TurmaDisponibilidadeDia',

  properties: {
    ...TurmaDisponibilidadeDiaEntity.properties,

    intervaloDeTempo: U.ReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
    }),

    turmaDisponibilidade: U.ReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.turmaDisponibilidade, {
      targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneResult,
    }),
  },
});

export const TurmaDisponibilidadeDiaFindOneInputView = U.View({
  name: Tokens.TurmaDisponibilidadeDia.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma TurmaDisponibilidadeDia por ID.',
  properties: { ...U.ObjectPick(TurmaDisponibilidadeDiaView, { id: true }) },
});

export const TurmaDisponibilidadeDiaFindOneResultView = U.View({
  name: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,

  partialOf: Tokens.TurmaDisponibilidadeDia.Entity,
  description: 'Visão FindOne de uma TurmaDisponibilidadeDia.',

  properties: {
    ...U.ObjectPick(TurmaDisponibilidadeDiaView, {
      id: true,
      //
      diaSemanaIso: true,
      //
      intervaloDeTempo: true,
      turmaDisponibilidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const TurmaDisponibilidadeDiaInputCreateView = U.View({
  name: Tokens.TurmaDisponibilidadeDia.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma TurmaDisponibilidadeDia.',
  properties: {
    ...U.ObjectPick(TurmaDisponibilidadeDiaView, {
      diaSemanaIso: true,
    }),

    intervaloDeTempo: U.ReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.Input,
    }),

    turmaDisponibilidade: U.ReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.turmaDisponibilidade, {
      targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneInput,
    }),
  },
});

export const TurmaDisponibilidadeDiaInputUpdateView = U.View({
  name: Tokens.TurmaDisponibilidadeDia.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma TurmaDisponibilidadeDia.',
  properties: {
    ...U.ObjectPartial(TurmaDisponibilidadeDiaInputCreateView),
  },
});

export const TurmaDisponibilidadeDiaFindAllResult = PaginatedResultView({
  name: Tokens.TurmaDisponibilidadeDia.Views.FindAllResult,
  description: 'Realiza a busca a TurmaDisponibilidadeDias.',
  targetsTo: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,
});

export const TurmaDisponibilidadeDiaDeclarator = U.Declarator({
  entity: Tokens.TurmaDisponibilidadeDia.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.TurmaDisponibilidadeDia.Views.FindOneInput,
        output: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,
      },

      deleteById: Tokens.TurmaDisponibilidadeDia.Views.FindOneInput,

      create: Tokens.TurmaDisponibilidadeDia.Views.InputCreate,
      updateById: Tokens.TurmaDisponibilidadeDia.Views.InputUpdate,

      list: {
        view: Tokens.TurmaDisponibilidadeDia.Views.FindAllResult,
        filters: [
          ['intervaloDeTempo.id', ['$eq']],
          ['turmaDisponibilidade.id', ['$eq']],
        ],
      },
    },
  },
});

export const TurmaDisponibilidadeDiaProvider = U.Provider((ctx) => {
  ctx.Add(TurmaDisponibilidadeDiaEntity);
  ctx.Add(TurmaDisponibilidadeDiaView);
  ctx.Add(TurmaDisponibilidadeDiaFindOneInputView);
  ctx.Add(TurmaDisponibilidadeDiaFindOneResultView);
  ctx.Add(TurmaDisponibilidadeDiaInputCreateView);
  ctx.Add(TurmaDisponibilidadeDiaInputUpdateView);
  ctx.Add(TurmaDisponibilidadeDiaFindAllResult);
  ctx.Add(TurmaDisponibilidadeDiaDeclarator);
});
