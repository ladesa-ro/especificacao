import { PaginatedResultView } from '@/modules/-shared';
import { Tokens } from '@/modules/tokens';
import { U } from '@unispec/core';

export const DisponibilidadeProfessorDiaEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'DisponibilidadeProfessorDia',

  properties: {
    diaSemanaIso: U.Integer({
      description: 'Dia da semana.',
    }),
    //
    intervaloDeTempo: U.Reference({
      description: 'Intervalo de tempo.',
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    disponibilidade: U.Reference({
      description: 'Disponibilidade do professor.',
      targetsTo: Tokens.DisponibilidadeProfessor.Entity,
    }),
  },
});

export const DisponibilidadeProfessorDiaView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Entity,

  description: 'Disponibilidade dia do professor.',

  properties: {
    ...DisponibilidadeProfessorDiaEntity.properties,

    intervaloDeTempo: U.ReferenceExtends(DisponibilidadeProfessorDiaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
    }),

    disponibilidade: U.ReferenceExtends(DisponibilidadeProfessorDiaEntity.properties.disponibilidade, {
      targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
    }),
  },
});

export const DisponibilidadeProfessorDiaFindOneInputView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Disponibilidade Professor Dia por ID.',
  properties: { ...U.ObjectPick(DisponibilidadeProfessorDiaView, { id: true }) },
});

export const DisponibilidadeProfessorDiaFindOneResultView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.FindOneResult,

  partialOf: Tokens.DisponibilidadeProfessorDia.Entity,
  description: 'Visão FindOne de uma Disponibilidade Professor Dia.',

  properties: {
    ...U.ObjectPick(DisponibilidadeProfessorDiaView, {
      id: true,
      //
      diaSemanaIso: true,
      //
      intervaloDeTempo: true,
      disponibilidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const DisponibilidadeProfessorDiaInputCreateView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Disponibilidade Professor Dia.',
  properties: {
    ...U.ObjectPick(DisponibilidadeProfessorDiaView, {
      diaSemanaIso: true,
    }),

    intervaloDeTempo: U.ReferenceExtends(DisponibilidadeProfessorDiaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.Input,
    }),
    disponibilidade: U.ReferenceExtends(DisponibilidadeProfessorDiaEntity.properties.disponibilidade, {
      targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneInput,
    }),
  },
});

export const DisponibilidadeProfessorDiaInputUpdateView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Disponibilidade Professor Dia.',
  properties: {
    ...U.ObjectPartial(DisponibilidadeProfessorDiaInputCreateView),
  },
});

export const DisponibilidadeProfessorDiaFindAllResult = PaginatedResultView({
  name: Tokens.DisponibilidadeProfessorDia.Views.FindAllResult,
  description: 'Realiza a busca a Disponibilidade Professor Dia.',
  targetsTo: Tokens.DisponibilidadeProfessorDia.Views.FindOneResult,
});

export const DisponibilidadeProfessorDiaDeclarator = U.Declarator({
  entity: Tokens.DisponibilidadeProfessorDia.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.DisponibilidadeProfessorDia.Views.FindOneInput,
        output: Tokens.DisponibilidadeProfessorDia.Views.FindOneResult,
      },

      deleteById: Tokens.DisponibilidadeProfessorDia.Views.FindOneInput,

      create: Tokens.DisponibilidadeProfessorDia.Views.InputCreate,
      updateById: Tokens.DisponibilidadeProfessorDia.Views.InputUpdate,

      list: {
        view: Tokens.DisponibilidadeProfessorDia.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const DisponibilidadeProfessorDiaProvider = U.Provider((ctx) => {
  ctx.Add(DisponibilidadeProfessorDiaEntity);
  ctx.Add(DisponibilidadeProfessorDiaView);
  ctx.Add(DisponibilidadeProfessorDiaFindOneInputView);
  ctx.Add(DisponibilidadeProfessorDiaFindOneResultView);
  ctx.Add(DisponibilidadeProfessorDiaInputCreateView);
  ctx.Add(DisponibilidadeProfessorDiaInputUpdateView);
  ctx.Add(DisponibilidadeProfessorDiaFindAllResult);
  ctx.Add(DisponibilidadeProfessorDiaDeclarator);
});
