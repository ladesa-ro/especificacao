import { UniDeclarator, UniProvider, UniTypeEntity, UniTypePick, UniTypeString, UniView } from '../../../common';
import { Tokens } from '../../tokens';

export const IntervaloDeTempoEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'IntervaloDeTempo',

  properties: {
    periodoInicio: UniTypeString({
      format: 'time',
      description: 'Horário que o intervalo de tempo inicia.',
    }),
    periodoFim: UniTypeString({
      format: 'time',
      description: 'Horário que o intervalo de tempo termina.',
    }),
  },
});

export const IntervaloDeTempoView = UniView({
  name: Tokens.IntervaloDeTempo.Entity,
  description: 'Visão completa de um IntervaloDeTempo.',
  properties: {
    ...IntervaloDeTempoEntity.properties,
  },
});

export const IntervaloDeTempoFindOneResultView = UniView({
  name: Tokens.IntervaloDeTempo.Views.FindOneResult,

  partialOf: Tokens.IntervaloDeTempo.Entity,
  description: 'Visão FindOne de um IntervaloDeTempo.',

  properties: {
    ...UniTypePick(IntervaloDeTempoView, {
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

export const IntervaloDeTempoInputView = UniView({
  name: Tokens.IntervaloDeTempo.Views.Input,
  description: 'Dados de entrada para um IntervaloDeTempo.',
  properties: {
    ...UniTypePick(IntervaloDeTempoView, {
      periodoInicio: true,
      periodoFim: true,
    }),
  },
});

// =======================================

export const IntervaloDeTempoDeclarator = UniDeclarator({
  entity: Tokens.IntervaloDeTempo.Entity,
});

// =======================================

export const IntervaloDeTempoProvider = UniProvider((ctx) => {
  ctx.Add(IntervaloDeTempoEntity);
  ctx.Add(IntervaloDeTempoView);
  ctx.Add(IntervaloDeTempoFindOneResultView);
  ctx.Add(IntervaloDeTempoInputView);
  ctx.Add(IntervaloDeTempoDeclarator);
});
