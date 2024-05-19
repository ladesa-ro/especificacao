import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const AulaEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Aula',

  properties: {
    formato: U.String({
      type: 'string',
      nullable: true,
      description: 'Formato da aula.',
    }),

    data: U.String({
      type: 'string',
      format: 'date',
      description: 'Data da aula.',
    }),

    intervaloDeTempo: U.Reference({
      targetsTo: Tokens.IntervaloDeTempo.Entity,
      description: 'Intervalo de Tempo associado à aula.',
    }),

    diario: U.Reference({
      targetsTo: Tokens.Diario.Entity,
      description: 'Diário associado à aula.',
    }),

    ambiente: U.Reference({
      nullable: true,
      targetsTo: Tokens.Ambiente.Entity,
      description: 'Ambiente associado à aula.',
    }),
  },
});

export const AulaView = U.View({
  name: Tokens.Aula.Entity,
  default: 'Visão completa de uma Aula',
  properties: {
    ...AulaEntity.properties,

    intervaloDeTempo: U.ReferenceExtends(AulaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
    }),

    diario: U.ReferenceExtends(AulaEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneResult,
    }),

    ambiente: U.ReferenceExtends(AulaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),
  },
});

export const AulaFindOneInputView = U.View({
  name: Tokens.Aula.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Aula por ID.',
  properties: { ...U.ObjectPick(AulaView, { id: true }) },
});

export const AulaFindOneResultView = U.View({
  name: Tokens.Aula.Views.FindOneResult,

  partialOf: Tokens.Aula.Entity,
  description: 'Visão FindOne de uma Aula.',

  properties: {
    ...U.ObjectPick(AulaView, {
      id: true,
      //
      formato: true,
      data: true,
      //
      intervaloDeTempo: true,
      diario: true,
      ambiente: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const AulaInputCreateView = U.View({
  name: Tokens.Aula.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Aula.',
  properties: {
    ...U.ObjectPick(AulaView, {
      formato: true,
      data: true,
    }),

    intervaloDeTempo: U.ReferenceExtends(AulaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.Input,
    }),

    diario: U.ReferenceExtends(AulaEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneInput,
    }),

    ambiente: U.ReferenceExtends(AulaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const AulaInputUpdateView = U.View({
  name: Tokens.Aula.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Aula.',
  properties: {
    ...U.ObjectPartial(AulaInputCreateView),
  },
});

export const AulaFindAllResult = PaginatedResultView({
  name: Tokens.Aula.Views.FindAllResult,
  description: 'Realiza a busca a Aulas.',
  targetsTo: Tokens.Aula.Views.FindOneResult,
});

export const AulaDeclarator = U.Declarator({
  entity: Tokens.Aula.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Aula.Views.FindOneInput,
        output: Tokens.Aula.Views.FindOneResult,
      },

      deleteById: Tokens.Aula.Views.FindOneInput,

      create: Tokens.Aula.Views.InputCreate,
      updateById: Tokens.Aula.Views.InputUpdate,

      list: {
        view: Tokens.Aula.Views.FindAllResult,
        filters: [
          ['diario.id', ['$eq']],
          ['ambiente.id', ['$eq']],
        ],
      },
    },
  },
});

export const AulaProvider = U.Provider((ctx) => {
  ctx.Add(AulaEntity);
  ctx.Add(AulaView);
  ctx.Add(AulaFindOneInputView);
  ctx.Add(AulaFindOneResultView);
  ctx.Add(AulaInputCreateView);
  ctx.Add(AulaInputUpdateView);
  ctx.Add(AulaFindAllResult);
  ctx.Add(AulaDeclarator);
});
