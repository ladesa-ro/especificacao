import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const CalendarioLetivoEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'CalendarioLetivo',

  properties: {
    nome: U.String({
      description: 'Nome do calendário letivo.',
    }),

    ano: U.String({
      description: 'Ano do calendário letivo.',
    }),

    //

    campus: U.Reference({
      targetsTo: Tokens.Campus.Entity,
      description: 'Campus.',
    }),

    modalidade: U.Reference({
      nullable: true,
      targetsTo: Tokens.Modalidade.Entity,
      description: 'Modalidade.',
    }),
  },
});

export const CalendarioLetivoView = U.View({
  name: Tokens.CalendarioLetivo.Entity,
  description: 'Visão completa de um CalendarioLetivo.',
  properties: {
    ...CalendarioLetivoEntity.properties,

    campus: U.ReferenceExtends(CalendarioLetivoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    modalidade: U.ReferenceExtends(CalendarioLetivoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneResult,
    }),
  },
});

export const CalendarioLetivoFindOneInputView = U.View({
  name: Tokens.CalendarioLetivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um CalendarioLetivo por ID.',
  properties: { ...U.ObjectPick(CalendarioLetivoView, { id: true }) },
});

export const CalendarioLetivoFindOneResultView = U.View({
  name: Tokens.CalendarioLetivo.Views.FindOneResult,

  partialOf: Tokens.CalendarioLetivo.Entity,
  description: 'Visão FindOne de um CalendarioLetivo.',

  properties: {
    ...U.ObjectPick(CalendarioLetivoView, {
      id: true,
      //
      nome: true,
      ano: true,
      //
      campus: true,
      modalidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const CalendarioLetivoInputCreateView = U.View({
  name: Tokens.CalendarioLetivo.Views.InputCreate,
  description: 'Dados de entrada para a criação de um CalendarioLetivo.',
  properties: {
    ...U.ObjectPick(CalendarioLetivoView, {
      nome: true,
      ano: true,
    }),

    campus: U.ReferenceExtends(CalendarioLetivoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneInput,
    }),

    modalidade: U.ReferenceExtends(CalendarioLetivoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneInput,
    }),
  },
});

export const CalendarioLetivoInputUpdateView = U.View({
  name: Tokens.CalendarioLetivo.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um CalendarioLetivo.',
  properties: {
    ...U.ObjectPartial(CalendarioLetivoInputCreateView),
  },
});

export const CalendarioLetivoFindAllResult = PaginatedResultView({
  name: Tokens.CalendarioLetivo.Views.FindAllResult,
  description: 'Realiza a busca a CalendarioLetivos.',
  targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
});

export const CalendarioLetivoDeclarator = U.Declarator({
  entity: Tokens.CalendarioLetivo.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.CalendarioLetivo.Views.FindOneInput,
        output: Tokens.CalendarioLetivo.Views.FindOneResult,
      },

      deleteById: Tokens.CalendarioLetivo.Views.FindOneInput,

      create: Tokens.CalendarioLetivo.Views.InputCreate,
      updateById: Tokens.CalendarioLetivo.Views.InputUpdate,

      list: {
        view: Tokens.CalendarioLetivo.Views.FindAllResult,
        filters: [
          ['campus.id', ['$eq']],
          ['modalidade.id', ['$eq']],
        ],
      },
    },
  },
});

export const CalendarioLetivoProvider = U.Provider((ctx) => {
  ctx.Add(CalendarioLetivoEntity);
  ctx.Add(CalendarioLetivoView);
  ctx.Add(CalendarioLetivoFindOneInputView);
  ctx.Add(CalendarioLetivoFindOneResultView);
  ctx.Add(CalendarioLetivoInputCreateView);
  ctx.Add(CalendarioLetivoInputUpdateView);
  ctx.Add(CalendarioLetivoFindAllResult);
  ctx.Add(CalendarioLetivoDeclarator);
});
