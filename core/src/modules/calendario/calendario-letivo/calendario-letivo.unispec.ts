import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const CalendarioLetivoEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'CalendarioLetivo',

  properties: {
    nome: UniTypeString({
      description: 'Nome do calendário letivo.',
    }),

    ano: UniTypeString({
      description: 'Ano do calendário letivo.',
    }),

    //

    campus: UniTypeReference({
      targetsTo: Tokens.Campus.Entity,
      description: 'Campus.',
    }),

    modalidade: UniTypeReference({
      nullable: true,
      targetsTo: Tokens.Modalidade.Entity,
      description: 'Modalidade.',
    }),
  },
});

export const CalendarioLetivoView = UniView({
  name: Tokens.CalendarioLetivo.Entity,
  description: 'Visão completa de um CalendarioLetivo.',
  properties: {
    ...CalendarioLetivoEntity.properties,

    campus: UniTypeReferenceExtends(CalendarioLetivoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    modalidade: UniTypeReferenceExtends(CalendarioLetivoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneResult,
    }),
  },
});

export const CalendarioLetivoFindOneInputView = UniView({
  name: Tokens.CalendarioLetivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um CalendarioLetivo por ID.',
  properties: { ...UniTypePick(CalendarioLetivoView, { id: true }) },
});

export const CalendarioLetivoFindOneResultView = UniView({
  name: Tokens.CalendarioLetivo.Views.FindOneResult,

  partialOf: Tokens.CalendarioLetivo.Entity,
  description: 'Visão FindOne de um CalendarioLetivo.',

  properties: {
    ...UniTypePick(CalendarioLetivoView, {
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

export const CalendarioLetivoInputCreateView = UniView({
  name: Tokens.CalendarioLetivo.Views.InputCreate,
  description: 'Dados de entrada para a criação de um CalendarioLetivo.',
  properties: {
    ...UniTypePick(CalendarioLetivoView, {
      nome: true,
      ano: true,
    }),

    campus: UniTypeReferenceExtends(CalendarioLetivoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneInput,
    }),

    modalidade: UniTypeReferenceExtends(CalendarioLetivoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneInput,
    }),
  },
});

export const CalendarioLetivoInputUpdateView = UniView({
  name: Tokens.CalendarioLetivo.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um CalendarioLetivo.',
  properties: {
    ...UniTypePartial(CalendarioLetivoInputCreateView),
  },
});

export const CalendarioLetivoFindAllResult = PaginatedResultView({
  name: Tokens.CalendarioLetivo.Views.FindAllResult,
  description: 'Realiza a busca a CalendarioLetivos.',
  targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
});

export const CalendarioLetivoDeclarator = UniDeclarator({
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

export const CalendarioLetivoProvider = UniProvider((ctx) => {
  ctx.Add(CalendarioLetivoEntity);
  ctx.Add(CalendarioLetivoView);
  ctx.Add(CalendarioLetivoFindOneInputView);
  ctx.Add(CalendarioLetivoFindOneResultView);
  ctx.Add(CalendarioLetivoInputCreateView);
  ctx.Add(CalendarioLetivoInputUpdateView);
  ctx.Add(CalendarioLetivoFindAllResult);
  ctx.Add(CalendarioLetivoDeclarator);
});
