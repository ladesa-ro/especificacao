import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const TurmaDisponibilidadeDiaEntity = UniTypeEntity({
  id: 'uuid',

  description: 'TurmaDisponibilidadeDia',

  properties: {
    diaSemanaIso: UniTypeInteger({
      description: 'Dia da semana.',
    }),
    //
    intervaloDeTempo: UniTypeReference({
      nullable: true,
      description: 'Intervalo de tempo.',
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    turmaDisponibilidade: UniTypeReference({
      nullable: true,
      description: 'Disponibilidade da turma.',
      targetsTo: Tokens.TurmaDisponibilidade.Entity,
    }),
  },
});

export const TurmaDisponibilidadeDiaView = UniView({
  name: Tokens.TurmaDisponibilidadeDia.Entity,

  default: 'Visão completa de uma TurmaDisponibilidadeDia',

  properties: {
    ...TurmaDisponibilidadeDiaEntity.properties,

    intervaloDeTempo: UniTypeReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
    }),

    turmaDisponibilidade: UniTypeReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.turmaDisponibilidade, {
      targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneResult,
    }),
  },
});

export const TurmaDisponibilidadeDiaFindOneInputView = UniView({
  name: Tokens.TurmaDisponibilidadeDia.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma TurmaDisponibilidadeDia por ID.',
  properties: { ...UniTypePick(TurmaDisponibilidadeDiaView, { id: true }) },
});

export const TurmaDisponibilidadeDiaFindOneResultView = UniView({
  name: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,

  partialOf: Tokens.TurmaDisponibilidadeDia.Entity,
  description: 'Visão FindOne de uma TurmaDisponibilidadeDia.',

  properties: {
    ...UniTypePick(TurmaDisponibilidadeDiaView, {
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

export const TurmaDisponibilidadeDiaInputCreateView = UniView({
  name: Tokens.TurmaDisponibilidadeDia.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma TurmaDisponibilidadeDia.',
  properties: {
    ...UniTypePick(TurmaDisponibilidadeDiaView, {
      diaSemanaIso: true,
    }),

    intervaloDeTempo: UniTypeReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.Input,
    }),

    turmaDisponibilidade: UniTypeReferenceExtends(TurmaDisponibilidadeDiaEntity.properties.turmaDisponibilidade, {
      targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneInput,
    }),
  },
});

export const TurmaDisponibilidadeDiaInputUpdateView = UniView({
  name: Tokens.TurmaDisponibilidadeDia.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma TurmaDisponibilidadeDia.',
  properties: {
    ...UniTypePartial(TurmaDisponibilidadeDiaInputCreateView),
  },
});

export const TurmaDisponibilidadeDiaFindAllResult = PaginatedResultView({
  name: Tokens.TurmaDisponibilidadeDia.Views.FindAllResult,
  description: 'Realiza a busca a TurmaDisponibilidadeDias.',
  targetsTo: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,
});

export const TurmaDisponibilidadeDiaDeclarator = UniDeclarator({
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

export const TurmaDisponibilidadeDiaProvider = UniProvider((ctx) => {
  ctx.Add(TurmaDisponibilidadeDiaEntity);
  ctx.Add(TurmaDisponibilidadeDiaView);
  ctx.Add(TurmaDisponibilidadeDiaFindOneInputView);
  ctx.Add(TurmaDisponibilidadeDiaFindOneResultView);
  ctx.Add(TurmaDisponibilidadeDiaInputCreateView);
  ctx.Add(TurmaDisponibilidadeDiaInputUpdateView);
  ctx.Add(TurmaDisponibilidadeDiaFindAllResult);
  ctx.Add(TurmaDisponibilidadeDiaDeclarator);
});
