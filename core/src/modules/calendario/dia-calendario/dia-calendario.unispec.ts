import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const DiaCalendarioEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'DiaCalendario',

  properties: {
    data: U.String({
      format: 'date',
      description: 'Data.',
    }),
    diaLetivo: U.Boolean({
      description: 'Define que o dia é letivo.',
    }),
    feriado: U.Boolean({
      description: 'Define que o dia é feriado.',
    }),
    //
    calendario: U.Reference({
      nullable: true,
      description: 'Calendario.',
      targetsTo: Tokens.CalendarioLetivo.Entity,
    }),
  },
});

export const DiaCalendarioView = U.View({
  name: Tokens.DiaCalendario.Entity,

  description: 'Visão completa de um DiaCalendario.',

  properties: {
    ...DiaCalendarioEntity.properties,

    calendario: U.ReferenceExtends(DiaCalendarioEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
    }),
  },
});

export const DiaCalendarioFindOneInputView = U.View({
  name: Tokens.DiaCalendario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um DiaCalendario por ID.',
  properties: { ...U.ObjectPick(DiaCalendarioView, { id: true }) },
});

export const DiaCalendarioFindOneResultView = U.View({
  name: Tokens.DiaCalendario.Views.FindOneResult,

  partialOf: Tokens.DiaCalendario.Entity,
  description: 'Visão FindOne de um DiaCalendario.',

  properties: {
    ...U.ObjectPick(DiaCalendarioView, {
      id: true,
      //
      data: true,
      diaLetivo: true,
      feriado: true,
      //
      calendario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const DiaCalendarioInputCreateView = U.View({
  name: Tokens.DiaCalendario.Views.InputCreate,
  description: 'Dados de entrada para a criação de um DiaCalendario.',
  properties: {
    ...U.ObjectPick(DiaCalendarioView, {
      data: true,
      diaLetivo: true,
      feriado: true,
    }),

    calendario: U.ReferenceExtends(DiaCalendarioEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const DiaCalendarioInputUpdateView = U.View({
  name: Tokens.DiaCalendario.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um DiaCalendario.',
  properties: {
    ...U.ObjectPartial(DiaCalendarioInputCreateView),
  },
});

export const DiaCalendarioFindAllResult = PaginatedResultView({
  name: Tokens.DiaCalendario.Views.FindAllResult,
  description: 'Realiza a busca a DiaCalendarios.',
  targetsTo: Tokens.DiaCalendario.Views.FindOneResult,
});

export const DiaCalendarioDeclarator = U.Declarator({
  entity: Tokens.DiaCalendario.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.DiaCalendario.Views.FindOneInput,
        output: Tokens.DiaCalendario.Views.FindOneResult,
      },

      deleteById: Tokens.DiaCalendario.Views.FindOneInput,

      create: Tokens.DiaCalendario.Views.InputCreate,
      updateById: Tokens.DiaCalendario.Views.InputUpdate,

      list: {
        view: Tokens.DiaCalendario.Views.FindAllResult,
        filters: [['calendario.id', ['$eq']]],
      },
    },
  },
});

export const DiaCalendarioProvider = U.Provider((ctx) => {
  ctx.Add(DiaCalendarioEntity);
  ctx.Add(DiaCalendarioView);
  ctx.Add(DiaCalendarioFindOneInputView);
  ctx.Add(DiaCalendarioFindOneResultView);
  ctx.Add(DiaCalendarioInputCreateView);
  ctx.Add(DiaCalendarioInputUpdateView);
  ctx.Add(DiaCalendarioFindAllResult);
  ctx.Add(DiaCalendarioDeclarator);
});
