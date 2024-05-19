import { U } from '@unispec/core';
import { Tokens } from '../../tokens';

export const IntervaloDeTempoEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'IntervaloDeTempo',

  properties: {
    periodoInicio: U.String({
      format: 'time',
      description: 'Horário que o intervalo de tempo inicia.',
    }),
    periodoFim: U.String({
      format: 'time',
      description: 'Horário que o intervalo de tempo termina.',
    }),
  },
});

export const IntervaloDeTempoView = U.View({
  name: Tokens.IntervaloDeTempo.Entity,
  description: 'Visão completa de um IntervaloDeTempo.',
  properties: {
    ...IntervaloDeTempoEntity.properties,
  },
});

export const IntervaloDeTempoFindOneResultView = U.View({
  name: Tokens.IntervaloDeTempo.Views.FindOneResult,

  partialOf: Tokens.IntervaloDeTempo.Entity,
  description: 'Visão FindOne de um IntervaloDeTempo.',

  properties: {
    ...U.ObjectPick(IntervaloDeTempoView, {
      id: true,
      //
      periodoInicio: true,
      periodoFim: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const IntervaloDeTempoInputView = U.View({
  name: Tokens.IntervaloDeTempo.Views.Input,
  description: 'Dados de entrada para um IntervaloDeTempo.',
  properties: {
    ...U.ObjectPick(IntervaloDeTempoView, {
      periodoInicio: true,
      periodoFim: true,
    }),
  },
});

// =======================================

export const IntervaloDeTempoDeclarator = U.Declarator({
  entity: Tokens.IntervaloDeTempo.Entity,
});

// =======================================

export const IntervaloDeTempoProvider = U.Provider((ctx) => {
  ctx.Add(IntervaloDeTempoEntity);
  ctx.Add(IntervaloDeTempoView);
  ctx.Add(IntervaloDeTempoFindOneResultView);
  ctx.Add(IntervaloDeTempoInputView);
  ctx.Add(IntervaloDeTempoDeclarator);
});
