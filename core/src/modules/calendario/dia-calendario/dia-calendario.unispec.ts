import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeBoolean,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const DiaCalendarioEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'DiaCalendario',

  properties: {
    data: UniTypeString({
      format: 'date',
      description: 'Data.',
    }),
    diaLetivo: UniTypeBoolean({
      description: 'Define que o dia é letivo.',
    }),
    feriado: UniTypeBoolean({
      description: 'Define que o dia é feriado.',
    }),
    //
    calendario: UniTypeReference({
      nullable: true,
      description: 'Calendario.',
      targetsTo: Tokens.CalendarioLetivo.Entity,
    }),
  },
});

export const DiaCalendarioView = UniView({
  name: Tokens.DiaCalendario.Entity,

  description: 'Visão completa de um DiaCalendario.',

  properties: {
    ...DiaCalendarioEntity.properties,

    calendario: UniTypeReferenceExtends(DiaCalendarioEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
    }),
  },
});

export const DiaCalendarioFindOneInputView = UniView({
  name: Tokens.DiaCalendario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um DiaCalendario por ID.',
  properties: { ...UniTypePick(DiaCalendarioView, { id: true }) },
});

export const DiaCalendarioFindOneResultView = UniView({
  name: Tokens.DiaCalendario.Views.FindOneResult,

  partialOf: Tokens.DiaCalendario.Entity,
  description: 'Visão FindOne de um DiaCalendario.',

  properties: {
    ...UniTypePick(DiaCalendarioView, {
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

export const DiaCalendarioInputCreateView = UniView({
  name: Tokens.DiaCalendario.Views.InputCreate,
  description: 'Dados de entrada para a criação de um DiaCalendario.',
  properties: {
    ...UniTypePick(DiaCalendarioView, {
      data: true,
      diaLetivo: true,
      feriado: true,
    }),

    calendario: UniTypeReferenceExtends(DiaCalendarioEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const DiaCalendarioInputUpdateView = UniView({
  name: Tokens.DiaCalendario.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um DiaCalendario.',
  properties: {
    ...UniTypePartial(DiaCalendarioInputCreateView),
  },
});

export const DiaCalendarioFindAllResult = PaginatedResultView({
  name: Tokens.DiaCalendario.Views.FindAllResult,
  description: 'Realiza a busca a DiaCalendarios.',
  targetsTo: Tokens.DiaCalendario.Views.FindOneResult,
});

export const DiaCalendarioDeclarator = UniDeclarator({
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

export const DiaCalendarioProvider = UniProvider((ctx) => {
  ctx.Add(DiaCalendarioEntity);
  ctx.Add(DiaCalendarioView);
  ctx.Add(DiaCalendarioFindOneInputView);
  ctx.Add(DiaCalendarioFindOneResultView);
  ctx.Add(DiaCalendarioInputCreateView);
  ctx.Add(DiaCalendarioInputUpdateView);
  ctx.Add(DiaCalendarioFindAllResult);
  ctx.Add(DiaCalendarioDeclarator);
});
